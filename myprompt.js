const ButtonConvert = document.getElementById("ButtonConvertNumber");
const ResultConvert = document.getElementById("Result");

ButtonConvert.onclick = () => {
  myPrompt();
}

function isCheckIntNumber(intNumber){
 return intNumber % 1 != 0 ? false:true;
}
function isCheckIntNumberSystem(intNumberSystem ){
  let isintNumberSystem = intNumberSystem % 1 != 0  ? false:true;
  let isAcceptableRangeNumberSystem = intNumberSystem > 36 || intNumberSystem < 2 ? false:true;
  return isintNumberSystem && isAcceptableRangeNumberSystem;
}
function convertNumber(intNumber,intNumberSystem){
  return (isCheckIntNumber(intNumber) && isCheckIntNumberSystem(intNumberSystem ) ? `число ${intNumber} в ${intNumberSystem}-ой системе счисления = ${intNumber.toString(intNumberSystem)}`  : "Некорректный ввод!");
}
function outResult(resConvert){
  ResultConvert.innerText = `==> ${resConvert} <==`;
}
let myPrompt = () => {
  let intNumber = + prompt('введите число!', 100);
  let intNumberSystem = + prompt("введи систему счисления для числа (от 2 до 36) !", 2);
  outResult(convertNumber(intNumber,intNumberSystem));
}