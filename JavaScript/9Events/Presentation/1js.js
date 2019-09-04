console.log("Задание 1: Сделайте так, чтобы по нажатию на кнопку выводился alert");
var btnAlert = document.getElementsByName('alertbtn')[0];
btnAlert.onclick = function() {
	alert('ALERT!!');
}


console.log("Задание 2: Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст изменялся на button");
var freeBtn = document.getElementsByName('freebtn')[0];
freeBtn.addEventListener('click', function() {
	freeBtn.value = 'button';
});


console.log("Задание 3: Создайте форму с полем для ввода и двумя кнопками, сделайте так, чтобы по нажатию на кнопку disable, поле становилось неактивным, в случае с enable - наоборот");
var disableBtn = document.getElementsByName('disablebtn')[0];
var enableBtn = document.getElementsByName('enablebtn')[0];
var textArea = document.getElementsByName('txt')[0];
disableBtn.onclick = function() {
	textArea.setAttribute('disabled', 'disabled');
}
enableBtn.onclick = function() {
	textArea.disabled = false;
}


console.log("Задание 4: Нужно создать документ с полем ввода, объектом произвольной формы и цвета. Сделайте так, чтобы в поле ввода можно было вводить только числовые значения, а объект можно было двигать и узнавать его координаты на странице");
var digitInput = document.getElementsByName('digitInput')[0];
digitInput.onkeyup = function() {
	digitInput.value = digitInput.value.replace(/[^\d,]/g, '');
}
var freeObject = document.getElementsByClassName('freeObj')[0];
freeObject.onmousedown = function(e) {
	freeObject.style.position = 'absolute';
	
	document.onmousemove = function(e) {
		freeObject.style.left = e.pageX - freeObject.offsetWidth/2 + 'px';
		freeObject.style.top = e.pageY - freeObject.offsetHeight + 'px';
	}

	document.onmouseup = function() {
		document.onmousemove = null;
		freeObject.onmouseup = null;
	}
}


console.log("Задание 5: Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.");
var getBlockCoords = document.getElementsByClassName("mouseBlockCoords")[0];
let coordsBlock = document.createElement('div');

getBlockCoords.addEventListener('mousemove', function(e) {
	coordsBlock.innerHTML = "";
	coordsBlock.innerHTML = "Coords: X - " + e.pageX + "; Y - " + e.pageY;
	getBlockCoords.parentNode.insertBefore(coordsBlock, getBlockCoords.nextSibling);
});


console.log("Задание 6: Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки. Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки");
var getFolder = document.getElementsByClassName('folder')[0];
function setFolder(urlPath) {
	getFolder.style.backgroundImage = "url(" + urlPath + ")";
	getFolder.style.margin = '50px 0px';
	getFolder.style.backgroundSize = '170px 100px';
	getFolder.style.width = '170px';
	getFolder.style.height = '100px';
}
setFolder('closeFolder.jpg');

getFolder.addEventListener('dblclick', function() {
	setFolder('openFolder.png');
})


console.log("Задание 7: Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона. Добавление элементов выполните с помощью цикла. Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border-radius до круга. Для замедления эффекта скругления в CSS можно добавить transition.");

var containerForDiv = document.createElement('div');
containerForDiv.style.display = 'flex';
containerForDiv.style.flexWrap = 'wrap';

for (let i = 0; i <= 296; i++) {
	var createALOTDivs = document.createElement('div');
	createALOTDivs.style.width = '30px';
	createALOTDivs.style.height = '30px';
	createALOTDivs.style.margin = '5px';
	createALOTDivs.style.backgroundColor = 'red';
	containerForDiv.appendChild(createALOTDivs);
}
getFolder.parentNode.insertBefore(containerForDiv, getFolder.nextSibling);

containerForDiv.onmouseover = function() {
	let divs = containerForDiv.getElementsByTagName('div');
	for (let i = 0; i < divs.length; i++) {
		divs[i].style.borderRadius = '20px';
		divs[i].style.transitionDuration = '2s';
	}

	this.onmouseout = function() {
		for (let i = 0; i < divs.length; i++) {
			divs[i].style.borderRadius = '0px';
			divs[i].style.transitionDuration = '2s';
		}
	}
}