/*Banner Hero*/ 

const hero = document.querySelector("#hero");

    hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hero.style.setProperty("--x", `${x}px`);
    hero.style.setProperty("--y", `${y}px`);
    });


    /*Menu Mobile*/

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
    })