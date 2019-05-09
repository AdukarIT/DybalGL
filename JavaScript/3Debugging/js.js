console.log("Задание 1: Создайте функцию, которая принимает три числа: два первых должны быть длиной сторон катетов прямоугольного треугольника, а третье – длиной гипотенузы. Функция возвращает true, если такой прямоугольный треугольник возможен, и false, если нет.");
function task1(a,b,c) {
	if (c ** 2 == a ** 2 + b **2) {
		console.log("True");
	}
	else console.log("False");
}
console.log(task1(5,5,10));



console.log("Задание 2: Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.");
function repeat (str, n = 5) {
	let result = "";
	for (let i = 0; i < n; i++ ) {
		result += str;
	}
	return result;
}
console.log(repeat("asd "));



console.log("Задание 3: Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете. Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».");
function school(kids, parta) {
	var countkids = 0;
	var countparts = 0;

	if (parta == kids/2) {
		return "Парт достаточно.";
	}
	else if (parta > kids) {
		countkids = Math.round(kids/2); //Условие ( 5; 101) - Нам нужно 3 парты для 5 детей
		countparts = parta - countkids;
		return "В классе " + countparts + " лишняя/лишних парт.";
	}
	else if (kids > parta) {
		countparts = Math.round(kids/2); //Условие ( 101; 5) - Нам нужно 51 парта для 101 ребенка
		return "В классе не хватает " + countparts + " парт/парты.";
	}
}
console.log(school(101,5));




console.log("Задание 4: Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание.");
function mark(a) {
	switch (a) {
		case 10:
			return "Your mark is " + a + " - it's Brilliant!";
		case 9:
			return "Your mark is " + a + " - it's Excellent!";
		case 8:
			return "Your mark is " + a + " - it's Almost excellent!";
		case 7:
			return "Your mark is " + a + " - it's Very good!";
		case 6: 
			return "Your mark is " + a + " - it's Good!";
		case 5: 
			return "Your mark is " + a + " - it's Almost good!";
		case 4:
		case 3:
			return "Your mark is " + a + " - it's Satisfactory :)";
		case 2:
		case 1: 
			return "Your mark is " + a + " - it's Unsatisfactory :(";
		default:
			return "This is not a Belarussian mark or it's not a mark at all";
	}
}
console.log(mark("asd"));




console.log("Задание 5: Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.");
function task5 () {
	do {
		var a = prompt("Введите число '0'")
	} while (a != 0);
}
console.log(task5());




console.log("Задание 6: Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, выводила эту сумму в консоль, а возвращала количество введённых чисел.");
function task6 () {
	var first = 0, second = 0, result = 0, count = 0;
	do {
		first = +prompt("Введите первое число: ");
		second = +prompt("Введите второе число: ");
		result += first + second;
		count += 2;
		console.log("Количество введённых чисел = " + count);
		console.log("Сумма равна: " + result);
	} while (result <= 100)
}
console.log(task6());




console.log("Задание 7: Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.");
function task7(a) {
	if (a > 1 && a % 2 != 0) return "Число " + a + " является простым!";
	else return "Введенное число не является простым!";
}
console.log(task7(11));




console.log("Задание 8: Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца. Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна), к которому относится месяц. Если нет –сообщение об ошибке.");
function task8(a) {
	switch (a) {
		case 1:
		case 2:
		case 12:
			return "Сейчас " + a + " месяц - это зима!";
		case 3:
		case 4:
		case 5:
			return "Сейчас " + a + " месяц - это весна!";
		case 6:
		case 7:
		case 8:
			return "Сейчас " + a + " месяц - это лето!";
		case 9:
		case 10:
		case 11:
			return "Сейчас " + a + " месяц - это осень!";
	}
}
console.log(task8(11));




console.log("Задание 9: Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).");
function task9 () {
	for (var i = 99; i >= 10; i--) {
		if (i % 7 == 0 || i % 10 == 7) {
			console.log(i);
		}
	}
}
console.log(task9());