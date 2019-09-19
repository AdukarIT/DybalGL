$(function() {
	let dialog = $("#dialog").dialog({
		modal: true,
      	autoOpen: false,
      	draggable: false,
      	width: 280,
      	height: 285,
      	title: 'Новое обращение клиента'
    });
    
    $("#newAppeal").click(function(){
    	dialog.dialog("open");
    });

    $("#closeDialog").click(function(){
    	dialog.dialog("close");
    });


    $("form[name='appealForm']").validate({
		rules: {
			name: {
	    		required: true,
	      		minlength: 3,
	    	},
			phone: "required",
			date: "required",
			typeOfAppeal: "required",
	  	},

	  	messages: {
	  		name: "Введите имя клиента!",
	  		phone: "Введите телефон клиента!",
	  		date: "Введите дату обращения!",
	  	},
    });

    $("#appealForm").submit(function(e) {
    	e.preventDefault();
    	let getName = $("#name").val();
    	let getPhone = $("#phone").val();
    	let getDate = $("#date").val();
    	let getAppeal = $("input[name=typeOfAppeal]:checked").val();

    	console.log(getAppeal);

    	let getTr = $("#addNewAppealFromForm").after(
    		"<tr>" +
    		"<td>" + getName + "</td>" +
    		"<td>" + getPhone + "</td>" +
    		"<td>" + getDate + "</td>" +
    		"<td>" + getAppeal + "</td>" +
    		"</tr>");

    	$(':input','#appealForm')
		  .not(':button, :submit, :reset, :hidden')
		  .val('')

    	dialog.dialog("close");
    })



    
});