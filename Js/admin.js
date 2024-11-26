window.addEventListener("DOMContentLoaded", () => {
    if (window.localStorage.getItem("success") !== "200") {
        window.location.href = "login.html";
        return;
    }

    const form = document.querySelector("form");
    const alertBox = document.querySelector(".alert-danger.d-none");
    const alertMessage = document.querySelector(".alert-danger strong");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const numberInput = form.querySelector('input[type="number"]');
        const cardInput = form.querySelector('input[card]');
        const cardObjInput = form.querySelector('input[card__obj]');
        const genreSelect = form.querySelector("select");
        const genreValue = genreSelect.value;

        const cardCount = Number(cardInput.value.trim());
        if (cardCount === 0) {
            showAlert('Eng kichik qiymat "1"');
            numberInput.value = "";
            return;
        }

        if (!genresDb[genreValue]) {
            genresDb[genreValue] = [];
        }

        const existingCards = genresDb[genreValue];
        for (let i = existingCards.length + 1; i <= cardCount; i++) {
            existingCards.push([]);
        }

        const obj = {
            bg: form.querySelector('input[text]').value.trim(),
            title: form.querySelector('input[text1]').value.trim(),
            desc: form.querySelector('textarea[textarea]').value.trim(),
            minuts: form.querySelector('input[text2]').value.trim(),
            year: form.querySelector('input[text3]').value.trim(),
            translate: [
                form.querySelector('input[text4]').value.trim(),
                form.querySelector('input[text5]').value.trim(),
                form.querySelector('input[text6]').value.trim(),
            ],
            genres: [
                form.querySelector('input[text7]').value.trim(),
                form.querySelector('input[text8]').value.trim(),
                form.querySelector('input[text9]').value.trim(),
                form.querySelector('input[text10]').value.trim(),
                form.querySelector('input[text11]').value.trim(),
            ],
            director: {
                img: form.querySelector('input[text12]').value.trim(),
                name: form.querySelector('input[text13]').value.trim(),
                from: form.querySelector('input[text14]').value.trim(),
            },
            music: {
                img: form.querySelector('input[text15]').value.trim(),
                name: form.querySelector('input[text16]').value.trim(),
                from: form.querySelector('input[text17]').value.trim(),
            },
            actors : [
                './Images/Genre/Action/Actors/Actor/1.webp',
                './Images/Genre/Action/Actors/Actor/2.webp',
                './Images/Genre/Action/Actors/Actor/3.webp',
                './Images/Genre/Action/Actors/Actor/4.webp',
                './Images/Genre/Action/Actors/Actor/5.webp',
                './Images/Genre/Action/Actors/Actor/6.webp',
                './Images/Genre/Action/Actors/Actor/7.webp',
                './Images/Genre/Action/Actors/Actor/8.webp',
                './Images/Genre/Action/Actors/Actor/9.webp',
                './Images/Genre/Action/Actors/Actor/10.webp',
                './Images/Genre/Action/Actors/Actor/11.webp',
                './Images/Genre/Action/Actors/Actor/12.webp',
                './Images/Genre/Action/Actors/Actor/13.webp',
                './Images/Genre/Action/Actors/Actor/14.webp',
                './Images/Genre/Action/Actors/Actor/15.webp',
                './Images/Genre/Action/Actors/Actor/16.webp',
                './Images/Genre/Action/Actors/Actor/17.webp',
                './Images/Genre/Action/Actors/Actor/18.webp',
                './Images/Genre/Action/Actors/Actor/19.webp',
                './Images/Genre/Action/Actors/Actor/20.webp',
                './Images/Genre/Action/Actors/Actor/21.webp',
            ]
        };

        const cardIndex = Number(cardObjInput.value.trim()) - 1;
        if (!existingCards[cardIndex]) {
            showAlert("Sizda buncha card yo'q! Qaytadan urinib ko'ring.");
            cardObjInput.value = "";
            return;
        }

        existingCards[cardIndex].push(obj);

        window.localStorage.setItem("genresDb", JSON.stringify(genresDb));

        numberInput.value = "";
        cardInput.value = "";
        cardObjInput.value = "";

        window.location.href = "index.html";
    });

    function showAlert(message) {
        alertBox.classList.remove("d-none");
        alertMessage.textContent = message;
    }
});
