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
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    gallery.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });

        img.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Making the movement faster and less effective
            this.style.transform = `translate(${(x - rect.width / 2) / 20}px, ${(y - rect.height / 2) / 20}px)`;
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});

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