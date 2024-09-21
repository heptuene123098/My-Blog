document.addEventListener("DOMContentLoaded", function () {
    const videoIframe = document.getElementById('video-iframe');
    const videoContainer = document.getElementById('video-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check if autoplay is already included
                if (!videoIframe.src.includes("autoplay=1")) {
                    videoIframe.src = videoIframe.src.replace("autoplay=0", "autoplay=1");
                }
                // Stop observing after the video starts playing
                observer.unobserve(videoContainer);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the video container is visible

    observer.observe(videoContainer);
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Video is in view.');
            if (!videoIframe.src.includes("autoplay=1")) {
                console.log('Starting autoplay.');
                videoIframe.src = videoIframe.src.replace("autoplay=0", "autoplay=1");
            }
            observer.unobserve(videoContainer);
        }
    });
}, { threshold: 0.5 });
document.addEventListener("DOMContentLoaded", function () {
    const videoIframe = document.getElementById('video-iframe');
    const videoContainer = document.getElementById('video-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ensure the video is not already playing
                if (!videoIframe.src.includes("autoplay=1")) {
                    // Change URL to start autoplay
                    videoIframe.src = videoIframe.src.replace("autoplay=0", "autoplay=1");
                }
                // Stop observing once the video starts playing
                observer.unobserve(videoContainer);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the video container is visible

    observer.observe(videoContainer);
});
