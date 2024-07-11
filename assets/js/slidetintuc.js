document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.news-container');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 33.333}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % (dots.length);
        showSlide(currentSlide);
    }, 5000);
});