class Card {
    constructor({ name, link }, cardSelector, handeCardClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handeCardClick = handeCardClick;
    };

    _getTemplate = (e) => {
        const cardElement = document.querySelector(`#${this._cardSelector}`).content;
        const card = cardElement.querySelector('.element').cloneNode(true);
        return card
    };

    generateCard = (e) => {

        this._element = this._getTemplate();
        this._element.querySelector(".element__img").src = this._link;

        this._element.querySelector(".element__img").alt = `Фотография ${this._name}`;
        this._element.querySelector(".element__name").textContent = this._name;
        this._addEventListeners();

        return this._element;
    };

    _openPopupHandler = (e) => {
        this._handeCardClick(this._name, this._link);

    }
    _toggleLike(evt) {
        evt.target.classList.toggle('element__like_active');
    }
    _removeCard() {
        this._element.remove();
        this._element = null;
    }

    _addEventListeners = (e) => {
        this._element.querySelector('.element__like').addEventListener('mousedown', (evt) => {
            this._toggleLike(evt)
        });
        this._element.querySelector('.element__trashbox').addEventListener('mousedown', (evt) => {
            this._removeCard()
        });
        this._element.querySelector(".element__img").addEventListener('mousedown', (evt) => {
            this._openPopupHandler();
        });
    }
};


export { Card };