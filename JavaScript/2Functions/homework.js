console.log("Задание 1: Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.");
function task1 (a,b,c) {
	if (a < b && a < c) return "Наименьшее число - " + a;
	else if (b < a && b < c) return "Наименьшее число - " + b;
	else return "Наименьшее число - " + c;
}
console.log(task1(5,-2,100));



console.log("Задание 2: Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.");
function task2 (a,b) {
	a = a * 3600;
	b = b * 60;
	return "Секунд: " + (a + b);
}
console.log(task2(10,10));



console.log("Задание 3: Напишите рекурсивную функцию для подсчёта факториала числа.");
function task3 (a) {
	if (a == 0) return 1;
	return a * task3(a-1);
}
console.log(task3(3));



console.log("Задание 4: Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд.");
function task4 (a) {
	var res = 0;
	var remainder;
	while (a > 0) {
		remainder = a % 10;
		res = res * 10 + remainder;
		a = Math.floor(a/10);
	}
	console.log(res);
}
console.log(task4(531));

console.log("Задание 5: Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней....");
function task5 (a,b,c) {
	var diskr = (b ** 2) - (4 * a * c);
	var x1, x2;
	if (diskr < 0) return "Корней нет!";
	else if (diskr == 0) {
		x1 = ((-b) + Math.sqrt(diskr))/2 * a;
		return "X1 = " + x1;
	}
	else if (diskr > 0) {
		x1 = ((-b) + Math.sqrt(diskr))/2 * a;
		console.log("X1 = " + x1.toFixed(2));
		x2 = ((-b) - Math.sqrt(diskr))/2 * a;
		console.log("X2 = " + x2.toFixed(2));
	}
}

console.log(task5(1,-5,3));