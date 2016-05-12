// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function(){
		$('#btnvibrar').on('tap', function(){
			navigator.notificacion.vibrate(5000);
		});
		$('#btnbeep').on('tap', function(){
			navigator.notificacion.beep(5);
		});
});
});