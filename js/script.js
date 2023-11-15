const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
}

const navLinksAll = document.querySelectorAll(".nav__links a");

for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
    }
}

const tokenTg = "6951046334:AAFt7lerf2Qptumrk0BmFx7RQuEzGaVb1Mk";
const chatIdTg = "5712656420";
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrapper");
form.onsubmit = function () {
    const inputName = document.querySelector("#name");
    const name = inputName.value;
    const inputEmail = document.querySelector("#email");
    const email = inputEmail.value;
    const textaria = document.querySelector("#comment");
    const comment = textaria.value;
    const messageText = `❗Новая заявка с сайта\n😀 Имя -  ${name}\n📭 Почта - ${email}\n📃 Комментарий - ${comment}`;
    const url = `https://api.telegram.org/bot${tokenTg}/sendMessage`;
    const params = {
        chat_id: chatIdTg,
        text: messageText,
    };
    axios.post(url, params)
        .then(response => {
            console.log('Сообщение успешно отправлено:', response.data);
            wrapper.classList.add("wrapper_active");
            setTimeout(() => {
                form.reset();
                wrapper.classList.remove("wrapper_active");
            }, 3000);
        })
        .catch(error => {
            console.error('Ошибка при отправке сообщения:', error);
        });
    return false
}






