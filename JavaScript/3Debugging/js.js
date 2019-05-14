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




console.log("Задание 10: Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители.");
function task10 () {
	for (var i = 2; i <= 20; i++) {
		for (var j = 2; j <= 9; j++) {
			if (i % j == 0) console.log("Число " + j + " является делителем числа " + i);
		}
	}
}
console.log(task10());




console.log("Задание 11: Решите задачу 10 в общем виде: вместо 2 и 20 – аргументы x и y.");
function task11 (x,y) {
	for (var i = x; i <= y; i++) {
		for (var j = 2; j <= 9; j++) {
			if (i % j == 0) console.log("Число " + j + " является делителем числа " + i);
		}
	}
}
console.log(task11(7,15));




console.log("Задание 12: Создайте функцию с параметрами size (число) и unit (строка). В unit передаются единицы измерения информации («Кб», «Мб», «Гб»), в size – количество таких единиц. Функция возвращает количество байт в size.");
function task12 (size, unit) {
	switch (unit) {
		case "Кб":
		case "кб":
		case "кБ":
		case "КБ":
			return "Количество байт в " + size + " Кб" + " = " + size * 1024;

		case "Мб":
		case "мб":
		case "мБ":
		case "МБ":
			return "Количество байт в " + size + " Мб" + " = " + size * 1048576;

		case "Гб":
		case "гб":
		case "гБ":
		case "ГБ":
			return "Количество байт в " + size + " Гб" + " = " + size * 1073741824;
	}
}
console.log(task12(250, "Мб"));




console.log("Задание 13: Создайте функцию, которая ищет наибольший общий делитель двух чисел.");
function task13 (a,b) {
	while ( a && b) {
		if (a == 0 || b == 0) return a + b;
		a > b ? a %= b : b %= a;
	}
	return a + b;
}
console.log(task13(10,15));




console.log("Задание 14: Решите задачу 13 через рекурсию.");
function task14 (a,b) {
	if (a == 0 || b == 0) return a + b;
	return task14(b, a % b);
}
console.log(task14(15,10));




console.log("Задание 15: Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n, будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).");
function words(n) {
	if (n >= 5 && n <= 20) console.log(n + " карандашей.");
	else if (n % 10 == 1) console.log(n + " карандаш.");
	else if (n % 10 >= 5)  console.log(n + " карандашей.");
	else console.log(n + " карандаша.");
}
console.log(words(94));




console.log("Задание 16: Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных чисел.");
function task16(a) {
	for (var i = 1; i < a; i++) {
  		for (var j = 1; j < a; j++){
    		if (a == Math.pow(i, 2) + Math.pow(j, 2))
      		console.log("Число можно представить в виде суммы квадратов двух целых однозначных чисел " + i, j);
  		}
	}
}
console.log(task16(50));