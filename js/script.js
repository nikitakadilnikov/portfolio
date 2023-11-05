const hamburger = document.querySelector(".hamburger");//неизменая перемена в которую попадает гамбургер
const navLinks = document.querySelector(".nav__links");//неизменая перемена в которую попадает див с класом nav__links 
hamburger.onclick = function () {//при клиеке на гамбургер запускается функцыя
    hamburger.classList.toggle("hamburger_active");//переключается класс у гамбургера
    navLinks.classList.toggle("nav__links_active");//переключается класс у nav__links 
}

const navLinksAll = document.querySelectorAll(".nav__links a");//неизменая перемена в которую попадает все ссылки из дива с классаом nav__links

for(let i=0;i<4;i++){//цикл который работает 4 раза , переменая i увеличивается нв 1 
    console.log(i)// выводим даные в кансоль 
    navLinksAll[i].onclick = function () { //при нажатии на любую ссылку запускается функция 
        hamburger.classList.remove("hamburger_active");//удаляем у гамбургера класс
        navLinks.classList.remove("nav__links_active");//удаляем у  nav__links  класс
    }
}




