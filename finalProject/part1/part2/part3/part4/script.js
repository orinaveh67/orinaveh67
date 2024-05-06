function refuseSoup() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '440px'; 
    dorothy.style.top = '330px';

    var divElements = document.querySelectorAll('.moveRight, .moveLeft, .moveRight2');
    divElements.forEach(function(element) {
        element.style.opacity = 0;
    });
    
    
    setTimeout(function() {
        var moveLeft2Div = document.querySelectorAll('.moveLeft2, .ending');
        moveLeft2Div.forEach(function(element) {
            element.classList.add('startAnimation');
        });
    }, 0);

    
    var frameIndex = 1;
    var walkAnimationInterval = setInterval(function() {
        frameIndex++;
        if (frameIndex > 20) {
            clearInterval(walkAnimationInterval); 
            dorothy.style.backgroundImage = "url('idle2.png')"; 
            dorothy.style.animation = "sprite-animation 1s steps(16) infinite"; 
        } else {
            dorothy.style.backgroundImage = "url('walk.png')"; 
        }
    }, 100); 
}


function eatSoup() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '1000px';
    dorothy.style.top = '440px';

    var divElements = document.querySelectorAll('.moveRight, .moveLeft, .moveRight2');
    divElements.forEach(function(element) {
        element.style.opacity = 0;
    });
    
    
    var frameIndex = 1;
    var walkAnimationInterval = setInterval(function() {
        frameIndex++;
        if (frameIndex > 20) {
            clearInterval(walkAnimationInterval); 
            dorothy.style.backgroundImage = "url('dead.png')"; 
            dorothy.style.animation = "dead-animation 1s steps(30)"; 
        } else {
            dorothy.style.backgroundImage = "url('walk.png')"; 
        }
    }, 100); 
}

function nextPage() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '640px'; 
    dorothy.style.top = '1000px';

    var divElements = document.querySelectorAll('.moveLeft2');
divElements.forEach(function(element) {
    element.style.opacity = 0;
});

    
    
    var frameIndex = 1;
    var walkAnimationInterval = setInterval(function() {
        frameIndex++;
        if (frameIndex > 20) {
            clearInterval(walkAnimationInterval); 
            dorothy.style.backgroundImage = "url('idle2.png')"; 
            dorothy.style.animation = "sprite-animation 1s steps(16) infinite"; 
        } else {
            dorothy.style.backgroundImage = "url('walk.png')"; 
        }
    }, 100); 
}