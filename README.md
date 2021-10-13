# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

Please refer the Screenshots folder.

### Links

- Solution URL: [Solution URL here](https://github.com/Memeena/tip-calculator-app-main)
- Live Site URL: [Live site URL here](https://memeena.github.io/tip-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla JavaScript

### What I learned

1. In HTML learnt the following concepts.
	1. We can change the direction of the input field using "dir" attribute.
	2. We can use the "step" attribute to set the inut field to take inputs with only 2 decimal places

	<input type="number" id="bill-amount" placeholder="0" step="0.01" dir="rtl" class="bill form-input">

	3. We can remove the spinners in the input tag by using the below command. I got this source from https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp

  	/* Chrome, Safari, Edge, Opera */
	  input::-webkit-outer-spin-button,
	  input::-webkit-inner-spin-button {
  	  -webkit-appearance: none;
	    margin: 0;
	  }

	  /* Firefox */
	  input[type=number] {
  	  -moz-appearance: textfield;
	  }

2. In CSS, I am proud of the concepts that I have implemented.
	1. For Buttons, getting the pressed effect when "active" using box-shadow and transform properties.
		
		.tip-link:active {
		    background-color: hsl(172, 67%, 45%);
		    color:hsl(183, 100%, 15%);
		    box-shadow: 0 2px #222;
		    transform: translateY(4px) scale(0.95);
		}

	2. Using grid, auto-fit property to fit the tip % buttons based on the screen size.

		.select-tip {
		    padding-top:1rem;
		    padding-bottom: 3rem;
		    display: grid;
		    grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
		    grid-template-rows: 1fr 1fr;
		    grid-gap: 2rem;
		}

3. In JS, I am proud of the following concepts that I have implemented.

	1. To get the number alone from the tip button excluding the % using Regex.
	        const noRegex = /\d*/;  //To get the number excluding % sign
	        const result = (tipArr[i].textContent).match(noRegex);
	        tipAmount = result.join();
	
	2. Added one more functionality other than specified in the design. Added an error message if the bill amount is 0 or empty.
	        if(bill == 0){
	            document.querySelector('.error-msg').style.opacity = 1;
        	    document.querySelector('.error-msg').textContent = 'Please enter the Bill amount!';
	        }

	3. Neatly formatted the code with clear explanations.

## Author

- Frontend Mentor - [@Memeena](https://www.frontendmentor.io/profile/Memeena)
- Twitter - [@MeKrish18](https://www.twitter.com/MeKrish18)

