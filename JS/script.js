
let main = document.querySelector('main');
let total = document.querySelector('#total');
total.textContent = countries.length;

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


function searchByFirst (){
  main.innerHTML = '';
  let userInputUpper = document.querySelector('#search').value.toUpperCase();
  //returns an array of all countries that match
  const resultCountries = countries.filter((val) => {
    let upperCaseVal = val.toUpperCase();
    let match = upperCaseVal.startsWith(userInputUpper);
    if (match){ return upperCaseVal }
  }); 
  //generates country div for each of them
  resultCountries.forEach( (country) => { createCountryDiv(country);} ) 
  //shows number of matching countries
  document.querySelector('#number').textContent = resultCountries.length;
}


function searchByAny (){
  main.innerHTML = '';
  let userInputUpper = document.querySelector('#search').value.toUpperCase();
  //returns an array of all countries that match
  const resultCountries = countries.filter((val) => {
    let upperCaseVal = val.toUpperCase();
    let match = upperCaseVal.includes(userInputUpper);
    if (match){ return upperCaseVal }
  }); 
  //generates country div for each of them
  resultCountries.forEach((country) => { createCountryDiv(country);}) 
  //shows number of matching countries
  document.querySelector('#number').textContent = resultCountries.length;
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