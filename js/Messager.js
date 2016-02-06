export default class Messager
{

    constructor()
    {
        this.messageEl = document.getElementById('message-area');
        this.messageHead = this.messageEl.querySelector('h1');
        this.messageSub = this.messageEl.querySelector('h2');
    }

    showMessage(message, submessage)
    {
        this.messageHead.textContent = message;
        if (submessage) {
            this.messageSub.textContent = submessage;
        }
    }
}
