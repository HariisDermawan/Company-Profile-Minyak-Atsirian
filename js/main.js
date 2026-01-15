
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 12,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const toggleBtn = document.getElementById('toggle-button');
    const moreProducts = document.getElementById('more-products');
    let isShown = false;

    if (toggleBtn && moreProducts) {
        toggleBtn.addEventListener('click', function () {
            isShown = !isShown;
            moreProducts.style.display = isShown ? 'block' : 'none';
            toggleBtn.textContent = isShown ? 'Tampilkan Lebih Sedikit' : 'Lihat Selanjutnya';
        });
    }

    const hero = document.getElementById("heroContent");

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-10");
                entry.target.classList.add("opacity-100", "translate-y-0");
                heroObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4
    });

    if (hero) heroObserver.observe(hero);

    const approachElements = [
        document.getElementById("approachTitle"),
        document.getElementById("approachDesc"),
        document.getElementById("leftColumn"),
        document.getElementById("imageCenter"),
        document.getElementById("rightColumn"),
    ];

    const approachObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-10");
                entry.target.classList.add("opacity-100", "translate-y-0");
            } else {
                entry.target.classList.remove("opacity-100", "translate-y-0");
                entry.target.classList.add("opacity-0", "translate-y-10");
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
    });

    approachElements.forEach(el => {
        if (el) approachObserver.observe(el);
    });

    const packagingTargets = [
        document.getElementById("packagingTitle"),
        document.getElementById("packagingImage"),
        document.getElementById("packagingDesc"),
    ];

    const packagingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-10");
                entry.target.classList.add("opacity-100", "translate-y-0");
            } else {
                entry.target.classList.remove("opacity-100", "translate-y-0");
                entry.target.classList.add("opacity-0", "translate-y-10");
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
    });

    packagingTargets.forEach(el => {
        if (el) packagingObserver.observe(el);
    });

});

