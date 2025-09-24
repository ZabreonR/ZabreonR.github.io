// Images are stored locally inside the /images folder

const catsBefore = {
  Luna: "images/luna-before.jpg",
  Oliver: "images/oliver-before.jpg",
  Nala: "images/nala-before.jpg",
  Max: "images/max-before.jpg"
};

const catsAfter = {
  Luna: "images/luna-after.jpg",
  Oliver: "images/oliver-after.jpg",
  Nala: "images/nala-after.jpg",
  Max: "images/max-after.jpg"
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