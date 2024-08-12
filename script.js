const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInp = document.getElementById('user-input');
const resultDiv = document.getElementById('results-div');



const inputNumber = (e) => {
  e.preventDefault();
  
  const userInput =  parseInt(userInp.value.trim());
  const phoneNum = /^1?[-. ]?(?:\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/;

  const paragraph = document.createElement('p');
  paragraph.style.fontFamily = "Verdana";
  paragraph.style.fontSize = '17px';
  paragraph.style.color = '#000000';
  paragraph.style.margin = '10px';
  paragraph.style.textAlign = 'center';

   if(!userInput || isNaN(userInput)){
    alert('Please provide a phone number');
  }

  if(userInp.value.match(phoneNum)){
    paragraph.textContent = `Valid Us Number: ${userInp.value}`;
  }else{
    paragraph.textContent = `Invalid Us Number: ${userInp.value}`;
  } 
  
  resultDiv.appendChild(paragraph);
  userInp.value = '';
}

const clearButton = () => {
    resultDiv.innerHTML = '';
}

checkBtn.addEventListener('click', inputNumber);
clearBtn.addEventListener('click', clearButton);
