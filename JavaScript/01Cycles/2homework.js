console.log("Задание 1: В доме 5 подъездов по 20 квартир каждый. Получите от пользователя номер квартиры и взамен выдайте в консоль номер подъезда. Учитывайте, что пользователь может ввести число меньше 1 или больше 100.");
var a = +prompt("Введите номер квартиры ");

if (a >= 1 && a <=20) console.log("Квартира №" + a + " находится в подъезде №1");
else if (a > 20 && a <= 40) console.log("Квартира №" + a + " находится в подъезде №2");
else if (a > 40 && a <= 60) console.log("Квартира №" + a + " находится в подъезде №3");
else if (a > 60 && a <= 80) console.log("Квартира №" + a + " находится в подъезде №4");
else if (a > 80 && a <= 100) console.log("Квартира №" + a + " находится в подъезде №2");
else console.log("Квартира находится не в данном доме!");



console.log("Задание 2: Получите от пользователя строку с названием марки автомобиля. Напишите конструкцию switch/case, которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.)....");

var a = prompt("Введие марку автомобиля");

switch (a) {
	case 'BMW': console.log("BWM - страна происхождения Германия.");
	break;
	case 'Ford': console.log("Ford - страна происхождения США.");
	break;
	case 'Peugeot': console.log("Peugeot - страна происхождения Франция.");
	break;
	case 'Mercedes': console.log("Mercedes - страна происхождения Германия.");
	break;
	case 'Skoda': console.log("Skoda - страна происхождения Чехия.");
	break;
	case 'Porsche': console.log("Porsche - страна происхождения Германия.");
	break;
	default: console.log(a + " - страна происхождения неизвестна.")
}



console.log("Задание 3: Пользователь вводит год. Определите, является ли этот год високосным.");

var a = +prompt("Введите интересующий вас год");

if (a % 4 != 0) console.log(a + " год - обычный.");
else if (a % 100 == 0 && a % 400 != 0) console.log(a + " год - обычный.");
else console.log(a + " год - високосный.");



console.log("Задание 4: Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа.");

var chislo = +prompt("Введите число от 1 до 20");

if (chislo >= 1 && chislo <= 20) {
	for (var i = 1; i <= 20; i++) {
		if (i == chislo) {
			for (var j = 1; j <= 10; j++) console.log(chislo + " * " + j + " = " + chislo*j);
		}
	}
}
else console.log("Введенные вами данные не являются числом в диапозоне 1-20!");

console.log("Задание 5: Выведите в консоль сумму всех нечётных чисел от 1 до 50. Дополнительно: решите эту задачу, используя оператор continue.");

var sum = 0;
for (var i = 1; i <= 50; i = i + 2) {
	sum += i;
}
console.log("Сумма всех нечетных чисел равна: " + sum);



console.log("Задание 6: Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.");

var a = 1;
var b = 1;
var c = 0;

for (var i = 2; i <= 15; i++) {
   c = a + b;
   console.log(c);
   a = b;
   b = c;
}



console.log("Задание 7: Используя циклы (и операцию конкатенации), выведите в консоль 'шахматную доску'.");

var desk1 = "  #   #   #   #";
var desk2 = "#   #   #   #";
for (var i = 1; i <= 5; i++) {
	console.log(desk1);
	for (var j = 1; j <= 5; j++) {
		console.log(desk2);
	}
}