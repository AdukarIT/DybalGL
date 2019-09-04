console.log("Задание 1: Дан элемент #elem. Добавьте ему класс 'www'.");
var idEl = document.getElementById('elem');
idEl.className = "www";
console.log("Класс у елемента 'elem': " + idEl.className);


console.log("Задание 2: Дан элемент #elem. Проверьте наличие у него класса 'www', если есть - удалите класс");
if(idEl.className == "www") {
	idEl.classList.remove("www");
	console.log(idEl);
}
else console.log("Такого класса нет!");


console.log("Задание 3: Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body");
function recursiveSearchTags(document, tegName) {
	let arrayOfTegs = [];
	for (let i = 0; i < tegName.length; i++) {
		arrayOfTegs[i] = tegName[i];
	}
	return arrayOfTegs;
}
console.log(recursiveSearchTags(document, document.body.getElementsByTagName('div')));


console.log("Задание 4: Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.");
var getUl = document.getElementById('arrayOfUl');
var newArr = [1,2,5,1231];
for (let i = 0; i < newArr.length; i++) {
	let li = document.createElement('li');
	li.innerHTML = newArr[i];
	getUl.appendChild(li);
	if (i % 2 != 0) li.style.backgroundColor = 'red';
}


console.log("Задание 5: Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'");
let divText = document.createElement('div');
divText.innerHTML = "!";
idEl.parentNode.appendChild(divText);


console.log("Задание 6: Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф");
let div = document.getElementsByTagName('div');
function wrapInParagraph() {
	for (let i = 0; i < div.length; i++) {
		if (div[i].innerText != "") {
			div[i].innerHTML = '<p>' + div[i].innerHTML + '</p>';
		}
	}
}
console.log(wrapInParagraph());