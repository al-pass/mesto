export class UserInfo {
    constructor({ name, descriprion }) {
        this._name = name;
        this._desc = descriprion;
    }

    getUserInfo = () => {

        return {
            name: this._name.textContent,
            desc: this._desc.textContent,
        }
    }

    setUserInfo = (values) => {
            this._name.textContent = values[0];
            this._desc.textContent = values[1];
        }
        //[0]- name, [1] - description
}