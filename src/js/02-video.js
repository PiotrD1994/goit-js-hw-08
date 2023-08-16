import VimeoPlayer from "@vimeo/player"


const iframe = document.querySelector("iframe")
const player = new VimeoPlayer(iframe)

player.on("timeupdate", function(data) {
    const currentTime = data.seconds
    updateLocalStorage(currentTime)
})
const updateLocalStorage = _.throttle(function(currentTime){
    localStorage.setItem("videoplayer-current-time", currentTime.toString())
}, 1000)


const savedTime = localStorage.getItem("videoplayer-current-time")
let parsedTime = 0;
if (savedTime !== null) {
parsedTime = parseFloat(savedTime)
}

player.setCurrentTime(parsedTime).then(function(seconds){}).catch(function(error){
switch(error.name) {
    case "RangeError": alert ("Czas był mniejszy niż 0 lub większy niż czas trwania wideo.")
    break;
    default: alert("Wystąpił błąd:" + error.message)
    break
}
}) 


