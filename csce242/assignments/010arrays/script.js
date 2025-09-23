// Image credit: Pixabay – https://pixabay.com/


const catsBefore = {
    Luna: "https://cdn.pixabay.com/photo/2020/02/11/11/34/cat-4837184_1280.jpg",
    Oliver: "https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_1280.jpg",
    Nala: "https://cdn.pixabay.com/photo/2020/11/11/12/04/cat-5732208_1280.jpg",
    Max: "https://cdn.pixabay.com/photo/2020/02/21/17/31/cat-4867694_1280.jpg"
  };
  
  const catsAfter = {
    Luna: "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
    Oliver: "https://cdn.pixabay.com/photo/2020/06/30/14/07/cat-5355117_1280.jpg",
    Nala: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
    Max: "https://cdn.pixabay.com/photo/2020/04/13/20/14/cat-5040587_1280.jpg"
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
  
    card.addEventListener("click", () => {
      document.getElementById("popup-title").innerText = `${name} after adoption`;
      document.getElementById("popup-img").src = catsAfter[name];
      document.getElementById("popup").classList.remove("hidden");
    });
  }
  
  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
  });