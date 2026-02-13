document.addEventListener("DOMContentLoaded", function () {
    // Lazy load images with data-src
    const lazyImages = document.querySelectorAll("img[data-src]");
    const lazyBackgrounds = document.querySelectorAll("[data-bg]");

    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;

                    if (el.tagName === 'IMG') {
                        const src = el.getAttribute('data-src');
                        el.src = src;
                        el.removeAttribute('data-src');
                    } else {
                        const bg = el.getAttribute('data-bg');
                        // Keep other inline styles, just add background-image
                        el.style.backgroundImage = `url('${bg}')`;
                        el.removeAttribute('data-bg');
                    }

                    el.classList.add('fade-in');
                    observer.unobserve(el);
                }
            });
        }, { rootMargin: "300px 0px" });

        lazyImages.forEach(img => imageObserver.observe(img));
        lazyBackgrounds.forEach(bg => imageObserver.observe(bg));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
        lazyBackgrounds.forEach(bg => {
            bg.style.backgroundImage = `url('${bg.getAttribute('data-bg')}')`;
            bg.removeAttribute('data-bg');
        });
    }
});
