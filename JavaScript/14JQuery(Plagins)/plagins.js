$(function() {
	let dialog = $("#dialog").dialog({
		modal: true,
      	autoOpen: false,
      	draggable: false,
      	width: 280,
      	height: 320,
      	title: 'Новое обращение клиента'
    });
    
    $("#newAppeal").click(function(){
    	dialog.dialog("open");
    });

    $("#closeDialog").click(function(){
    	dialog.dialog("close");
    });

	jQuery.validator.setDefaults({
	  debug: true,
	  success: "valid"
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
    	if($("form[name='appealForm']").validate().errorList.length == 0) {
	    	let getName = $("#name").val();
	    	let getPhone = $("#phone").val();
	    	let getDate = $("#date").val();
	    	let getAppeal = $("input[name=typeOfAppeal]:checked").val();

	    	let getTr = $("#addNewAppealFromForm").after(
	    		"<tr>" +
	    		"<td>" + getName + "</td>" +
	    		"<td>" + getPhone + "</td>" +
	    		"<td>" + getDate + "</td>" +
	    		"<td>" + getAppeal + "</td>" +
	    		"</tr>");

			var validator = $("form[name='appealForm']").validate();
			$("#appealForm")[0].reset();
			$(".selectable").selectable();
			dialog.dialog("close");
		}
    })

	let deleteDialog = $("#deleteDialog").dialog({
		modal: true,
	  	autoOpen: false,
	  	draggable: true,
	  	height: 85,
	  	title: 'Удалить сообщение(ия)?!',
	});

	$("#deleteAppeal").click(function(){
    	deleteDialog.dialog("open");
    });

    $("#deleteThatAppeal").click(function(){
    	for (let i = 0; i < $(".ui-selected").length; i++) {
    		if($(".ui-selected")[i].localName == 'tr') {
    			$("tr.ui-selected").remove();
    		}
    	}
    	deleteDialog.dialog("close");
    });

    $("#closeThatDialog").click(function(){
    	deleteDialog.dialog("close");
    });
});