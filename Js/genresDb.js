let genresDb = {}

if (window.localStorage.getItem('genresDb') == undefined) {
    genresDb = {
        action: [
            [
                {
                    bg: './Images/Genre/Action/Movies/1.webp',
                    title: 'Mission: Impossible - Dead Reckoning Part One',
                    desc: 'Ethan Hunt and his team must track down a powerful, unpredictable AI before it falls into the wrong hands, all while being hunted by a shadowy enemy.',
                    minuts: '163', // jami minut
                    hour: '2', //soat
                    minut: '43', //minut
                    year: '2023',
                    translate: ['Uzbek', 'Russion', 'English', 'Spanish', 'French'],
                    rating: '4.5',
                    genres: ['Action', 'Adventure', 'Thriller', 'Espionage'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/1.webp',
                        name: 'Christopher McQuarrie',
                        from: 'USA'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/1.webp',
                        name: 'Lorne Balfe',
                        from: 'England'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/1.webp',
                        './Images/Genre/Action/Actors/Actor/2.webp',
                        './Images/Genre/Action/Actors/Actor/3.webp',
                        './Images/Genre/Action/Actors/Actor/4.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/2.webp',
                    title: 'John Wick: Chapter 4',
                    desc: 'With no way out, John Wick fights to survive against the High Table\'s forces, while seeking revenge on those who have wronged him in a battle that takes him around the globe.',
                    minuts: '169', // jami minut
                    hour: '2', //soat
                    minut: '49', //minut
                    year: '2023',
                    translate: ['Uzbek', 'Russion', 'English', 'Spanish', 'French'],
                    rating: '4.7',
                    genres: ['Action', 'Thriller', 'Criminal', 'Espionage', 'Drama'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/2.webp',
                        name: 'Chad Stahelski',
                        from: 'USA'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/2.webp',
                        name: 'Tyler Bates',
                        from: 'USA'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/5.webp',
                        './Images/Genre/Action/Actors/Actor/6.webp',
                        './Images/Genre/Action/Actors/Actor/7.webp',
                        './Images/Genre/Action/Actors/Actor/8.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/3.webp',
                    title: 'Guardians of the Galaxy Vol. 3',
                    desc: 'As Rocket’s past catches up with him, the Guardians must embark on a dangerous mission to save one of their own, confronting old foes and new allies along the way, while struggling.',
                    minuts: '150', // jami minut
                    hour: '2', //soat
                    minut: '30', //minut
                    year: '2023',
                    translate: ['Uzbek', 'Russion', 'English', 'Spanish', 'French'],
                    rating: '4.8',
                    genres: ['Action', 'Fantastic', 'Comedy', 'Drama', 'Adventure'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/3.webp',
                        name: 'James Gunn',
                        from: 'USA'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/3.webp',
                        name: 'John Murphy',
                        from: 'England'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/9.webp',
                        './Images/Genre/Action/Actors/Actor/10.webp',
                        './Images/Genre/Action/Actors/Actor/11.webp',
                        './Images/Genre/Action/Actors/Actor/12.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/4.webp',
                    title: 'The Flash',
                    desc: 'On his journey to fix a past mistake, Barry Allen finds himself facing a new reality, where multiple timelines collide and dangerous forces threaten his world.',
                    minuts: '144', // jami minut
                    hour: '2', //soat
                    minut: '24', //minut
                    year: '2023',
                    translate: ['Uzbek', 'Russion', 'English', 'Spanish', 'French'],
                    rating: '4.2',
                    genres: ['Action', 'Fantastic', 'Thriller', 'Superhero', 'Adventure'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/4.webp',
                        name: 'Andy Muschietti',
                        from: 'Argentina'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/4.webp',
                        name: 'Benjamin Wallfisch',
                        from: 'England'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/13.webp',
                        './Images/Genre/Action/Actors/Actor/14.webp',
                        './Images/Genre/Action/Actors/Actor/15.webp',
                        './Images/Genre/Action/Actors/Actor/16.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/5.webp',
                    title: 'Fast X',
                    desc: 'Dom and his crew are pulled back into action when a dangerous new threat emerges, forcing them to confront their past and race against time to save their loved ones.',
                    minuts: '141', // jami minut
                    hour: '2', //soat
                    minut: '21', //minut
                    year: '2023',
                    translate: ['Uzbek', 'Russion', 'English', 'Spanish', 'French'],
                    rating: '4.4',
                    genres: ['Action', 'Adventure', 'Thriller', 'Criminal', 'Drama'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/5.webp',
                        name: 'Louis Leterrier',
                        from: 'France'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/5.webp',
                        name: 'Brian Tyler',
                        from: 'USA'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/17.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/6.webp',
                    title: 'Everything Everywhere All at Once',
                    desc: 'This is a genre-blending film that explores the multiverse, combining martial arts, sci-fi, and drama with emotional depth and visual innovation.',
                    minuts: '139', // jami minut
                    hour: '2', //soat
                    minut: '19', //minut
                    year: '2022',
                    translate: ['English', 'Spanish', 'French', 'German', 'Russia', 'China', 'Indian'],
                    rating: '4.0',
                    genres: ['Action', 'Science fiction', 'Comedy', 'Fantastic', 'Drama'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/6.webp',
                        name: 'Daniels brothers',
                        from: 'USA'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/6.webp',
                        name: 'Son Lux',
                        from: 'USA'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/18.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/7.webp',
                    title: 'Top Gun: Maverick',
                    desc: 'The film grossed over $1.5 billion at the International box office, making it one of the most successful films of all time.',
                    minuts: '131', // jami minut
                    hour: '2', //soat
                    minut: '11', //minut
                    year: '2022',
                    translate: ['English', 'Spanish', 'French', 'German', 'Arabic'],
                    rating: '4.15',
                    genres: ['Action', 'Adventure', 'Drama'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/7.webp',
                        name: 'Joseph Kosinski',
                        from: 'USA'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/7.webp',
                        name: 'Hans Zimmer',
                        from: 'Germany'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/19.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/8.webp',
                    title: 'The Batman',
                    desc: 'The film, as opposed to a traditional superhero film, has a noir style, includes elements of detective work and reveals crime in Gotham City.',
                    minuts: '155', // jami minut
                    hour: '2', //soat
                    minut: '35', //minut
                    year: '2022',
                    translate: ['English', 'Spanish', 'French', 'German', 'China'],
                    rating: '4.0',
                    genres: ['Action', 'Criminal', 'Drama', 'Mysterious', 'Thriller'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/8.webp',
                        name: 'Matt Reeves',
                        from: 'USA'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/8.webp',
                        name: 'Michael Giacchino',
                        from: 'USA'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/20.webp',
                    ]
                },
                {
                    bg: './Images/Genre/Action/Movies/9.webp',
                    title: 'Venom: Let There Be Carnage',
                    desc: 'The film depicts the relationship between Eddie Brock and Venom, who is forced to live with him, and the fight against the new villain Carnage.',
                    minuts: '97', // jami minut
                    hour: '1', //soat
                    minut: '37', //minut
                    year: '2021',
                    translate: ['English', 'Spanish', 'German',],
                    rating: '3.1',
                    genres: ['Action', 'Science fiction', 'Thriller', 'Comedy', 'Heroism'],
                    director: {
                        img: './Images/Genre/Action/Actors/Director/9.webp',
                        name: 'Andy Serkis',
                        from: 'Great Britain'
                    },
                    music: {
                        img: './Images/Genre/Action/Actors/Music/9.webp',
                        name: 'Marco Beltrami',
                        from: 'USA'
                    },
                    actors : [
                        './Images/Genre/Action/Actors/Actor/21.webp',
                    ]
                },
            ],
            [
    
            ],
            [
    
            ]
        ],
        actionDesc: {
            text: 'The action film is a film genre that predominantly features chase sequences, fights, shootouts, explosions, and stunt work. The specifics of what constitutes an action film has been in scholarly debate since the 1980s.'
        }
    }
} else {
    genresDb = JSON.parse(window.localStorage.getItem('genresDb'))
}