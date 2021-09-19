const addCardtemplate = document.querySelector('#add-card').content;
const cardElemens = document.querySelector('.elements');
//Создание карточки

const editNamePopup = document.querySelector('.edit-popup')
const editName = document.getElementById('inp-name');
const editDesc = document.getElementById('inp-desc');
const exisName = document.querySelector('.profile__profile-info-name');
const exisDesc = document.querySelector('.profile__profile-info-desc');
const editNameCloseIcon = document.querySelector('.edit-popup__close-icon');
const editNameOpenIcon = document.querySelector('.profile__profile-info-edit-button');
const editNameForm = document.getElementById('edit-name-form');
//Переменные необходимые для работы с попапоп редактирующим имя

const addCardPopup = document.querySelector('.add-card-popup')
const addCardCloseIcon = document.querySelector('.add-card-popup__close-icon');
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

function changeNameInfo(evt) {
    evt.preventDefault();
    exisName.textContent = editName.value;
    exisDesc.textContent = editDesc.value;
    closePopup(editNamePopup);
};

function openPopup(popupType) {
    console.log('open popup')
    popupType.classList.add('active');
};

function closePopup(popupType) {
    popupType.classList.remove('active');
}

// Прошу прощения, это был старый код. 
initialCards.forEach((item) => {
    submitCard(item.name, item.link)
})


function createCard(name, link) {
    const card = addCardtemplate.querySelector('.element').cloneNode(true);
    card.querySelector(".element__img").src = `${link}`;
    card.querySelector(".element__img").alt = "Фотография " + `${name}`;
    card.querySelector(".element__name").textContent = `${name}`;
    return card
};

function addEvetListenersToCards() {
    cardElemens.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('element__like')) {
            console.log('Sempai liked me');
            evt.target.classList.toggle('element__like_active');
        }
    })
    cardElemens.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('element__trashbox')) {
            const aim = evt.target;
            console.log('Dont you need me anymore, Sempai');
            aim.closest('.element').remove();
        }
    });
    cardElemens.addEventListener('click', (evt) => {
        console.log('what a huuuuuuge pic it is, Sempai');
        if (evt.target.classList.contains('element__img')) {
            const aim = evt.target;
            openPopup(hugeImg);
            hugeImgName.textContent = aim.closest('.element').querySelector('.element__name').textContent;
            hugeImgImg.src = aim.closest('.element').querySelector('.element__img').src;
        }
    });
};
addEvetListenersToCards();

function renderCard(card) {
    cardElemens.prepend(card);

};

function submitCard(name, link, evt) {
    if (arguments.length > 2) { evt.preventDefault(); }
    renderCard(createCard(name, link));
    name.value = "";
    link.value = "";
    closePopup(addCardPopup);
};


editNameOpenIcon.addEventListener("click", (evt) => {
    openPopup(editNamePopup);
    editName.value = exisName.textContent;
    editDesc.value = exisDesc.textContent;
});

//(элемент на который необходимо нажать).addEventListener ("click", openPopup((необходимый попап), (поле в которое нужно заполнить информацию), (информация которую нужно заполнить) ((ограничения на количество полей нет)));
editNameCloseIcon.addEventListener("click", (evt) => { closePopup(editNamePopup) });
editNameForm.addEventListener("submit", changeNameInfo);
//функия отвечающая за изменение текста в профиле

addCardOpenIcon.addEventListener("click", (evt) => { openPopup(addCardPopup) });
addCardCloseIcon.addEventListener("click", (evt) => { closePopup(addCardPopup) });
addCardForm.addEventListener('submit', (evt) => { submitCard(addCardName.value, addCardLink.value, evt) });
hugeImgCloseIcon.addEventListener("click", (evt) => { closePopup(hugeImg) });

//Previous sprint


const popupBackground = Array.from(document.querySelectorAll('.bg'));
const body = document.querySelector('.page');
const closePopupActions = ['click', 'keydown'];
closePopupActions.forEach(function(action) {
    body.addEventListener(action, (evt) => {
        let currentPopup = body.querySelector('.active')
        if (evt.target.classList.contains('bg')) {
            closePopup(currentPopup);
        } else if (evt.key === 'Escape') {
            closePopup(currentPopup)
        }
    })
})