// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function framesInMins(mins, fps){
    var mins = mins
    var fps = fps * 60
    var total_fps = mins * fps

    return "The total FPS is " + total_fps
}

console.log(framesInMins(10,25))