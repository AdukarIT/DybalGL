console.log("Задание 1: Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите в консоль элемент с ключом 'c' двумя способами: через квадратные скобки и через точку. Затем выведите все свойства объекта через цикл for..in.");
let obj = {
	a:1,
	b:2,
	c:3
}
console.log("Вывод через точку: " + obj.c + "\nВывод через квадратные скобки: " + obj['c']);
for (let x in obj)
	console.log(x + ":" + obj[x]);


console.log("Задание 2: Создайте объект city, добавьте ему свойства name (название города, строка) и population (население, число).");
let city = new Object();
city.name = "Минск";
city.population = 2100000;
for (var x in city) console.log("Obj city: " + x + " - значение " + city[x]);


console.log("Задание 3: Создайте массив из шести объектов такого же вида, как city из задачи 2 – по одному для каждого областного города Беларуси.");
var array = [];
array[0] = {
	name: "Минск",
	population: 2100000
}
array[1] = {
	name: "Брест",
	population: 500000
}
array[2] = {
	name: "Витебск",
	population: 475000
}
array[3] = {
	name: "Могилев",
	population: 322000
}
array[4] = {
	name: "Гродно",
	population: 293000
}
array[5] = {
	name: "Гомель",
	population: 1200000
}


console.log("Задание 4: Напишите функцию, которая принимает массив из задачи 3 в качестве параметра и выводит в консоль информацию о каждом городе.");
function task4(Arr) {
	array.forEach(function(element) {
		console.log(element);
	});
}
console.log(task4(array));


console.log("Задание 5: Создайте в объектах с городами из задачи 3 метод getInfo, который возвращает строку с информацией о городе (например, в таком формате: 'Город Добруш, население – 18760 человек').");
array[0] = {
	name: "Минск",
	population: 2100000,
	getInfo: function() {
		return "Город " + this.name + ", население - " + this.population + " человек.";
	}
}
array[1] = {
	name: "Брест",
	population: 500000,
	getInfo: function() {
		return "Город " + this.name + ", население - " + this.population + " человек.";
	}
}
array[2] = {
	name: "Витебск",
	population: 475000,
	getInfo: function() {
		return "Город " + this.name + ", население - " + this.population + " человек.";
	}
}
array[3] = {
	name: "Могилев",
	population: 322000,
	getInfo: function() {
		return "Город " + this.name + ", население - " + this.population + " человек.";
	}
}
array[4] = {
	name: "Гродно",
	population: 293000,
	getInfo: function() {
		return "Город " + this.name + ", население - " + this.population + " человек.";
	}
}
array[5] = {
	name: "Гомель",
	population: 1200000,
	getInfo: function() {
		return "Город " + this.name + ", население - " + this.population + " человек.";
	}
}

console.log(array.forEach(function(element) {
	console.log(element.getInfo());
})
)