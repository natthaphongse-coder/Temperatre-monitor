
const temperatures = {
  chiller: -2.0,
  brine: 3.0
};

document.getElementById("chiller").textContent =
  temperatures.chiller.toFixed(1) + " °C";

document.getElementById("brine").textContent =
  temperatures.brine.toFixed(1) + " °C";
