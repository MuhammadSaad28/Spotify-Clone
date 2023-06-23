console.log("Welcome to Spotify");
let songindex = 0 ;
let audio = new Audio(`songs/${songindex}.mp3`);
let songitem = Array.from(document.getElementsByClassName('songitem'));
let play = document.querySelector(`#play`);
let currentAudio = null;
let range = document.querySelector(`#range`);
range.value=0;


let songs = [
{songname:"Hawayein",filepath:"songs/0.mp3",coverpath:"covers/0.jpg" },
{songname:"O Bedardeya",filepath:"songs/1.mp3",coverpath:"covers/1.jpg" },
{songname:"Kesariya",filepath:"songs/2.mp3",coverpath:"covers/2.jpg" },
{songname:"Deva Deva",filepath:"songs/3.mp3",coverpath:"covers/3.jpg" },
{songname:"Apna Bana Le",filepath:"songs/4.mp3",coverpath:"covers/4.jpg" },
{songname:"Phir Aur Kya Chahiye",filepath:"songs/5.mp3",coverpath:"covers/5.jpg" },
{songname:"Channa Mereya",filepath:"songs/6.mp3",coverpath:"covers/6.jpg" },
]

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

play.addEventListener("click",()=>{
   if(audio.paused || audio.currentTime<=0)
   {
    audio.play();
    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");
   }
   else{
    audio.pause();
    play.classList.remove("fa-pause-circle");
    play.classList.add("fa-play-circle");
   }

})
audio.addEventListener("timeupdate",()=>{
    range.value = parseInt((audio.currentTime/audio.duration)*100)
})
range.addEventListener("change",()=>{
    audio.currentTime=range.value*audio.duration/100;
})

// const makeallplays = ()=>{
//     Array.from(document.getElementsByClassName("songitemname")).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//    element.addEventListener("click",(e)=>{
//     // makeallplays();
//     songindex = parseInt(e.target.id);
//     e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audio.src = `songs/${songIndex}.mp3`;
//         audio.currentTime=0;
//         audio.play();
//         play.classList.remove('fa-play-circle');
//         play.classList.add('fa-pause-circle');
//    })


// })


songitem.forEach((element, i) => {
    
    let playButton = element.getElementsByClassName("songitemname")[0];
    
    playButton.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
        play.classList.remove("fa-pause-circle")
        play.classList.add("fa-play-circle")
       
    }

      audio = new Audio(`songs/${i}.mp3`) ;
      play.classList.add("fa-pause-circle");
      play.classList.remove("fa-play-circle");
      audio.play();
      currentAudio = audio;

    })
})
  
 
 



document.getElementById(`next`).addEventListener("click",()=>{
    if(songindex>=6)
    {
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audio.src=`songs/${songindex}.mp3`;
    audio.play();
    audio.currentTime=0;
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})

document.getElementById(`previous`).addEventListener("click",()=>{
    if(songindex<=0)
    {
        songindex=6;
    }
    else{
        songindex-=1;
    }
    audio.src=`songs/${songindex}.mp3`;
    audio.play();
    audio.currentTime=0;
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle'); 

})

