document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.getElementById("carrosselContainer");
    const slides = carrossel.children;
    const totalSlides = slides.length;
    let index = 0;

    function ajustarLargura() {
        const larguraCartao = document.querySelector(".cartao-servico").offsetWidth;
        carrossel.style.transform = `translateX(-${index * larguraCartao}px)`;
        return larguraCartao;
    }

    function mudarSlide(direcao) {
        const larguraCartao = ajustarLargura();
        index += direcao;

        carrossel.style.transition = "transform 0.8s ease-in-out";
        carrossel.style.transform = `translateX(-${index * larguraCartao}px)`;

        setTimeout(() => {
            if (index >= totalSlides) {
                carrossel.style.transition = "none";
                index = 0;
                carrossel.style.transform = `translateX(0px)`;
            } else if (index < 0) {
                carrossel.style.transition = "none";
                index = totalSlides - 1;
                carrossel.style.transform = `translateX(-${index * larguraCartao}px)`;
            }
        }, 800);
    }

    document.querySelector(".anterior").addEventListener("click", () => mudarSlide(-1));
    document.querySelector(".proximo").addEventListener("click", () => mudarSlide(1));
    
    setInterval(() => mudarSlide(1), 6000);

    window.addEventListener("resize", ajustarLargura);
    ajustarLargura();
});
