$(document).ready(function(){
	$('#vvCVR').css({opacity:0});
	$('#block').css({opacity:0});
	$('#cover').css({left:-700});
	$('#credits').css({opacity:0});
	var rotation = function (){
    $("#vinyl").rotate({
    	duration:2500,
      angle:0, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
    });
  }
  rotation();
	$('#vvCVR').animate({opacity:1},1000,function(){
		$('#block').delay(2000).animate({opacity:1});
		$('#intro').delay(2000).animate({opacity:0});
		$('#cover').delay(2000).animate({left:50},500).animate({left:0},200, function(){
			$('#credits').delay(2000).animate({opacity:1},1000);
		});
	});
	/*$('#vvCVR').delay(2000).animate({background:'none'},500);*/
	$('#play-pause').click(function(){
		$('#play-pause img').toggleClass('on');
		if($('#play-pause img').hasClass('on')){
			$("audio")[0].pause();
	    $("#vinyl").rotate({animateTo:360,callback:function(){
		  	$(this).stopRotate()  
	    }});
/* 			console.log("paused"); */
		}else{
			$("audio")[0].play();
	    rotation();
/* 			console.log("replay"); */
		}
	});
	$('#volume').click(function(){
		$('#volume img').toggleClass('on');
		if($('#volume img').hasClass('on')){
			$("audio")[0].volume=0;
/* 			console.log("volume = 0"); */
		}else{
			$("audio")[0].volume=1;
/* 			console.log("volume = 1"); */
		}
	});
});
