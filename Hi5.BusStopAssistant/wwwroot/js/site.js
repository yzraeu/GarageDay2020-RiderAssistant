let language = window.navigator.userLanguage || window.navigator.language;

$(function () {
    let playingAudio = false;

    let infoAudio = new Howl({
        src: [`/audios/Audio_${language}.mp3`]
    });

    let alertAudio = new Howl({
        src: [`/audios/Alert_${language}.mp3`]
    });

    infoAudio.on('end', function () {
        alertAudio.play();
    });
    
    $("#mute-button").on('click', function (e) {
        let button = $(this);
        if (playingAudio) {
            infoAudio.stop();
            alertAudio.stop();
            button.removeClass("fa-volume-up").addClass("fa-volume-mute");
        } else {
            infoAudio.play();
            button.addClass("fa-volume-up").removeClass("fa-volume-mute");

        }
        playingAudio = !playingAudio;
    });

    $(".dropdown-item").on('change', function (e) {
        console.log(e);
    });
});
