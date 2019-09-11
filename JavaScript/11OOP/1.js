console.log('Задание 1: Реализуйте класс Student (Студент), который будет наследовать от класса User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.');
function User(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getFullName = function getFullName() {
      	return this.name + ' ' + this.surname;
    }
}

function Student(name, surname, entered, presentYear){
	User.call(this, name, surname);
  	this.entered = entered;
  	this.presentYear = presentYear;
  
  	this.getCourse = function(){
    	return this.getFullName() + ' ' + '- ' + (presentYear - entered) + ' курс';
  	}
}
let newStudent = new  Student('Глеб', 'Дыбаль', 2020, 2022);
console.log(newStudent.getCourse());


console.log('Задание 2: Напишите программу, расчиытвающую стоимость и калорийность гамбургеров (чисбургер, бигмак и тд), используя ООП подход.');
function Hamburger(bread, ketchup, beef, onion, salad, sauce, cucumber, name){
    let calories = {
	    calBread: bread * 10,
	    calKetchup: ketchup * 12,
	    calBeef: beef * 150,
	    calOnion: onion * 2,
	    calSalad: salad * 5,
	    calSauce: sauce * 25,
	    calCucumber: cucumber * 5
  	}
  	this.name = name;
  	this.amountCalories = function() {
    	let amountCal = 0;
    	for (let key in calories) {
    		amountCal += calories[key];
    	}
    	return 'калорий - ' + amountCal + '!';
  	}

  	let cost = {
	  	costBread: bread * 0.2,
	  	costKetchup: ketchup * 0.2,
	  	costBeef: beef * 1.2,
	  	costOnion: onion * 0.2,
	  	costSalad: salad * 0.2,
	  	costSauce: sauce * 0.2,
	  	costCucumber: cucumber * 0.25
  	}

  	this.showInfo = function(){
	    let amountSum = 0;
	    for(let key in cost){
	    	amountSum += cost[key];
	    }
	    return this.name +  ': стоимость - ' + amountSum.toFixed(2) + ' руб, ' +  this.amountCalories();
  	}
}
let hamb = new Hamburger(1,1,1,2,2,1,2, 'Гамбургер');
console.log(hamb.showInfo());


console.log('Задание 3: Реализуйте на ООП программу-напоминалку. Как она должна работать: вы записываете в специальное поле какие-то события, о которых вам нужно напомнить и в нужное время вкладка браузера с этой программой должна напомнить об этом событии звуком (погуглите работу с аудио на js).');
let getDoneButton = document.getElementsByName('done')[0];

getDoneButton.addEventListener('click', function() {
	let getTime = document.getElementsByName('seconds')[0].value;
	setTimeout(makeNote, getTime * 1000);
});

function makeNote() {
	let reminder = new Audio('note.mp3');
	reminder.play();
	let getNote = document.getElementsByName('text')[0].value;
	document.title = getNote;
	let reminderArea = document.createElement('div');
	reminderArea.style.position = 'absolute';
	reminderArea.style.width = '500px';
	reminderArea.style.height = '150px';
	reminderArea.style.right = '500px';
	reminderArea.style.top = '100px';
	reminderArea.style.backgroundColor = 'coral';
	reminderArea.style.fontSize = '50px';
	reminderArea.innerHTML = 'Напоминание!!!\n' + getNote;
	document.body.appendChild(reminderArea);
}
