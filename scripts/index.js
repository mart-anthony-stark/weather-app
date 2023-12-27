const makeItRain = () => {
  document.querySelectorAll(".rain").forEach((element) => {
    element.innerHTML = "";
  });

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    increment += randoFiver;
    drops += `<div class="drop" style="left: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
    backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
  }

  document.querySelectorAll(".rain.front-row")[0].innerHTML = drops;
  document.querySelectorAll(".rain.back-row")[0].innerHTML = backDrops;
};

makeItRain();

// Loading transition
const loading = document.querySelector(".loading");
const weather = document.querySelector(".weather-app");
let loadingTimeout = setTimeout(() => {
  loading?.classList.add("closed");
  loading.computedStyleMap.display = "none";

  weather?.classList.remove("closed");

  makeItRain();
}, 2000);

// Animations
const actualWeather = document.querySelector(
  "body > div > div > main > div.top"
);
const bottomDetails = document.querySelector(
  "body > div > div > main > div.bottom"
);
setTimeout(() => {
  actualWeather.style.setProperty("opacity", "1");
}, 3000);

setTimeout(() => {
  bottomDetails.style.setProperty("opacity", "1");
}, 3000);

// Animate cloud
const animateCloud = () => {
  let cloud = document.querySelector(".animated-cloud");
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);

  e.classList.add("drop");
  cloud.appendChild(e);

  e.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(e);
  }, 2000);
};

setInterval(() => {
  animateCloud();
}, 20);
