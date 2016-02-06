export default class Sounder
{

    constructor()
    {
        this.soundPath = 'sounds';
        this.sounds = {
            'hit': 'water-drum-1.ogg'
        };
    }

    play(sound)
    {
        if (this.sounds[sound]) {
            let audio = new Audio('/' + this.soundPath + '/' + this.sounds[sound]);
            audio.play();
        }
    }
}