document.addEventListener("DOMContentLoaded", () => {
    const userInfoDiv = document.getElementById("userInfo");

    // Prompt user for their name
    let userName = prompt("Please enter your name:", "Divya");
    if (!userName) userName = "Guest";

    // Get current date and time
    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        document.getElementById("user-date").textContent = `Date: ${date}`;
        document.getElementById("user-time").textContent = `Time: ${time}`;
    }

    // Get location using Geolocation API
    function setLocation(position) {
        const { latitude, longitude } = position.coords;
        document.getElementById("user-location").textContent = `Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    }
    function locationError() {
        document.getElementById("user-location").textContent = "Location: Not available";
    }

    // Initial HTML
    userInfoDiv.innerHTML = `
        <p><strong>Name:</strong> ${userName}</p>
        <p id="user-date"></p>
        <p id="user-time"></p>
        <p id="user-location">Location: Detecting...</p>
    `;

    updateDateTime();
    setInterval(updateDateTime, 1000);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation, locationError);
    } else {
        locationError();
    }
});