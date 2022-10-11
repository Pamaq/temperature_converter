let converter = document.querySelector("#converter");
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

const convert = () => {
	if (one.textContent === "°C") {
		result.textContent = converter.value * 1.8 + 32;
	} else {
		result.textContent = converter.value - 31 / 1.8;
	}
};

changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", convert);
