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
var newarr = [];
var temp;
for (var i = arr.length; i > 0; i--) {
	temp = arr.length - i;
	newarr[i] = arr[temp];
}
console.log(newarr);

console.log("Задание 5: Создайте массив из чисел от 1 до 35. Вырежьте из него первые 10 элементов, а затем добавьте их в конец массива. Разверните в обратном порядке элементы с 11 по 20. Удалите элементы с 21 по 25, на их место вставьте пять первых степеней двойки. Элементы с 26 по 30 замените на единицы. Элементы с 31 по 35 склейте в одну строку, разделяя пробелами, и замените на итоговую строку.");
var array35 = new Array(35);
var secondarray35 = new Array();
var thirdarray35 = new Array();
var sixtharray35 = new Array();

for (var i = 0; i < array35.length; i++) array35[i] = i + 1;
console.log(array35);

secondarray35 = array35.splice(0,10);
console.log(secondarray35);

thirdarray35 = array35.concat(secondarray35);
console.log(thirdarray35);

var fourtharray35 = new Array();
fourtharray35 = thirdarray35.splice(0,10).reverse();
console.log(fourtharray35);
var fiftharray35 = fourtharray35.concat(thirdarray35);
console.log(fiftharray35);

var a = fiftharray35.indexOf(21);
fiftharray35.splice(a,5);
console.log(fiftharray35);

for (var i = 0; i < 5; i++) {
	sixtharray35[i] = Math.pow(2,i);
	var b = fiftharray35.indexOf(11);
	fiftharray35.splice(b,0, sixtharray35[i]);
}
console.log(sixtharray35);
console.log(fiftharray35);

var c = fiftharray35.indexOf(26);
fiftharray35.fill(1,c,c + 5);
console.log(fiftharray35);

var d = fiftharray35.indexOf(31);
var eightarray35 = fiftharray35.splice(d,5);
console.log(fiftharray35);

var array3135 = eightarray35.join(" ");
console.log(array3135);

var ninetharray35 = fiftharray35.concat(array3135);
console.log(ninetharray35);

console.log("Задание 6: Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.");
function deleterepeat (array) {
	array.sort();
	for (var i = array.length - 1; i > 0; i--) {
	    if (array[i] == array[i - 1]) array.splice(i, 1);
	}
	return array;
}
var array = [1,2,3,5,2,2,3,7];
console.log(deleterepeat(array));

console.log("Задание 7: Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.");
function deleteboolean (array2) {
	array2.sort();
	for (var i = 0; i < array2.length; i++) {
	    if (Boolean(array2[i]) == false) array2.splice(i, 1);
	}
	return array2;
}
var array2 = [1,2,3,5,2,2,3,7, NaN, "sda", 0];
console.log(deleteboolean(array2));