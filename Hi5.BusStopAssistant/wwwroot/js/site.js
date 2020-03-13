let language = window.navigator.userLanguage || window.navigator.language;

$(function () {
    let playingAudio = false;

    let sound = new Howl({
        src: [`/audios/Audio_${language}.mp3`, `/audios/Alert_${language}.mp3`]
    });

    sound.once('load', function () {
        sound.play();
    });

    sound.on('end', function () {
        console.log('Finished!');
    });


    $("#mute-button").on('click', function (e) {
        let button = $(this);
        if (playingAudio) {
            sound.stop();
            button.removeClass("fa-volume-up").addClass("fa-volume-mute");
        } else {
            sound.play();
            button.addClass("fa-volume-up").removeClass("fa-volume-mute");

        }
        playingAudio = !playingAudio;
    });
});
