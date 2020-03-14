//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS
function blastOff(){
    rockets[0].addEventListener('click', () => TweenMax.to("#redRocket", 1, {y: -1000}));
    rockets[1].addEventListener('click', () => TweenMax.to("#blueRocket ", 1, {y: -1000}));
    rockets[2].addEventListener('click', () => TweenMax.to("#greenRocket", 1, {y: -1000}));
    rockets[3].addEventListener('click', () => TweenMax.to("#pinkRocket", 1, {y: -1000}));
    rockets[4].addEventListener('click', () => TweenMax.to("#grayRocket", 1, {y: -1000}));
}

function shake(){
    rockets[0].addEventListener('mousedown', () => {
        TweenMax.to("#redRocket", 0.1, {x:"+=20", yoyo:true, repeat:5}),
        TweenMax.to("#redRocket", 0.1, {x:"-=20", yoyo:true, repeat:5})
    });
    rockets[1].addEventListener('mousedown', () => {
        TweenMax.to("#blueRocket", 0.1, {x:"+=20", yoyo:true, repeat:5}),
        TweenMax.to("#blueRocket", 0.1, {x:"-=20", yoyo:true, repeat:5})
    });
    rockets[2].addEventListener('mousedown', () => {
        TweenMax.to("#greenRocket", 0.1, {x:"+=20", yoyo:true, repeat:5}),
        TweenMax.to("#greenRocket", 0.1, {x:"-=20", yoyo:true, repeat:5})
    });
    rockets[3].addEventListener('mousedown', () => {
        TweenMax.to("#pinkRocket", 0.1, {x:"+=20", yoyo:true, repeat:5}),
        TweenMax.to("#pinkRocket", 0.1, {x:"-=20", yoyo:true, repeat:5})
    });
    rockets[4].addEventListener('mousedown', () => {
        TweenMax.to("#grayRocket", 0.1, {x:"+=20", yoyo:true, repeat:5}),
        TweenMax.to("#grayRocket", 0.1, {x:"-=20", yoyo:true, repeat:5})
    });
}

//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS
const rockets = document.querySelector('.blocks').children;

blastOff();
shake();


