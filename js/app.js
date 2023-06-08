const parallax_el = document.querySelectorAll(".parallax")

let xValue = 0,
    yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerWidth / 2;

    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        let zValue = (e.clientY - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
                              translateY(calc(-50% + ${-yValue * speedy}px))
                              perspective(2300px) translateZ(${zValue}px)`;
    });
});

/* GSAP ANIMATION */

let timeline = gsap.timeline();

Array.from(parallax_el)
    .filter((el) => !el.classList.contains("text"))
   

    timeline.from
    (
        ".text h1",
        {
            y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
            duration: 2,
        },
        "2.5"
    )

    timeline.from
    (
        ".text h2",
        {
            y: window.innerHeight - document.querySelector(".text h2").getBoundingClientRect().bottom + 200,
            duration: 2,
        },
        "2.5"
    )

