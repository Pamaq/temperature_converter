const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const unit = "°C";

const swap = () => {
	if (one.textContent.match(unit)) {
		one.textContent = "°F";
		two.textContent = "°C";
	} else {
		two.textContent = "°F";
		one.textContent = "°C";
	}
};

changeBtn.addEventListener("click", swap);
