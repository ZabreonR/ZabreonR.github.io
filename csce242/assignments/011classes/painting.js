class Painting {
    constructor(title, artist, image, framed) {
      this.title = title;
      this.artist = artist;
      this.image = image;
      this.framed = framed;
    }
  
    getSection(index) {
      return `
        <div class="painting" onclick="showModal(${index})">
          <h3>${this.title}</h3>
          <img src="${this.image}" alt="${this.title}">
        </div>
      `;
    }
  
    getModalContent() {
      return `
        <div class="w3-modal-content w3-animate-top w3-card-4" style="background-color: #fdfde3; padding: 20px;">
          <span onclick="document.getElementById('modal').style.display='none'" class="w3-button w3-display-topright">&times;</span>
          <h2>${this.title}</h2>
          <p><strong>by ${this.artist}</strong></p>
          ${this.framed ? '<div style="border: 10px solid black; display: inline-block;">' : ''}
            <img src="${this.image}" alt="${this.title}" style="max-width: 100%; height: auto;">
          ${this.framed ? '</div>' : ''}
        </div>
      `;
    }
  }