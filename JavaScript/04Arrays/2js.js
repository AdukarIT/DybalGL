console.log("Задание 1: Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len), которая возвращает массив случайных чисел длиной len.");
var array = [];
var array2 = [];
var array3 = new Array(7);
function getRandomArray(len) {
	for (var i = 0; i < len; i++) {
		var round = Math.random() * 0.99;
		array[i] = round.toFixed(2)/1;
	}
	return array;
}
console.log(getRandomArray(7));


console.log("Задание 2: Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.");
function MoreThanAverage() {
	var total = 0, average = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
		average = total/array.length;
	}
	console.log("Количество элементов: " + array.length + "\nСуммарная сумма всех элементов: " + total + "\nСреднее арифметическое: " + average.toFixed(3));
	for (var i = 0; i < array.length; i++) {
		if(array[i] > average) console.log(array[i]);
	}
}
console.log(MoreThanAverage());


console.log("Задание 3: Найдите два наименьших элемента массива.");
function MinOfArray() {
	var minone = array[0];
	var mintwo = array[0];
	for (var i = 0; i < array.length; i++) {
		if(array[i] < minone) {
			minone = array[i];
		}
	}
	for (var i = 0; i < array.length; i++) {
		if(array[i] > minone && array[i] < mintwo)
			mintwo = array[i];
	}
	return "1: " + minone + " 2: " + mintwo;
}
console.log(MinOfArray());


console.log("Задание 4: Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд, а на освободившиеся места вставьте нули.");
function Task4() {
	for (var i = 0; i < array.length; i++) {
		if (array[i] < 0.3) array.splice(i,1,0);
	}
	return array;
}
console.log(Task4());


console.log("Задание 5: Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2, второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.");
function Task5() {
	for (var i = 0; i < array.length; i++) {
		var round = Math.random() * 0.99;
		array2[i] = round.toFixed(2)/1;
	}
	var sum = 0;
	console.log("Массив 1: " + array + "\nМассив 2: " + array2);
	for (var i = 0; i < array.length; i++) {
		for (var j = array2.length - 1; j >= 0; j--) {
			sum = array[i] + array2[j];
			sum.toFixed(2)/1;
			for (var k = 0; k < array3.length; k++)
				array3[k] = sum;
		}
	}
	return array3;
}
console.log(Task5());


console.log("Задание 6: Отсортируйте массив методом пузырька. О самом алгоритме можно почитать на википедии.");
function task6 () {
    for (var i = 0; i < array.length-1; i++) {
     	for (var j = 0; j < array.length-1-i; j++) {
        	if (array[j+1] < array[j]) {
        		var temp = array[j + 1];
        		array[j + 1] = array[j];
        		array[j] = temp;
        	}
    	}
    }
    return array;
}
console.log(task6());