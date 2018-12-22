const allCountries = [
  {
    "id": 86,
    "name": "Mexico",
    "flag": "./images/flags/mexico.png",
    "country_outline": "./images/outlines/mexico.png",
    "created_at": "2018-12-22T16:50:04.039Z",
    "updated_at": "2018-12-22T16:50:04.039Z"
  },
  {
    "id": 87,
    "name": "Hungary",
    "flag": "./images/flags/hungary.png",
    "country_outline": "./images/outlines/hungary.png",
    "created_at": "2018-12-22T16:50:04.061Z",
    "updated_at": "2018-12-22T16:50:04.061Z"
  },
  {
    "id": 88,
    "name": "Vietnam",
    "flag": "./images/flags/vietnam.png",
    "country_outline": "./images/outlines/vietnam.png",
    "created_at": "2018-12-22T16:50:04.061Z",
    "updated_at": "2018-12-22T16:50:04.061Z"
  },
  {
    "id": 89,
    "name": "Ireland",
    "flag": "./images/flags/ireland.png",
    "country_outline": "./images/outlines/ireland.png",
    "created_at": "2018-12-22T16:50:04.069Z",
    "updated_at": "2018-12-22T16:50:04.069Z"
  },
  {
    "id": 90,
    "name": "Sweden",
    "flag": "./images/flags/sweden.png",
    "country_outline": "./images/outlines/sweden.png",
    "created_at": "2018-12-22T16:50:04.069Z",
    "updated_at": "2018-12-22T16:50:04.069Z"
  },
  {
    "id": 91,
    "name": "South Africa",
    "flag": "./images/flags/south africa.png",
    "country_outline": "./images/outlines/south africa.png",
    "created_at": "2018-12-22T16:50:04.072Z",
    "updated_at": "2018-12-22T16:50:04.072Z"
  },
  {
    "id": 92,
    "name": "Australia",
    "flag": "./images/flags/australia.png",
    "country_outline": "./images/outlines/australia.png",
    "created_at": "2018-12-22T16:50:04.074Z",
    "updated_at": "2018-12-22T16:50:04.074Z"
  },
  {
    "id": 93,
    "name": "Answer",
    "flag": "./images/flags/answer.png",
    "country_outline": "./images/outlines/answer.png",
    "created_at": "2018-12-22T16:50:04.075Z",
    "updated_at": "2018-12-22T16:50:04.075Z"
  },
  {
    "id": 94,
    "name": "Grenada",
    "flag": "./images/flags/grenada.png",
    "country_outline": "./images/outlines/grenada.png",
    "created_at": "2018-12-22T16:50:04.076Z",
    "updated_at": "2018-12-22T16:50:04.076Z"
  },
  {
    "id": 95,
    "name": "Haiti",
    "flag": "./images/flags/haiti.png",
    "country_outline": "./images/outlines/haiti.png",
    "created_at": "2018-12-22T16:50:04.077Z",
    "updated_at": "2018-12-22T16:50:04.077Z"
  },
  {
    "id": 96,
    "name": "Jamaica",
    "flag": "./images/flags/jamaica.png",
    "country_outline": "./images/outlines/jamaica.png",
    "created_at": "2018-12-22T16:50:04.078Z",
    "updated_at": "2018-12-22T16:50:04.078Z"
  },
  {
    "id": 97,
    "name": "(St.) Vincent",
    "flag": "./images/flags/(st.) vincent.png",
    "country_outline": "./images/outlines/(st.) vincent.png",
    "created_at": "2018-12-22T16:50:04.079Z",
    "updated_at": "2018-12-22T16:50:04.079Z"
  },
  {
    "id": 98,
    "name": "Barbados",
    "flag": "./images/flags/barbados.png",
    "country_outline": "./images/outlines/barbados.png",
    "created_at": "2018-12-22T16:50:04.083Z",
    "updated_at": "2018-12-22T16:50:04.083Z"
  },
  {
    "id": 99,
    "name": "Israel",
    "flag": "./images/flags/israel.png",
    "country_outline": "./images/outlines/israel.png",
    "created_at": "2018-12-22T16:50:04.087Z",
    "updated_at": "2018-12-22T16:50:04.087Z"
  },
  {
    "id": 100,
    "name": "Denmark",
    "flag": "./images/flags/denmark.png",
    "country_outline": "./images/outlines/denmark.png",
    "created_at": "2018-12-22T16:50:04.087Z",
    "updated_at": "2018-12-22T16:50:04.087Z"
  },
  {
    "id": 101,
    "name": "Borneo",
    "flag": "./images/flags/borneo.png",
    "country_outline": "./images/outlines/borneo.png",
    "created_at": "2018-12-22T16:50:04.087Z",
    "updated_at": "2018-12-22T16:50:04.087Z"
  },
  {
    "id": 102,
    "name": "Colombia",
    "flag": "./images/flags/colombia.png",
    "country_outline": "./images/outlines/colombia.png",
    "created_at": "2018-12-22T16:50:04.091Z",
    "updated_at": "2018-12-22T16:50:04.091Z"
  },
  {
    "id": 103,
    "name": "Monaco",
    "flag": "./images/flags/monaco.png",
    "country_outline": "./images/outlines/monaco.png",
    "created_at": "2018-12-22T16:50:04.091Z",
    "updated_at": "2018-12-22T16:50:04.091Z"
  },
  {
    "id": 104,
    "name": "Switzerland",
    "flag": "./images/flags/switzerland.png",
    "country_outline": "./images/outlines/switzerland.png",
    "created_at": "2018-12-22T16:50:04.093Z",
    "updated_at": "2018-12-22T16:50:04.093Z"
  },
  {
    "id": 105,
    "name": "Belize",
    "flag": "./images/flags/belize.png",
    "country_outline": "./images/outlines/belize.png",
    "created_at": "2018-12-22T16:50:04.093Z",
    "updated_at": "2018-12-22T16:50:04.093Z"
  },
  {
    "id": 106,
    "name": "Saudi Arabia",
    "flag": "./images/flags/saudi arabia.png",
    "country_outline": "./images/outlines/saudi arabia.png",
    "created_at": "2018-12-22T16:50:04.092Z",
    "updated_at": "2018-12-22T16:50:04.092Z"
  },
  {
    "id": 107,
    "name": "Spain",
    "flag": "./images/flags/spain.png",
    "country_outline": "./images/outlines/spain.png",
    "created_at": "2018-12-22T16:50:04.094Z",
    "updated_at": "2018-12-22T16:50:04.094Z"
  },
  {
    "id": 108,
    "name": "the Philippines",
    "flag": "./images/flags/the philippines.png",
    "country_outline": "./images/outlines/the philippines.png",
    "created_at": "2018-12-22T16:50:04.096Z",
    "updated_at": "2018-12-22T16:50:04.096Z"
  },
  {
    "id": 109,
    "name": "the Bahamas",
    "flag": "./images/flags/the bahamas.png",
    "country_outline": "./images/outlines/the bahamas.png",
    "created_at": "2018-12-22T16:50:04.099Z",
    "updated_at": "2018-12-22T16:50:04.099Z"
  },
  {
    "id": 110,
    "name": "India",
    "flag": "./images/flags/india.png",
    "country_outline": "./images/outlines/india.png",
    "created_at": "2018-12-22T16:50:04.099Z",
    "updated_at": "2018-12-22T16:50:04.099Z"
  },
  {
    "id": 111,
    "name": "Portugal",
    "flag": "./images/flags/portugal.png",
    "country_outline": "./images/outlines/portugal.png",
    "created_at": "2018-12-22T16:50:04.100Z",
    "updated_at": "2018-12-22T16:50:04.100Z"
  },
  {
    "id": 112,
    "name": "Armenia",
    "flag": "./images/flags/armenia.png",
    "country_outline": "./images/outlines/armenia.png",
    "created_at": "2018-12-22T16:50:04.101Z",
    "updated_at": "2018-12-22T16:50:04.101Z"
  },
  {
    "id": 113,
    "name": "Ethiopia",
    "flag": "./images/flags/ethiopia.png",
    "country_outline": "./images/outlines/ethiopia.png",
    "created_at": "2018-12-22T16:50:04.103Z",
    "updated_at": "2018-12-22T16:50:04.103Z"
  },
  {
    "id": 114,
    "name": "Sri Lanka",
    "flag": "./images/flags/sri lanka.png",
    "country_outline": "./images/outlines/sri lanka.png",
    "created_at": "2018-12-22T16:50:04.103Z",
    "updated_at": "2018-12-22T16:50:04.103Z"
  },
  {
    "id": 115,
    "name": "Jordan",
    "flag": "./images/flags/jordan.png",
    "country_outline": "./images/outlines/jordan.png",
    "created_at": "2018-12-22T16:50:04.104Z",
    "updated_at": "2018-12-22T16:50:04.104Z"
  },
  {
    "id": 116,
    "name": "Iceland",
    "flag": "./images/flags/iceland.png",
    "country_outline": "./images/outlines/iceland.png",
    "created_at": "2018-12-22T16:50:04.104Z",
    "updated_at": "2018-12-22T16:50:04.104Z"
  },
  {
    "id": 117,
    "name": "Italy",
    "flag": "./images/flags/italy.png",
    "country_outline": "./images/outlines/italy.png",
    "created_at": "2018-12-22T16:50:04.106Z",
    "updated_at": "2018-12-22T16:50:04.106Z"
  },
  {
    "id": 118,
    "name": "Honduras",
    "flag": "./images/flags/honduras.png",
    "country_outline": "./images/outlines/honduras.png",
    "created_at": "2018-12-22T16:50:04.106Z",
    "updated_at": "2018-12-22T16:50:04.106Z"
  },
  {
    "id": 119,
    "name": "North Korea",
    "flag": "./images/flags/north korea.png",
    "country_outline": "./images/outlines/north korea.png",
    "created_at": "2018-12-22T16:50:04.108Z",
    "updated_at": "2018-12-22T16:50:04.108Z"
  },
  {
    "id": 120,
    "name": "France",
    "flag": "./images/flags/france.png",
    "country_outline": "./images/outlines/france.png",
    "created_at": "2018-12-22T16:50:04.109Z",
    "updated_at": "2018-12-22T16:50:04.109Z"
  },
  {
    "id": 121,
    "name": "Morocco",
    "flag": "./images/flags/morocco.png",
    "country_outline": "./images/outlines/morocco.png",
    "created_at": "2018-12-22T16:50:04.109Z",
    "updated_at": "2018-12-22T16:50:04.109Z"
  },
  {
    "id": 122,
    "name": "Rwanda",
    "flag": "./images/flags/rwanda.png",
    "country_outline": "./images/outlines/rwanda.png",
    "created_at": "2018-12-22T16:50:04.110Z",
    "updated_at": "2018-12-22T16:50:04.110Z"
  },
  {
    "id": 123,
    "name": "Orange",
    "flag": "./images/flags/orange.png",
    "country_outline": "./images/outlines/orange.png",
    "created_at": "2018-12-22T16:50:04.113Z",
    "updated_at": "2018-12-22T16:50:04.113Z"
  },
  {
    "id": 124,
    "name": "Russia",
    "flag": "./images/flags/russia.png",
    "country_outline": "./images/outlines/russia.png",
    "created_at": "2018-12-22T16:50:04.113Z",
    "updated_at": "2018-12-22T16:50:04.113Z"
  },
  {
    "id": 125,
    "name": "Paraguay & Uruguay",
    "flag": "./images/flags/paraguay & uruguay.png",
    "country_outline": "./images/outlines/paraguay & uruguay.png",
    "created_at": "2018-12-22T16:50:04.113Z",
    "updated_at": "2018-12-22T16:50:04.113Z"
  },
  {
    "id": 126,
    "name": "Indonesia",
    "flag": "./images/flags/indonesia.png",
    "country_outline": "./images/outlines/indonesia.png",
    "created_at": "2018-12-22T16:50:04.115Z",
    "updated_at": "2018-12-22T16:50:04.115Z"
  },
  {
    "id": 127,
    "name": "Uganda",
    "flag": "./images/flags/uganda.png",
    "country_outline": "./images/outlines/uganda.png",
    "created_at": "2018-12-22T16:50:04.115Z",
    "updated_at": "2018-12-22T16:50:04.115Z"
  },
  {
    "id": 128,
    "name": "Thailand",
    "flag": "./images/flags/thailand.png",
    "country_outline": "./images/outlines/thailand.png",
    "created_at": "2018-12-22T16:50:04.118Z",
    "updated_at": "2018-12-22T16:50:04.118Z"
  },
  {
    "id": 129,
    "name": "Romania",
    "flag": "./images/flags/romania.png",
    "country_outline": "./images/outlines/romania.png",
    "created_at": "2018-12-22T16:50:04.118Z",
    "updated_at": "2018-12-22T16:50:04.118Z"
  },
  {
    "id": 130,
    "name": "Mauritania",
    "flag": "./images/flags/mauritania.png",
    "country_outline": "./images/outlines/mauritania.png",
    "created_at": "2018-12-22T16:50:04.119Z",
    "updated_at": "2018-12-22T16:50:04.119Z"
  },
  {
    "id": 131,
    "name": "Austria",
    "flag": "./images/flags/austria.png",
    "country_outline": "./images/outlines/austria.png",
    "created_at": "2018-12-22T16:50:04.119Z",
    "updated_at": "2018-12-22T16:50:04.119Z"
  },
  {
    "id": 132,
    "name": "Chile",
    "flag": "./images/flags/chile.png",
    "country_outline": "./images/outlines/chile.png",
    "created_at": "2018-12-22T16:50:04.121Z",
    "updated_at": "2018-12-22T16:50:04.121Z"
  },
  {
    "id": 133,
    "name": "The Netherlands/Holland",
    "flag": "./images/flags/the netherlands/holland.png",
    "country_outline": "./images/outlines/the netherlands/holland.png",
    "created_at": "2018-12-22T16:50:04.123Z",
    "updated_at": "2018-12-22T16:50:04.123Z"
  },
  {
    "id": 134,
    "name": "Lebanon",
    "flag": "./images/flags/lebanon.png",
    "country_outline": "./images/outlines/lebanon.png",
    "created_at": "2018-12-22T16:50:04.123Z",
    "updated_at": "2018-12-22T16:50:04.123Z"
  },
  {
    "id": 135,
    "name": "Slovakia",
    "flag": "./images/flags/slovakia.png",
    "country_outline": "./images/outlines/slovakia.png",
    "created_at": "2018-12-22T16:50:04.123Z",
    "updated_at": "2018-12-22T16:50:04.123Z"
  },
  {
    "id": 136,
    "name": "Malaysia",
    "flag": "./images/flags/malaysia.png",
    "country_outline": "./images/outlines/malaysia.png",
    "created_at": "2018-12-22T16:50:04.124Z",
    "updated_at": "2018-12-22T16:50:04.124Z"
  },
  {
    "id": 137,
    "name": "Kenya",
    "flag": "./images/flags/kenya.png",
    "country_outline": "./images/outlines/kenya.png",
    "created_at": "2018-12-22T16:50:04.127Z",
    "updated_at": "2018-12-22T16:50:04.127Z"
  },
  {
    "id": 138,
    "name": "Ecuador",
    "flag": "./images/flags/ecuador.png",
    "country_outline": "./images/outlines/ecuador.png",
    "created_at": "2018-12-22T16:50:04.129Z",
    "updated_at": "2018-12-22T16:50:04.129Z"
  },
  {
    "id": 139,
    "name": "Norway",
    "flag": "./images/flags/norway.png",
    "country_outline": "./images/outlines/norway.png",
    "created_at": "2018-12-22T16:50:04.130Z",
    "updated_at": "2018-12-22T16:50:04.130Z"
  },
  {
    "id": 140,
    "name": "Angola",
    "flag": "./images/flags/angola.png",
    "country_outline": "./images/outlines/angola.png",
    "created_at": "2018-12-22T16:50:04.130Z",
    "updated_at": "2018-12-22T16:50:04.130Z"
  },
  {
    "id": 141,
    "name": "England",
    "flag": "./images/flags/england.png",
    "country_outline": "./images/outlines/england.png",
    "created_at": "2018-12-22T16:50:04.131Z",
    "updated_at": "2018-12-22T16:50:04.131Z"
  },
  {
    "id": 142,
    "name": "Belgium",
    "flag": "./images/flags/belgium.png",
    "country_outline": "./images/outlines/belgium.png",
    "created_at": "2018-12-22T16:50:04.133Z",
    "updated_at": "2018-12-22T16:50:04.133Z"
  },
  {
    "id": 143,
    "name": "South Korea",
    "flag": "./images/flags/south korea.png",
    "country_outline": "./images/outlines/south korea.png",
    "created_at": "2018-12-22T16:50:04.133Z",
    "updated_at": "2018-12-22T16:50:04.133Z"
  },
  {
    "id": 144,
    "name": "the Netherlands",
    "flag": "./images/flags/the netherlands.png",
    "country_outline": "./images/outlines/the netherlands.png",
    "created_at": "2018-12-22T16:50:04.134Z",
    "updated_at": "2018-12-22T16:50:04.134Z"
  },
  {
    "id": 145,
    "name": "Cuba",
    "flag": "./images/flags/cuba.png",
    "country_outline": "./images/outlines/cuba.png",
    "created_at": "2018-12-22T16:50:04.136Z",
    "updated_at": "2018-12-22T16:50:04.136Z"
  },
  {
    "id": 146,
    "name": "Rwanda & Burundi",
    "flag": "./images/flags/rwanda & burundi.png",
    "country_outline": "./images/outlines/rwanda & burundi.png",
    "created_at": "2018-12-22T16:50:04.136Z",
    "updated_at": "2018-12-22T16:50:04.136Z"
  },
  {
    "id": 147,
    "name": "Panama",
    "flag": "./images/flags/panama.png",
    "country_outline": "./images/outlines/panama.png",
    "created_at": "2018-12-22T16:50:04.136Z",
    "updated_at": "2018-12-22T16:50:04.136Z"
  },
  {
    "id": 148,
    "name": "Georgia",
    "flag": "./images/flags/georgia.png",
    "country_outline": "./images/outlines/georgia.png",
    "created_at": "2018-12-22T16:50:04.138Z",
    "updated_at": "2018-12-22T16:50:04.138Z"
  },
  {
    "id": 149,
    "name": "Guyana",
    "flag": "./images/flags/guyana.png",
    "country_outline": "./images/outlines/guyana.png",
    "created_at": "2018-12-22T16:50:04.140Z",
    "updated_at": "2018-12-22T16:50:04.140Z"
  },
  {
    "id": 150,
    "name": "Taiwan",
    "flag": "./images/flags/taiwan.png",
    "country_outline": "./images/outlines/taiwan.png",
    "created_at": "2018-12-22T16:50:04.140Z",
    "updated_at": "2018-12-22T16:50:04.140Z"
  },
  {
    "id": 151,
    "name": "Samoa",
    "flag": "./images/flags/samoa.png",
    "country_outline": "./images/outlines/samoa.png",
    "created_at": "2018-12-22T16:50:04.140Z",
    "updated_at": "2018-12-22T16:50:04.140Z"
  },
  {
    "id": 152,
    "name": "Madagascar",
    "flag": "./images/flags/madagascar.png",
    "country_outline": "./images/outlines/madagascar.png",
    "created_at": "2018-12-22T16:50:04.142Z",
    "updated_at": "2018-12-22T16:50:04.142Z"
  },
  {
    "id": 153,
    "name": "Somalia",
    "flag": "./images/flags/somalia.png",
    "country_outline": "./images/outlines/somalia.png",
    "created_at": "2018-12-22T16:50:04.142Z",
    "updated_at": "2018-12-22T16:50:04.142Z"
  },
  {
    "id": 163,
    "name": "China",
    "flag": "./images/flags/china.png",
    "country_outline": "./images/outlines/china.png",
    "created_at": "2018-12-22T16:50:04.151Z",
    "updated_at": "2018-12-22T16:50:04.151Z"
  },
  {
    "id": 154,
    "name": "Bolivia",
    "flag": "./images/flags/bolivia.png",
    "country_outline": "./images/outlines/bolivia.png",
    "created_at": "2018-12-22T16:50:04.144Z",
    "updated_at": "2018-12-22T16:50:04.144Z"
  },
  {
    "id": 164,
    "name": "Canada",
    "flag": "./images/flags/canada.png",
    "country_outline": "./images/outlines/canada.png",
    "created_at": "2018-12-22T16:50:04.155Z",
    "updated_at": "2018-12-22T16:50:04.155Z"
  },
  {
    "id": 155,
    "name": "Liechtenstein",
    "flag": "./images/flags/liechtenstein.png",
    "country_outline": "./images/outlines/liechtenstein.png",
    "created_at": "2018-12-22T16:50:04.144Z",
    "updated_at": "2018-12-22T16:50:04.144Z"
  },
  {
    "id": 165,
    "name": "Egypt",
    "flag": "./images/flags/egypt.png",
    "country_outline": "./images/outlines/egypt.png",
    "created_at": "2018-12-22T16:50:04.155Z",
    "updated_at": "2018-12-22T16:50:04.155Z"
  },
  {
    "id": 156,
    "name": "Sudan",
    "flag": "./images/flags/sudan.png",
    "country_outline": "./images/outlines/sudan.png",
    "created_at": "2018-12-22T16:50:04.145Z",
    "updated_at": "2018-12-22T16:50:04.145Z"
  },
  {
    "id": 168,
    "name": "Turkey",
    "flag": "./images/flags/turkey.png",
    "country_outline": "./images/outlines/turkey.png",
    "created_at": "2018-12-22T16:50:04.158Z",
    "updated_at": "2018-12-22T16:50:04.158Z"
  },
  {
    "id": 157,
    "name": "Brunei",
    "flag": "./images/flags/brunei.png",
    "country_outline": "./images/outlines/brunei.png",
    "created_at": "2018-12-22T16:50:04.146Z",
    "updated_at": "2018-12-22T16:50:04.146Z"
  },
  {
    "id": 169,
    "name": "Tunisia",
    "flag": "./images/flags/tunisia.png",
    "country_outline": "./images/outlines/tunisia.png",
    "created_at": "2018-12-22T16:50:04.158Z",
    "updated_at": "2018-12-22T16:50:04.158Z"
  },
  {
    "id": 158,
    "name": "Peru",
    "flag": "./images/flags/peru.png",
    "country_outline": "./images/outlines/peru.png",
    "created_at": "2018-12-22T16:50:04.147Z",
    "updated_at": "2018-12-22T16:50:04.147Z"
  },
  {
    "id": 166,
    "name": "Brazil",
    "flag": "./images/flags/brazil.png",
    "country_outline": "./images/outlines/brazil.png",
    "created_at": "2018-12-22T16:50:04.156Z",
    "updated_at": "2018-12-22T16:50:04.156Z"
  },
  {
    "id": 159,
    "name": "Ivory Coast",
    "flag": "./images/flags/ivory coast.png",
    "country_outline": "./images/outlines/ivory coast.png",
    "created_at": "2018-12-22T16:50:04.147Z",
    "updated_at": "2018-12-22T16:50:04.147Z"
  },
  {
    "id": 167,
    "name": "Turkmenistan",
    "flag": "./images/flags/turkmenistan.png",
    "country_outline": "./images/outlines/turkmenistan.png",
    "created_at": "2018-12-22T16:50:04.157Z",
    "updated_at": "2018-12-22T16:50:04.157Z"
  },
  {
    "id": 160,
    "name": "Argentina",
    "flag": "./images/flags/argentina.png",
    "country_outline": "./images/outlines/argentina.png",
    "created_at": "2018-12-22T16:50:04.149Z",
    "updated_at": "2018-12-22T16:50:04.149Z"
  },
  {
    "id": 170,
    "name": "Tanzania",
    "flag": "./images/flags/tanzania.png",
    "country_outline": "./images/outlines/tanzania.png",
    "created_at": "2018-12-22T16:50:04.163Z",
    "updated_at": "2018-12-22T16:50:04.163Z"
  },
  {
    "id": 161,
    "name": "Poland",
    "flag": "./images/flags/poland.png",
    "country_outline": "./images/outlines/poland.png",
    "created_at": "2018-12-22T16:50:04.149Z",
    "updated_at": "2018-12-22T16:50:04.149Z"
  },
  {
    "id": 171,
    "name": "Tonga",
    "flag": "./images/flags/tonga.png",
    "country_outline": "./images/outlines/tonga.png",
    "created_at": "2018-12-22T16:50:04.163Z",
    "updated_at": "2018-12-22T16:50:04.163Z"
  },
  {
    "id": 162,
    "name": "Greece",
    "flag": "./images/flags/greece.png",
    "country_outline": "./images/outlines/greece.png",
    "created_at": "2018-12-22T16:50:04.151Z",
    "updated_at": "2018-12-22T16:50:04.151Z"
  }
]

export default allCountries;