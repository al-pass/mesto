export class Popup {
    constructor(popupType) {
        this._popup = popupType;
    }
    open() {

        this._popup.classList.add('active');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._popup.classList.remove('active');
        document.addEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose = (evt) => {

        if (evt.key === 'Escape') {
            console.log('evt.key')
            this.close();
        }
    }
    _handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
                this._handleOverlayClick(evt)
            })
            //пришлось вставить обработчик тк без этого клик на любой элемент поапа вызывал закрытие онного
        this._popup.querySelector('.close-icon').addEventListener('mousedown', () => {
            this.close();
        })

    }
}