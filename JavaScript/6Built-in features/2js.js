console.log("Задание 1: Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создаёт на его основе новый. Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}. initial – значение элемента исходного массива с тем же индексом, sqrt – корень квадратный из этого значения. Если округление sqrt по обычным математическим правилам сходится с его округлением через floor, то floor = true, а ceil = false. Если сходится с округлением через ceil - наоборот. Например, пусть у исходного массива arr[0] = 19, тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.");
var arr = new Array(5);
var obj = {};
for (var i = 0; i < arr.length; i++) {
	arr[i] = Math.floor(Math.random() * (25 - 2));
	arr[i].toFixed(2);
}

function task1(array) {
	for (var i = 0; i < array.length; i++) {
		obj.initial = array[i];
		obj.sqrt = Math.sqrt(array[i]);

		obj.floor = Boolean();
		obj.ceil = Boolean();
		if (Math.round(this.sqrt) === Math.ceil(this.sqrt)) {
			obj.floor = false;
			obj.ceil = true;
		}
		else {
			obj.floor = false;
			obj.ceil = true;
		}
		console.log(obj);
	}
}
console.log(task1(arr));


console.log("Задание 2: Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, округлённое до сотых.");
for (var i = 0; i < arr.length; i++) {
	obj.sqrt100 = Math.sqrt(arr[i]).toFixed(2);
	console.log(obj);
}


console.log("Задание 3: Напишите функцию, которая определяет, является ли строка палиндромом.");
function task3() {
    var str = "powop";
    var str2 = str.split('').reverse().join('');
    if (str2 == str) return 'Строка является палиндромом!';
    else return 'Строка НЕ является палиндромом!';
}
console.log(task3());


console.log("Задание 4: Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. Если таких символов несколько, функция должна возвращать строку из этих символов.");
function task4(str) {
	var str2 = str.toLowerCase();
	var arrstr = str2.split("");
	console.log(arrstr);
	var count = 0;
	var result = {};
 
	for (var i = 0; i < arrstr.length; i++) {
		var temp = arrstr[i];
		if(result[temp] != undefined) ++result[temp];
		else result[temp] = 1;
	}
	console.log(result);
	var max = 0;
	var resultstring = "";
	console.log(result.length);
	for (var key in result) {
		if (result[key] > max) {
			max = result[key];
			resultstring = key;
		}
		if (result[key] == max && resultstring != key)
			resultstring += key;
	}
	return 'Чаще всего встречается(ются) символ(лы): ' + resultstring + "!";
}
console.log(task4("Uberr is here!"));


console.log("Задание 5: Напишите функцию, которая получает в аргументы три строки – str, search, replace. Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.");
function task5(str, search, replace) {
	console.log("Исходная строка: " + str);
	var str = str.toLowerCase();
	return "Измененая строка: " + str.replace(new RegExp(search,'g'), replace);
}
console.log(task5("Алые паруса.", "а", "щ"));


console.log("Задание 6: Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.");
function task6() {
	var str = "Белые ночи в феврале!";
	console.log("Исходная строка: " + str);
	var strarr = str.split(" ");
	var result = "";
	for (let i = 0; i < strarr.length; i++) {
    	let firstletter = strarr[i].substring(0, 1).toUpperCase();
    	let left = strarr[i].substring(1, strarr[i].length);
    	result += firstletter + left + " ";
  	}
	
	return "Измененная строка: " + result;
}
console.log(task6());


console.log("Задание 7: Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. Например, строка 'я учусь программированию' должна преобразоваться в 'я уч*сь прог*ам*и**в*н*ю'.");
function task7() {
	let str = "Наука - двигатель прогресса!";
	console.log("Исходная строка \n" + str);
	str = str.toLowerCase().split("");
	let obj = {};
	let result = "";
	let reg = '/s/g'
	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]] == undefined && obj[str[i]] != '/s/') obj[str[i]] = 1;
		else obj[str[i]]++;
	}
	for (let k = 0; k < str.length; k++) {
		if (obj[str[k]] > 1) {
			str[k] = "*";
		}
	}
	return str.join('');
}
console.log(task7());


var date = new Date();
var date2 = date.getDay();
console.log("Задание 8: Напишите функцию, которая возвращает текущий день недели на русском языке.");
function task8() {
	switch(date2) {
		case 1: return "Понедельник";
		case 2: return "Вторник";
		case 3: return "Среда";
		case 4: return "Четверг";
		case 5: return "Пятница";
		case 6: return "Суббота";
		case 0: return "Воскресенье";
	}
}
console.log(task8());


console.log("Задание 9: Напишите функцию, которая принимает у пользователя дату в формате 'ДД-ММ-ГГГГ' и, используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.");
function task9() {
	var	datefromuser = prompt("Введите дату в формате 'ДД-ММ-ГГГГ'");
	var newdate = new Date();
	var newdatefromuser = datefromuser.split("-");
	newdate.setDate(newdatefromuser[0]);
	newdate.setMonth(newdatefromuser[1]-1);
	newdate.setFullYear(newdatefromuser[2]);
	date = newdate;
	date2 = date.getDay();
	return task8();
}
console.log(task9());


console.log("Задание 10: Примите у пользователя день его рождения в формате 'ДД-ММ-ГГГГ'. Напишите функцию, которая выводит в консоль количество дней, оставшихся до его дня рождения. Напишите функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).");
function task10() {
	let birthdayuser = new Date();
	birthdayuser = prompt("Введите день Вашего рождения в формате 'ДД-ММ-ГГГГ'");
	let whendbuser = birthdayuser.split("-");
	let whendbuser2 = new Date();
	whendbuser2.setFullYear(2019);
	whendbuser2.setMonth(whendbuser[1]-1);
	whendbuser2.setDate(whendbuser[0]);
	let datetoday = Date.now();
	let remaining = whendbuser2 - datetoday;
	remaining /= 1000;
	remaining /= 60;
	remaining /= 60;
	remaining /= 24;
	return "До вашего дня рождения осталось " + remaining + " дней(дня)!";
}
console.log(task10());


console.log("Задание 11: Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. Если это так, функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку. Используя задачу 2 из практики, создайте массив целых чисел. Вызовите написанную функцию для каждого элемента, отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных результатах. Массив должен быть пройден до конца, несмотря на ошибки!");
function task11() {
	let a = 0;
	do {
		a = +prompt("Введите число!");
	} while (a != Number(a));
	if (Number.isInteger(a) && Math.sqrt(a) % 1 == 0) {
		return Math.sqrt(a);
	}
	else return "Число не является квадратом целого числа!";
}

var array = [];
function task2practice (len,min,max) {
	array = new Array(len);
	for (var i = 0; i < array.length; i++) {
		array[i] = Math.floor(Math.random() * (max - min));
	}
	return array;
}

function task11second() {
	try {
		task2practice(10,4,50);
	} catch(e) {
		console.log(e.message);
	} finally {
		for (let i = 0; i < array.length; i++) {
			if (Number.isInteger(array[i]) && Math.sqrt(array[i]) % 1 == 0) {
				console.log("Число " + array[i] + " является квадартом целого числа!");
			}
			else {
				console.log("Число " + array[i] + " не является квадратом целого числа!");
			}
		}
	}
}
console.log(task11second());