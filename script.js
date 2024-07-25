console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("Music.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Marshmello", filePath: "Music/Music.mp3", coverPath: "covers/cover.jpg"},
    /*{songName: "Marshmello", filePath: "Music/Marshmello.mp4", coverPath: "covers/cover.jpg"},
    {songName: "Marshmello", filePath: "Music/Marshmello.mp4", coverPath: "covers/cover.jpg"},
    {songName: "Marshmello", filePath: "Music/Marshmello.mp4", coverPath: "covers/cover.jpg"},
    {songName: "Marshmello", filePath: "Music/Marshmello.mp4", coverPath: "covers/cover.jpg"},
    {songName: "Marshmello", filePath: "Music/Marshmello.mp4", coverPath: "covers/cover.jpg"},
    {songName: "Marshmello", filePath: "Music/Marshmello.mp4", coverPath: "covers/cover.jpg"},
    {songName: "Marshmello", filePath: "Music/Marshmello.mp4", coverPath: "covers/cover.jpg"}*/
]

//audioElement.play();

//Handle play/pause button
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");   
        gif.style.opacity = 0;  
    }
})
//Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})