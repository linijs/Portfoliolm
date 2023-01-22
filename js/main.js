window.addEventListener("DOMContentLoaded", () => {
    // const menuBtn = document.querySelector(".menu-btn");

    // menuBtn.addEventListener("click", () => {
    //     menuBtn.classList.toggle("open");

    //     const nav = document.querySelector("nav");
    //     nav.classList.toggle("open");
    // });

    const controlBtns = document.querySelectorAll(".controls button");
    const textSlides = document.querySelector("[data-slides]");
    const imgSlides = {
        mobile: [
            'url("./bildes/Yelp_Camp/yelp_camp_16_9.webp")',
            'url("./bildes/SIA_ROBO/sia_robo_16_9.webp")',
            'url("./bildes/Gadalaiki/gadalaiki_16_9.webp")',
            'url("./bildes/Portfolio_2022/portfolio_16_9.webp")',
            'url("./bildes/Spotify_app_notebook_blurred_16_9.png")',
        ],
        desktop: [
            'url("./bildes/Yelp_Camp/yelp_camp_16_9.webp")',
            'url("./bildes/SIA_ROBO/sia_robo_16_9.webp")',
            'url("./bildes/Gadalaiki/gadalaiki_16_9.webp")',
            'url("./bildes/Portfolio_2022/portfolio_16_9.webp")',
            'url("./bildes/Spotify_app_notebook_blurred_16_9.png")',
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
