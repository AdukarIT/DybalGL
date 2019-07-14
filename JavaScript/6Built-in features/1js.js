console.log("Задание 1: Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов, каждый из которых – случайное число от 1 до 50.");
function task1 () {
	var array = new Array(20);
	for (var i = 0; i < array.length; i++) {
		array[i] = Math.floor(Math.random() * (50 - 1));
	}
	return array;
}
console.log(task1());


console.log("Задание 2: Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива, минимальное и максимальное значения элементов.");
function task2 (len,min,max) {
	var array = new Array(len);
	for (var i = 0; i < array.length; i++) {
		array[i] = Math.floor(Math.random() * (max - min));
	}
	return array;
}
console.log(task2(12, 4, 33));


console.log("Задание 3: Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html. Если оба условия выполнены, функция возвращает true, в ином случае – false.");
function task3() {
	var string = "https://github.com/AdukarIT/_Tasks_";
	if (string.slice(0,5) == "https" && string.slice(-1,5) == ".html") return true;
	else return false;
}
console.log(task3());


console.log("Задание 4: Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.");
function task4() {
	var str = "Напишите функцию, котОрая считает, скОлько раз определённый символ встречается в строке.";
	var symbol = "о";
	console.log(str.split('о').length-1);
}
console.log(task4());


console.log("Задание 5: Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом (например, 'A' == 'a').");
function task5() {
	var str = "Напишите функцию, котОрая считает, скОлько раз определённый символ встречается в строке.";
	var symbol = "о";
	console.log(str.toUpperCase().split('О').length-1);
}
console.log(task5());


console.log("Задание 6: Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».");
function task6() {
	var now = new Date();
	var options = {
	  year: 'numeric',
	  month: 'long',
	  day: 'numeric'
	};
	console.log(now.toLocaleString("ru",options));
}
console.log(task6());


console.log("Здание 7: Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.");
function task7() {
	var now = new Date(2019);
	console.log(Date.parse("2019-01-01"));
}
console.log(task7());
