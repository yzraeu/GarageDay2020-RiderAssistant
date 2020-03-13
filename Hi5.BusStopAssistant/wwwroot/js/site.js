let language = window.navigator.userLanguage || window.navigator.language;

$(function () {
    let playingAudio = false;

    let culture = getParameterByName("culture");

    if (culture) language = culture; // Override the browser setting for audios

    let infoAudio1 = new Howl({
        src: [`/audios/audio1_${language}.webm`, `/audios/audio1_${language}.mp3`],
        html5: true
    });

    let infoAudio2 = new Howl({
        src: [`/audios/audio2_${language}.webm`, `/audios/audio2_${language}.mp3`],
        html5: true
    });

    let alertAudio = new Howl({
        src: [`/audios/alert_${language}.webm`, `/audios/alert_${language}.mp3`],
        html5: true
    });

    let cancellationAudio = new Howl({
        src: [`/audios/cancel_${language}.webm`, `/audios/cancel_${language}.mp3`],
        html5: true
    });

    infoAudio1.on('end', function () {
        infoAudio2.play();
    });

    infoAudio2.on('end', function () {
        alertAudio.play();
    });

    alertAudio.on('end', function () {
        cancellationAudio.play();
    });
    
    $("#mute-button").on('click', function (e) {
        let button = $(this);
        if (playingAudio) {
            infoAudio1.stop();
            infoAudio2.stop();
            alertAudio.stop();
            cancellationAudio.stop();
            button.removeClass("fa-volume-up").addClass("fa-volume-mute");
        } else {
            infoAudio1.play();
            button.addClass("fa-volume-up").removeClass("fa-volume-mute");

        }
        playingAudio = !playingAudio;
    });

    $(".dropdown-item").on('change', function (e) {
        console.log(e);
    });
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
