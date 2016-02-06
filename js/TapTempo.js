export default class TapTempo
{

    constructor()
    {
        this.rhythmQueue = [];
        this.tempoEl = document.getElementById('tempo-display');
        // Callbacks
        this.onPulse = null;
    }

    tap()
    {
        this.rhythmQueue.push(Date.now());
        if (this.rhythmQueue.length > 3) {
            this.rhythmQueue.shift();
        }
        if (this.rhythmQueue.length === 3) {
            this.calcTapTempo();
        }
    }

    calcTapTempo()
    {
        let interval = (this.rhythmQueue[2] - this.rhythmQueue[0]) / (this.rhythmQueue.length - 1);
        let tempo = Math.round(60000 / interval);
        if (tempo !== this.tempo) {
            this.updateTempo(tempo);
        }
    }

    updateTempo(tempo)
    {
        this.tempo = tempo;
        let tempoInterval = 60000 / this.tempo;
        if (this.tempoPulse) {
            clearInterval(this.tempoPulse);
        }
        this.tempoPulse = setInterval(() => {
            this.pulse();
        }, tempoInterval);
        this.tempoEl.innerHTML = 'Tempo: ' + this.tempo;
    }

    pulse()
    {
        if (this.onPulse) {
            this.onPulse();
        }
    }
}
