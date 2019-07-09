//<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS
function blastOff(){
    rockets[0].addEventListener('click', () => TweenMax.to("#redRocket", 1, {y: -1000}));
    rockets[1].addEventListener('click', () => TweenMax.to("#blueRocket ", 1, {y: -1000}));
    rockets[2].addEventListener('click', () => TweenMax.to("#greenRocket", 1, {y: -1000}));
    rockets[3].addEventListener('click', () => TweenMax.to("#pinkRocket", 1, {y: -1000}));
    rockets[4].addEventListener('click', () => TweenMax.to("#grayRocket", 1, {y: -1000}));
}

const rockets = document.querySelector('.blocks').children;

blastOff();


