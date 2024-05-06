function goBush() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '460px'; 
    dorothy.style.top = '410px';

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


function goBush1() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '760px'; 
    dorothy.style.top = '510px';

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

function goBush2() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '1010px'; 
    dorothy.style.top = '410px';

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

function goBush3() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '1070px'; 
    dorothy.style.top = '560px';

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

function goBush4() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '1270px'; 
    dorothy.style.top = '430px';

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

    setTimeout(function() {
        var moveLeft2Div = document.querySelectorAll('.key');
        moveLeft2Div.forEach(function(element) {
            element.classList.add('startAnimation');
        });
    }, 0);

    setTimeout(function() {
        var moverightDiv = document.querySelectorAll('.arrow');
        moverightDiv.forEach(function(element) {
            element.classList.add('endingAnimation');
        });
    }, 600);
}

function goBush5() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '880px'; 
    dorothy.style.top = '610px';

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

function goBush6() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '920px'; 
    dorothy.style.top = '310px';

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

function goBush7() {
    var dorothy = document.getElementById("dorothy");
    dorothy.style.backgroundImage = "url('walk.png')"; 
    dorothy.style.left = '690px'; 
    dorothy.style.top = '360px';

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

    setTimeout(function() {
        window.location.href = 'part3/prac8.html';
    }, 2000);
}

setTimeout(function() {
    var moveLeft2Div = document.querySelectorAll('.moveLeft2, .ending');
    moveLeft2Div.forEach(function(element) {
        element.classList.add('startAnimation');
    });
}, 0);