window.addEventListener("DOMContentLoaded", () => {
    const controlBtns = document.querySelectorAll(".controls button");
    const textSlides = document.querySelector("[data-slides]");
    const imgSlides = {
        mobile: [
            'url("./bildes/Yelp_Camp/yelp-camp-mobile.webp")',
            'url("./bildes/SIA_ROBO/sia-robo-mobile.webp")',
            'url("./bildes/Gadalaiki/gadalaiki-mobile.webp")',
            'url("./bildes/Portfolio_2022/portfolio-2022-mobile.webp")',
            'url("./bildes/spotify-app-blurred-mobile.webp")',
        ],
        desktop: [
            'url("./bildes/Yelp_Camp/yelp-camp.webp")',
            'url("./bildes/SIA_ROBO/sia-robo.webp")',
            'url("./bildes/Gadalaiki/gadalaiki.webp")',
            'url("./bildes/Portfolio_2022/portfolio-2022.webp")',
            'url("./bildes/spotify-app-blurred.webp")',
        ],
    };

    const header = document.querySelector("header");
    header.style.backgroundImage = imgSlides.mobile[0];

    if (window.innerWidth > 1400) {
        header.style.backgroundImage = imgSlides.desktop[0];
    }

    controlBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const step = btn.dataset.control === "left" ? -1 : 1;

            const active = textSlides.querySelector("[data-active]");

            let newIndex = [...textSlides.children].indexOf(active) + step;

            if (newIndex < 0) newIndex = textSlides.children.length - 1;
            if (newIndex >= textSlides.children.length) newIndex = 0;

            header.style.backgroundImage = imgSlides.mobile[newIndex];

            if (window.innerWidth > 1000) {
                header.style.backgroundImage = imgSlides.desktop[newIndex];
            }

            textSlides.children[newIndex].dataset.active = true;
            delete active.dataset.active;
        });
    });
});
