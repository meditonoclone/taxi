const slider = document.querySelector('.news-container');
const newsItems = document.querySelectorAll('.news-item');
const sliderDot = document.querySelector('.slider-dots');
const createDots = (num) => {
    var dotsElement = '';
    for (var i = 0; i < num; i++) {
        if (i === 0) {
            dotsElement += '<span class="dot active"></span>\n';
            continue;
        }
        dotsElement += '<span class="dot"></span>\n';
    }
    sliderDot.innerHTML = dotsElement;
    console.log(dotsElement);
}
if(screen.width > 1023)
    createDots(newsItems.length/3);
else    
    createDots(newsItems.length/2);


document.addEventListener('DOMContentLoaded', function () {
    const dots = sliderDot.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        if (screen.width <= 1023) {
            slider.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            return;
        }
        else
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