function refuseSoup() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; // Initial frame of walk animation
    dorothy.style.left = '440px'; // Move to the top left corner
    dorothy.style.top = '330px';

    var divElements = document.querySelectorAll('.moveRight, .moveLeft, .moveRight2');
    divElements.forEach(function(element) {
        element.style.opacity = 0;
    });
    
    // Start the animation for .moveLeft2 div after 3 seconds
    setTimeout(function() {
        var moveLeft2Div = document.querySelectorAll('.moveLeft2, .ending');
        moveLeft2Div.forEach(function(element) {
            element.classList.add('startAnimation');
        });
    }, 0);

    // Loop through each frame of the walk animation
    var frameIndex = 1;
    var walkAnimationInterval = setInterval(function() {
        frameIndex++;
        if (frameIndex > 20) {
            clearInterval(walkAnimationInterval); // Stop the animation loop when all frames are played
            dorothy.style.backgroundImage = "url('idle2.png')"; // Return to idle sprite sheet
            dorothy.style.animation = "sprite-animation 1s steps(16) infinite"; // Apply idle animation
        } else {
            dorothy.style.backgroundImage = "url('walk.png')"; // Change to next frame of walk animation
        }
    }, 100); // Adjust the interval based on your animation speed
}


function eatSoup() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; // Initial frame of walk animation
    dorothy.style.left = '1000px';
    dorothy.style.top = '440px';

    var divElements = document.querySelectorAll('.moveRight, .moveLeft, .moveRight2');
    divElements.forEach(function(element) {
        element.style.opacity = 0;
    });
    
    // Loop through each frame of the walk animation
    var frameIndex = 1;
    var walkAnimationInterval = setInterval(function() {
        frameIndex++;
        if (frameIndex > 20) {
            clearInterval(walkAnimationInterval); // Stop the animation loop when all frames are played
            dorothy.style.backgroundImage = "url('dead.png')"; // Change to dead sprite sheet
            dorothy.style.animation = "dead-animation 1s steps(30)"; // Apply dead animation
        } else {
            dorothy.style.backgroundImage = "url('walk.png')"; // Change to next frame of walk animation
        }
    }, 100); // Adjust the interval based on your animation speed
}

function nextPage() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; // Initial frame of walk animation
    dorothy.style.left = '640px'; // Move to the top left corner
    dorothy.style.top = '1000px';

    var divElements = document.querySelectorAll('.moveLeft2');
divElements.forEach(function(element) {
    element.style.opacity = 0;
});

    
    // Loop through each frame of the walk animation
    var frameIndex = 1;
    var walkAnimationInterval = setInterval(function() {
        frameIndex++;
        if (frameIndex > 20) {
            clearInterval(walkAnimationInterval); // Stop the animation loop when all frames are played
            dorothy.style.backgroundImage = "url('idle2.png')"; // Return to idle sprite sheet
            dorothy.style.animation = "sprite-animation 1s steps(16) infinite"; // Apply idle animation
        } else {
            dorothy.style.backgroundImage = "url('walk.png')"; // Change to next frame of walk animation
        }
    }, 100); // Adjust the interval based on your animation speed
}