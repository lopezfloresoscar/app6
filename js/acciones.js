// JavaScript Document
$(document).ready(function(e) {
    
	document.addEventListener('deviceready', function(){
		$('#btnvibrar').on('tap', function() {
			navigator.notification.vibrate(3000);
		});
		
		$('#beep').on('tap', function() {
			navigator.notification.beep(5);
		});
		
	});
});
