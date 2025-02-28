document.addEventListener("DOMContentLoaded", () => {
    const managerBurger = () => {
        const burger = document.getElementById("burger");
        const menu = document.getElementById("menu");
        const svgLines = document.querySelector(".burger__svg-lines");
        const svgCross = document.querySelector(".burger__svg-cross");


        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');

            svgCross.classList.toggle("visible");
            svgCross.classList.toggle("hidden");

            svgLines.classList.toggle("visible");
            svgLines.classList.toggle("hidden");
        });

        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !burger.contains(event.target)) {
                burger.classList.remove('is-active');
                menu.classList.remove('is-active');

                svgCross.classList.remove("visible");
                svgCross.classList.add("hidden");

                svgLines.classList.add("visible");
                svgLines.classList.remove("hidden");
            }
        });
    };

    const managerSearch = () => {
        const searchBtn = document.querySelector(".header__magnifier");
        const block = document.querySelector(".header__block-input");
        const svgSearch = document.querySelector(".svg-search-button");
        const svgClose = document.querySelector(".svg-close");
        const form = document.querySelector(".header__form");
        const btnSubmit = document.querySelector(".header__submit");

        searchBtn.addEventListener('click', () => {
            block.classList.toggle('is-active');

            svgSearch.classList.toggle("visible");
            svgSearch.classList.toggle("hidden");

            svgClose.classList.toggle("visible");
            svgClose.classList.toggle("hidden");
        });

        btnSubmit.addEventListener('click', (event) => {
            event.preventDefault();
        })

        document.addEventListener('click', (event) => {
            if (!form.contains(event.target) && !form.contains(event.target)) {
                block.classList.remove('is-active');

                svgSearch.classList.remove("hidden");
                svgSearch.classList.add("visible");

                svgClose.classList.add("hidden");
                svgClose.classList.remove("visible");
            }
        });
    };

    managerBurger();
    managerSearch();
});
