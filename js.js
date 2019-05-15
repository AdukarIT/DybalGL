console.log("Задание 1: Создайте массив и в цикле заполните его чётными числами от 2 до 20.");
var arr = new Array(10);
for (var i = 2; i < arr.length; i++) {
	arr[i] = (i + 1) * 2;
}
console.log(arr);

console.log("Задание 2: Преобразуйте массив из задачи 1 так, чтобы его элементы стали равны своему индексу, умноженному на 5.");
for (var i = 0; i < arr.length; i++) {
	arr[i] = i * 5;
}
console.log(arr);

console.log("Задание 3: Получите от пользователя три числа, создайте из них массив. Используя циклы, найдите наибольшее из чисел и разделите на него каждый элемент массива.");
var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var c = +prompt("Введите третье число");

var array2 = [a,b,c];
var max = 0;
for (var i = 0; i < array2.length; i++) {
	if (max < array2[i]) max = array2[i];
}
console.log("Обычный массив: " + array2);
for (var i = 0; i < array2.length; i++) {
	array2[i] = array2[i] / max;
}
console.log("Максимальное число: " + max);
console.log("Переделанный массив: " + array2);

console.log("Задание 4: Преобразуйте массив из задачи 2 так, чтобы его элементы расположились в обратном порядке.");
for ( ; array2 > 0 ;array2--)
	console.log(array2);