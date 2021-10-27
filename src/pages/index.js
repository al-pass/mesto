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
import { ValidationClass } from '../components/Validation.js';
import { Section as SectionClass } from '../components/Section.js'
import { Card as CardClass } from '../components/Card.js';
import { PopupWithImage as PopupWithImageClass } from '../components/PopupWithImage.js';
import { PopupWithForm as PopupWithFormClass } from '../components/PopupWithForm.js';
import { UserInfo as UserInfoClass } from '../components/UserInfo.js';

export const validationForEdditProfile = new ValidationClass(configValidationObj, editProfilePopup);
export const validationForAddCard = new ValidationClass(configValidationObj, addCardPopup);
validationForEdditProfile.activateValidation();
validationForAddCard.activateValidation();
// activate validation

const profileInfo = new UserInfoClass({
    name: existingName,
    descriprion: existingDesc,
});

const cardImgPopup = new PopupWithImageClass(hugeImg);
cardImgPopup.setEventListeners();


export const cardsList = new SectionClass({
            data: initialCards,
            renderer: (item) => {
                cardsList.addItem(createCard(item, 'add-card'));
            }
        },
        '.elements')
    // section arguments: 1)object, where Data needs array of cards, Renderer is a 
    //function which explains how to render cards. 2) blocke where cards will be rendered 
cardsList.renderItems();


// rendering card
function createCard(item, cardForm) {
    const newCard = new CardClass(item, cardForm, (name, link) => {
        //card arguments are: 1) object with data and link. 2) type of card we need to make(form).
        //3) function of huge img popup
        cardImgPopup.open(name, link);
    });
    const cardElement = newCard.generateCard();
    console.log(cardElement);
    return cardElement;
}

export const popupsWithFormEditProfile = new PopupWithFormClass(editProfilePopup, (values, evt) => {
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

export const popupsWithFormAddCard = new PopupWithFormClass(addCardPopup, (values, evt) => {
    evt.preventDefault();
    cardsList.addItem(createCard({ name: values[0], link: values[1] }, 'add-card'));
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