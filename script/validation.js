//New sprint
const configValidationObj = {
    formSelector: '.form',
    inputSelector: '.input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'button_inactive',
}

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;

}

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
}

function checkValidation(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement, configValidationObj) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(configValidationObj.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(configValidationObj.inactiveButtonClass);
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement, configValidationObj) => {
    const inputList = Array.from(formElement.querySelectorAll(configValidationObj.inputSelector));
    const buttonElement = formElement.querySelector(configValidationObj.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, configValidationObj);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkValidation(formElement, inputElement);
            toggleButtonState(inputList, buttonElement, configValidationObj);
        });
    });
};

function validationActivation(configValidationObj) {
    const formList = Array.from(document.querySelectorAll(configValidationObj.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, configValidationObj);
    });
}
validationActivation(configValidationObj);

//Validation code