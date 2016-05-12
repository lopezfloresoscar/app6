// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function(){
		$('#btnvibrar').tap(function(){
			navigator.notificacion.vibrate(5000);
		});
		$('#btnsonar').tap(function(){
			navigator.notificacion.beep(20);
		});
});
});