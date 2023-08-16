import VimeoPlayer from "@vimeo/player"
import throttle from 'lodash.throttle'

const iframe = document.querySelector("iframe")
const player = new VimeoPlayer(iframe)
const updateLocalStorage = throttle(function(currentTime){
    localStorage.setItem("videoplayer-current-time", currentTime.toString())
}, 1000)

player.on("timeupdate", function(data) {
    const currentTime = data.seconds
    updateLocalStorage(currentTime)
})
const savedTime = localStorage.getItem("videoplayer-current-time")
let parsedTime = 0;
if (savedTime !== null) {
parsedTime = parseFloat(savedTime)
}

player.setCurrentTime(parsedTime).catch(function(error){
switch(error.name) {
    case "RangeError": alert("Czas był mniejszy niż 0 lub większy niż czas trwania wideo.")
    break;
    default: alert("Wystąpił błąd:" + error.message)
    break
}
}) 


