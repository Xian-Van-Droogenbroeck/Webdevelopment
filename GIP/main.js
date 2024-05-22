/*Page Loader*/
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("loader-container").style.display = "block";

    window.addEventListener("load", function() {
        document.getElementById("loader-container").style.display = "none";
    });
});

/*Landingpage plant*/
document.addEventListener('scroll', function() {
    const plantElement = document.querySelector('.landing-page-plant img');
    const maxScroll = window.innerHeight;
    const scrollPosition = window.scrollY;
    const opacity = 0.7 - (scrollPosition / maxScroll);

    plantElement.style.opacity = Math.max(opacity, 0);
});

/*Gallery*/
const gallery = document.getElementById('gallery');
const items = gallery.querySelectorAll('div');
const itemWidth = items[0].offsetWidth + 20;
const pairWidth = itemWidth * 1;

function updateMiddle() {
    const scrollLeft = gallery.scrollLeft;
    const galleryWidth = gallery.offsetWidth;
    const middleIndex = Math.floor((scrollLeft + galleryWidth / 2) / itemWidth);

    items.forEach((item, index) => {
        if (index === middleIndex) {
            item.querySelector('img').classList.add('middle');
        } else {
            item.querySelector('img').classList.remove('middle');
        }
    });
}

updateMiddle();
gallery.addEventListener('scroll', updateMiddle);

document.getElementById('backBtn').addEventListener('click', function() {
    let targetScroll = gallery.scrollLeft - pairWidth;
    if (targetScroll < 0) {
        targetScroll = gallery.scrollWidth - gallery.offsetWidth;
    }
    gallery.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
});

document.getElementById('nextBtn').addEventListener('click', function() {
    let targetScroll = gallery.scrollLeft + pairWidth;
    if (targetScroll >= gallery.scrollWidth - gallery.offsetWidth) {
        targetScroll = 0;
    }
    gallery.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
});

const images = document.querySelectorAll('#gallery img');

// Set individual sizes for each image
images[0].style.width = '50%';

images[1].style.width = '70%';

images[2].style.width = '50%';

images[3].style.width = '100%';
images[3].style.margin ='0 -30%';

images[4].style.width = '100%';
images[4].style.margin ='0 -30%';

images[5].style.width = '60%';
images[5].style.margin ='0 -50%';

images[6].style.width = '60%';
images[6].style.margin ='0 -70%';

images[7].style.width = '100%';
images[7].style.margin ='0 -90%';

images[8].style.width = '100%';
images[8].style.margin ='0 -90%';

images[9].style.width = '50%';
images[9].style.margin ='0 -90%';

images[10].style.width = '100%';
images[10].style.margin ='0 -140%';

images[11].style.width = '100%';
images[11].style.margin ='0 -130%';

images[12].style.width = '100%';
images[12].style.margin ='0 -130%';

images[13].style.width = '100%';
images[13].style.margin ='0 -130%';

images[14].style.width = '100%';
images[14].style.margin ='0 -130%';

images[15].style.width = '100%';
images[15].style.margin ='0 -130%';

images[16].style.width = '100%';
images[16].style.margin ='0 -150%';

images[17].style.width = '100%';
images[17].style.margin ='0 -160%';

images[18].style.width = '100%';
images[18].style.margin ='0 -160%';

images[19].style.width = '60%';
images[19].style.margin ='0 -160%';


/*Video afspelen*/
window.onload = function(){
    let player = document.getElementById("player"),
        play = document.getElementById("play");
    
    play.addEventListener("click", function(){
        player.play();
        this.style.display = "none";
    });

    player.addEventListener("click", function(){
        player.pause();
        play.style.display = "block";
    });
}

/*Contactpage*/
document.querySelectorAll('.form-control').forEach(input => {
    const placeholder = input.getAttribute('placeholder');
    input.addEventListener('focus', () => {
        input.setAttribute('placeholder', '');
    });
    input.addEventListener('blur', () => {
        input.setAttribute('placeholder', placeholder);
    });
});

/*Hamburger*/
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', function () {
        navLinks.parentElement.classList.toggle('active');
    });
});