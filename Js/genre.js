window.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector('title').innerHTML = `StreamVibe | ${window.localStorage.getItem('categoryCardGenre')}`
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
    
    const appendCard = document.querySelector('.movie__first__wrapper');
    let yigindi = 0;
    genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()].forEach((item, idx) => {
        yigindi++
        const div = document.createElement('div');
        div.classList.add('movie__first__cards');
        div.innerHTML = `
        <div class="movie__first__main">
            <div>
                <h3>Season<span> 0${yigindi}</span></h3>
                <h4 style="opacity: 0;"><span>9</span> Movies</h3>
            </div>
            <div imgs>
                <img src="./Images/Icons/bottom-arrow.svg" alt="firstBottom">
                <img class="d-none" src="./Images/Icons/bottom-arrow.svg" alt="secondBottom">
                <img class="d-none" src="./Images/Icons/top-arrow.svg" alt="topArrow">
            </div>
        </div>
        <div class="movie__first__bottom d-none"></div>
        `;
        appendCard.append(div)
        appendCard.querySelectorAll('.movie__first__main h3').forEach((item) => {
            let spanText = item.querySelector('span').textContent;
            if (parseInt(spanText, 10) > 9) {
                item.querySelector('span').textContent = parseInt(spanText,  10);
                item.querySelector('span').style.cssText = 'margin-left: 10px'
            }
        });
    });
    yigindi = 0;
    document.querySelectorAll('.movie__first__cards').forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            const append = item.querySelector('.movie__first__bottom')
            if (e.target == item.querySelector('div[imgs]') || e.target == item.querySelector('img[alt="firstBottom"]')) {
                append.innerHTML = ""

                if (genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx].length > 0) {
                    append.classList.remove('d-none')
                }

                genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx].forEach((item) => {
                    yigindi++
                    const div = document.createElement('div')
                    div.classList.add('movie__first__bottom__card')
                    div.innerHTML = `
                            <div first><span>0${yigindi}</span></div>
                            <div second style="background-image: url('${item.bg}');">
                                <img src="./Images/Sub Container.svg" alt="sub">
                                <a>
                                    <img src="./Images/rating.svg" alt="rating">
                                    <img src="./Images/Icons/pley.svg" alt="play">
                                </a>
                            </div>
                            <div three style="width: 1210px;">
                                <div div>
                                    <h6>${item.title}</h5>
                                    <div>
                                        <img src="./Images/Icons/oclock.svg" alt="oclock">
                                        <span>${item.minuts} min</span>
                                    </div>
                                </div>
                                <p>${item.desc}</p>
                            </div>
                    `
                    append.append(div)
                    append.querySelectorAll('[first]').forEach((item) => {
                        let spanText = item.querySelector('span').textContent;
                        if (parseInt(spanText, 10) > 9) {
                            item.querySelector('span').textContent = parseInt(spanText,  10);
                            item.querySelector('span').style.cssText = 'margin-left: 10px'
                        }
                    });
                })


                item.querySelector('.movie__first__main div:first-child h4').removeAttribute('style')

                item.querySelector('.movie__first__main div:first-child h4 span').innerHTML = genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx].length

                item.querySelector('[imgs] img[alt="topArrow"]').classList.remove('d-none')

                item.querySelector('img[alt="firstBottom"]').classList.add('d-none')
            }
            if (e.target == item.querySelector('div[imgs]') || e.target == item.querySelector('img[alt="topArrow"]')) {
                yigindi = 0
                item.querySelector('img[alt="firstBottom"]').classList.remove('d-none')
                item.querySelector('.movie__first__bottom').classList.add('d-none')
                item.querySelector('.movie__first__main div:first-child h4').setAttribute('style', 'opacity: 0;')

                if (!document.querySelector('.movie__right').classList.contains('d-none')) {
                    document.querySelectorAll('img[alt="firstBottom"]').forEach(item => {
                        item.classList.add('d-none')
                    })
                    document.querySelectorAll('img[alt="secondBottom"]').forEach(item => {
                        item.classList.remove('d-none')
                    })
                }

                item.querySelector('img[alt="topArrow"]').classList.add('d-none')
            }

            if (e.target == item.querySelector('div[imgs]') || e.target == item.querySelector('img[alt="secondBottom"]')) {
                append.innerHTML = ""

                if (genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx].length > 0) {
                    append.classList.remove('d-none')
                }

                genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx].forEach((item) => {
                    yigindi++
                    const div = document.createElement('div')
                    div.classList.add('movie__first__bottom__card')
                    div.innerHTML = `
                            <div first><span>0${yigindi}</span></div>
                            <div second style="background-image: url('${item.bg}');">
                                <img src="./Images/Sub Container.svg" alt="sub">
                                <a>
                                    <img src="./Images/rating.svg" alt="rating">
                                    <img src="./Images/Icons/pley.svg" alt="play">
                                </a>
                            </div>
                            <div three style="width: 590px;">
                                <div div>
                                    <h6>${item.title}</h5>
                                    <div>
                                        <img src="./Images/Icons/oclock.svg" alt="oclock">
                                        <span>${item.minuts} min</span>
                                    </div>
                                </div>
                                <p>${item.desc}</p>
                            </div>
                    `
                    append.append(div)
                })


                item.querySelector('.movie__first__main div:first-child h4').removeAttribute('style')

                item.querySelector('.movie__first__main div:first-child h4 span').innerHTML = genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx].length

                item.querySelector('[imgs] img[alt="topArrow"]').classList.remove('d-none')

                item.querySelector('img[alt="secondBottom"]').classList.add('d-none')
            }

            append.querySelectorAll('[second]').forEach((item, value) => {
                item.addEventListener('click', (e) => {

                    document.querySelector('.movie__right').classList.remove('d-none')
                    if (!document.querySelector('.movie__right').classList.contains('d-none')) {
                        document.querySelector('.movie__left').setAttribute('style', 'width: 1123px;')
                        document.querySelectorAll('[three]').forEach(item => {
                            item.style.cssText = "width: 590px"
                        })
                    }

                    document.querySelector('.hero-genre__wrapper').setAttribute('style', `background-image: url('${genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].bg}')`)

                    document.querySelector('.movie__right .first div ~ p').innerHTML = genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].year

                    document.querySelector('.movie__trans div[trans]').innerHTML = ""
                    genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].translate.forEach(trans => {
                        const div = document.createElement('div');
                        div.innerHTML = `<span>${trans}</span>`;
                        document.querySelector('.movie__trans div[trans]').append(div)
                    })

                    document.querySelector('.movie__genres div[trans]').innerHTML = ""
                    genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].genres.forEach(trans => {
                        const div = document.createElement('div');
                        div.innerHTML = `<span>${trans}</span>`;
                        document.querySelector('.movie__genres div[trans]').append(div)
                    })

                    document.querySelector('[director] [img]').setAttribute('style', `background-image: url('${genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].director.img}')`)

                    document.querySelector('[director] [img] ~ div h2').innerHTML = genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].director.name

                    document.querySelector('[director] [img] ~ div div').innerHTML = `From ${genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].director.from}`

                    document.querySelector('.music [director] [img]').setAttribute('style', `background-image: url('${genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].music.img}')`)

                    document.querySelector('.music [director] [img] ~ div h2').innerHTML = genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].music.name

                    document.querySelector('.music [director] [img] ~ div div').innerHTML = `From ${genresDb[localStorage.getItem('categoryCardGenre').toLowerCase()][idx][value].music.from}`
                })
            })
        })
    })

    document.querySelector('.movie__second h4').innerHTML = genresDb.actionDesc.text

    genresDb[window.localStorage.getItem('categoryCardGenre').toLocaleLowerCase()].forEach((item => {
        item.forEach(childItem => {
            childItem.actors.forEach(actors => {
                const div = document.createElement('div');
                div.classList.add('sliper')
                div.innerHTML = `
                    <div style="background-image: url('${actors}'"></div>
                `
                document.querySelector('[cast] ~ div').append(div)
            })
        })
    }))

    const sliper = document.querySelectorAll('[cast] ~ div .sliper');
    let transform = 0
    document.querySelector('[cast] [div] div[right]').addEventListener('click', (e) => {
        transform += 130;
        sliper.forEach(item => {
            item.style.cssText = `transform: translateX(-${transform}px)`
        })
        if (transform === 1170) {
            document.querySelector('[cast] [div] .right').removeAttribute('style')
            document.querySelector('[cast] [div] div[right]').style.cssText = 'display: none'
        } else if (transform < 1170) {
            document.querySelector('[cast] [div] div[right]').removeAttribute('style')
            document.querySelector('[cast] [div] .right').style.cssText = 'display: none'
        }
        if (transform > 0) {
            document.querySelector('[cast] [div] [left]').removeAttribute('style')
            document.querySelector('[cast] [div] .left').setAttribute('style', 'display: none')
        }
    })
    document.querySelector('[cast] [div] div[left]').addEventListener('click', (e) => {
        transform -= 130
        sliper.forEach(item => {
            item.style.cssText = `transform: translateX(-${transform}px)`
        })
        if (transform < 1170) {
            document.querySelector('[cast] [div] div[right]').removeAttribute('style')
            document.querySelector('[cast] [div] .right').style.cssText = 'display: none'
        }
        if (transform <= 0) {
            transform = 0
            document.querySelector('[cast] [div] [left]').setAttribute('style', 'display: none')
            document.querySelector('[cast] [div] .left').removeAttribute('style')
        }
    })
});
