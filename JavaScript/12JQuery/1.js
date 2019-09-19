$(function() {


console.log("Задание 1: Взяв за основу галерею из примера, сделать галерею с кнопками прокрутки вперёд и назад. Ссылки на изображения должны храниться не в массиве, а в <img> внутри .gallery. ");
let images = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  'photo4.jpg'
];
let currentImage = 0;

$('#prev').click(function(){
    currentImage = (currentImage - 1) % images.length;
    $('.gallery').css('background-image', 'url('+images[currentImage]+')');
});

$('#next').click(function(){
    currentImage = (currentImage + 1) % images.length;
    $('.gallery').css('background-image', 'url('+images[currentImage]+')');
});




console.log("Задание 2: Форма обратной связи содержит поля: имя, емейл, телефон, сообщение. Все поля обязательны для заполнения. Сообщение должно быть от 10 до 1000 знаков. После заполнения каждого из полей рядом с ним должна загораться галочка. При отправке формы выведите сообщение, если какие-то поля не заполнены, а также отмените отправку.")
$(".task2 input").focusout(function() {
	if(this.value != "") {
		let getNext = this.nextSibling.nextSibling;
		$(getNext).addClass("tick");
	}
})
});
