 const initialCards = [{
         name: 'Архыз',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
     },
     {
         name: 'Челябинская область',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
     },
     {
         name: 'Иваново',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
     },
     {
         name: 'Камчатка',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
     },
     {
         name: 'Холмогорский район',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
     },
     {
         name: 'Байкал',
         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
     }
 ];

 //Массив с изначальными карточками
 import { openPopup, submitCard } from '../index.js';


 class Card {
     constructor(name, link) {
         this.name = name;
         this.link = link;
     };

     _getTemplate = (e) => {
         const cardElement = document.querySelector('#add-card').content;
         console.log(cardElement);
         const card = cardElement.querySelector('.element').cloneNode(true);
         return card
     };

     generateCard = (e) => {

         this._element = this._getTemplate();
         this._element.querySelector(".element__img").src = `#`;

         this._element.querySelector(".element__img").alt = "Фотография " + `${this._name}`;
         this._element.querySelector(".element__name").textContent = `${this._name}`;

         this._addEventListeners();
         return this._element;
     };

     _openPopupHandler = (e) => {
         hugeImgName.textContent = this.name;
         hugeImgImg.src = this.link;
         openPopup(hugeImg);
     };

     _addEventListeners = (e) => {
         this._element.addEventListener('mousedown', (evt) => {
             if (evt.target.classList.contains('element__like')) {
                 evt.target.classList.toggle('element__like_active');
             }
         });
         this._element.addEventListener('mousedown', (evt) => {
             if (evt.target.classList.contains('element__trashbox')) {
                 evt.target.closest('.element').remove();
             }
         });
         this._element.addEventListener('mousedown', (evt) => {
             if (evt.target.classList.contains('element__img')) {
                 this._openPopupHandler();
             }
         });
     }
 };

 function renderInitialCards() {
     initialCards.forEach((item) => {
         submitCard(item.name, item.link);
     })
 };
 export { renderInitialCards, Card };
