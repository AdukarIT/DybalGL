console.log("\nЗадание 1: Получить два числа (через prompt), вывести в консоль большее из них.");
var a = +prompt("Введите число a");
var b = +prompt("Введите число b");

if (a > b) {
	console.log("Большее число a " + a);
} else {
	console.log("Большее число b " + b);
}


console.log("\nЗадание 2: Получить два числа, вывести в консоль знак их произведения.");
var a = prompt("Введите число a");
var b = prompt("Введите число b");

if (a * b > 0)
	console.log("Знак у числа '+'");
else if (a == 0 || b == 0)
	console.log("Умножение на 0")
else console.log("Знак у числа '-'");


console.log("\nЗадание 3: Получить три числа, вывести их в консоль в порядке возрастания.");
var a = +prompt("Введите число a");
var b = +prompt("Введите число b");
var c = +prompt("Введите число c");

if (a > b && a > c) {
	console.log();
	if (b>c) {
		console.log("Первое число " + c + "\nВторое число " + b + "\nТретье число " + a);
	}
	else console.log("Первое число " + b + "\nВторое число " + c + "\nТретье число " + a);
}
else if (b > c && b > a) {
	if (a>c) {
		console.log("Первое число " + c + "\nВторое число " + a + "\nТретье число " + b);
	}
	else console.log("Первое число " + a + "\nВторое число " + c + "\nТретье число " + b);
}
else if (c > a && c > b) {
	if (a>b) {
		console.log("Первое число " + b + "\nВторое число " + a + "\nТретье число " + c);
	}
	else console.log("Первое число " + a + "\nВторое число " + b + "\nТретье число " + c);
}


console.log("\nЗадание 4: Переписать задачу 1, заменив if на тернарный оператор.");
var a = +prompt("Введите число a");
var b = +prompt("Введите число b");

(a > b) ? console.log("Число 'a': " + a + " - больше числа b: " + b) : console.log("Число 'b': " + b + " - больше числа 'a': " + a);


console.log("\nЗадание 5: Получить число. Используя switch, вывести в консоль сообщение: для чисел от 1 до 5 – разные, для остальных – одинаковое.");
var a = +prompt("Введите число");

switch (a) {
	case 1:
		console.log("Это число 1!");
	break;
	case 2:
		console.log("Это число 2!");
	break;
	case 3:
		console.log("Это число 3!");
	break;
	case 4:
		console.log("Это число 4!");
	break;
	case 5:
		console.log("Это число 5!");
	break;
	default:
		console.log("Введенно число не лежит в диапозоне 1-5!");
}


console.log("\nЗадание 7: Вывести в консоль все чётные числа от x до 0 (в порядке убывания).");
var x = +prompt("Введите x");

for (; x >= 0; x--) {
	if (x % 2 == 0) console.log("Число " + x + " четное.");
}

console.log("\nЗадание 8: Переписать задачу 1 или задачу 2, используя while вместо for (или наоборот, если использовали while).");

var x = +prompt("Введите x")

while (x >= 0) {
	if (x % 2 == 0) console.log("Число " + x + " четное.");
	x--;
}