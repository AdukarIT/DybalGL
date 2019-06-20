console.log("Задание 1: Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, есть ли в этом объекте свойство с именем, равным этой строке.");

var object = {
	name: "David",
	surname: "Port",
	birth: "12.04.1995"
}

var name = "birth";
function task1(obj, str) {
	if (str in obj) console.log("Свойство " + str + " в объекте есть!");
	else console.log("Свойство " + str + " в объекте нет!");
}
console.log(task1(object,name));


console.log("Задание 2: Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта), а также количество порций (больше 1). Напишите функцию, которая получает рецепт, подсчитывает, сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.");
var recipe = {
	название: "Драники",
	порций: 4,
	ингридиенты: {
		картофель_штук: 5,
		лук_штук: 0.5,
		яйцо_куриное_штук: 1,
		пшеничная_мука_ложек_столовых: 2,
		перец_черный_молотый: "по вкусу",
		соль: "по вкусу",
		растительное_масло: "по вкусу"
	}
}
function howmuchon1portion (obj) {
	for (let x in obj) {
		for (let y in x) console.log(x +" dsd " + obj[x])
	}
}
console.log(howmuchon1portion(recipe));


console.log("Задание 3: Создайте объект 'Цилиндр'' (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).");
var cil = {};
cil.radius = 30;
cil.height = 100;
cil.volume = function () {
	console.log(this.radius * this.height);
}
console.log(cil.volume());


console.log("Задание 4: Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина, и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.");
var penguin = {
	name: "Sparky the Wonder Penguin",
	creator: "Tom Tomorrow",
	origin: "This Modern World",
	canfly: true,
	sayHello: function() {
		console.log("Привет, это пингвин Sparky the Wonder Penguin, создателем которого является Tom Tomorrow!");
	},
	fly: function() {
		if (this.canfly == true) console.log("Данный пингвин может летать!");
		else console.log("Данный пингвин не может летать!");
	}
}
console.log(penguin.sayHello(), penguin.fly());