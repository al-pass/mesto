let editNamePopupTemplate = document.querySelector('#edit-name-popup').content;
let main = document.querySelector('#main');
let editNamePopupCreate = editNamePopupTemplate.querySelector('.edit-popup').cloneNode(true);
editNamePopupCreate.querySelector('.edit-popup__title').textContent = "Редактировать профиль";
editNamePopupCreate.querySelector('.edit-popup__submit').textContent = "Сохранить";
main.append(editNamePopupCreate);
//Создание эдит попапа
let addCardPopupTemplate = document.querySelector('#add-card-popup').content;
let addCardPopupCreate = addCardPopupTemplate.querySelector('.add-card-popup').cloneNode(true)
addCardPopupCreate.querySelector('.add-card-popup__title').textContent = "Новое место";
addCardPopupCreate.querySelector('.add-card-popup__submit').textContent = "Сохранить";
main.append(addCardPopupCreate);
//Создание попапа создания карточки
let addCardtemplate = document.querySelector('#add-card').content;
let addCardCreate = addCardtemplate.querySelector('.element').cloneNode(true);
let cardElemens = document.querySelector('.elements');
//Создание карточки
let hugeImgTemplate = document.querySelector('#huge-img').content;
const hugeImgCreate = hugeImgTemplate.querySelector('.huge-img').cloneNode(true);
main.append(hugeImgCreate);
// Создание hugeImg.



let editNamePopup = document.querySelector('.edit-popup')
let editName = document.getElementById('inp-name');
let editDesc = document.getElementById('inp-desc');
let exisName = document.querySelector('.profile__profile-info-name');
let exisDesc = document.querySelector('.profile__profile-info-desc');
let editNameCloseIcon = document.querySelector('.edit-popup__close-icon');
let editNameOpenIcon = document.querySelector('.profile__profile-info-edit-button');
let editNameForm = document.getElementById('edit-name-form');
//Переменные необходимые для работы с попапоп редактирующим имя


let addCardPopup = document.querySelector('.add-card-popup')
let addCardCloseIcon = document.querySelector('.add-card-popup__close-icon');
let addCardOpenIcon = document.querySelector('.profile__add-button');
let addCardForm = document.getElementById('add-card-form');
let addCardName = document.getElementById('inp-card-name');
let addCardLink = document.getElementById('inp-card-link');
//Переменные нобходимые для работы с попапом добавляющим карточки


let hugeImgCloseIcon = hugeImgCreate.querySelector('.huge-img__close-icon');
const hugeImgImg = hugeImgCreate.querySelector('.huge-img__img');
const hugeImgName = hugeImgCreate.querySelector('.huge-img__name');
//Переменные нобходимые для работы с попапом hugeImg


let likes = document.querySelectorAll(".element__like");
// likes in cards
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

function changeNameInfo(evt) {
    evt.preventDefault();
    exisName.textContent = editName.value;
    exisDesc.textContent = editDesc.value;
    closePopup(editNamePopup);
};

function openPopup(popupType, ...text) {
    console.log('open popup')
    popupType.classList.add('active');
    for (let i = 1; i <= text.length; i += 2) {
        text[i - 1].value = text[i].textContent;
    }
};

function closePopup(popupType) {
    popupType.classList.remove('active');
}
// Такой метод предотвращения вызова функиции называется, методом каррирования, но я несколько не понимаю механизм несмотря на то, что прочитал множество статей на этот счет. Могли бы вы в 2 словах описать почему дополнительная оболочка предотвращает вызов функции.
function addFirstSixCards(initialCards) {
    initialCards.forEach((item) => {
        addCardCreate = addCardtemplate.querySelector('.element').cloneNode(true);
        addCardCreate.querySelector(".element__img").src = `${item.link}`;
        addCardCreate.querySelector(".element__img").alt = "Фотография " + `${item.name}`;
        addCardCreate.querySelector(".element__name").textContent = `${item.name}`;
        cardElemens.append(addCardCreate);
        addCardCreate.querySelector('.element__like').addEventListener('click', (evt) => {
            console.log('aaa')
            const eventTarget = evt.target;
            eventTarget.classList.toggle('element__like_active');
        });
        addCardCreate.querySelector('.element__trashbox').addEventListener('click', (evt) => {
            console.log('bbb')
            const eventTarget = evt.target;
            const deleteCard = eventTarget.closest('.element');
            deleteCard.remove();
        });
        addCardCreate.querySelector('.element__img').addEventListener('click', (evt) => {
            console.log('huuuuuuge');
            const eventTarget = evt.target;
            const card = eventTarget.parentElement;
            openPopup(hugeImgCreate);
            hugeImgName.textContent = card.querySelector('.element__name').textContent;
            hugeImgImg.src = card.querySelector('.element__img').src;
        });
    })
}

addFirstSixCards(initialCards);

function addCard(evt) {
    evt.preventDefault();
    addCardCreate = addCardtemplate.querySelector('.element').cloneNode(true);
    addCardCreate.querySelector(".element__img").src = `${addCardLink.value}`;
    addCardCreate.querySelector(".element__img").alt = "Фотография " + `${addCardName.value}`;
    addCardCreate.querySelector(".element__name").textContent = `${addCardName.value}`;
    cardElemens.append(addCardCreate);
    addCardCreate.querySelector('.element__like').addEventListener('click', (evt) => {
        console.log('aaa');
        evt.target.classList.toggle('element__like_active');
    });
    addCardCreate.querySelector('.element__trashbox').addEventListener('click', (evt) => {
        console.log('bbb');
        const eventTarget = evt.target;
        const deleteCard = eventTarget.closest('.element');
        deleteCard.remove();
    });
    addCardCreate.querySelector('.element__img').addEventListener('click', (evt) => {
        console.log('huuuuuuge');
        const eventTarget = evt.target;
        const card = eventTarget.parentElement();
        hugeImgCreate.querySelector('.element__img').src = `${card.src}`;
        hugeImgCreate.querySelector("element__name").textContent = `${card.textContent}`;
        openPopup(hugeImgCreate);
    });
    addCardCreate.querySelector('.element__img').addEventListener('click', (evt) => {
        console.log('huuuuuuge');
        const eventTarget = evt.target;
        const card = eventTarget.parentElement;
        openPopup(hugeImgCreate);
        hugeImgName.textContent = card.querySelector('.element__name').textContent;
        hugeImgImg.src = card.querySelector('.element__img').src;
    });
}
editNameOpenIcon.addEventListener("click", (evt) => { openPopup(editNamePopup, editName, exisName, editDesc, exisDesc) });
//(элемент на который необходимо нажать).addEventListener ("click", openPopup((необходимый попап), (поле в которое нужно заполнить информацию), (информация которую нужно заполнить) ((ограничения на количество полей нет)));
editNameCloseIcon.addEventListener("click", (evt) => { closePopup(editNamePopup) });
editNameForm.addEventListener("submit", changeNameInfo);
//функия отвечающая за изменение текста в профиле

addCardOpenIcon.addEventListener("click", (evt) => { openPopup(addCardPopup) });
addCardCloseIcon.addEventListener("click", (evt) => { closePopup(addCardPopup) });
addCardForm.addEventListener('submit', addCard);

hugeImgCloseIcon.addEventListener("click", (evt) => { closePopup(hugeImgCreate) });