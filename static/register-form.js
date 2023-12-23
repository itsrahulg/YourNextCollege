//password genaration
// function generatePass() {
// 	let pass = '';
// 	let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$!%*?&@$';

// 	for (let i = 0; i <= 8; i++) {
// 		let char = Math.floor(Math.random()* str.length + 1);

// 		pass += str.charAt(char)
// 	}

// 	document.getElementById("password").value=pass;
//   document.getElementById("confirm").value=pass;
// }

//password visibility

function generatePass() {
	let pass = '';
	let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
	let digits = '1234567890';
	let specialChars = '@$!%*?&';
	let allChars = upperChars + lowerChars + digits + specialChars;
  
	// Generate at least one of each character type
	pass += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
	pass += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
	pass += digits.charAt(Math.floor(Math.random() * digits.length));
	pass += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  
	// Generate the remaining characters
	for (let i = 0; i < 4; i++) { // You need 4 more characters to reach a total of 8
	  let char = allChars.charAt(Math.floor(Math.random() * allChars.length));
	  pass += char;
	}
  
	// Shuffle the password characters to randomize their order
	pass = pass.split('').sort(function () {
	  return 0.5 - Math.random();
	}).join('');
  
	document.getElementById("password").value = pass;
	document.getElementById("confirm").value = pass;
  }
  

function togglePasswordVisibility() {
	var passwordField = document.getElementById("password");
	var passwordToggle = document.getElementById("password-toggle");

	if (passwordField.type === "password") {
	  passwordField.type = "text";
	  passwordToggle.innerText = "🫣";
	} else {
	  passwordField.type = "password";
	  passwordToggle.innerText = "🔍";
	}
  }

  //confirm password hidden/visible
  function toggleconfirmPasswordVisibility() {
	var passwordField = document.getElementById("confirm");
	var passwordToggle = document.getElementById("confirmpassword-toggle");

	if (passwordField.type === "password") {
	  passwordField.type = "text";
	  passwordToggle.innerText = "🫣";
	} else {
	  passwordField.type = "password";
	  passwordToggle.innerText = "🔍";
	}
  }

