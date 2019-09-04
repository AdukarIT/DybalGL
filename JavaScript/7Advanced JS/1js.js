console.log("Задание 1: Напишите функцию counterFactory(start, step), которая при вызове возвращает другую функцию – счётчик tictoc(). start–стартовое значение счётчика, step – его шаг. При каждом вызове tictoc увеличивает значение счётчика на step.");
function counterFactory(start, step) {
	var counter = start;

	const addone = function tictoc() {
		counter = counter + step;
		return counter;
	}
	return addone;
}
var increment = counterFactory(1,2);
console.log( increment() );
console.log( increment() );


console.log("Задание 2: Напишите функцию take(tictoc, x), которая вызывает функцию tictoc заданное число (x) раз и возвращает массив с результатами вызовов.");
function take(tictoc, x) {
	let array = [];
	for (let i = 0; i < x; i++) {
		array[i] = tictoc();
	}
	return array;
}
console.log(take(increment,2));


console.log("Задание 3: Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.");
function task3() {
	let str = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.";
	let changed = str.replace(/\,/g, "");
	changed = changed.replace(/\./g, "");

	let arr = changed.split(" ");
	arr = arr.reverse();
	function sortarray (a, b) {
		return a.length - b.length;
	}

	console.log(arr.sort(sortarray));
	console.log("Общее кол-во букв во всех эл-тах массива: " + arr.reduce( function(currSum, elem) {
		let count = 0;
		for (let i = 0; i < arr.length; i++) {
			count += arr[i].length;
		}
		return count;
	}));
}
console.log(task3());


console.log("Задание 4: Дан код.... Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'Привет, Иванов Иван'. Слово 'привет' возьмите из свойства объекта obj, а 'Иванов' и 'Иван' задайте как параметры функциями.");
let obj = { greeting: "Привет" };
function func(surname, name) {
	console.log(this.greeting + ', ' + surname + ' ' + name);
}
console.log(func.call(obj, "Иванов", "Иван"));


console.log("Задание 5: Перепишите задачу так, чтобы вместо call применялся apply.");
function func(surname, name) {
	
	console.log(this.greeting + ', ' + surname + ' ' + name);
}
console.log(func.apply(obj, ["Иванов", "Иван"]));