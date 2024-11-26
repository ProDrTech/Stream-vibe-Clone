window.addEventListener("DOMContentLoaded", async (e) => {

    const request = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Navoiy&units=metric&appid=96b947a45d33d7dc1c49af3203966408'),
        response = await request.json();

    document.querySelector('.temp').innerHTML = Math.round(response.main.temp)

    const tl = gsap.timeline({
        default: {
            duration: 0.5,
        },
    });

    tl.from(".hero__content h1[data-content]", {
        opacity: 0,
        y: 100,
    });

    tl.from(".hero__content p[data-content]", {
        opacity: 0,
        y: 100,
    });

    tl.from(".hero__content div[data-content]", {
        opacity: 0,
        y: 100,
    });

    const hero__fcard = document.querySelector(".wrapper__fcard"),
        hero__scard = document.querySelector(".wrapper__scard"),
        hero__tcard = document.querySelector(".wrapper__tcard"),
        hero__fourthcard = document.querySelector(".wrapper__fourthcard"),
        category__wrapper = document.querySelector(".category__wrapper"),
        hrs = document.querySelector(".hrs"),
        dataPrice = document.querySelectorAll("[data-price] span"),
        dataImg = document.querySelector(".content__wrapper div[second]");

    cardImages.hero__fcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        hero__fcard.append(div);
    });

    cardImages.hero__fcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        document.querySelector('.contact__cards [first]:first-child').append(div);
    });
    
    cardImages.hero__fcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-first]").append(div);
    });

    cardImages.hero__scard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        hero__scard.append(div);
    });

    cardImages.hero__scard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        document.querySelector('.contact__cards div[first]:nth-child(2)').append(div);
    });

    cardImages.hero__scard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-second]").append(div);
    });

    cardImages.hero__tcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        hero__tcard.append(div);
    });

    cardImages.hero__tcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        document.querySelector('.contact__cards div[first]:nth-child(3)').append(div);
    });

    cardImages.hero__tcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-thrind]").append(div);
    });

    cardImages.hero__fourthcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        hero__fourthcard.append(div);
    });

    cardImages.hero__fourthcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        document.querySelector('.contact__cards div[first]:nth-child(4)').append(div);
    });

    cardImages.hero__fourthcard.forEach((item) => {
        const div = document.createElement("div");
        div.setAttribute("style", `background-image: url("${item.img}")`);
        dataImg.querySelector("[data-fourth]").append(div);
    });

    heroArr.forEach(() => {
        const div = document.createElement("div");
        hrs.append(div);
    });

    hrs.querySelectorAll("div")[0].classList.add("active");
    const idxZero = (idx) => {
        if (idx == 0) {
            document.querySelector('img[alt="left-arrow"]').style.cssText =
                "opacity: .2";
        }
    };

    let idx = 0;
    const card = (idx = 0) => {
        category__wrapper.innerHTML = "";
        heroArr[idx].forEach((item) => {
            const div = document.createElement("div");
            div.classList.add("category__card");
            div.innerHTML = `
                <div class="category__imgs">
                    <img class="abs" src="./Images/Fade Out Bottom.svg" alt="">
                    <div>
                        ${item.first.img}
                        ${item.first.image}
                    </div>
                    <div>
                        ${item.second.img}
                        ${item.second.image}
                    </div>
                </div>
                <div class="category__text">
                    <span>${item.category}</span>
                    <img style="cursor: pointer" src="./Images/Icons/right-arrow.svg" alt="arrow">
                </div>
            `;
            category__wrapper.append(div);
        });

        // Category__card bosilishi
        category__wrapper
            .querySelectorAll(".category__card")
            .forEach((item) => {
                item.querySelector('img[alt="arrow"]').addEventListener(
                    "click",
                    (e) => {
                        window.localStorage.setItem(
                            "categoryCardGenre",
                            item.querySelector("span").textContent
                        );
                        window.location.href = "genre.html";
                    }
                );
                item.querySelector("img.abs").addEventListener("click", (e) => {
                    window.localStorage.setItem(
                        "categoryCardGenre",
                        item.querySelector("span").textContent
                    );
                    window.location.href = "genre.html";
                });
            });
    };

    card();
    if (idx == 0) {
        const tlSecond = gsap.timeline({
            default: {
                duration: 1,
            },
        });
        document
            .querySelectorAll(".category__wrapper .category__card")[0]
            .classList.add("card-1");
        document
            .querySelectorAll(".category__wrapper .category__card")[1]
            .classList.add("card-2");
        document
            .querySelectorAll(".category__wrapper .category__card")[2]
            .classList.add("card-3");
        document
            .querySelectorAll(".category__wrapper .category__card")[3]
            .classList.add("card-4");
        document
            .querySelectorAll(".category__wrapper .category__card")[4]
            .classList.add("card-5");

        tlSecond.from(".card-1", {
            x: 310,
        });
        tlSecond.from(".card-2", {
            x: 310,
        });
        tlSecond.from(".card-3", {
            x: 310,
        });
        tlSecond.from(".card-4", {
            x: 310,
        });
        tlSecond.from(".card-5", {
            x: 310,
        });
    }

    idxZero(idx);

    document.addEventListener("click", (e) => {
        const dots = hrs.querySelectorAll("div");

        if (
            e.target.classList.contains("right-arrow") ||
            e.target.getAttribute("alt") === "right-arrow"
        ) {
            if (idx < dots.length - 1) {
                dots[idx].classList.remove("active");
                idx++;
                dots[idx].classList.add("active");
                if (idx == 2) {
                    document.querySelector(
                        'img[alt="right-arrow"]'
                    ).style.cssText = "opacity: .2";
                }
                if (idx == 1) {
                    if (
                        document
                            .querySelector('img[alt="left-arrow"]')
                            .getAttribute("style")
                    ) {
                        document.querySelector(
                            'img[alt="left-arrow"]'
                        ).style.cssText = "opacity: 1;";
                    }
                }
                card(idx);
            }
        }

        if (
            e.target.classList.contains("left-arrow") ||
            e.target.getAttribute("alt") === "left-arrow"
        ) {
            if (idx > 0) {
                dots[idx].classList.remove("active");
                idx--;
                dots[idx].classList.add("active");
                if (idx == 1) {
                    if (
                        document
                            .querySelector('img[alt="right-arrow"]')
                            .getAttribute("style")
                    ) {
                        document.querySelector(
                            'img[alt="right-arrow"]'
                        ).style.cssText = "opacity: 1;";
                    }
                }
                if (idx == 0) {
                    document.querySelector(
                        'img[alt="left-arrow"]'
                    ).style.cssText = "opacity: .2";
                    card();
                }
                card(idx);
            }
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.getAttribute("alt") == "plus") {
            e.target
                .closest(".card")
                .querySelector('.faq__card img[alt="minus"]')
                .classList.remove("d-none");
            e.target.classList.add("d-none");

            const p = document.createElement("p");
            p.innerHTML =
                "StreamVibe is a streaming service that allows you to watch movies and shows on demand.";
            e.target
                .closest(".card")
                .querySelector(".faq__card [second]")
                .append(p);
            e.target
                .closest(".card")
                .querySelector(".faq__card").style.cssText =
                "align-items: start";
            e.target
                .closest(".card")
                .querySelector(".faq__card [second] h4").style.cssText =
                "margin-bottom: 20px";
        }
        if (e.target.getAttribute("alt") == "minus") {
            e.target
                .closest(".card")
                .querySelector('.faq__card img[alt="plus"]')
                .classList.remove("d-none");
            e.target.classList.add("d-none");
            e.target
                .closest(".card")
                .querySelector(".faq__card [second] p")
                .remove();
            e.target
                .closest(".card")
                .querySelector(".faq__card").style.cssText =
                "align-items: center";
            e.target
                .closest(".card")
                .querySelector(".faq__card [second] h4").style.cssText =
                "margin-bottom: 0px";
        }
    });

    const removeClass = () => {
        dataPrice.forEach((item) => {
            item.classList.remove("active");
        });
    };

    const addClass = (i = 0) => {
        dataPrice[i].classList.add("active");
    };

    removeClass();
    addClass();

    document.addEventListener("click", (e) => {
        dataPrice.forEach((item, idx) => {
            if (e.target == item) {
                removeClass();
                addClass(idx);

                if (idx == 0) {
                    document.querySelectorAll(
                        ".price__card div[second]"
                    )[0].innerHTML = "$9.99<span>/month</span>";
                    document.querySelectorAll(
                        ".price__card div[second]"
                    )[1].innerHTML = "$12.99<span>/month</span>";
                    document.querySelectorAll(
                        ".price__card div[second]"
                    )[2].innerHTML = "$14.99<span>/month</span>";
                }

                if (idx == 1) {
                    document.querySelectorAll(
                        ".price__card div[second]"
                    )[0].innerHTML = "$99.9<span>/year</span>";
                    document.querySelectorAll(
                        ".price__card div[second]"
                    )[1].innerHTML = "$129.9<span>/year</span>";
                    document.querySelectorAll(
                        ".price__card div[second]"
                    )[2].innerHTML = "$149.9<span>/year</span>";
                }
            }
        });
    });

    window.onscroll = () => {
        if (scrollY === 0) {
            document.querySelector("header").classList.remove("sticky");
            document.querySelector("header").classList.add("bg-trans");
        }
        if (scrollY > 200) {
            document.querySelector("header").classList.remove("bg-trans");
            document.querySelector("header").classList.add("sticky");
        }
    };

    const cardWrap = document.querySelector(".card-carousel");
    heroArr.forEach((item) => {
        item.forEach((childItem) => {
            const div = document.createElement("div");
            div.classList.add("category__card");
            div.innerHTML = `
                <div class="category__imgs">
                    <img class="abs" src="./Images/Fade Out Bottom.svg" alt="">
                    <div class="div">
                        ${childItem.first.img}
                        ${childItem.first.image}
                    </div>
                    <div class="div">
                        ${childItem.second.img}
                        ${childItem.second.image}
                    </div>
                </div>
                <div class="category__text">
                    <span class="span">${childItem.category}</span>
                    <a href="#">
                        <img src="./Images/Icons/right-arrow.svg" alt="arraw">
                    </a>
                </div>
            `;
            cardWrap.append(div);
        });
    });

    const arrowIcons = document.querySelectorAll(".arrow i"),
        firstImg = cardWrap.querySelectorAll(".category__card")[0];

    let isDragStart = false,
        prevPageX,
        prevScrollLeft,
        positionDiff;
    let firstImgWidth = firstImg.clientWidth + 20;
    arrowIcons.forEach((item) => {
        item.addEventListener("click", () => {
            cardWrap.scrollLeft +=
                item.id == "left" ? -firstImgWidth : firstImgWidth;
        });
    });

    const autoSlide = () => {
        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 22;
        let valDifference = firstImgWidth - positionDiff;

        if (cardWrap.scrollLeft > prevScrollLeft) {
            return (cardWrap.scrollLeft +=
                positionDiff > firstImgWidth / 3
                    ? valDifference
                    : -positionDiff);
        }
        cardWrap.scrollLeft -=
            positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    };

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = cardWrap.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        cardWrap.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        cardWrap.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
        isDragStart = false;
        cardWrap.classList.remove("dragging");
        autoSlide();
    };

    cardWrap.addEventListener("touchstart", dragStart);
    cardWrap.addEventListener("touchmove", dragging);
    cardWrap.addEventListener("touchend", dragStop);

    const width = () => {
        if (window.innerWidth >= 410) {
            let link = document.querySelector("[link]");
            link.setAttribute(
                "href",
                "https://unpkg.com/aos@2.3.1/dist/aos.css"
            );
            link.setAttribute("rel", "stylesheet");
            document.querySelector("head").append(link);
        }
    };

    width();

    window.addEventListener("resize", width);
});