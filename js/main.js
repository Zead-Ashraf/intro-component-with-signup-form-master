let userInputs = document.querySelectorAll("[type='text']");
let userPassword = document.querySelectorAll("[type='password']");


const emailregex = /\w+@gmail\.((com)|(org)|(net)|(outlook))/;
const wmiss = /^\W/
const atmiss = /\w+[^@]gmail\.((com)|(org)|(net)|(outlook))/;
const emmiss = /\w+@\.((com)|(org)|(net)|(outlook))/;
const e_atmiss = /\w+[^@|^(gmail)]\.((com)|(org)|(net)|(outlook))/;
const dotmiss = /\w+@gmail((com)|(org)|(net)|(outlook))/;
const commiss = /\w+@gmail\.?/;

const wrongmas0 = document.createElement("p");
const wrongmas1 = document.createElement("p");
const wrongmas2 = document.createElement("p");
const wrongmas2_0 = document.createElement("p");
const wrongmas2_1 = document.createElement("p");
const wrongmas2_2 = document.createElement("p");
const wrongmas2_3 = document.createElement("p");
const wrongmas2_4 = document.createElement("p");
const wrongmas2_5 = document.createElement("p");
const wrongmas2_6 = document.createElement("p");
const wrongmas3 = document.createElement("p");
const wrongmas3_1 = document.createElement("p");

const aletext0 = document.createTextNode("First name can't be empty");
const aletext1 = document.createTextNode("last name can't be empty");
const aletext2 = document.createTextNode("Look like this is not an email");
const aletext2_0 = document.createTextNode("Look like You forgot `Username`");
const aletext2_1 = document.createTextNode("seems you forget `@`");
const aletext2_2 = document.createTextNode("seems you forget `gmail`");
const aletext2_3 = document.createTextNode("seems you forget `@ && gmail`");
const aletext2_4 = document.createTextNode("seems you forget `.`");
const aletext2_5 = document.createTextNode("seems you forget `.com`");
const aletext2_6 = document.createTextNode("please enter valid email");
const aletext3 = document.createTextNode("passowrd can't be empty");
const aletext3_1 = document.createTextNode("passowrd can't be less than 8 numbres");

wrongmas0.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas1.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2_0.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2_1.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2_2.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2_3.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2_4.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2_5.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas2_6.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6%; font-family: sans-serif;"

wrongmas3.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6% 1% 6%; font-family: sans-serif;"

wrongmas3_1.style.cssText = "color: hsl(0, 100%, 74%); font-size: 14px; text-align: right; width: 80%; margin: -1% 6% 1% 6%; font-family: sans-serif;"

