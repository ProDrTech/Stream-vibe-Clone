window.addEventListener("DOMContentLoaded", (e) => {
    window.onscroll = () => {
        if (scrollY === 0) {
            document.querySelector("header").classList.remove("sticky");
            document.querySelector("header").classList.add("bg-trans");
        }
        if (scrollY > 0) {
            document.querySelector("header").classList.remove("bg-trans");
            document.querySelector("header").classList.add("sticky");
        }
    };

    const dataImg = document.querySelector(".content__wrapper div[second]");
    cardImages.hero__fcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-first]").append(div);
    });
    cardImages.hero__scard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-second]").append(div);
    });
    cardImages.hero__tcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-thrind]").append(div);
    });
    cardImages.hero__fourthcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-fourth]").append(div);
    });

    const eye = document.querySelectorAll(".login__inputs div img");
    eye.forEach(item => {
        item.addEventListener("click", (e) => {
            if(e.target.closest('div').querySelector('input').getAttribute('type') === 'password' && e.target.closest('div').querySelector('input').value){
                e.target.closest('div').querySelector('input').setAttribute('type', 'text');
                e.target.setAttribute('src', './Images/Icons/hidden.svg');
            } else {
                e.target.closest('div').querySelector('input').setAttribute('type', 'password');
                e.target.setAttribute('src', './Images/Icons/eye.svg');
            }
        })
    })
});
