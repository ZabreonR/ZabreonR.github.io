// Creates an array of Painting objects
const paintings = [
    new Painting("The Bee", "RichardsDrawings", "images/bee.png", true),
    new Painting("Dream love kitten", "CDD20", "images/kitten.png", false),
    new Painting("Flowers and Butterflies", "LunaRose", "images/flowers.png", false),
    new Painting("Forest Animals", "WildBrush", "images/forest.png", false),
  ];
  
  // Renders all paintings to the page
  window.onload = function () {
    const container = document.getElementById("gallery");
    paintings.forEach((painting, index) => {
      container.innerHTML += painting.getSection(index);
    });
  };
  
  // Model logic
  function showModal(index) {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modal-content");
    content.innerHTML = paintings[index].getModalContent();
    modal.style.display = "block";
  }
  