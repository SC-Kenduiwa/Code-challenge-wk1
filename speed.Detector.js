// Function to detect speed and display appropriate message
function detectSpeed() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Enter the speed (in km/h): ", speedInput => {
        const speed = parseInt(speedInput); // Convert input to integer

        // Define speed limit and demerit threshold
        const speedLimit = 70; // Speed limit in km/h
        const kmPerDemerit = 5; // Number of km/h over the limit for each demerit point
        const demeritPointsLimit = 12; // Demerit points threshold for license suspension

        // Initialize demerit points counter
        let demeritPoints = 0;

        // Check if input is a valid number
        if (!isNaN(speed)) {
            // Check if speed exceeds the speed limit
            if (speed > speedLimit) {
                // Calculate demerit points
                demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
                console.log(`Demerit points: ${demeritPoints}`);
            } else {
                // Speed is within the limit
                console.log("Speed is within the limit");
            }

            // Check if demerit points exceed the limit for license suspension
            if (demeritPoints >= demeritPointsLimit) {
                console.log("License suspended! You have accumulated 12 or more demerit points.");
            }
        } else {
            // Invalid input
            console.log("Invalid input! Please enter a valid speed.");
        }

        readline.close(); // Close readline interface
    });
}

// Call the detectSpeed function to start the program
detectSpeed();

