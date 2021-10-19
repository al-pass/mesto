import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupType, submit) {
        super(popupType);
        this._popup = popupType;
        this._submit = submit;
    }
    _getInputValues = () => {
        const inputs = Array.from(this._popup.querySelectorAll('.input'));
        const values = inputs.map(item => {
            return item.value
        })
        return values;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => { this._submit(this._getInputValues(), evt) });
    }
    close() {
        super.close();
        this._popup.querySelector('form').reset();
    }
}