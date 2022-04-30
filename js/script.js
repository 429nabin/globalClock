setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();
    

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
   
 
    let period = "AM";

    if (hoursOfDay > 12) {
        hoursOfDay-= 12;
        period = "PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

    document.getElementById('Clock').innerHTML = time + " ";

}
displayTime();

setInterval(displayTime2, 1000);
function displayTime2() {

    const timeNow2 = new Date();
    

    let hours2 = timeNow2.getHours()+4;
    let minutes2 = timeNow2.getMinutes()-15;
    let seconds2 = timeNow2.getSeconds();
   
 
    let period = "AM";

    if (hours2 > 12) {
        hours2-= 12;
        period = "PM";
    }

    if (hours2 === 0) {
        hours2 = 12;
        period = "AM";
    }

    hours2 = hours2 < 10 ? "0" + hours2 : hours2;
    minutes2 = minutes2 < 10 ? "0" + minutes2 : minutes2;
    seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;

    let time2 = hours2 + ":" + minutes2 + ":" + seconds2 + period;

    document.getElementById("Clock3").innerHTML = time2 + " ";

}
displayTime2();