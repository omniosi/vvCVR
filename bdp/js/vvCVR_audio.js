var canPlayOgg = !!(new Audio().canPlayType('audio/ogg; codecs="vorbis"'));
if(canPlayOgg == true){
	song = "snd/MyPhilosophy_omnimix.ogg";
}else{
	song = "snd/MyPhilosophy_omnimix.mp3";
}
$(document).ready(function(){
		$("audio").attr({
			"autoplay": "autoplay",
			"src": song  
		});
});