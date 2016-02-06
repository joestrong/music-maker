export default class TapTempo
{

    constructor()
    {
        this.rhythmQueue = [];
        this.tempoEl = document.getElementById('tempo-display');
        this.tempo = 60;
    }

    tap()
    {
        this.rhythmQueue.push(Date.now());
        if (this.rhythmQueue.length > 3) {
            this.rhythmQueue.shift();
        }
        if (this.rhythmQueue.length === 3) {
            this.calcTempo();
            this.updateTempo();
        }
    }

    calcTempo()
    {
        let interval = (this.rhythmQueue[2] - this.rhythmQueue[0]) / this.rhythmQueue.length
        let tempo = 60000 / interval;
        this.tempo = Math.round(tempo);
    }

    updateTempo()
    {
        this.tempoEl.innerHTML = 'Tempo: ' + this.tempo;
    }
}
