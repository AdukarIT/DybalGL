addEventListener('DOMContentLoaded', function() {



var getSearch = document.getElementById('searchInput');

var getSubmitButton = document.getElementById('submit');

var getContainer = document.getElementsByClassName('gamesContainer')[0];

var getNextPage = document.getElementsByClassName('stepForward')[0];
var getPreviousPage = document.getElementsByClassName('stepBack')[0];

getSubmitButton.addEventListener('click', loadDataFromAPI);

getSearch.addEventListener('keydown', function(e) {
	if (e.key == 'Enter') loadDataFromAPI();
})

var resultObj, resultGames;
function loadDataFromAPI() {
	var xhr = new XMLHttpRequest();
	var mainurl = 'https://api.rawg.io/api/games';
	var addurl = '?page_size=6&search=';
	xhr.open('GET', mainurl + addurl + getSearch.value, false);
	xhr.send();

	resultObj = JSON.parse(xhr.response);
	resultGames = resultObj.results;
	

	getNextPage.style.display = 'block';
	getPreviousPage.style.display = 'block';

	getNextPage.addEventListener('click', nextPage);
	getPreviousPage.addEventListener('click', previousPage);

	
	
	dataOutputTothePage();
}

function dataOutputTothePage() {
	getContainer.innerHTML = "";
	for (var i = 0; i < resultGames.length; i++) {
        var gameDataArea = document.createElement("div");
        for (let i = 0; i < 6; i++)
        	gameDataArea.id = resultGames[i].slug;
        gameDataArea.className = "gameData";

        gameDataArea.addEventListener('click', fullInfoAboutTheGameWindow);

        var nameOfTheGame = document.createElement("div");
        nameOfTheGame.className = "nameOfTheGame";
        nameOfTheGame.innerHTML = resultGames[i].name;
        gameDataArea.appendChild(nameOfTheGame);
        getContainer.appendChild(gameDataArea);


		var blockImg = document.createElement("div");
		gameDataArea.appendChild(blockImg);
        var img = new Image();
        img.className = "gameImage";
        img.src = resultGames[i].background_image;
        loadImage(blockImg, img);      

		var gameShortInfo = document.createElement('div');
		gameShortInfo.className = "gameShortInfo";
		var gameGenre = document.createElement('div');
		if (resultGames[i].genres.length != 0)
			gameGenre.innerHTML = "Основной жанр: " + resultGames[i].genres[0].name;
		else gameGenre.innerHTML = "Основной жанр: нет информации.";
		gameShortInfo.appendChild(gameGenre);

		var gameRelease = document.createElement('div');
		if (resultGames[i].released != null)
			gameRelease.innerHTML = "Дата релиза: " + resultGames[i].released;
		else gameRelease.innerHTML = "Дата релиза: нет информации.";
		gameShortInfo.appendChild(gameRelease);

		var gamePlatform = document.createElement('div');
		if (resultGames[i].platforms.length != 0)
			gamePlatform.innerHTML = "Основная платформа: " + resultGames[i].platforms[0].platform.name;
		else gamePlatform.innerHTML = "Основная платформа: нет информации.";
		gameShortInfo.appendChild(gamePlatform);
    	gameDataArea.appendChild(gameShortInfo);

	}
}

function loadImage(gameDataArea, img) {
    img.addEventListener('load', function() {
        gameDataArea.appendChild(img);
    });
    img.addEventListener('error', function() {
    	if(img.src != null)
    	img.src = 'no_photo.png';
        gameDataArea.appendChild(img);
    });
}

var getfullInfoAboutTheGameWindow = document.getElementsByClassName('fullInfoAboutTheGame')[0];
function fullInfoAboutTheGameWindow() {

	getfullInfoAboutTheGameWindow.style.display = 'block';

	var xhr = new XMLHttpRequest();
	var mainurl = 'https://api.rawg.io/api/games/';
	var addurl = this.id;
	xhr.open('GET', mainurl + addurl, false);
	xhr.send();
	resultObj = JSON.parse(xhr.response);

	var fullNameOfTheGame = document.getElementsByClassName('fullNameOfTheGame')[0];
	fullNameOfTheGame.innerHTML = resultObj.name;

	var gameFullImage = document.getElementsByClassName('gameFullImage')[0];
	gameFullImage.innerHTML = '';
	let img = new Image();
	img.src = resultObj.background_image;
	loadImage(gameFullImage, img);

	let allGenres = document.getElementsByClassName('allGenres')[0];
	let allPlatforms = document.getElementsByClassName('allPlatforms')[0];
	let releasedDate = document.getElementsByClassName('releasedDate')[0];
	let stores = document.getElementsByClassName('stores')[0];
	let developers = document.getElementsByClassName('developers')[0];
	let website = document.getElementsByClassName('website')[0];
	let arrayOfGenres = new Array(resultObj.genres.length);
	let arrayOfPlatforms = new Array(resultObj.platforms.length);
	let arrayOfStores = new Array(resultObj.stores.length);
	let arrayOfDevelopers = new Array(resultObj.developers.length);

	for (let i = 0; i < resultObj.genres.length; i++) {
		arrayOfGenres[i] = resultObj.genres[i].name;
	}
	for (let i = 0; i < resultObj.platforms.length; i++) {
		arrayOfPlatforms[i] = resultObj.platforms[i].platform.name;
	}
	for (let i = 0; i < resultObj.stores.length; i++) {
		arrayOfStores[i] = resultObj.stores[i].store.name;
	}
	for (let i = 0; i < resultObj.developers.length; i++) {
		arrayOfDevelopers[i] = resultObj.developers[i].name;
	}

	allGenres.innerHTML = 'Жанры: ' + arrayOfGenres;
	allPlatforms.innerHTML = "Платформы: " + arrayOfPlatforms;
	releasedDate.innerHTML = "Дата выхода: " + resultObj.released;
	stores.innerHTML = "Магазины: " + arrayOfStores;
	developers.innerHTML = "Разработчики: " + arrayOfDevelopers;
	if (resultObj.website.length != 0)
		website.innerHTML = "Сайт: <a>" + resultObj.website + "</a>";
	else website.innerHTML = "Сайта нет";

	let closeButton = document.getElementById('closeFullInfoWindow');
	closeButton.addEventListener('click', closeFullInfoGameWindow);
}

function closeFullInfoGameWindow() {
	getfullInfoAboutTheGameWindow.style.display = 'none';
}

function nextPage() {
	getfullInfoAboutTheGameWindow.style.display = 'none';
	var xhr = new XMLHttpRequest();
	var mainurl = resultObj.next;
	xhr.open('GET', mainurl, false);
	xhr.send();

	resultObj = JSON.parse(xhr.response);
	resultGames = resultObj.results;
	dataOutputTothePage();
}

function previousPage() {
	getfullInfoAboutTheGameWindow.style.display = 'none';
	var xhr = new XMLHttpRequest();
	var mainurl = resultObj.previous;
	xhr.open('GET', mainurl, false);
	xhr.send();

	resultObj = JSON.parse(xhr.response);
	resultGames = resultObj.results;
	dataOutputTothePage();
}

});