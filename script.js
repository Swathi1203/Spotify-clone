console.log("welcome to spotify");
let songIndex = 0;
let audioElement=new Audio('music\Besabriyaan (MS Dhoni - The Untold Story) - Copy (2).mp3');
let Play=document.getElementById('Play');
let myprogressBar=document.getElementById('myprogressBar');
let songs = [ {songNmae:"Besabariyaan",
filepath:C:\Users\satyam singh\OneDrive\Desktop\swatisweb\music\Besabriyaan (MS Dhoni - The Untold Story) - Copy (2).mp3,coverpath:C:\Users\satyam singh\OneDrive\Desktop\swatisweb\cover.jpg}, 
{songNmae:"Besabariyaan",
filepath:C:\Users\satyam singh\OneDrive\Desktop\swatisweb\music\Besabriyaan (MS Dhoni - The Untold Story) - Copy (2).mp3,coverpath:C:\Users\satyam singh\OneDrive\Desktop\swatisweb\cover.jpg},
{songNmae:"Besabariyaan",
filepath:C:\Users\satyam singh\OneDrive\Desktop\swatisweb\music\Besabriyaan (MS Dhoni - The Untold Story) - Copy (2).mp3,coverpath:C:\Users\satyam singh\OneDrive\Desktop\swatisweb\cover.jpg},   ]
Play.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        Play.classList.remove( 'fa-play-circle');
        Play.classList.remove( 'fa-pause-circle');
    }
    else{
        audioElement.pause();
        Play.classList.remove( 'fa-pause-circle');
        Play.classList.remove( 'fa-play-circle');
    }
})
   myprogressBar.addEventListener('timeupdate',()=>{ console.log(timeupdate);})
 