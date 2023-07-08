// Initialize the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a heart image element
var heartImage = new Image();
heartImage.src = "heart.png"; // Replace with the path to your heart image

// Create an array to store the falling hearts
var hearts = [];

// Function to create a heart object
function createHeart() {
    var heart = {
        x: Math.random() * canvas.width,
        y: -50, // Start above the canvas
        size: Math.random() * 10 + 10, // Random size between 10 and 20
        speed: Math.random() * 2 + 1, // Random speed between 1 and 3
        opacity: Math.random() * 0.2 + 0.2 // Random opacity between 0.5 and 1
    };
    hearts.push(heart);
}

// Function to animate the falling hearts
function animateHearts() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through each heart
    for (var i = 0; i < hearts.length; i++) {
        var heart = hearts[i];

        // Update the heart's position
        heart.y += heart.speed;

        // Draw the heart image
        ctx.globalAlpha = heart.opacity;
        ctx.drawImage(heartImage, heart.x, heart.y, heart.size, heart.size);

        // Remove hearts that have fallen off the screen
        if (heart.y > canvas.height) {
            hearts.splice(i, 1);
            i--;
        }
    }

    // Create a new heart every 100 milliseconds
    if (Math.random() < 0.1) {
        createHeart();
    }

    // Call the animateHearts function again
    requestAnimationFrame(animateHearts);
}

// Start the animation
animateHearts();
