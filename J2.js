const playBtn = document.getElementById('play-music');
const music = document.getElementById('bg-music');

playBtn.addEventListener('click', () => {
    music.play();
});

