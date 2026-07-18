// Cyber Celebrations V2


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mainNavigation = document.getElementById("mainNavigation");

if (mobileMenuButton && mainNavigation) {
  mobileMenuButton.addEventListener("click", () => {
    const menuIsOpen = mainNavigation.classList.toggle("active");

    mobileMenuButton.classList.toggle("active", menuIsOpen);
    mobileMenuButton.setAttribute("aria-expanded", menuIsOpen);

    document.body.classList.toggle("menu-open", menuIsOpen);
  });

  const navigationLinks = mainNavigation.querySelectorAll("a");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNavigation.classList.remove("active");
      mobileMenuButton.classList.remove("active");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}


/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const questionButton = item.querySelector(".faq-question");

  if (!questionButton) {
    return;
  }

  questionButton.addEventListener("click", () => {
    const itemIsOpen = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");

      const otherButton = otherItem.querySelector(".faq-question");

      if (otherButton) {
        otherButton.setAttribute("aria-expanded", "false");
      }
    });

    if (!itemIsOpen) {
      item.classList.add("active");
      questionButton.setAttribute("aria-expanded", "true");
    }
  });
});


/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  document.body.classList.add("reveal-ready");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -45px 0px"
    }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
    revealObserver.observe(element);
  });
}


/* =========================================
   REMOVE MOBILE MENU AFTER RESIZING
========================================= */

window.addEventListener("resize", () => {
  if (window.innerWidth > 820 && mobileMenuButton && mainNavigation) {
    mainNavigation.classList.remove("active");
    mobileMenuButton.classList.remove("active");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});


console.log("Cyber Celebrations V2 loaded");
