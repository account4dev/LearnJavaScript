// 1. Проверка возраста
const age = prompt("Введите свой возраст:");
if (typeof age !== "number" || age < 18) {
  alert("Доступ запрещён");
} else {
  alert("Доступ разрешён");
}


// 2. Чётное или нечётное
const number = prompt("Введите число:");
if (typeof number === "number") {
  console.log("Число чётное:", (number % 2 == 0) ? true : false);
} else {
  console.log("Введено не число");
}


// 3. Калькулятор
const firstNumber = Number(prompt("Введите первое число:"));
const secondNumber = Number(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, * или /):");

let result;

switch(operator) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  default:
    operator = "+";
    result = firstNumber + secondNumber;
}

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
} else {
  alert("1 + 1 = 2");
}


// 4. Проверка длины строки
const string = prompt("Введите строку:");

if (string.length > 10) {
  let encryptedPart = "*".repeat(string.length - 5);
  alert(string.slice(0, 5) + encryptedPart);
} else {
  alert(string.toUpperCase());
}


// 5. Определение времени суток
const hour = Number(prompt("Который сейчас час?"));
if (hour >= 0 && hour <= 5) {
  alert("Ночь");
} else if (hour >= 6 && hour <= 11) {
  alert("Утро");
} else if (hour >= 12 && hour <= 17) {
  alert("День");
} else {
  alert("Вечер");
}


// 6. Проверка e-mail
const email = prompt("Введите email-адрес:");
if (email.includes("@") && email.includes(".")) {
  alert("Верный формат");
} else {
  alert("Ошибка!");
}


// 7. Палиндром (базовый)
const palindrome = prompt("Введите слово:");
if (palindrome == palindrome.split("").reverse().join("")) {
  alert("Это палиндром");
} else {
  alert("Это не палиндром");
}
