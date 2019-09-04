console.log('Задание 1: Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.');
var getCloneInput = document.getElementById('cloneInput');
var getCloneButton = document.getElementById('cloneInputButton');
getCloneButton.onclick = function() {
	let clonedInput = document.createElement('input');
	clonedInput = clonedInput.cloneNode(false);
	getCloneButton.parentNode.insertBefore(clonedInput, getCloneButton);
	this.disabled = true;
}

console.log('Задание 2: Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.');
var getMultiCLassesTable = document.getElementById('tableWithManyClasses');
getMultiCLassesTable.onclick = function() {
	getMultiCLassesTable.className = 'bordered';

	getMultiCLassesTable.onclick = function() {
		getMultiCLassesTable.className = 'striped';

		getMultiCLassesTable.onclick = function() {
			getMultiCLassesTable.className = 'highlight';
		}
	}
}


console.log('Задание 3: Модифицируйте задачу 2. Добавьте три radiobutton. При выборе первого включается класс bordered, при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.');
var radiobutton1 = document.createElement('input');
	radiobutton1.setAttribute('type', 'radio');
	radiobutton1.id = 'radiobutton1';
var labelradiobutton1 = document.createElement('label');
	labelradiobutton1.setAttribute('for', 'radiobutton1');
	labelradiobutton1.innerHTML = 'bordered';
document.body.appendChild(radiobutton1);
	radiobutton1.parentNode.insertBefore(labelradiobutton1, radiobutton1.nextSibling);
radiobutton1.onclick = function() {
	getMultiCLassesTable.className = 'bordered';
}

var radiobutton2 = document.createElement('input');
	radiobutton2.setAttribute('type', 'radio');
	radiobutton2.id = 'radiobutton2';
var labelradiobutton2 = document.createElement('label');
	labelradiobutton2.setAttribute('for', 'radiobutton2');
	labelradiobutton2.innerHTML = 'striped';
document.body.appendChild(radiobutton2);
	radiobutton2.parentNode.insertBefore(labelradiobutton2, radiobutton2.nextSibling);
radiobutton2.onclick = function() {
	getMultiCLassesTable.className = 'striped';
}

var radiobutton3 = document.createElement('input');
	radiobutton3.setAttribute('type', 'radio');
	radiobutton3.id = 'radiobutton3';
var labelradiobutton3 = document.createElement('label');
	labelradiobutton3.setAttribute('for', 'radiobutton3');
	labelradiobutton3.innerHTML = 'highlight';
document.body.appendChild(radiobutton3);
	radiobutton3.parentNode.insertBefore(labelradiobutton3, radiobutton3.nextSibling);
radiobutton3.onclick = function() {
	getMultiCLassesTable.className = 'highlight';
}


console.log('Задание 4: Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.');
var buttonForTheValueOfTags = document.createElement('button');
buttonForTheValueOfTags.style.display = 'block';
buttonForTheValueOfTags.innerHTML = 'ТЕКСТ В КНОПКЕ';
document.body.appendChild(buttonForTheValueOfTags);
buttonForTheValueOfTags.addEventListener('click', enableEvents);

function enableEvents() {
	alert(this.innerHTML);
}
var closeButtonForTheValueOfTags = document.createElement('button');
closeButtonForTheValueOfTags.style.display = 'block';
closeButtonForTheValueOfTags.innerHTML = 'Отключить события!';
document.body.appendChild(closeButtonForTheValueOfTags);
closeButtonForTheValueOfTags.addEventListener('click', function() {
	buttonForTheValueOfTags.disabled = 'false';
});


console.log('Задание 5: Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.');
var divTask5 = document.createElement('div');
divTask5.innerHTML = 'DIV';
divTask5.style.diplay = 'block';
divTask5.style.margin = '50px';
document.body.appendChild(divTask5);

var pTask5 = document.createElement('p');
pTask5.innerHTML = 'p';
divTask5.appendChild(pTask5);

var buttonTask5 = document.createElement('button');
buttonTask5.innerHTML = 'BUTTON';
divTask5.appendChild(buttonTask5);

var aTask5 = document.createElement('a');
aTask5.innerHTML = "a";
divTask5.appendChild(aTask5);

divTask5.addEventListener('click', function(event) {
	alert('Клик произошёл по элементу ' + event.target.tagName);
});


console.log('Задание 6: Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку, изображение будет заменяться другим изображением. При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.');

var img1 = document.createElement('img');
img1.src = '1.jpg';
img1.style.width = '500px';
img1.style.height = '240px';
document.body.appendChild(img1);

img1.onmousemove = function() {
	img1.src = '2.jpg';
}

img1.onmouseout = function() {
	img1.src = '1.jpg';
}


console.log('Задание 7: Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.');
var fancyBox = document.createElement('img');
fancyBox.src = '3.jpg';
fancyBox.style.width = '250px';
fancyBox.style.height = '110px';
document.body.appendChild(fancyBox);
fancyBox.onclick = function() {
	fancyBox.style.position = 'absolute';
	fancyBox.style.width = '500px';
	fancyBox.style.height = '220px';
	fancyBox.style.right = '0px';
	fancyBox.style.top = '200px';
}