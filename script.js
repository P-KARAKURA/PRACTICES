// ==========================================
// THE LIVING SKY
// ==========================================


// ------------------------------------------
// 1. SKY IMAGES
// ------------------------------------------

const skyImages = {

    dawn: "images/dawn.jpg",
    morning: "images/morning.jpg",
    midday: "images/midday.jpg",
    afternoon: "images/afternoon.jpg",
    sunset: "images/sunset.jpg",
    night: "images/night.jpg"

};


// ------------------------------------------
// 2. UPDATE THE CLOCK
// ------------------------------------------

function updateClock() {

    let now = new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    // Convert 24-hour time to 12-hour time

    let displayHour = hour % 12;

    if (displayHour === 0) {
        displayHour = 12;
    }


    // AM or PM

    let ampm;

    if (hour < 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }


    // Add zero before minutes

    let displayMinutes;

    if (minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }


    // Add zero before seconds

    let displaySeconds;

    if (seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }


    // Build the final time

    let formattedTime =
        displayHour +
        ":" +
        displayMinutes +
        ":" +
        displaySeconds +
        " " +
        ampm;


    // Put the time on the page

    document.getElementById("time-display").textContent =
        formattedTime;

}


// ------------------------------------------
// 3. CHANGE THE BACKGROUND IMAGE
// ------------------------------------------

function updateBackground(period) {

    let image = skyImages[period];

    let layerA = document.getElementById("bg-layer-a");

    if (layerA) {
        layerA.style.backgroundImage = "url('" + image + "')";
        layerA.classList.add("active");
    }

}


// ------------------------------------------
// 4. UPDATE THE GREETING TEXT & SUBTEXT
// ------------------------------------------

function updateGreeting(period) {

    let greetingElement = document.getElementById("greeting");
    let subtextElement = document.getElementById("mood");

    if (period === "dawn" || period === "morning") {

        if (greetingElement) greetingElement.textContent = "Good Morning";
        if (subtextElement) subtextElement.textContent = "A new day begins.";

    } else if (period === "midday" || period === "afternoon") {

        if (greetingElement) greetingElement.textContent = "Good Afternoon";
        if (subtextElement) subtextElement.textContent = "Keep pushing forward.";

    } else if (period === "sunset") {

        if (greetingElement) greetingElement.textContent = "Good Evening";
        if (subtextElement) subtextElement.textContent = "Time to wind down.";

    } else {

        if (greetingElement) greetingElement.textContent = "Good Night";
        if (subtextElement) subtextElement.textContent = "Rest well for tomorrow.";

    }

}


// ------------------------------------------
// 5. DETERMINE THE SKY PERIOD
// ------------------------------------------

function updateSky() {

    let now = new Date();

    let hour = now.getHours();

    let timePeriod;


    if (hour >= 5 && hour < 8) {

        timePeriod = "dawn";

    }

    else if (hour >= 8 && hour < 12) {

        timePeriod = "morning";

    }

    else if (hour >= 12 && hour < 16) {

        timePeriod = "midday";

    }

    else if (hour >= 16 && hour < 18) {

        timePeriod = "afternoon";

    }

    else if (hour >= 18 && hour <= 20) {

        timePeriod = "sunset";

    }

    else {

        timePeriod = "night";

    }


    // Show the selected period in console

    console.log("Hour:", hour);

    console.log("Period:", timePeriod);


    // Change background image and update heading text

    updateBackground(timePeriod);

    updateGreeting(timePeriod);

}


// ------------------------------------------
// 6. INITIALIZE AND START INTERVALS
// ------------------------------------------

updateClock();

setInterval(updateClock, 1000);

updateSky();

setInterval(updateSky, 60000);