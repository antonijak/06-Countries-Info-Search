
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

// creates color div with country name inside it
function createCountryDiv (country){
  let colorDiv = document.createElement('div');
  let hexValue = randomHexaNumberGenerator();
  let countryName = document.createElement('div');
  main.appendChild(colorDiv);
  colorDiv.appendChild(countryName);
  colorDiv.className = 'country';
  colorDiv.style.backgroundColor = hexValue;
  countryName.textContent = country;
  countryName.style.color = randomHexaNumberGenerator();
  countryName.className = 'country-name';
}

//generates countries from the countries array by first word
function giveCountryNameFirst (){
  main.innerHTML = '';
  let matchWord = document.querySelector('#search').value.toUpperCase();
  let resultObject = {};
  const whatLetter = countries.filter((val) => {
    let upperVal = val.toUpperCase();
    let match = upperVal.startsWith(matchWord);
    if (match){
    return upperVal}
  }); 
  let key = whatLetter.length;  
  resultObject[key] = whatLetter; 
  for (country of resultObject[key]){
    createCountryDiv(country.toUpperCase());
  }
  document.querySelector('#number').textContent = key;
}

const searchFirst = document.querySelector('#starting-word');
searchFirst.addEventListener('click',giveCountryNameFirst);

//generates countries from the countries array by any part
function giveCountryNameAny (){
  main.innerHTML = '';
  let matchWord = document.querySelector('#search').value.toUpperCase();
  console.log(matchWord);
  let resultObject = {};
  const whatLetter = countries.filter((val) => {
    let upperVal = val.toUpperCase();
    let match = upperVal.includes(matchWord);
    if (match){
    return upperVal}
  }); 
  let key = whatLetter.length;  
  document.querySelector('#number').textContent = key;
  resultObject[key] = whatLetter; 
  for (country of resultObject[key]){
    createCountryDiv(country.toUpperCase());
  }
}

const searchAny = document.querySelector('#any-word');
searchAny.addEventListener('click',giveCountryNameAny);

const search = document.querySelector('#search');
search.addEventListener('input', giveCountryNameFirst)