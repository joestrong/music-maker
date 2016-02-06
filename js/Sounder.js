export default class Sounder
{

    constructor()
    {
        this.soundPath = 'sounds';
        this.soundFiles = {
            'hit': 'water-drum-1.ogg'
        };
        this.loadSounds();
    }

    loadSounds()
    {
        this.sounds = [];
        for (let name in this.soundFiles) {
            this.sounds[name] = new Audio('/' + this.soundPath + '/' + this.soundFiles[name]);
        }
    }

    play(sound)
    {
        if (this.sounds[sound]) {
            this.sounds[sound].play();
        }
    }
}