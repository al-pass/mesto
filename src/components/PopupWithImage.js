import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(name, link, popupType) {
        super(popupType);
        this._name = name;
        this._link = link;
        this._popupType = popupType;
    }
    open() {
        super.open();
        super.setEventListeners();
        this._popupType.querySelector('.popup__name').textContent = this._name;
        this._popupType.querySelector('.popup__img').src = this._link;
        this._popupType.querySelector('.popup__img').alt = this._name;
    }
}