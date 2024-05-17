// Function to update the current time
function updateTime() {
    // Create a new Date object
    let now = new Date();

    // Format the time as a string in a human-readable format
    let currentTime = now.toLocaleTimeString();

    // Log the current time to the console
    console.log(currentTime);

    // Call updateTime again after 1000 milliseconds (1 second)
    setTimeout(updateTime, 1000);
}

// Mimic the original setup by immediately calling updateTime
updateTime();
