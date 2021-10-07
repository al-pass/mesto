const cardElements = document.querySelector('.elements');
//Cards pole

const editNamePopup = document.querySelector('.edit-popup');
const editName = document.getElementById('inp-name');
const editDesc = document.getElementById('inp-desc');
const exisName = document.querySelector('.profile__profile-info-name');
const exisDesc = document.querySelector('.profile__profile-info-desc');
const editNameCloseIcon = document.querySelector('.edit-popup__close-icon');
const editNameOpenIcon = document.querySelector('.profile__profile-info-edit-button');
const editNameForm = document.getElementById('edit-name-form');
const editSubmitButton = editNameForm.querySelector('.edit-popup__submit');
//Переменные необходимые для работы с попапоп редактирующим имя

const addCardPopup = document.querySelector('.add-card-popup');
const addCardOpenIcon = document.querySelector('.profile__add-button');
const addCardForm = document.getElementById('add-card-form');
const addCardName = document.getElementById('inp-card-name');
const addCardLink = document.getElementById('inp-card-link');
//Переменные нобходимые для работы с попапом добавляющим карточки

const hugeImg = document.querySelector('.huge-img');
const hugeImgCloseIcon = document.querySelector('.huge-img__close-icon');
const hugeImgImg = document.querySelector('.huge-img__img');
const hugeImgName = document.querySelector('.huge-img__name');
//Переменные нобходимые для работы с попапом hugeImg

const likes = document.querySelectorAll(".element__like");
// likes in cards


function changeNameInfo(evt) {
   evt.preventDefault();
   exisName.textContent = editName.value;
   exisDesc.textContent = editDesc.value;
   closePopup(editNamePopup);
};

function errorMessageInFormsHandler(popupType) {
   if (popupType.querySelector('form')) {
       Array.from(popupType.querySelectorAll('input')).forEach((input) => {
           hideInputError(popupType, input);
       })
   }
};

function openPopup(popupType) {
   popupType.classList.add('active');
   document.addEventListener('keydown', closeByEsc);
   document.addEventListener('mousedown', closeByOverlayClick);
   document.addEventListener('mousedown', closeByCrossClick);
};

function closePopup(popupType) {
   popupType.classList.remove('active');
   document.removeEventListener('keydown', closeByEsc);
   document.removeEventListener('mousedown', closeByOverlayClick);
   document.removeEventListener('mousedown', closeByCrossClick);
};

//при закрытии попапов они будут очищаться от спанов ошибок и ресетиться к базовому значению чтобы при нарушении последовательности логики попапа сообщения об ошибках исчезали


editNameOpenIcon.addEventListener("click", () => {
   editName.value = exisName.textContent;
   editDesc.value = exisDesc.textContent;
   editSubmitButton.classList.remove(configValidationObj.inactiveButtonClass);
   editSubmitButton.disabled = false;
   //чтобы при открытии пользовательн мог сразу принять ту же версию без изменений
   openPopup(editNamePopup);

});

editNameForm.addEventListener("submit", changeNameInfo);
//функия отвечающая за изменение текста в профиле

addCardOpenIcon.addEventListener("click", () => {
   const addCardSumbitButton = addCardPopup.querySelector('.form__submit');
   addCardSumbitButton.classList.add(configValidationObj.inactiveButtonClass);
   addCardSumbitButton.disabled = true;
   openPopup(addCardPopup)
});
addCardForm.addEventListener('submit', (evt) => { submitCard(addCardName.value, addCardLink.value, evt) });

//Previous sprint

function closeByEsc(evt) {
   if (evt.key === 'Escape') {
       const openedPopup = document.querySelector('.active');
       closePopup(openedPopup);
       errorMessageInFormsHandler(openedPopup);
   }
};

function closeByOverlayClick(evt) {
   if (evt.target.classList.contains('bg')) {
       const openedPopup = document.querySelector('.active');
       closePopup(openedPopup);
       errorMessageInFormsHandler(openedPopup);
   }
};

function closeByCrossClick(evt) {
   if (evt.target.classList.contains('close-icon')) {
       const openedPopup = document.querySelector('.active');
       closePopup(openedPopup);
       errorMessageInFormsHandler(openedPopup);
   }
};

function submitCard(name, link, evt) {
   if (arguments.length === 3) { evt.preventDefault(); }
   const newcard = new Card(name, link);
   const cardElement = newcard.generateCard();
   // Добавляем в DOM
   cardElements.prepend(cardElement);
};

export { openPopup, submitCard };
import { renderInitialCards, Card } from './script/card.js';

renderInitialCards();
