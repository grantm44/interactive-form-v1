$(document).ready(function(){

	$('input').first().focus();
});

$('#title').change(function(){
	
	if($(this).val() === 'other'){
		console.log($(this).val());
		showText();
	}
	else{
		$('#other-title').remove();
	}
});

function showText(){
	var $textArea = $('<input>').attr({type: 'text', id: 'other-title', placeholder: 'Your Title', autofocus: 'true'})
	$('#title').after($textArea);
}