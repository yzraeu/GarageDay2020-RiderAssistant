// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(function () {

    //let audioPlaying = true, backgroundAudio, browser;
    //browser = navigator.userAgent.toLowerCase();
    //$('<audio class="audio1" src="/audios/Audio_en_CA.mp3" loop></audio>').prependTo('body');
    //if (!browser.indexOf('firefox') > -1) {
    //    $('<embed id="background-audio" src="/audios/Audio_en_CA.mp3" autostart="1"></embed>').prependTo('body');
    //    backgroundAudio = setInterval(function () {
    //        $("#background-audio").remove();
    //        $('<embed id="background-audio" src="/audios/Audio_en_CA.mp3"></embed>').prependTo('body');
    //    }, 120000); // 120000 is the duration of your audio which in this case 2 mins.
    //}

    //var audioPlayer = $(".audio-player")[0];
    //var alertPlayer = $(".alert-player")[0];

    ////audioPlayer.play();
    //audioPlayer.onended = function () {
    //    alertPlayer.play();
    //};

    $("#mute-button").on('click', function (e) {
        let button = $(this);
        if (button.hasClass("fa-volume-up")) {
            //audioPlayer.stop();
            //alertPlayer.stop();
            button.removeClass("fa-volume-up").addClass("fa-volume-mute");
        } else {
            //audioPlayer.play();
            button.addClass("fa-volume-up").removeClass("fa-volume-mute");

        }
    });
});
