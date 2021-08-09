let names = document.getElementById('inp-name');
let desc = document.getElementById('inp-desc');
let form = document.getElementById('form');
let exisName = document.querySelector('.profile__profile-info-name');
let exisDesc = document.querySelector('.profile__profile-info-desc');

let closeIcon = document.querySelector('.edit-popup__close-icon');
let editIcon = document.querySelector('.profile__profile-info-edit-button');
let popup = document.querySelector('.edit-popup');


function changeInfo(evt) {
    evt.preventDefault();
    exisName.textContent = names.value;
    exisDesc.textContent = desc.value;
    names.value = "";
    desc.value = "";
    togglePopup();
};

form.addEventListener('submit', changeInfo);
//функия отвечающая за изменение текста в профиле


function togglePopup() {
    popup.classList.toggle('edit-popup__toggle');
    names.value = exisName.textContent;
    desc.value = exisDesc.textContent;
};
//фуркция отвечающая за закрытие и открытие попапа на изменения данных в профиле. 
editIcon.addEventListener("click", togglePopup);
closeIcon.addEventListener("click", togglePopup);