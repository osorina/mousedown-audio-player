function playTrack() {
    var A = {};

    init();

    return A;

    //   init

    function init() {
        setupData();
        var setup_audios = setupAudios();
        setup_audios.then(function() {
            setupEvents();
        });
    }

    // setters

    function setupData() {
        A.datas = {};
        A.audios = {};
        A.audio = 1;
        A.audio_playing = false;
    }

    function setupEvents() {
        document.addEventListener("mousedown", playAudio);
        document.addEventListener("touchstart", pauseAudio);
        document.addEventListener("mouseleave", pauseAudio);
        document.addEventListener("mouseup", pauseAudio);
    }

    // setup audios
    function setupAudios() {
        return new Promise(function(resolve, reject) {
            var count = 3,
                loaded = 0;
            // do a thing, possibly async, then…
            for (var i = 1; i <= count; i++) {
                var url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111863/chano-0" + i + ".mp3";
                var audio = new Audio(url);
                A.audios["id-" + i] = audio;
                audio.setAttribute("preload", "auto");
                audio.setAttribute("controls", "controls");
                audio.setAttribute("loop", true);
                audio.setAttribute("data-order", i);
                // document.body.appendChild(audio);
                audio.addEventListener("canplaythrough", function(e) {
                    loaded++;
                    if (loaded === count) {
                        resolve("Audios Loaded!");
                    }
                });
            }
        });
    }



    function playAudio() {
        A.audio_playing = true;
        document.body.className = "playing audio-" + A.audio;
        A.audios["id-" + A.audio].play();
    }

    function pauseAudio() {
        var audio = A.audios["id-" + A.audio];
        audio.pause();
        audio.currentTime = 0;
        if (A.audio_playing) {
            A.audio++;
            document.body.className = "";
            A.audio_playing = false;
            if (A.audio > 3) A.audio = 1;
        }
    }

}

module.exports = playTrack;
