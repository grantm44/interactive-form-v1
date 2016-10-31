var total = 0;

//select first text field when page loads
$(document).ready(function(){

	$('input').first().focus();
});

//when user selects a job role check if it's other
$('#title').change(function(){
	
	if($(this).val() === 'other'){
		console.log($(this).val());
		showText();
	}
	else{
		$('#other-title').remove();
	}
});

//create text box for job role
function showText(){
	var $textArea = $('<input>').attr({type: 'text', id: 'other-title', placeholder: 'Your Title', autofocus: 'true'})
	$('#title').after($textArea);
}

//show colors available for t-shirt design theme that is selected
$(design).change(function(){
	if($(this).val() === 'js puns'){
		//show cornflower blue, dark slate grey, gold
		$("#color option[value=cornflowerblue]").show();
		$("#color option[value=darkslategrey]").show();
		$("#color option[value=gold]").show();
		$("#color option[value=tomato]").hide();
		$("#color option[value=steelblue]").hide();
		$("#color option[value=dimgrey]").hide();
		$("#color").val('cornflowerblue');
	}
	else{
		//show tomato, steel blue, dim grey
		$("#color option[value=cornflowerblue]").hide();
		$("#color option[value=darkslategrey]").hide();
		$("#color option[value=gold]").hide();
		$("#color option[value=tomato]").show();
		$("#color option[value=steelblue]").show();
		$("#color option[value=dimgrey]").show();

		$("#color").val('tomato');
		
	}
});

//calculate and display total cost of registered activities
$('.activities input').click(function(){
	var val = $(this).attr("name");
	var length = $('.activities input:checked').length;
	var $check = $('.activities input[name=all]:checked');
	
	
	if($check.length >= 1){
		total = length * 100 + 100;
	}
	else{
		total = length * 100
	}
	
	if(total > 0){
		var p = $('.activities p');
		if(p != null){
			p.empty();
		}
		$('.activities').append('<p>Total: '+ total + '</p>');
	}
	else{
		$('.activities p').empty();
	}
	
});

