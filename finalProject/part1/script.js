function refuseSoup() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '880px'; 
    dorothy.style.top = '620px';

    var divElements = document.querySelectorAll('.moveRight, .moveRight2');
    divElements.forEach(function(element) {
        element.style.opacity = 0;
    });
    
    
    setTimeout(function() {
        var moveLeft2Div = document.querySelectorAll('.moveLeft2');
        moveLeft2Div.forEach(function(element) {
            element.classList.add('startAnimation');
        });
    }, 0);

    setTimeout(function() {
        var moveLeftDiv = document.querySelectorAll('.moveLeft');
        moveLeftDiv.forEach(function(element) {
            element.classList.add('secondAnimation');
        });
    }, 5000);

    setTimeout(function() {
        var endingButton = document.querySelectorAll('.ending');
        endingButton.forEach(function(element) {
            element.classList.add('endingAnimation');
        });
    }, 600);
    

    
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
    dorothy.style.left = '2040px'; 
    dorothy.style.top = '700px';

    var divElements = document.querySelectorAll('.moveLeft2, .moveLeft');
divElements.forEach(function(element) {
    element.style.opacity = 0;
});
 setTimeout(function() {
        window.location.href = 'part2/part2.html';
    }, 2000);



    
    
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

function goHome() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '-640px'; 
    dorothy.style.top = '600px';


    
    
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