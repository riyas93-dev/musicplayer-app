const music = document.querySelector("audio");
    const img = document.querySelector("img");
    const play = document.getElementById("play");
    const artist = document.getElementById("artist");
    const title = document.getElementById("title");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    const songs = [{
        name : "arijit",
        title : "Teri Baarishein",
        artist : "Arijit Singh",
    },
    {
        name : "edsheeran",
        title : "Shape of You",
        artist : "Ed Sheeran",
    },
    {
        name : "lovestory",
        title : "Love Story",
        artist : "Taylor Swift",
    }
    ];


    let isPlaying = false;
    //for play
    const playMusic = () => {
        isPlaying = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        img.classList.add("anime");
    };

    //for pause 
    const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        img.classList.remove("anime");
    };

    play.addEventListener("click", () => {
        if(isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
        //use ternary operator for short code
    });

    //changing music data

    const loadSong = (songs) => {
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src = "audio/" + songs.name + ".mp3";
        img.src = "images/" + songs.name + ".jpg";
    };

    songIndex = 0;

    const nextSong = () => {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };

    const previousSong = () => {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };


    next.addEventListener("click", nextSong);
    prev.addEventListener("click", previousSong);