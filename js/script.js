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
	var $textArea = $('<input>').attr({type: 'text', id: 'other-title', placeholder: 'Your Title', autofocus: 'true'});
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
		total = length * 100;
	}
	//display total
	if(total > 0){
		var p = $('.activities p');
		if(p !== null){
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
		$('#credit-card').show();
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

//check for all valid input when form is submitted
$('button:submit').click(function(){
	checkName();
	checkEmail();
	registerCheck();
	checkCreditCard();
	if(!checkName() || !checkEmail() || !registerCheck() || !checkCreditCard()){
		event.preventDefault();
	}

});

//check for a name
function checkName(){
	var name = $('#name').val();
	if(name){
		$("label[for='" + $('#name').attr('id') + "']").text("Name:").removeClass('error_show');
		return true;
	}
	else{
		$("label[for='" + $('#name').attr('id') + "']").text("Name: (please provide your name)").addClass('error_show');
		return false;
	}
}

//check for email format
function checkEmail(){
	var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	var is_email = email.test($('#mail').val());
	if(is_email){
		$("label[for='" + $('#mail').attr('id') + "']").text("Email:").removeClass('error_show');
		return true;
	}
	else{
		$("label[for='" + $('#mail').attr('id') + "']").text("Email: (please provide a valid email)").addClass('error_show');
		return false;
	}
}

//check registered for atleast 1 event
function registerCheck(){

	var length = $('.activities input:checked').length;
	if(length > 0){
		$('.activities span').removeClass('error_show').addClass('error');
		$('.activities legend').css({'margin-bottom': '1.125em'});
		return true;
	}
	else{
		$('.activities span').removeClass('error').addClass('error_show');
		$('.activities legend').css({'margin-bottom': '0em'});
		//$("label[for='" + $('#mail').attr('id') + "']").text("Email: (please provide a valid email)").addClass('error_show');
		return false;
	}
}

//check for valid credit card number, zip code, cvv
function checkCreditCard(){
	var num = $('#cc-num').val();
	var zip= $('#zip').val();
	var cvv= $('#cvv').val();
	var error = true;
	if(num){
		$("label[for='" + $('#cc-num').attr('id') + "']").removeClass('error_show');
	}
	else{
		$("label[for='" + $('#cc-num').attr('id') + "']").addClass('error_show');
		error = false;
	}
	
	if(zip){
		$("label[for='" + $('#zip').attr('id') + "']").removeClass('error_show');
	}
	else{
		$("label[for='" + $('#zip').attr('id') + "']").addClass('error_show');
		error=false;
	}
	if($.isNumeric(cvv) && cvv.length == 3){
		$("label[for='" + $('#cvv').attr('id') + "']").removeClass('error_show');
	}	
	else{
		$("label[for='" + $('#cvv').attr('id') + "']").addClass('error_show');
		error=false;
	}
	return error;
}