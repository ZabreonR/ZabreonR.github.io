// Hamburger toggle + Scroll Reveal
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const burger = document.querySelector(".hamburger");
  
    burger?.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isOpen));
      body.classList.toggle("nav-open", !isOpen);
    });
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
  
    document.querySelectorAll('.reveal, .product-card, .blog-post, .tcol').forEach(el => {
      io.observe(el);
    });
  });
  