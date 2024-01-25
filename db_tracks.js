const musicContainer = document.getElementById('music-container');

var tracks = [
    {
        artist: "Freddie Dredd",
        title: "Blow",
        src: "tracks/2.freddie_dredd/Y2mate.mx - Freddie Dredd - Blow (Official Audio) (128 kbps).mp3"
    },
    {
        artist: "Freddie Dredd",
        title: "Delete",
        src: "tracks/all/freddie_dredd (3).mp3"
    },
    {
        artist: "Freddie Dredd",
        title: "GTG",
        src: "tracks/all/freddie_dredd (4).mp3"
    },
    {
        artist: "Freddie Dredd",
        title: "KILLIN' ON DEMAND",
        src: "tracks/all/freddie_dredd (5).mp3"
    },
    {
        artist: "Freddie Dredd",
        title: "LIMBO",
        src: "tracks/all/freddie_dredd (6).mp3"
    },
    {
        artist: "Freddie Dredd",
        title: "Stunna",
        src: "tracks/2.freddie_dredd/Y2mate.mx - Freddie Dredd - Stunna (Official Audio) (128 kbps).mp3"
    },
    {
        artist: "Freddie Dredd",
        title: "WTH",
        src: "tracks/2.freddie_dredd/Y2mate.mx - Freddie Dredd - WTH (Official Audio) (128 kbps).mp3"
    },
    {
        artist: "Freddie Dredd",
        title: "Opaul",
        src: "tracks/2.freddie_dredd/Y2mate.mx - Opaul (128 kbps).mp3"
    },
    {
        artist: "The Prodigy",
        title: "Breathe",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Breathe_47896844.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Climbatize",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Climbatize_47960221.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Colours",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Colours_47960601.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Diesel Power",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Diesel_Power_47960208.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Firestarter",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Firestarter_47897837.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Fuel_My_Fire",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Fuel_My_Fire_47960223.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Funky_Shit",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Funky_Shit_47960211.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Invaders_Must_Die",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Invaders_Must_Die_47960596.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Omen",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Omen_47960597.mp3"
    },
    {
        artist: "The Prodigy",
        title: "Piranha",
        src: "tracks/2.Prodigy/muzlome_The_Prodigy_-_Piranha_47960613.mp3"
    },

];

let currentTrack = null;

tracks.forEach(track => {
    const audio = document.createElement('audio');
    audio.src = track.src;
    audio.controls = true;
    audio.volume = 0.1;
    audio.classList.add('track');

    const title = document.createElement('p');
    title.textContent = `${track.artist} - ${track.title}`;

    musicContainer.appendChild(title);
    musicContainer.appendChild(audio);

    audio.addEventListener('play', () => {
        if (currentTrack && currentTrack !== audio) {
            currentTrack.pause();
            currentTrack.classList.remove('playing');
        }
        currentTrack = audio;
        currentTrack.classList.add('playing');
    });

    audio.addEventListener('ended', () => {
        currentTrack.classList.remove('playing');
        currentTrack = null;
    });
});
