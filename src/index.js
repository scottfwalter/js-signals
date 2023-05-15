import { signal, effect } from "@preact/signals-core";
import "./styles.css";

// Create signal and effect
const counter = signal(1);
const counter2 = signal(10);
effect(() => {
  const p = document.createElement("div");
  p.textContent = "counter one read";
  document.getElementById("logs").appendChild(p);
  document.querySelector("output").textContent = counter.value;
});

effect(() => {
  const p = document.createElement("div");
  p.textContent = "counter two read";
  document.getElementById("logs").appendChild(p);
  document.querySelector("output2").textContent = counter2.value;
});

// Add button event listeners
document
  .querySelector("#counter-one")
  .querySelectorAll("button")
  .forEach((button) =>
    button.addEventListener("click", (e) => {
      if (e.target.textContent === "+") {
        counter.value++;
      } else if (e.target.textContent === "-") {
        counter.value--;
      }
    })
  );

document
  .querySelector("#counter-two")
  .querySelectorAll("button")
  .forEach((button) =>
    button.addEventListener("click", (e) => {
      if (e.target.textContent === "+") {
        counter2.value++;
      } else if (e.target.textContent === "-") {
        counter2.value--;
      }
    })
  );
