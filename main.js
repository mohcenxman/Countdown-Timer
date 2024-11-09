// Target Date To End Countdown
let countDown = new Date("Feb 02, 2025 23:59:59").getTime();

let counter = setInterval (() => {
    //Date Now
    let dateNow = new Date().getTime();
    let dateDifference = countDown - dateNow;

    // Time Units
    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;
}, 1000);
