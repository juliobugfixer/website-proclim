
document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.getElementById("carrosselContainer");
    const slides = carrossel.children;
    const totalSlides = slides.length;
    let index = 0;
    
    for (let i = 0; i < totalSlides; i++) {
        const clone = slides[i].cloneNode(true);
        carrossel.appendChild(clone);
    }

    function mudarSlide(direcao) {
        index += direcao;
        carrossel.style.transition = "transform 0.8s ease-in-out";
        carrossel.style.transform = `translateX(-${index * 600}px)`;

        setTimeout(() => {
            if (index >= totalSlides) {
                carrossel.style.transition = "none";
                index = 0;
                carrossel.style.transform = `translateX(0px)`;
            } else if (index < 0) {
                carrossel.style.transition = "none";
                index = totalSlides - 1;
                carrossel.style.transform = `translateX(-${index * 600}px)`;
            }
        }, 800);
    }

    document.querySelector(".anterior").addEventListener("click", () => mudarSlide(-1));
    document.querySelector(".proximo").addEventListener("click", () => mudarSlide(1));
    setInterval(() => mudarSlide(1), 6000);
});