
let myvideo = document.getElementsByTagName("video")[0]

//^ play button
let play = document.getElementById("play")
play.onclick = function () {
    myvideo.play()
}
//*...................................................................


//^ stop button
let stop = document.getElementById("stop")
stop.onclick = function () {
    myvideo.pause()
}
//*...................................................................


//^  > button
let tenSeconds_right = document.getElementById(">")
tenSeconds_right.onclick = function () {
    myvideo.currentTime += 10
}
//*...................................................................


//^  < button
let tenSeconds_left = document.getElementById("<")
tenSeconds_left.onclick = function () {
    myvideo.currentTime -= 10
}
//*...................................................................



//^  Mute button
let mute = document.getElementById("mute")
let muted = false
mute.onclick = function () {
    if (!muted) {
        myvideo.muted = true
        muted = true
        mute.innerHTML = "Unmute"
    }
    else {
        myvideo.muted = false
        muted = false
        mute.innerHTML = "mute"
    }
}


//^ sound range button
let sound = document.getElementById('sound')
sound.onclick = function () {
    myvideo.volume = sound.value
}


//^ speed range button
let speed = document.getElementById('speed')
speed.onclick = function () {
    myvideo.playbackRate = speed.value
}

//^ source forward
let sourse_forward = document.getElementById('>>')
sourse_forward.onclick = function () {
    myvideo.src = "(PS5) DAYS GONE - ONE OF THE BEST ZOMBIE GAME EVER MADE  ULTRA Graphics Gameplay [4K 60FPS HDR].mp4"
}

//^ source backword
let sourse_backword = document.getElementById('<<')
sourse_backword.onclick = function () {
    myvideo.src = "The_Last_of _Us_2_PS5-Best_kills.mp4"
}


//^ display current 
let current = document.getElementById('current')
myvideo.addEventListener('timeupdate', function () {
    let currentTime = myvideo.currentTime;
    let minutes = Math.floor(currentTime / 60)
    let seconds = Math.floor(currentTime % 60)
    current.innerHTML = `${minutes}:${seconds}`
})


//^ display duration
let duration = document.getElementById('duration')
myvideo.addEventListener('loadedmetadata', function () {
    duration.innerHTML = `${(myvideo.duration / 60).toFixed(2)}`
})

//^ range1 " control video bar"
myvideo.addEventListener('timeupdate', function () {
    range1.value = Math.floor(myvideo.currentTime)
})

range1.addEventListener("input", function () {
    myvideo.currentTime = range1.value
})

myvideo.addEventListener('loadedmetadata', function () {
    range1.max = Math.floor(myvideo.duration);
})



