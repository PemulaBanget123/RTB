let tobook = document.getElementById("tobook");
tobook.addEventListener('click', function(){
    window.location.href="index.html";
})
activeslideimg();

function activeslideimg(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

activeslide1img();

function activeslide1img(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide1");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

activeslide2img();

function activeslide2img(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide2");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

activeslide3img();

function activeslide3img(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide3");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

activeslide4img();

function activeslide4img(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide4");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

activeslide5img();

function activeslide5img(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide5");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

activeslide6img();

function activeslide6img(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide6");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}

activeslide7img();

function activeslide7img(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide7");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }


    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
    }
}
