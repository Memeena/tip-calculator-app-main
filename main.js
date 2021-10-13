'use strict';

const noOfPeople = document.getElementById('total-people');
const billAmount = document.getElementById('bill-amount');
const peopleForm = document.querySelector('.people');

const tipArr = document.querySelectorAll('.tip-link');
const customTip = document.querySelector('.custom-input');

const outputTipAmount = document.querySelector('.tip-amt');
const outputTotalAmount = document.querySelector('.total-amt');

const error = document.querySelector('.error');
const resetButton = document.querySelector('.reset-button');
let tipAmount = 0;  


// Custom Tip calculation
customTip.addEventListener('keydown',function(){
    calcTip(customTip.value);
});

//Tip amount Calculation
for(let i=0;i<tipArr.length;i++){
        
    tipArr[i].addEventListener('click',function(){
        
        //resetting the style of the tip button to default
        for(let j=0;j<tipArr.length;j++){
            tipArr[j].style.backgroundColor = 'hsl(183, 100%, 15%)';
            tipArr[j].style.color = 'white';
            tipArr[j].style.fontWeight = '700';
        }

        const noRegex = /\d*/;  //To get the number excluding % sign
        const result = (tipArr[i].textContent).match(noRegex);
        tipAmount = result.join();
            
        //changing the style of the selected tip button
        tipArr[i].style.backgroundColor = 'hsl(172, 67%, 45%)';
        tipArr[i].style.color = 'hsl(183, 100%, 15%)';
        tipArr[i].style.fontWeight = '700';

        //Calculating and Displaying the amount 
        calcTip(tipAmount);
        
    
    });    
}

//Validating the number of people and the bill 
const validateInput = function(people,bill){    
     
    if(bill == 0 || people == 0) {   
        if(bill == 0){
            document.querySelector('.error-msg').style.opacity = 1;
            document.querySelector('.error-msg').textContent = 'Please enter the Bill amount!';
        }
        if(people == 0){
            error.style.opacity = 1;
            peopleForm.style.border = '1px solid red';
        }
        return false;  

    }else {
        return true;
    }
    
}

//Calculating and Displaying the amount 
const calcTip = function(amount){
    //Check for validation
    if(validateInput(noOfPeople.value,billAmount.value)){
        document.querySelector('.error-msg').style.opacity = 0;
        error.style.opacity = 0;
        peopleForm.style.border = '1px solid rgba(0,0,0,0.2)';
        
        const tipPerPerson = (billAmount.value / noOfPeople.value) * amount / 100;
        outputTipAmount.textContent = '$'+tipPerPerson.toFixed(2);
        
        const totalPerPerson = (billAmount.value / noOfPeople.value) + tipPerPerson;
        outputTotalAmount.textContent= '$'+totalPerPerson.toFixed(2);
    }
}

//Resetting the values on click of reset button
resetButton.addEventListener('click',function(){
    
    billAmount.value = 0;
    noOfPeople.value = 0;
    for(let i=0;i<tipArr.length;i++){
        tipArr[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
        tipArr[i].style.color = 'white';
        tipArr[i].style.fontWeight = '700';

    }
    outputTipAmount.textContent = '$'+0.00.toFixed(2);
    outputTotalAmount.textContent= '$'+0.00.toFixed(2);
    customTip.value='';
    error.style.opacity = 0;
    peopleForm.style.border = '1px solid rgba(0,0,0,0.2)';
    document.querySelector('.error-msg').style.opacity = 0;
});
