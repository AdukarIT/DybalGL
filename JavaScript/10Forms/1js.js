console.log('Задние из презентации 1: Создайте селект с несколькими опциями, добавьте одну опцию используя Javascript, сделайте так, чтобы по выбору опции выводилось сообщение с данными этой опции');
let getSelect = document.getElementById('mood');
let newOption = new Option("Bad", "bad");
getSelect.append(newOption);

getSelect.onchange = function() {
	alert(getSelect.options[getSelect.selectedIndex].value);
}


console.log('Задание из презентации 2: Создайте форму вычисления процентов по вкладу.');
var getResultButton = document.getElementById('show');
getResultButton.onclick = function() {
	var getSumValue = document.getElementById('summa').value;
	var getSumBefore = document.getElementById('sumBefore');
	var getSumAfter = document.getElementById('sumAfter');
	getSumBefore.innerHTML = "Было: " + getSumValue;
	let sum = parseInt(getSumValue * 0.12) + parseInt(getSumValue);
	getSumAfter.innerHTML = "Станет: " + sum;
}


console.log('Задание из презентации 3: Создайте регулярное выражение для поиска трёх точек.');
let reg = new RegExp('[.{3}]', 'g');
let str = 'Wow.Look.Here..!';
console.log(str + "\n" + str.match(reg));


console.log('Задание из презентации 4: Создайте regexp, который ищет все положительные числа, в том числе десятичные.');
let reg2 = /\D+/g;
let str2 = "Abc 22 c 30 dddd -400 0.22";
let arr = str2.split(' ');
arr.filter(function(el) {
	if(el > 0) console.log(el);
});



console.log('Задание из презентации 5: Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd');
let clrs = "#ecd, #2313, #aaccdd";
console.log(clrs.match(/#[a-f]{3,6}/gi));


console.log('Задание из презентации 6: Предложите строку, которая подойдет под выражение ^$');
let str3 = "salsa dance";
console.log(str3.match(/[^a $e]/g));


console.log('Задание из презентации 7: Создайте HTML-форму регистрации с email и паролем. По клику провести валидацию пароля и email, где пароль должен содержать хотя бы одну цифру, один спецсимвол и одну букву, а так же быть длиннее 6 знаков. При прохождении валидации выводить приветственное сообщение, в противном случае - ошибку.');
let submitButton = document.getElementById('ok');
submitButton.onclick = function(e) {
	let pass = document.getElementById('pass').value;
	try {
    	if(pass.match(/^(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[@#$%]).*$/))
    		alert('Вы молодец! Вы ввели очень сложный пароль!');
    	else alert("Пароль недостаточно силён!");
  	} catch (e) {
    	throw new SyntaxError("В данных ошибка, попробуйте еще раз!" );
    }
};