let intervalId; 
function startCountdown() {
    const dateTime = document.getElementById("date-time").value;

    if (!dateTime) {
        alert("Please select a date and time.");
        return;  
    }
const endDate = new Date(dateTime).getTime();
// const endDate = new Date("14 sep 2024 15:20:00").getTime();
const startDate  = new Date().getTime(); // to get curretnt date time

function updateTimer(){
    const now = new Date().getTime();   
    const distanceLeft = endDate - now;
    const distanceCovered = now - startDate;
    const days = Math.floor(distanceLeft / (1000 * 60 * 60 *24));
    const hours = Math.floor((distanceLeft % (1000 * 60 * 60 *24)/(60*60*1000)));
    const minutes = Math.floor((distanceLeft % (1000 * 60 * 60)/(60*1000)));
    const seconds = Math.floor((distanceLeft % (1000 * 60)/1000));

    // populate on ui
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    // progeress-bar logic
    const totalDistance = endDate-startDate;
   const percentCovered = (distanceCovered/totalDistance)*100;
   // set width for progress bar..
    document.getElementById("progress-bar").style.width = `${percentCovered}%`;

    if(distanceLeft < 0){
       clearInterval();
       document.getElementById("countdown").innerHTML = "EXPIRED";
       document.getElementById("progress-bar").style.width =  "100%";
       return;
    }
    
}
clearInterval(intervalId);
intervalId= setInterval(updateTimer,1000); // will execute in every 1 sec
updateTimer();
}
document.getElementById("start-button").addEventListener("click", startCountdown);