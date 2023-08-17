import VimeoPlayer from "@vimeo/player"
import throttle from 'lodash.throttle'

const iframe = document.querySelector("iframe")
const player = new VimeoPlayer(iframe)
const updateLocalStorage = throttle(function(currentTime){
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
}, 1000)

player.on("timeupdate", function(data) {
    const currentTime = data.seconds
    updateLocalStorage(currentTime)
})
const savedTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))
if (savedTime !== null) {

player.setCurrentTime(savedTime).catch(function(error){
switch(error.name) {
    case "RangeError": alert("Czas był mniejszy niż 0 lub większy niż czas trwania wideo.")
    break;
    default: alert("Wystąpił błąd:" + error.name)
    break
}
}) 
}

