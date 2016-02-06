"use strict";
import Flasher from './Flasher.js';
import TapTempo from './TapTempo.js';
import Messager from './Messager.js';
import Sounder from './Sounder.js';

let tapTemp = new TapTempo();
let sounder = new Sounder();

tapTemp.onPulse = function() {
    (new Flasher()).flashScreen();
    sounder.play('hit');
};

(new Messager()).showMessage('Tap a beat', 'Use any key');

document.addEventListener('keydown', function() {
    tapTemp.tap();
    (new Flasher).flashScreen();
    sounder.play('hit');
});
