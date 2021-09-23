/* =====================
 Text Input Field Tasks
====================== */

// Input Field Selecting
const textInputBox = document.getElementById('text-input-box');
// text-input-box Functionalities
const charLimitExceed = () => {
	// Selecting Related Elements
	const textInputVal = textInputBox.value;
	const charRemain = document.getElementById('char-remain');
	const charExceedMsg = document.getElementById('char-exceed-msg');
	const charRemainingMsg = document.getElementById('char-remaining-msg');

	if (textInputVal.length > 255) {
		charExceedMsg.style.display = 'block';
		charRemainingMsg.style.display = 'none';
	} else {
		charExceedMsg.style.display = 'none';
		charRemainingMsg.style.display = 'block';
		charRemain.innerText = 255 - textInputVal.length;
		console.log(textInputVal.length)

	}
}
// Input Field Event Handler
textInputBox.addEventListener('keyup', () => {	
	charLimitExceed();
});