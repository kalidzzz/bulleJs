const counterDisplay = document.querySelector("h3");
let counter = 0;
const ring = () => {
  const audio = new Audio();
  audio.src = "./z.mp3";
  audio.play();
};

const bubbleMaker = () => {
  // j'ajoute une class dans mon dom
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // je crée une variable qui va me permettre de gérer la taille de la balle
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  // je crée une variable qui va me permettre de gérer la position de la balle
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // je crée une variable qui va me permettre de gérer la direction de la balle
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // J'ajoute le delete au click + j'ajoute le counter
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.innerHTML = counter;
    ring();

    bubble.remove();
  });

  // je crée une variable qui va me permettre de gérer la supp de la balle
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
// je crée une fonction qui va me permettre de gérer la création de la balle
setInterval(bubbleMaker, 600);
