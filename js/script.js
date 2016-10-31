var total = 0;

//select first text field when page loads
$(document).ready(function(){

	$('input').first().focus();
	$('#payment').val('credit card');
	$('div p').hide();
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
	var length = $('.activities input:checked').length; //number of checkboxes checked
	var $check = $('.activities input[name=all]:checked');//variable if main conference is checked

	//calculate total
	if($check.length >= 1){
		total = length * 100 + 100;
	}
	else{
		total = length * 100
	}
	//display total
	if(total > 0){
		var p = $('.activities p');
		if(p != null){
			p.remove();
		}
		$('.activities').append('<p>Total: '+ total + '</p>');
	}
	else{
		$('.activities p').remove();
	}
	
	timeSlot(); 
});

//disable activities option for conflicting time slots
function timeSlot(){
	var jsframeworks = $('.activities input[name=js-frameworks]:checked').length > 0;
	var jslibs = $('.activities input[name=js-libs]:checked').length > 0;
	var express = $('.activities input[name=express]:checked').length > 0;
	var node =$('.activities input[name=node]:checked').length > 0;
	if(jsframeworks){
		$('.activities input[name=express').attr('disabled', true);
	}
	else{
		$('.activities input[name=express').removeAttr('disabled');
	}
	if(jslibs){
		$('.activities input[name=node').attr('disabled', true);
	}
	else{
		$('.activities input[name=node').removeAttr('disabled');
	}
	if(express){
		$('.activities input[name=js-frameworks').attr('disabled', true);
	}
	else{
		$('.activities input[name=js-frameworks').removeAttr('disabled');
	}
	if(node){
		$('.activities input[name=js-libs').attr('disabled', true);
	}
	else{
		$('.activities input[name=js-libs').removeAttr('disabled');
	}
}

$('#payment').change(function(){
	var method = $(this).val();
	if(method === 'credit card'){
		$('div p').hide();
	}
	else if(method === 'paypal'){
		$('div p:first').show();
		$('#credit-card').hide();
		$('div p:last').hide();
	}
	else if(method === 'bitcoin'){
		$('div p:first').hide();
		$('#credit-card').hide();
		$('div p:last').show();
	}
});