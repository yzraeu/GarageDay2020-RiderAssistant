let language = window.navigator.userLanguage || window.navigator.language;

$(function () {
    let playingAudio = false;

    let sound = new Howl({
        src: [`/audios/Audio_${language}.mp3`, `/audios/Alert_${language}.mp3`]
    });

    var audioId = sound.play();
    var alertId = sound.play();

    $("#mute-button").on('click', function (e) {
        let button = $(this);
        if (playingAudio) {
            sound.stop(alertId);
            button.removeClass("fa-volume-up").addClass("fa-volume-mute");
        } else {
            sound.play(alertId);
            button.addClass("fa-volume-up").removeClass("fa-volume-mute");

        }
        playingAudio = !playingAudio;
    });
});
