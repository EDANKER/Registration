let input_name = document.getElementById("input-name");
let input_password = document.getElementById("input-password");
let erorr_input = document.getElementById("erorr");
let elementp = document.createElement("p");

const texterorr = "ввидите данные";
const textnoname = "ввидите логин";
const textnopassword = "ввидите пароль";

function button_erorr() {
    if (input_name.value.length === 0 && input_password.value.length === 0) {
        erorr_input.innerHTML = texterorr;
        erorr_input.appendChild(elementp);
    }

    else if (input_name.value.length === 0){
        erorr_input.innerHTML = textnoname;
        erorr_input.appendChild(elementp);
    }

   else if (input_password.value.length === 0){
        erorr_input.innerHTML = textnopassword;
        erorr_input.appendChild(elementp)
    }

}