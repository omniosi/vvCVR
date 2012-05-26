$(document).ready(function(){
	setInterval(function(){
		$('#vinyl').animate({rotate:'+=5deg'},0);
	},45);
		$('#vvCVR').animate({opacity:1},1000,function(){
		$('#cover').delay(2000).animate({left:50},500).animate({left:0},200, function(){
			$('#message2').delay(2000).animate({opacity:1},1000);
		});
	});
});