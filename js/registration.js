let input_mail = document.getElementById("mail");
let input_login = document.getElementById("login");
let input_password = document.getElementById("input-password");
let input_password_replace = document.getElementById("input-password-raplase");
let erorr_input = document.getElementById("erorr");

let mail_label = document.getElementById("reg_label");
let login_lable = document.getElementById("login_lable");
let pass_lable = document.getElementById("pass_lable");
let passrep_lable = document.getElementById("passrep_lable");

let add = document.createElement("p");

const texterorr = "введите данные";
const textmail = "введите почту";
const textlogin = "введите логин";
const textpass = "введите пароль";
const textpassreply = "повторите пароль";

const textremail = "введите правильно почту \nпример: edankryzo@mail.ru ";
const textreglogin = "только латиница";
const textregpass = "ваш пароль слишком слабый\n используйете: a,Z,@ ";
const textregpassreply = "пароли не совпадают";

const regmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const reglogin = /^[a-zA-Z\s]+$/;
const regpassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
function regis() {

    if (input_mail.value.length === 0 && input_login.value.length === 0 &&
        input_password.value.length === 0 && input_password_replace.value.length === 0) {
        erorr_input.innerHTML = texterorr;
        erorr_input.appendChild(add);
    } else if (input_mail.value.length === 0) {
        erorr_input.innerHTML = textmail;
        erorr_input.appendChild(add);
    } else if (input_login.value.length === 0) {
        erorr_input.innerHTML = textlogin;
        erorr_input.appendChild(add);
    } else if (input_password.value.length === 0) {
        erorr_input.innerHTML = textpass;
        erorr_input.appendChild(add);
    } else if (input_password_replace.value.length === 0) {
        erorr_input.innerHTML = textpassreply;
        erorr_input.appendChild(add);
    }

    if(!regmail.test(input_mail.value)){
        mail_label.innerHTML = textremail;
    }else if (regmail.test(input_mail.value)){
        mail_label.innerHTML = "";
    }

    if (!reglogin.test(input_login.value)){
        login_lable.innerHTML = textreglogin;
    }else if (reglogin.test(input_login.value)){
        login_lable.innerHTML = "";
    }

    if (!regpassword.test(input_password.value)){
        pass_lable.innerHTML = textregpass;
    }else if(regpassword.test(input_password.value)){
        pass_lable.innerHTML = "";
    }

    if (input_password.value.length !== input_password_replace.value.length || input_password_replace.value.length === 0){
        passrep_lable.innerHTML = textregpassreply;
    }else if (input_password.value.length === input_password_replace.value.length){
        passrep_lable.innerHTML = "";
    }


}
