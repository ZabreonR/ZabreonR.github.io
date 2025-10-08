document.addEventListener("DOMContentLoaded", () => {
  // --- Hamburger toggle ---
  const body = document.body;
  const burger = document.querySelector(".hamburger");

  burger?.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    body.classList.toggle("nav-open", !isOpen);
  });

  // --- Scroll Reveal Animation ---
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal, .product-card, .blog-post, .tcol").forEach((el) => io.observe(el));

  // --- JSON Loader for Market Page ---
  const productGrid = document.getElementById("product-grid");
  if (productGrid) {
    const jsonUrl = "https://zabreonr.github.io/csce242/projects/part6/sneakers.json";

    console.log("Fetching JSON from:", jsonUrl);
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded sneaker data:", data);

        // Create sneaker cards
        productGrid.innerHTML = data.map((item) => `
          <a class="product-card reveal" href="product.html">
            <div class="thumb">
              <img src="${item.img_name}" alt="${item.name}">
            </div>
            <div class="product-body">
              <div class="product-title">${item.name}</div>
              <div class="product-meta">
                <span>${item.condition}</span><strong>$${item.price}</strong>
              </div>
            </div>
          </a>
        `).join("");

        // Force visibility for dynamically loaded cards
        document.querySelectorAll(".product-card").forEach((el) => {
          el.classList.add("is-visible");
        });
      })
      .catch((err) => {
        console.error("Error loading JSON:", err);
        productGrid.innerHTML = `<p class="muted">Failed to load sneaker data. Check JSON link.</p>`;
      });
  }
});