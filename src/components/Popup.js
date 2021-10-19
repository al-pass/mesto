export class Popup {
    constructor(popupType) {
        this._popup = popupType;
    }
    open() {
        this._popup.classList.add('active');
    }

    close() {
        this._popup.classList.remove('active');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
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
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
    }
}