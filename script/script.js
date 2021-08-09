let names = document.querySelector('.edit-popup_input_name');
let desc = document.querySelector('.edit-popup_input_desc');
let form = document.getElementById('form');
let exisName = document.querySelector('.profile__profile-info-name');
let exisDesc = document.querySelector('.profile__profile-info-desc');

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


let closeIcon = document.querySelector('.edit-popup__close-icon');
let editIcon = document.querySelector('.profile__profile-info-edit-button');
let popup = document.querySelector('.edit-popup');

names.value = exisName.textContent;
desc.value = exisDesc.textContent;

function togglePopup() {
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
        names.value = exisName.textContent;
        desc.value = exisDesc.textContent;
    }
};
//фуркция отвечающая за закрытие и открытие попапа на изменения данных в профиле. 
editIcon.onclick = togglePopup;
closeIcon.onclick = togglePopup;