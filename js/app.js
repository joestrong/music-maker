"use strict";
import Flasher from './Flasher.js';
import TapTempo from './TapTempo.js';
import Messager from './Messager.js';

let tapTemp = new TapTempo();

(new Messager()).showMessage('Tap a beat', 'Use any key');

document.addEventListener('keydown', function() {
    tapTemp.tap();
    (new Flasher).flashScreen();
});
