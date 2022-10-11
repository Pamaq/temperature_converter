const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const swap = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
	} else {
		two.textContent = "°F";
		one.textContent = "°C";
	}
	result.textContent = "";
};

const convert = () => {
	if (one.textContent === "°C") {
		result.textContent = `${converter.value * 1.8 + 32} °F`;
		converter.value = ""; //pusty string, żeby po wykonaniu znikało to co wpisalismy
	} else {
		result.textContent = `${converter.value - 31 / 1.8} °C`;
		converter.value = "";
	}
};
const reset = () => {
	converter.value = " ";
	result.textContent = " ";
};

changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
