document.addEventListener("keypress", function(event) {
    if (event.keyCode == 97 || event.keyCode == 65) {
        drum('boom')
    }
    if (event.keyCode == 115 || event.keyCode == 83) {
        drum('clap')
    }
    if (event.keyCode == 100 || event.keyCode == 68) {
        drum('hithat')
    }
    if (event.keyCode == 102 || event.keyCode == 70) {
        drum('kick')
    }
    if (event.keyCode == 103 || event.keyCode == 71) {
        drum('openhat')
    }
    if (event.keyCode == 104 || event.keyCode == 72) {
        drum('ride')
    }
    if (event.keyCode == 106 || event.keyCode == 74) {
        drum('snare')
    }
    if (event.keyCode == 107 || event.keyCode == 75) {
        drum('tink')
    }
    if (event.keyCode == 108 || event.keyCode == 76) {
        drum('tom')
    }
});

function drum(a) {
    var sound = new Audio('sound/' + a + '.wav');
    sound.play();
}