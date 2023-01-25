function myApp(){
    let song=document.querySelector('.song');
    let play=document.querySelector('.play');
    let outline=document.querySelector('.moving-outline circle')
    let video=document.querySelector('.vid-container video')


    //sounds buttons
    let sound=document.querySelectorAll('.sound-picker button')

    //time display
    let timeDisplay=document.querySelector('.time-display')
    let timeSelect=document.querySelectorAll('.time-select button')


    //duration
    let duration=600;

    //play sound
    play.addEventListener('click', () => {
        checkPlaying(song)
    })

    //play song function
    function checkPlaying(song){
        if( song.paused ){
            song.play()
            video.play()
            outline.classList.add('animation')
            play.src='./svg/pause.svg'
        }else {
            song.pause()
            video.pause()
            outline.classList.remove('animation')
            play.src='./svg/play.svg'
        }
    }
   //timer innerHTML
   song.ontimeupdate=function(){
    let currentSongTime= song.currentTime
    let time= duration - currentSongTime
    let minutes= Math.floor(time / 60); 
    let seconds= Math.floor(time % 60); 
    timeDisplay.textContent= `${minutes}:${seconds}`
    // if song finishes stop everthing
    if(currentSongTime >= duration ){
        song.pause()
        play.src='./svg/play.svg'
        outline.classList.remove('animation')
        timeDisplay.textContent= 0 + ':'+0
    }
   }
   // 3, 6, 10 minutes pickers
   timeSelect.forEach( element => {
        element.addEventListener('click', function(){
            duration= this.dataset.time
            timeDisplay.textContent= ` ${Math.floor(duration/60)}:${Math.floor(duration% 60)}`
        })
   })

   //change sounds when click the buttons
   sound.forEach( element => {
        element.addEventListener('click', function(){
            song.src= this.dataset.sound
            video.src= this.dataset.video
            checkPlaying(song)
        })
   })
}

myApp()









// trial of animation 
    // outline.style.strokeDasharray= outlineLenght;
    // outline.style.strokeDashoffset= 200;

 //animate circle
    // song.ontimeupdate = function(){
    //     let currentTime= song.currentTime;
    //     let circle= duration-currentTime;
    //     let seconds= Math.floor(circle % 60);
    //     let minutes= Math.floor(circle / 60);
    //     let progress= outlineLenght - ( currentTime / duration) * outlineLenght;
    //     outline.style.strokeDashoffset= progress
    // }