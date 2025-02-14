$(document).ready(function () {
    $(".slider").owlCarousel({
        items: 1,            // Show one slide at a time
        loop: true,          // Infinite loop
        smartSpeed: 800,     // Slide transition speed
        dots: true,          // Show navigation dots
        nav: true           // Hide next/prev arrows
    });

    // Manual next slide on button click
    $(".next").on("click", function () {
        $(".slider").trigger("next.owl.carousel");
    });
});

$(".Yes").on("click", function (){
    $(".main").html('<h1>YESS!! Enjoy your future full of this</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/1PcGLGMZSmI?si=PMj_INnnET99KD2a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
})

$(".No").on("click", function (){
    $(".main").html('<h1>Maybe this will change your mind...</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/1PcGLGMZSmI?si=PMj_INnnET99KD2a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
})

document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("background-music");
    let toggleButton = document.getElementById("toggle-music");

    toggleButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            toggleButton.textContent = "🔇 Pause Music";
        } else {
            music.pause();
            toggleButton.textContent = "🔊 Play Music";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("background-music");
    let volumeSlider = document.getElementById("volume-slider");

    // Set default volume
    music.volume = volumeSlider.value;

    // Update volume when user changes slider
    volumeSlider.addEventListener("input", function () {
        music.volume = this.value;
    });
});
