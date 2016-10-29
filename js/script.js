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