var $animation = document.getElementById("animation");
var $animWrapper = document.getElementById("anim-wrapper");


function startStopper(){
    $("#animation").click(function(){
        if ($animation.className == "stopped") {
            $($animation).removeClass("stopped");
            $($animation).addClass("spinning");
            $($animWrapper).addClass("pulsing");

        } else {
            $($animation).removeClass("spinning");
            $($animWrapper).removeClass("pulsing");
            $($animation).addClass("stopped");
        }


    });
}



$(document).ready(function(){


    startStopper();



});