document.forms[0].onsubmit = function (e) {

	//first name chceking

	if (userInputs[0].value === "") { 
		event.preventDefault()
		userInputs[0].className = "wrong";
		wrongmas0.appendChild(aletext0)
		userInputs[0].after(wrongmas0);
	}

	//first name remove wrong

	userInputs[0].onblur = function (e) {
		if (userInputs[0].value !== "") {
			userInputs[0].removeAttribute("class")
			wrongmas0.remove()

		}
		else {
			event.preventDefault()
			userInputs[0].className = "wrong";
		}
	}

/******************************************************************************/

	//second name chceking

	if (userInputs[1].value === "") {
		event.preventDefault()
		userInputs[1].className = "wrong";
		wrongmas1.appendChild(aletext1)
		userInputs[1].after(wrongmas1);
	}
	
	//second name remove wrong

	userInputs[1].onblur = function (e) {
		if (userInputs[1].value !== "") {
			userInputs[1].removeAttribute("class")
			wrongmas1.remove()

		}
		else {
			event.preventDefault()
			userInputs[1].className = "wrong";
		}
	}
/******************************************************************************/
	//Email Empty chceking

	if (userInputs[2].value === "") {
		event.preventDefault();
		userInputs[2].className = "wrong";
		wrongmas2.appendChild(aletext2)
		userInputs[2].after(wrongmas2);

	}

	//Email remove wrong checking

	userInputs[2].onblur = function (e) {
		if (userInputs[2].value !== "") { 
			userInputs[2].removeAttribute("class")
			wrongmas2.remove()

		}
		else {
			event.preventDefault()
			userInputs[2].className = "wrong";
		}
	}
/******************************************************************************/
	//Email advanced cheking

	if (!emailregex.test(userInputs[2].value) && userInputs[2].value != "" ) { 

		event.preventDefault();

		//Username missed 2_0

		if (wmiss.test(userInputs[2].value)) {
			if (userInputs[2].nextElementSibling.nodeName != "P") {
				userInputs[2].className= "wrong"
				wrongmas2_0.appendChild(aletext2_0)
				userInputs[2].after(wrongmas2_0);
			}
			else {
				userInputs[2].nextElementSibling.remove();
				userInputs[2].className= "wrong"
				wrongmas2_0.appendChild(aletext2_0)
				userInputs[2].after(wrongmas2_0);
			}
		}

/******************************************************************************/

	//@ missed 2_1

		else if (atmiss.test(userInputs[2].value)) {
			if (userInputs[2].nextElementSibling.nodeName != "P") {
				userInputs[2].className= "wrong"
				wrongmas2_1.appendChild(aletext2_1)
				userInputs[2].after(wrongmas2_1);
			}
			else {
				userInputs[2].nextElementSibling.remove();
				userInputs[2].className= "wrong"
				wrongmas2_1.appendChild(aletext2_1)
				userInputs[2].after(wrongmas2_1);
			}
		}

/******************************************************************************/

	//"gmail" missed 2_2

		else if (emmiss.test(userInputs[2].value)) {
			if (userInputs[2].nextElementSibling.nodeName != "P") {
				userInputs[2].className= "wrong"
				wrongmas2_2.appendChild(aletext2_2)
				userInputs[2].after(wrongmas2_2);
			}
			else {
				userInputs[2].nextElementSibling.remove();
				userInputs[2].className= "wrong"
				wrongmas2_2.appendChild(aletext2_2)
				userInputs[2].after(wrongmas2_2);
			}
		}

/******************************************************************************/

		//"@ Gmail" missed 2_3

		else if (e_atmiss.test(userInputs[2].value)) {
			if (userInputs[2].nextElementSibling.nodeName != "P") {
				userInputs[2].className= "wrong"
				wrongmas2_3.appendChild(aletext2_3)
				userInputs[2].after(wrongmas2_3);
			}
			else {
				userInputs[2].nextElementSibling.remove();
				userInputs[2].className= "wrong"
				wrongmas2_3.appendChild(aletext2_3)
				userInputs[2].after(wrongmas2_3);
			}
		}

/******************************************************************************/

	//"." missed 2_4

		else if (dotmiss.test(userInputs[2].value)) {
			if (userInputs[2].nextElementSibling.nodeName != "P") {
				userInputs[2].className= "wrong"
				wrongmas2_4.appendChild(aletext2_4)
				userInputs[2].after(wrongmas2_4);
			}
			else {
				userInputs[2].nextElementSibling.remove();
				userInputs[2].className= "wrong"
				wrongmas2_4.appendChild(aletext2_4)
				userInputs[2].after(wrongmas2_4);
			}
		}

/******************************************************************************/

	//".com" missed 2_5

		else if (commiss.test(userInputs[2].value)) {
			if (userInputs[2].nextElementSibling.nodeName != "P") {
				userInputs[2].className= "wrong"
				wrongmas2_5.appendChild(aletext2_5)
				userInputs[2].after(wrongmas2_5);
			}
			else {
				userInputs[2].nextElementSibling.remove();
				userInputs[2].className= "wrong"
				wrongmas2_5.appendChild(aletext2_5)
				userInputs[2].after(wrongmas2_5);
			}
		}

/******************************************************************************/

	//"invaild email" 2_6

		else {
			if (userInputs[2].nextElementSibling.nodeName != "P") {
				userInputs[2].className= "wrong"
				wrongmas2_6.appendChild(aletext2_6)
				userInputs[2].after(wrongmas2_6);
			}
			else {
				userInputs[2].nextElementSibling.remove();
				userInputs[2].className= "wrong"
				wrongmas2_6.appendChild(aletext2_6)
				userInputs[2].after(wrongmas2_6);
			}
		}
	}

/******************************************************************************/
	//password chceking

	if (userPassword[0].value === "") { 
		event.preventDefault()
		userPassword[0].className = "wrong";
		wrongmas3.appendChild(aletext3)
		userPassword[0].after(wrongmas3);
	}

	//password remove wrong

	userPassword[0].onblur = function (e) {
		if (userPassword[0].value !== "") {
			userPassword[0].removeAttribute("class")
			wrongmas3.remove()

		}
		else {
			event.preventDefault()
			userPassword[0].className = "wrong";
		}
	}

	//Password length checking

	if (userPassword[0].value.length < 8 && userPassword[0].value.length != 0 ) {
		event.preventDefault()
		userPassword[0].className = "wrong";
		wrongmas3_1.appendChild(aletext3_1)
		userPassword[0].after(wrongmas3_1);
	}
	else {
		userPassword[0].removeAttribute("class")
		userPassword[0].value.length == 0 ? userPassword[0].className = "wrong"
		:wrongmas3_1.remove();
	}
	
}

