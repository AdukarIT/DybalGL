document.addEventListener("DOMContentLoaded", function(event) {

    var getActorName = document.getElementById("actorName");
    var getActorPhoto = document.getElementById("actorPhoto");
    var getActorFilm = document.getElementById("actorFilm");

    var openFormButton = document.getElementById("addActor");
    var closeFormButton = document.getElementById("closeWindow");
    var submitButton = document.getElementById("submitActor");
    var changeButton = document.getElementById("changeActor");
    var list = document.getElementById("list");
    var newButton = document.createElement("input");
    var newDiv = document.createElement("div");
    var newButtonForNewDiv5;
    var newButtonForNewDiv6;
    var getForm = document.getElementById("actorForm");

    var actorsWithPhotoButton = document.getElementById("actorsWithPhoto");
    var actorsWithOutPhotoButton = document.getElementById("actorsWithOutPhoto");
    var sortUpButton = document.getElementById("sortUp");
    var sortDownButton = document.getElementById("sortDown");

    openFormButton.addEventListener('click', function() {
        getForm.style.display = 'block';
        changeButton.style.display = 'none';
        submitButton.style.display = 'block';
    });

    closeFormButton.addEventListener('click', closeForm);

    submitButton.addEventListener('click', addNewActor);
    var id = 0;


//Добавление нового актёра в LS
    function addNewActor(e) {
        var arrayOfActor = [];
        arrayOfActor[0] = getActorName.value;
        arrayOfActor[1] = getActorPhoto.value;
        arrayOfActor[2] = getActorFilm.value;
        
        id = localStorage.length + 1;
        if (getActorName.value != "" && getActorPhoto.value != "" && getActorFilm.value != "")
            localStorage.setItem('Actor' + id, JSON.stringify(arrayOfActor));
        else alert("Необходимо заполнить все поля!");
    }

//Вывод всех значений с LS на страницу
    
    var i = 0,
        objActor = {},
        storageKey,
        arrayFromObj = [];

    for ( ; storageKey = localStorage.key(i); i++) {
        if (localStorage.getItem(1) != "") {
            objActor[storageKey] = window.localStorage.getItem(storageKey).replace('[', '').replace(']', '').replace(/['"]+/g, '');
            arrayFromObj = objActor[storageKey].split(',');

            newDiv.className = "row text-center";
            list.appendChild(newDiv);

            var newDiv2 = document.createElement("div");
            newDiv2.className = "col-3 my-auto";
            newDiv2.id = "actorNameFromStorage";
            newDiv2.style.fontFamily = "Pacifico, cursive";
            newDiv2.style.fontSize = '30px';
            newDiv2.innerHTML = arrayFromObj[0];
            newDiv.appendChild(newDiv2);
            var newDiv3 = document.createElement("div");
            newDiv3.className = "col-2 my-auto py-2";
            newDiv3.id = "actorPhotoFromStorage";
            var img = new Image();
            img.style.width = "150px";
            img.style.height = "140px";
            newDiv.appendChild(newDiv3);
/*            img.src = arrayFromObj[1];
            if(img.src.startsWith("http"))
                newDiv3.appendChild(img);
            else newDiv3.innerHTML = "У актёра нет фото.";*/

            function loadImage(newDiv3, img) {
                img.addEventListener('load', function() {
                    newDiv3.appendChild(img);
                });
                img.addEventListener('error', function() {
                    newDiv3.innerHTML = "У актёра нет фото.";
                });
            }
            img.src = arrayFromObj[1];
            loadImage(newDiv3, img);

            var newDiv4 = document.createElement("div");
            newDiv4.className = "col-3 my-auto";
            newDiv4.innerHTML = arrayFromObj[2];
            newDiv.appendChild(newDiv4);

            var newDiv5 = document.createElement("div");
            newDiv5.className = "col-2 my-auto";
            newDiv.appendChild(newDiv5);
            newButtonForNewDiv5 = document.createElement("input");
            newButtonForNewDiv5.setAttribute('type', 'button');
            newButtonForNewDiv5.className = "col btn btn-warning my-1";
            newButtonForNewDiv5.value = "Редактировать";
            newButtonForNewDiv5.id = localStorage.key(i);
            newDiv5.appendChild(newButtonForNewDiv5);

            var newDiv6 = document.createElement("div");
            newDiv6.className = "col-2 my-auto";
            newDiv.appendChild(newDiv6);
            newButtonForNewDiv6 = document.createElement("input");
            newButtonForNewDiv6.setAttribute('type', 'button');
            newButtonForNewDiv6.className = "col btn btn-danger my-1";
            newButtonForNewDiv6.value = "Удалить";
            newButtonForNewDiv6.id = localStorage.key(i);
            newDiv6.appendChild(newButtonForNewDiv6);
        
            newButtonForNewDiv5.addEventListener('click', editActor);
            newButtonForNewDiv6.addEventListener('click', deleteActor);
        }
    }
            
    function closeForm() {
        getForm.style.display = 'none';
        getActorName.value = "";
        getActorPhoto.value = "";
        getActorFilm.value = "";
    }

    function editActor() {
        var actorID = this.id;
        getForm.style.display = 'block';
        changeButton.style.display = 'block';
        submitButton.style.display = 'none';
        var newObj = localStorage.getItem(this.id).replace('[', '').replace(']', '').replace(/['"]+/g, '');
        var newArray = [];
        newArray = newObj.split(",");

        getActorName.value = newArray[0];
        getActorPhoto.value = newArray[1];
        getActorFilm.value = newArray[2];

        changeButton.addEventListener('click', function() {
            var changedActorArray = [];
            changedActorArray[0] = getActorName.value;
            changedActorArray[1] = getActorPhoto.value;
            changedActorArray[2] = getActorFilm.value;
            console.log(changedActorArray);
            localStorage.removeItem(actorID);
            localStorage.setItem(actorID, JSON.stringify(changedActorArray));
            console.log(changedActorArray);
            getForm.style.display = 'none';
            location.reload()
        });
    }


    function deleteActor() {
        let ok = confirm("Вы действительно хотите удалить данного актёра?")
        if (ok == true)
            localStorage.removeItem(this.id);
    }
	var clearStorageButton = document.getElementById("clearStorage");
	clearStorageButton.addEventListener('click', ClearLocalStorage);


   	function ClearLocalStorage() {
   		let ok = confirm("Вы действительно хотите очистить LocalStorage?");
   		if (ok == true) {
   			localStorage.clear();
            alert("Все актёры удалены!");
   		}
    }


//ФИЛЬТРАЦИЯ: АКТЁРЫ, У КОТОРЫХ ЕСТЬ ФОТО
    actorsWithPhotoButton.addEventListener('click', actorsWithPhoto);

    function actorsWithPhoto() {
        var rightChild = list.firstElementChild;
        rightChild.innerHTML = "";
        var i = 0,
            objActor = {},
            storageKey,
            arrayFromObj = [];

        for ( ; storageKey = localStorage.key(i); i++) {
            if (localStorage.getItem(1) != "") {
                objActor[storageKey] = window.localStorage.getItem(storageKey).replace('[', '').replace(']', '').replace(/['"]+/g, '');
                arrayFromObj = objActor[storageKey].split(',');
                
                if (arrayFromObj[1].startsWith("http")) {
                    console.log(arrayFromObj);
                    newDiv.className = "row text-center";
                    list.appendChild(newDiv);

                    var newDiv2 = document.createElement("div");
                    newDiv2.className = "col-3 my-auto";
                    newDiv2.id = "actorNameFromStorage";
                    newDiv2.style.fontFamily = "Pacifico, cursive";
                    newDiv2.style.fontSize = '30px';
                    newDiv2.innerHTML = arrayFromObj[0];
                    newDiv.appendChild(newDiv2);

                    var newDiv3 = document.createElement("div");
                    newDiv3.className = "col-2 my-auto py-2";
                    newDiv3.id = "actorPhotoFromStorage";
                    var img = new Image();
                    img.src = arrayFromObj[1];
                    img.style.width = "150px";
                    img.style.height = "140px";
                    newDiv.appendChild(newDiv3);
                    if(img.src.startsWith("http"))
                        newDiv3.appendChild(img);
                    else newDiv3.innerHTML = "У актёра нет фото.";

                    var newDiv4 = document.createElement("div");
                    newDiv4.className = "col-3 my-auto";
                    newDiv4.innerHTML = arrayFromObj[2];
                    newDiv.appendChild(newDiv4);

                    var newDiv5 = document.createElement("div");
                    newDiv5.className = "col-2 my-auto";
                    newDiv.appendChild(newDiv5);
                    newButtonForNewDiv5 = document.createElement("input");
                    newButtonForNewDiv5.setAttribute('type', 'button');
                    newButtonForNewDiv5.className = "col btn btn-warning my-1";
                    newButtonForNewDiv5.value = "Редактировать";
                    newButtonForNewDiv5.id = localStorage.key(i);
                    newDiv5.appendChild(newButtonForNewDiv5);

                    var newDiv6 = document.createElement("div");
                    newDiv6.className = "col-2 my-auto";
                    newDiv.appendChild(newDiv6);
                    newButtonForNewDiv6 = document.createElement("input");
                    newButtonForNewDiv6.setAttribute('type', 'button');
                    newButtonForNewDiv6.className = "col btn btn-danger my-1";
                    newButtonForNewDiv6.value = "Удалить";
                    newButtonForNewDiv6.id = localStorage.key(i);
                    newDiv6.appendChild(newButtonForNewDiv6);
                
                    newButtonForNewDiv5.addEventListener('click', editActor);
                    newButtonForNewDiv6.addEventListener('click', deleteActor);
                }
            }
        }
    }


//ФИЛЬТРАЦИЯ: АКТЁРЫ, У КОТОРЫХ НЕТ ФОТО
    actorsWithOutPhotoButton.addEventListener('click', actorsWithOutPhoto)

    function actorsWithOutPhoto() {
        var rightNeighbour = list.firstElementChild;
        rightNeighbour.innerHTML = "";

        var i = 0,
            objActor = {},
            storageKey,
            arrayFromObj = [];

            for ( ; storageKey = localStorage.key(i); i++) {
                if (localStorage.getItem(1) != "") {
                objActor[storageKey] = window.localStorage.getItem(storageKey).replace('[', '').replace(']', '').replace(/['"]+/g, '');
                arrayFromObj = objActor[storageKey].split(',');

                if(!arrayFromObj[1].startsWith('http')) {
                    newDiv.className = "row text-center";
                    list.appendChild(newDiv);


                    var newDiv2 = document.createElement("div");
                    newDiv2.className = "col-3 my-auto";
                    newDiv2.id = "actorNameFromStorage";
                    newDiv2.style.fontFamily = "Pacifico, cursive";
                    newDiv2.style.fontSize = '30px';
                    newDiv2.innerHTML = arrayFromObj[0];
                    newDiv.appendChild(newDiv2);


                    var newDiv3 = document.createElement("div");
                    newDiv3.className = "col-2 my-auto py-2";
                    newDiv3.id = "actorPhotoFromStorage";
                    var img = new Image();
                    img.src = arrayFromObj[1];
                    img.style.width = "150px";
                    img.style.height = "140px";
                    newDiv.appendChild(newDiv3);
                    if(img.src.startsWith("http"))
                        newDiv3.appendChild(img);
                    else newDiv3.innerHTML = "У актёра нет фото.";

                    var newDiv4 = document.createElement("div");
                    newDiv4.className = "col-3 my-auto";
                    newDiv4.innerHTML = arrayFromObj[2];
                    newDiv.appendChild(newDiv4);


                    var newDiv5 = document.createElement("div");
                    newDiv5.className = "col-2 my-auto";
                    newDiv.appendChild(newDiv5);
                    newButtonForNewDiv5 = document.createElement("input");
                    newButtonForNewDiv5.setAttribute('type', 'button');
                    newButtonForNewDiv5.className = "col btn btn-warning my-1";
                    newButtonForNewDiv5.value = "Редактировать";
                    newButtonForNewDiv5.id = localStorage.key(i);
                    newDiv5.appendChild(newButtonForNewDiv5);


                    var newDiv6 = document.createElement("div");
                    newDiv6.className = "col-2 my-auto";
                    newDiv.appendChild(newDiv6);
                    newButtonForNewDiv6 = document.createElement("input");
                    newButtonForNewDiv6.setAttribute('type', 'button');
                    newButtonForNewDiv6.className = "col btn btn-danger my-1";
                    newButtonForNewDiv6.value = "Удалить";
                    newButtonForNewDiv6.id = localStorage.key(i);
                    newDiv6.appendChild(newButtonForNewDiv6);
                }
            }
            else alert("Таких актёров нет.");
            newButtonForNewDiv5.addEventListener('click', editActor);
            newButtonForNewDiv6.addEventListener('click', deleteActor);
        }
    }

    sortUpButton.addEventListener('click', sortUp);

    function sortUp() {
        var rightNeighbour = list.firstElementChild;
        rightNeighbour.innerHTML = "";

        var localStorageArray = [];
        var localStorageObj = {};
        for (var i = 0; i < localStorage.length; i++) {
            localStorageArray[i] = localStorage.key(i) +localStorage.getItem(localStorage.key(i)).replace(/+/g,'').replace('[', '').replace(']', '').replace(/['"]+/g, '');
        }

        localStorageArray.sort(function(a,b) {
            if (a > b) return 1;
            if (a < b) return -1;
            else return 0;
        });

        console.log(localStorageArray);
        // for (var i = 0; i < localStorage.length; i++) {

        //         newDiv.className = "row text-center";
        //         list.appendChild(newDiv);


        //         var newDiv2 = document.createElement("div");
        //         newDiv2.className = "col-3 my-auto";
        //         newDiv2.id = "actorNameFromStorage";
        //         newDiv2.style.fontFamily = "Pacifico, cursive";
        //         newDiv2.style.fontSize = '30px';
        //         newDiv2.innerHTML = localStorage.getItem(localStorage.key(i));
        //         newDiv.appendChild(newDiv2);


        //         var newDiv3 = document.createElement("div");
        //         newDiv3.className = "col-2 my-auto py-2";
        //         newDiv3.id = "actorPhotoFromStorage";
        //         var img = new Image();
        //         img.src = localStorage.getItem(localStorage.key(i));
        //         img.style.width = "150px";
        //         img.style.height = "140px";
        //         newDiv.appendChild(newDiv3);
        //         if(img.src.startsWith("http"))
        //             newDiv3.appendChild(img);
        //         else newDiv3.innerHTML = "У актёра нет фото.";

        //         var newDiv4 = document.createElement("div");
        //         newDiv4.className = "col-3 my-auto";
        //         newDiv4.innerHTML = localStorage.getItem(localStorage.key(i));
        //         newDiv.appendChild(newDiv4);


        //         var newDiv5 = document.createElement("div");
        //         newDiv5.className = "col-2 my-auto";
        //         newDiv.appendChild(newDiv5);
        //         newButtonForNewDiv5 = document.createElement("input");
        //         newButtonForNewDiv5.setAttribute('type', 'button');
        //         newButtonForNewDiv5.className = "col btn btn-warning my-1";
        //         newButtonForNewDiv5.value = "Редактировать";
        //         newButtonForNewDiv5.id = localStorage.key(i);
        //         newDiv5.appendChild(newButtonForNewDiv5);


        //         var newDiv6 = document.createElement("div");
        //         newDiv6.className = "col-2 my-auto";
        //         newDiv.appendChild(newDiv6);
        //         newButtonForNewDiv6 = document.createElement("input");
        //         newButtonForNewDiv6.setAttribute('type', 'button');
        //         newButtonForNewDiv6.className = "col btn btn-danger my-1";
        //         newButtonForNewDiv6.value = "Удалить";
        //         newButtonForNewDiv6.id = localStorage.key(i);
        //         newDiv6.appendChild(newButtonForNewDiv6);
        // newButtonForNewDiv5.addEventListener('click', editActor);
        // newButtonForNewDiv6.addEventListener('click', deleteActor);
        // }
    }
});


