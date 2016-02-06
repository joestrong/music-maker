export default class Flasher
{

    constructor()
    {
        document.body.addEventListener('animationend', this.resetFlash);
    }

    flashScreen()
    {
        document.body.className = 'flash';
    }

    resetFlash()
    {
        document.body.className = '';
    }
}
