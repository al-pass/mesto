import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupType) {
        super(popupType);
        this._popupType = popupType;
        this.popupName = this._popupType.querySelector('.popup__name');
        this.popupImg = this._popupType.querySelector('.popup__img');


    }

    open(name, link) {
        super.open();
        this.popupName.textContent = name;
        this.popupImg.src = link;
        this.popupImg.alt = name;
    }
    setEventListeners() {
        super.setEventListeners();
    }
}