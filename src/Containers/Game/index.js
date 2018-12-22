import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Game.scss';
import Hint from '../../Components/Hint';
import Results from '../../Components/Results';
// import flag from '../../images/flags/mexico.png';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: false,
      incorrect: false,
      hint: '',
      hintsUsed: 0,
      hintsExhausted: false,
    }
  }

  // async componentDidMount(){
  //   var req = require.context('../../images/flags', false, /.*\.png$/);
  //   req.keys().forEach(function(key){
  //     req(key);
  //   });
  // }

  getImagePath = () => {
    const { name } = this.props.correctChoice;
    return `../../images/flags/${name.toLowerCase()}`
  }

  checkAnswer = (e) => {
    const { correctChoice } = this.props;
    console.log(e.target.innerText)
    console.log(correctChoice.name)
    const { innerText } = e.target
    if (innerText === correctChoice.name) {
      this.setState({
        correct: true,
        incorrect: false
      })
    } else {
      this.setState({
        incorrect: true,
        correct: false
      })
    }
  }

  giveHint = () => {
    let { hintsUsed } = this.state;
    const { outline, questions } = this.props.correctChoice;
    
    if (hintsUsed === 0) {
      this.setState({
        hint: questions[0]
      });
    } 
    
    if (hintsUsed === 1) {
      this.setState({
        hint: outline
      });
    }

    if (hintsUsed >= 2) {
      this.setState({
        hintsExhausted: true
      })
    }

    this.setState({
      hintsUsed: hintsUsed + 1
    });
  }

  showButtons = () => {
    const { choices } = this.props
    return choices.map(choice => {
      return (<div 
                className='option-button button' 
                key={choice}
                name={choice}
                onClick={this.checkAnswer}
              >
                {choice}
              </div>)  
    })
  }

  render() {
    const choiceButtons = this.showButtons()

    return (
      <div className='Game'>
        <div className='top-container'>
          <div className='account-area'>
            <div className='back-button'>
            </div>
            <h5 className='account-text'>Alex <strong>25</strong></h5>
          </div>
        </div>
        <div className='flag-main'>
          { /*
            <img alt='' className='flag-image' src={flag}/> */}
        </div>
        <div className='hint-button'>
          Hints: 2
        </div>
        { choiceButtons }
        {/* <Hint /> */}
        {/* <Results /> */}
      </div>
    );
  }
}

export default Game;
