export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._items = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem = (card) => {
        this._container.prepend(card);
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }
}