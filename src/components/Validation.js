class Validation {
    constructor(obj, popupElement) {
        this._formSelector = obj.formSelector;
        this._inputSelector = obj.inputSelector;
        this._inactiveButtonClass = obj.inactiveButtonClass;
        this._popupElement = popupElement;
        this._inputList = Array.from(popupElement.querySelectorAll('input'));
        this._buttonElement = popupElement.querySelector(obj.submitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._popupElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = errorMessage;

    }

    _hideInputError = (inputElement) => {

        const errorElement = this._popupElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = '';
    }

    _checkValidation = (inputElement) => {
        if (!inputElement.validity.valid) {

            this._showInputError(inputElement, inputElement.validationMessage)
        } else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    resetValidation = () => {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });

        this.toggleButtonState();
    }

    _setEventListeners = () => {

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {

                this._checkValidation(inputElement);

                this.toggleButtonState();
            });
        });
        this.toggleButtonState();
    };

    activateValidation = () => {
        this._setEventListeners();
    }

}



export { Validation as ValidationClass }

//Validation code