const targetDate = new Date(2025, 8, 12, 14, 0, 0);
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeDifferenceMilliseconds = targetDate.getTime() - currentDate.getTime()
  const timeDifferenceSeconds = Math.ceil(timeDifferenceMilliseconds / 1000);
  flipAllCards(timeDifferenceSeconds);
}, 250);

function flipAllCards(time) {
  if (time < 0) {
    console.log("Launching!");
    return;
}
const days = Math.floor(time / 86400);
time %= 86400;
const hours = Math.floor(time / 3600);
time %= 3600;
const minutes = Math.floor(time / 60);
const seconds = time % 60;

  flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
  flip(document.querySelector("[data-days-ones]"), days % 10);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}
