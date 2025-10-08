// -------------------------
// Hamburger toggle + Scroll Reveal
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const burger = document.querySelector(".hamburger");

  burger?.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    body.classList.toggle("nav-open", !isOpen);
  });

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

  document
    .querySelectorAll(".reveal, .product-card, .blog-post, .tcol")
    .forEach((el) => io.observe(el));

  // -------------------------
  // JSON DATA LOADER (Market Page)
  // Market page dynamically loads sneaker data from sneakers.json
  // -------------------------
  const productGrid = document.getElementById("product-grid");

  if (productGrid) {
    const jsonUrl =
      "https://zabreonr.github.io/csce242/projects/part6/sneakers.json";

    console.log("Fetching JSON from:", jsonUrl); // for debugging

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Loaded sneaker data:", data); // for debugging
        productGrid.innerHTML = data
          .map(
            (sneaker) => `
            <a class="product-card reveal" href="product.html">
              <div class="thumb">
                <img src="${sneaker.img_name}" alt="${sneaker.name}">
              </div>
              <div class="product-body">
                <div class="product-title">${sneaker.name}</div>
                <div class="product-meta">
                  <span>${sneaker.condition}</span>
                  <strong>$${sneaker.price}</strong>
                </div>
              </div>
            </a>
          `
          )
          .join("");
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        productGrid.innerHTML =
          "<p class='muted'>Failed to load sneaker data. Please check your JSON file path.</p>";
      });
  }
});