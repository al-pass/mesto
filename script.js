let names = document.querySelector('.edit-form__name');
let desc = document.querySelector('.edit-form__desc');
let submitBut = document.querySelector ('.edit-form__submit');
let exisName = document.querySelector('.profile__profile-info-name');
let exisDesc = document.querySelector('.profile__profile-info-desc');

function changeInfo(){
    exisName.textContent = names.value;
    exisDesc.textContent = desc.value;
    names.value="";
    desc.value="";
    togglePopup();
};

submitBut.onclick = changeInfo;



let closeIcon = document.querySelector('.edit-form__close-icon');
let editIcon = document.querySelector('.profile__profile-info-edit-button');
let popup = document.querySelector ('.edit-form');
function togglePopup() {
    if (popup.style.display === 'flex'){
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
        names.value=exisName.textContent;
        desc.value=exisDesc.textContent;
}
};
 
editIcon.onclick = togglePopup;
closeIcon.onclick = togglePopup;

