
let main = document.querySelector('main');
let total = document.querySelector('#total');
total.textContent = ` ${countries.length} `;
let number = document.querySelector('#number');
let expression = document.querySelector('#expression');
let startContain = document.querySelector('#start-contain');
let verb = document.querySelector('#verb');
let countrie_s = document.querySelector('#countrie-s');
let lengthx;


//generate random hexadecimal number
function randomHexaNumberGenerator (){
  let characters = '123456789abcdef'  
  let hex = '#';
  for (i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * 15);
    hex = hex.concat(characters.charAt(random));
  }   
  return hex
}


// creates color div with country's name inside it
function createCountryDiv (country){
  let colorDiv = document.createElement('div');
  let countryName = document.createElement('div');
  let hexValue = randomHexaNumberGenerator();
  main.appendChild(colorDiv);
  colorDiv.appendChild(countryName);
  colorDiv.className = 'country';
  colorDiv.style.backgroundColor = hexValue;
  countryName.textContent = country.toUpperCase();
  countryName.style.color = randomHexaNumberGenerator();
  countryName.className = 'country-name';
}

function grammar (wantedVerb){
  number.textContent = lengthx;
  startContain.textContent = wantedVerb;
  if (lengthx > 1 || lengthx === 0){
    verb.textContent = 'are'
    countrie_s.textContent = 'countries'
  } else {
    verb.textContent = 'is'
    countrie_s.textContent = 'country'
  }
}


function searchByFirst (){
  main.innerHTML = '';
  total.textContent = '';
  searchFirstBtn.className = 'isClicked';
  searchAnyBtn.className = 'buttons';
  let userInputUpper = document.querySelector('#search').value.toUpperCase();
  //returns an array of all countries that match and generates country div for each of them
  const resultCountries = countries.filter((val) => {
    let upperCaseVal = val.toUpperCase();
    let match = upperCaseVal.startsWith(userInputUpper);
    if (match){ 
      createCountryDiv(upperCaseVal)
      return upperCaseVal }
  }); 
  //shows number of matching countries
  lengthx = resultCountries.length;
  expression.textContent = userInputUpper;
  grammar ('starting with')
  searchField.removeEventListener('input', searchByAny)
  searchField.addEventListener('input', searchByFirst)
}


function searchByAny (){
  main.innerHTML = '';
  searchAnyBtn.className = 'isClicked';
  searchFirstBtn.className = 'buttons';
  let userInputUpper = document.querySelector('#search').value.toUpperCase();
  //returns an array of all countries that match and generates country div for each of them
  const resultCountries = countries.filter((val) => {
    let upperCaseVal = val.toUpperCase();
    let match = upperCaseVal.includes(userInputUpper);
    if (match){ 
      createCountryDiv(upperCaseVal)
      return upperCaseVal }
  }); 
  //shows number of matching countries
  lengthx = resultCountries.length;
  expression.textContent = userInputUpper;
  grammar ('containing')
  searchField.removeEventListener('input', searchByFirst)
  searchField.addEventListener('input', searchByAny)
}


//when user types, matching coutries are generated
const searchField = document.querySelector('#search');
searchField.addEventListener('input', searchByFirst)
//when user clicks search by first word, matching coutries are generated
const searchFirstBtn = document.querySelector('#starting-word');
searchFirstBtn.addEventListener('click', searchByFirst);
//when user clicks search by any word, matching coutries are generated
const searchAnyBtn = document.querySelector('#any-word');
searchAnyBtn.addEventListener('click', searchByAny);