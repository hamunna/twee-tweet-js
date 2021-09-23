/* =====================
 Text Input Field
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
	}
	else {
		charExceedMsg.style.display = 'none';
		charRemainingMsg.style.display = 'block';
		charRemain.innerText = 255 - textInputVal.length;
	}
}
// Input Field Event Handler
textInputBox.addEventListener('keyup', () => {
	charLimitExceed();
});

/* =====================
 Submit Button
====================== */

const displayTweet = (tweet) => {
	const tweetDisplayUL = document.getElementById('tweet-display-ul');

	const li = document.createElement('li');
	li.classList.add('h-12', 'w-full', 'border-2', 'border-indigo-800', 'p-2', 'rounded-md', 'flex', 'justify-between', 'my-2', 'hover:bg-indigo-100');
	li.innerHTML = `	
		<div id="tweet-content-display">
			<spna id="tweet-no">101</spna>. 
			<strong id="tweet-text">${tweet}</strong>
		</div>
		<div id="tweet-controls">
			<i id="edit-btn" class="fas fa-edit text-indigo-800 mx-2 cursor-pointer text-lg"></i>
			<i id="delete-btn" class="fas fa-trash-alt text-red-600 mx-2 cursor-pointer text-lg"></i>
		</div>	
	`;
	tweetDisplayUL.appendChild(li);

}

document.getElementById('submit-btn').addEventListener('click', () => {

	const textInputVal = textInputBox.value;
	const charRemain = document.getElementById('char-remain');

	if (textInputVal < 1) {
		alert('Please Write Something!');
	}
	else {
		displayTweet(textInputVal);
	}

	textInputBox.value = '';
	charRemain.innerText = 255;
});


