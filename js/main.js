const ratesNew = { USD: '', EUR: '', AUD: '', GBP: '', BYN: '', HKD: '', CNY: '', INR: '', CAD: '' };
const imageSrc = ["images/nn.jpg", "images/us.jpg", "images/eu.png", "images/au.jpg", "images/gb.jpg", "images/by.png", "images/hk.jpg", "images/cn.jpg", "images/in.jpg", "images/ca.png", "images/ru.png"];
const grafem = ["\u00A4", "\u0024", "\u20AC", "\u0024", "\u00A3", "\u20BD", "\u0024", "\u5143", "\u20A8", "\u0024", "\u20BD"];
const time = {};

const elementDate = document.querySelector('[data-value="date"]');
const elementTime = document.querySelector('[data-value="time"]');
const inputImg = document.querySelector('#inputImg');
const outputImg = document.querySelector('#outputImg');
const grafInput = document.querySelector('#grafInput');
const grafOut = document.querySelector('#grafOut');
const input = document.querySelector('#input');
const inputRate = document.querySelector('#input_rate');
const outputRate = document.querySelector('#output-rate');
const result = document.querySelector('#result');
const resultOld = document.querySelector('#result-old');
const inputValue = document.querySelector('#inputValue');
const inputCurrency = document.querySelector('#inputCurrency');
const outputCurrency = document.querySelector('#outputCurrency');
inputRate.oninput = convertValue;
outputRate.oninput = convertValue;
input.oninput = convertValue;

function convertValue() {
  if (input.value && inputRate.value && outputRate.value) {
    result.value = (parseFloat(input.value) * (ratesNew[inputRate.value].Value / ratesNew[outputRate.value].Value)).toFixed(2);
    result.textContent = result.value;
    inputValue.textContent = input.value;
    if (result.textContent === "NaN") { result.textContent = "-" }
    resultOld.value = (parseFloat(input.value) * (ratesNew[inputRate.value].Previous / ratesNew[outputRate.value].Previous)).toFixed(2);
    resultOld.textContent = resultOld.value;
    if (resultOld.textContent === "NaN") { resultOld.textContent = "-" }
  }
}

function showCurrency(sel) {
  inputCurrency.textContent = sel.options[sel.selectedIndex].text;
  inputImg.setAttribute('src', imageSrc[inputRate.selectedIndex]);
  grafInput.textContent = grafem[inputRate.selectedIndex];
}

function showOutput(sel) {
  outputCurrency.textContent = sel.options[sel.selectedIndex].text;
  outputImg.setAttribute('src', imageSrc[outputRate.selectedIndex]);
  grafOut.textContent = grafem[outputRate.selectedIndex]
}

function clearField() {
  input.value = "";
  inputValue.textContent = "-";
  result.textContent = "-";
  resultOld.textContent = "-";
  inputCurrency.textContent = "Исходная валюта";
  outputCurrency.textContent = "Конвертируемая валюта";
  inputRate.selectedIndex = 0;
  outputRate.selectedIndex = 0;
  inputImg.setAttribute('src', imageSrc[0]);
  outputImg.setAttribute('src', imageSrc[0]);
  grafInput.textContent = "";
  grafOut.textContent = "";
}

