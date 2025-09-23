function drawScene() {
    const scene = document.getElementById("scene");
    scene.innerHTML = ""; // Clear any previous drawings
  
    const date = new Date();
    const hour = date.getHours();
  
    const isNight = hour >= 18 || hour < 6;

    document.body.style.backgroundColor = isNight ? "black" : "lightblue";
  document.body.style.color = isNight ? "#ffffff" : "#000000";

  // Add sun or moon
  const celestial = document.createElement("div");
  celestial.className = isNight ? "moon" : "sun";
  scene.appendChild(celestial);

  // Draw clouds using a for loop
  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    scene.appendChild(cloud);
  }

  // Draw trees using a for loop
  for (let i = 0; i < 6; i++) {
    const tree = document.createElement("div");
    tree.className = "tree";
    scene.appendChild(tree);
  }
}