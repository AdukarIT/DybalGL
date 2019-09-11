console.log('Задание 1: Дана форма, напишите проверку: на правильность заполнения двух текстовых полей: имя (id="name") и минут (id="minutes"). Используйте проверку на оставление поля пустым ("") и правильного формата. заполнения числового поля (isNaN).');

let getValidityButton = document.getElementById('checkValidity');
getValidityButton.addEventListener('click', checkValidity);

function checkValidity() {
	let getName = document.getElementById('name').value;
	let getMinutes = document.getElementById('minutes').value;
	console.log(isNaN(getMinutes));
	if (getName != "" && getName.match(/\D{2,}/g) && getMinutes != "" && !isNaN(getMinutes))
		alert("Данные введены корректно!!");
	else alert("Введите имя (от 2-х букв) и минуты корректно!");
}


console.log('Задание 2: Создать страницу с текстовым полем и двумя кнопками. При нажатии одной из них происходит передача данных содержимого текстового поля по электронной почте (action="mailto:address@domen.domen"), при нажатии другой – происходит очистка текстового поля.');
let getMessage = document.getElementsByName('msg')[0];
let getClearButton = document.getElementsByName('clear')[0];

getClearButton.onclick = function() {
	getMessage.value = "";
}


console.log('Задание 3: Напишите универсальную функцию для прохождения по полям формы с возможностью проверки введенных данных, для тектовых полей - на текст, для имейла - на имейл и тд.');
let getSubmitButton = document.getElementsByName('submit')[0];

document.getElementsByName('checkValidityForm')[0].addEventListener('submit', checkValidityOnIputs)

function checkValidityOnIputs(e) {
	let allInputs = checkValidityForm.getElementsByTagName('input');
	for (let i = 0; i < allInputs.length; i++) {
		if(allInputs[i].type == "password"){
			let reg = /\w{1}/g;
			if(reg.test(allInputs[i].value) == false){
		        alert('Пароль должен содержать хотя бы одну букву!');
		        allInputs[i].focus();
			}
			else alert("Форма отправлена!");
		}
	}
	event.preventDefault();
}


console.log('Задание 4: Поверьте написанную ранее функция на обработку форы регистрации, если поле не проходит валидацию - подсветите его, если все поля валидные - выведите приветственное сообщение.');
//сделалано с помощью required


console.log('Задание 5: Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные вырожения.');
var str = "функция";
var createdP = document.createElement('p');
createdP.innerHTML = "функция";
createdP.id = "wordFunction";
document.body.appendChild(createdP);
document.getElementById('wordFunction').addEventListener('click', function() {
	createdP.innerHTML = str.replace(/функция/g, "eeqwфункция");
});


console.log("Задание 6: С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.'");
var createdTime = document.createElement('p');
createdTime.innerHTML = "9.59 am";
createdTime.id = "whatTime";
document.body.appendChild(createdTime);
let time = createdTime.innerHTML;
if(/^(([0,1][0-9])|(2[0-3]))[.][0-5][0-9]\s[am]|[pm]$/.test(createdTime.innerHTML))
	console.log("Время корректное!");
else {
	console.log("Время НЕ корекктное!");
}


console.log("Задание 7: Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.");
let str2 = "dsf xxx xxx sd";
console.log(str2.replace(/((?:(?:\s|^)[a-zа-яё]+(?=\s))+?)\s?\1(?=\s|$)/gi,"$1"));