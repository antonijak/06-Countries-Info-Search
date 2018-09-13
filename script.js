
let main = document.querySelector('main');

let total = document.querySelector('#total');
total.textContent = countries.length;

//generate random hexadecimal number
function randomHexaNumberGenerator1 (){
  let characters = '123456789abcdef'  
  let hex = '#';
  for (i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * 15);
    hex = hex.concat(characters.charAt(random));
  }   
  return hex
}

// create color div with country name inside it
function createCountryDiv (country){
  let colorDiv = document.createElement('div');
  main.appendChild(colorDiv);
  let hexValue = randomHexaNumberGenerator1();
  let countryName = document.createElement('div');
  colorDiv.appendChild(countryName);
  colorDiv.className = 'country';
  countryName.textContent = country;
  countryName.style.color = randomHexaNumberGenerator1();
  countryName.className = 'country-name';
  colorDiv.style.backgroundColor = hexValue;
}

//generates countries from the countries array
function giveCountryNameFirst (){
  main.innerHTML = '';
  let matchWord = document.querySelector('#search').value.toUpperCase();
  console.log(matchWord);
  let resultObject = {};
  const whatLetter = countries.filter(function(val){
    let upperVal = val.toUpperCase();
    let match = upperVal.startsWith(matchWord);
    if (match){
    return upperVal}
  }); 
  let key = whatLetter.length  
  document.querySelector('#number').textContent = key;
  resultObject[key] = whatLetter; 
  for (country of resultObject[key]){
  createCountryDiv(country.toUpperCase());
  }
  matchWord = '';
}

  const searchFirst = document.querySelector('#starting-word');
  searchFirst.addEventListener('click',giveCountryNameFirst);

  function giveCountryNameAny (){
    main.innerHTML = '';
    let matchWord = document.querySelector('#search').value.toUpperCase();
    console.log(matchWord);
    let resultObject = {};
    const whatLetter = countries.filter(function(val){
      let upperVal = val.toUpperCase();
      let match = upperVal.includes(matchWord);
     console.log(match);
      console.log(upperVal);
      
      if (match){
      return upperVal}
    }); 
    let key = whatLetter.length;  
    document.querySelector('#number').textContent = key;
    resultObject[key] = whatLetter; 
    for (country of resultObject[key]){
    createCountryDiv(country.toUpperCase());
    
    }
    
    matchWord = '';
  }


  const searchAny = document.querySelector('#any-word');
  searchAny.addEventListener('click',giveCountryNameAny);