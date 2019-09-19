console.log('Задание 1: Есть базы: альбомов https://jsonplaceholder.typicode.com/albums фотографий https://jsonplaceholder.typicode.com/photos На одной странице реализуйте возможность просмотреть любой из 100 альбомов. Фотографии альбома должны загружаться только после выбора соответствующего альбома. ');
$(function() {
	$.get( "https://jsonplaceholder.typicode.com/albums", function(data) {
	  	$.each(data, function(key) {
	    	$('#albums').append('<option value="' + data[key].id + '">' + data[key].title + '</option>');
	  	});

	  	$("#showAlbum").click(function(e){
	    	$('#albumData').empty();
	    	$.get( "https://jsonplaceholder.typicode.com/photos", function(data){
	       		$.each(data, function(key) {
	        		if(data[key].albumId == $('#albums option:selected').val())
	          			$('#albumData').append('<img src="' + data[key].url + '">');
	      		});
	    	});
	  	});
	});
});