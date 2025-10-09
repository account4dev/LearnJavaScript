// 1. Базовые преобразования
const message1 = "JavaScript is AWESOME";
console.log(message1.toUpperCase());


// 2. Извлечение подстрок
const date = "2024-07-30";
const dateArray = date.split("-");

const year = "Год: " + dateArray[0];
const month = "Месяц: " + dateArray[1];
const day = "День: " + dateArray[2];

console.log(year, "/", month, "/", day);


// 3. Поиск и замена
let message2 = "Я люблю JavaScript! Я люблю это дело.";
message2 = message2.replace("JavaScript", "программирование");
message2 = message2.replaceAll("люблю", "обожаю");

console.log(message2);


// 4. Работа с разделителями
const food = "яблоки,груши,виноград";
console.log(food.replaceAll(",", " | ").toUpperCase());


// 5. Проверка содержимого
const email = "example@mail.com";
console.log("Есть ли в строке символ \"@\"?", email.includes("@"));
console.log("Оканчивается ли строка на \".com\"?", email.endsWith(".com"));


// 6. Маскирование данных
const cardNumber = "1234567812345678";
console.log(cardNumber.slice(0, 4), "**** ****", cardNumber.slice(-4));


// 7. Анализ строки
const message3 = "Hello World!";
console.log("Длина строки:", message3.length);
console.log("Первый символ:", message3.slice(0, 1));
console.log("Последний символ:", message3.slice(-1));
console.log("Символ посередине:", message3.slice(message3.length / 2, message3.length / 2 + 1));
