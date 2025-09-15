// Menu toggle
const toggleMenu = document.getElementById("toggleMenu");
const menuItems = document.getElementById("menuItems");
const exercise1Btn = document.getElementById("exercise1Btn");
const exercise2Btn = document.getElementById("exercise2Btn");
const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");

toggleMenu.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
  toggleMenu.textContent = menuItems.classList.contains("hidden") ? "▼" : "▲";
});

// Switch between exercises
exercise1Btn.addEventListener("click", () => {
    exercise1.classList.remove("hidden");
    exercise2.classList.add("hidden");
  });
  exercise2Btn.addEventListener("click", () => {
    exercise2.classList.remove("hidden");
    exercise1.classList.add("hidden");
  });

  // Exercise 1: Planting
const daysSlider = document.getElementById("daysSlider");
const plantMessage = document.getElementById("plantMessage");
const plantImage = document.getElementById("plantImage");

function updatePlant(days) {
    if (days <= 2) {
      plantMessage.textContent = `It's been ${days} days since watering your plant. Your plant is healthy and happy!`;
      plantImage.src = "images/happyp.png";
    } else if (days <= 5) {
      plantMessage.textContent = `It's been ${days} days since watering your plant. Your plant needs watering!`;
      plantImage.src = "images/thirstyp.png";
    } else if (days <= 9) {
        plantMessage.textContent = `It's been ${days} days since watering your plant. Leaves are dropping, water soon!`;
    plantImage.src = "images/wiltingp.png";
  } else {
    plantMessage.textContent = `It's been ${days} days since watering your plant. Sorry, your plant is no longer with us.`;
    plantImage.src = "images/deadp.png";
  }
}

daysSlider.addEventListener("input", () => {
    updatePlant(daysSlider.value);
  });
  
  // Initialize
  updatePlant(daysSlider.value);

  
// Exercise 2: Digital Clock
const clock = document.getElementById("clock");

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  clock.textContent = `${hours}:${minutes} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();