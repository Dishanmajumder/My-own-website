// Example JavaScript code
let contact ="Contact me on gmail 'ninecloud197@gmail.com'"
console.log(contact);DDFFFFFF
let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);
btn.onclick("https://code.visualstudio.com")
let result = document.getElementById('result');

function insertValue(val) {
	result.value += val;
}

function clearResult() {
	result.value = '';
}

function deleteLast() {
	result.value = result.value.slice(0, -1);          
}

function calculate() {
	try { 2
		result.value = eval(result.value);
	} catch (error) {
		result.value = 'Error';
	}
}
