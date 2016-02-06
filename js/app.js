"use strict";
import Flasher from './Flasher.js';
import TapTempo from './TapTempo.js';

let messageEl = document.getElementById('message-area');
function showMessage(message, submessage) {
    messageEl.innerHTML = message;
    if (submessage) {
        messageEl.innerHTML += submessage;
    }
}

function tapSound() {
}
showMessage('Tap a beat', 'Use any key');
let tapTemp = new TapTempo();
document.addEventListener('keydown', function() {
    tapTemp.tap();
    (new Flasher).flashScreen();
    tapSound();
});
