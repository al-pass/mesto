export class Selector {
    constructor({ data, renderer }, containerSelector) {
        this._item = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem = (card) => {
        this._container.prepend(card);

    }
    renderItem = () => {
        this._renderer(this._item);

    }
}