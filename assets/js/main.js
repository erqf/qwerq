$(document).ready (function(){
    var myAudio = document.getElementById("myaudio");
    var more = 0;
    $('.round').click (function(){
        if(more %2 ==0){
            $(myAudio)[0].play();
            more++;
        }
        else if(more % 2 != 0){
            $(myAudio)[0].pause();
            more++;
        }
    });
});