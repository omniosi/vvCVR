var canPlayOgg = !!(new Audio().canPlayType('audio/ogg; codecs="vorbis"'));
if(canPlayOgg == true){
	song = "snd/heath.ogg";
} else{
	/*song = "snd/andSoOmniEdit.mp3";*/
	song = "snd/heath.mp3";
}
$(document).ready(function(){
		$("audio").attr({
			"autoplay": "autoplay",
			"src": song  
		});
});