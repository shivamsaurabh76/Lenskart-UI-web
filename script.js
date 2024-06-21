document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Optional: Auto-slide functionality
    setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    const pushNotification = document.getElementById('push-notification');
    const yesButton = document.getElementById('yes-push');
    const noButton = document.getElementById('no-push');

    // Show push notification after a delay
    setTimeout(() => {
        pushNotification.style.display = 'block';
    }, 5000);

    yesButton.addEventListener('click', () => {
        alert('You have agreed to receive push notifications.');
        pushNotification.style.display = 'none';
    });

    noButton.addEventListener('click', () => {
        pushNotification.style.display = 'none';
    });
});