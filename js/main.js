// =================== JS ========================== //

window.addEventListener("load", () => {
    const preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
        // == animate on Scroll
        AOS.init();
    }, 600);
})

// ======= Header Bg Reveal ========= //
const headerBg = () => {
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", () => {
        if(this.scrollY > 0) {
            header.classList.add('bg-reveal');
        } else {
            header.classList.remove('bg-reveal');
        }
    });
}
headerBg();

// ======= Nav Bar ========= //
const navigation = () => {
    const navToggler = document.querySelector(".ja-nav-toggler"); 
    const nav = document.querySelector(".js-nav"); 
    const navItems = nav.querySelectorAll("li"); 

    const navToggle = () => {
        nav.classList.toggle("open");
        navToggler.classList.toggle("active");
    }
    navToggler.addEventListener("click", navToggle);

    navItems.forEach((li) => {
        li.querySelector("a").addEventListener("click", () => {
            if(window.innerWidth <= 767) {
                navToggle();
            }
        })
    });
}
navigation();