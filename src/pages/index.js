import './index.css';
import {
    configValidationObj,
    editProfilePopup,
    editNameInput,
    editDescInput,
    existingName,
    existingDesc,
    editProfileOpenButton,
    addCardPopup,
    addCardOpenButton,
    hugeImg,
    cardElements,
} from '../utils/constants.js';
import { initialCards } from '../utils/initial-cards.js';
import { ValidationClass as validationClass } from '../components/Validation.js';
import { Selector as selectorClass } from '../components/Selector.js'
import { Card as cardClass } from '../components/Card.js';
import { PopupWithImage as popupWithImageClass } from '../components/PopupWithImage.js';
import { PopupWithForm as popupWithFormClass } from '../components/PopupWithForm.js';
import { UserInfo as userInfoClass } from '../components/UserInfo.js';

export const validationForEdditProfile = new validationClass(configValidationObj, editProfilePopup);
export const validationForAddCard = new validationClass(configValidationObj, addCardPopup);
validationForEdditProfile.activateValidation();
validationForAddCard.activateValidation();
// activate validation

const profileInfo = new userInfoClass({
    name: existingName,
    descriprion: existingDesc,
});

export const popupsWithFormEditProfile = new popupWithFormClass(editProfilePopup, (values, evt) => {
    evt.preventDefault();
    profileInfo.setUserInfo(values);
    popupsWithFormEditProfile.close();
});
popupsWithFormEditProfile.setEventListeners();
// edit profile submit behavior

editProfileOpenButton.addEventListener("click", () => {
    const profileData = profileInfo.getUserInfo();
    editNameInput.value = profileData.name;
    editDescInput.value = profileData.desc;
    validationForEdditProfile.resetValidation();
    popupsWithFormEditProfile.open();
});
// edit profile open listener

export const popupsWithFormAddCard = new popupWithFormClass(addCardPopup, (values, evt) => {
    evt.preventDefault();
    renderCard({ name: values[0], link: values[1] }, 'add-card');
    popupsWithFormAddCard.close();
});
// [0] and [1] in values means order in popup. In add Card 0 - name 1 - link
popupsWithFormAddCard.setEventListeners();
//add card submit behavior

addCardOpenButton.addEventListener("click", () => {
    validationForAddCard.resetValidation();
    popupsWithFormAddCard.open();
});
// add card open listener
//added reset validation because after closing form ( = reseting it in PopupWithForm.close(), should cause  reset error in span as well.)

export function renderCard(element, cardSelector) {
    const cardsList = new selectorClass({
            data: element,
            renderer: (item) => {
                const newCard = new cardClass(item, cardSelector, (name, link) => {
                    const cardImgPopup = new popupWithImageClass(name, link, hugeImg)
                    cardImgPopup.open();
                });
                const cardElement = newCard.generateCard();

                cardsList.addItem(cardElement);

            }
        },
        cardElements)

    cardsList.renderItem();
}
// rendering card
function renderInitialCards() {
    initialCards.forEach((item) => {
        renderCard(item, 'add-card');
    })
}
renderInitialCards();
//render initial 6 cards