// Images are stored locally inside the /images folder

const catsBefore = {
  Luna: "images/before-luna.jpg",
  Oliver: "images/before-oliver.jpg",
  Nala: "images/before-nala.jpg",
  Max: "images/before-max.jpg"
};

const catsAfter = {
  Luna: "images/after-luna.jpg",
  Oliver: "images/after-oliver.jpg",
  Nala: "images/after-nala.jpg",
  Max: "images/after-max.jpg"
};

const gallery = document.getElementById("gallery");

for (let name in catsBefore) {
  const card = document.createElement("div");
  card.className = "cat-card";

  const img = document.createElement("img");
  img.src = catsBefore[name];
  img.alt = `Before photo of ${name}`;

  const caption = document.createElement("div");
  caption.className = "caption";
  caption.innerText = `Please adopt ${name}`;

  card.appendChild(img);
  card.appendChild(caption);
  gallery.appendChild(card);

  // Show popup with after photo when clicked
  card.addEventListener("click", () => {
    document.getElementById("popup-title").innerText = `${name} after adoption`;
    document.getElementById("popup-img").src = catsAfter[name];
    document.getElementById("popup").classList.remove("hidden");
  });
}

// Close popup
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});