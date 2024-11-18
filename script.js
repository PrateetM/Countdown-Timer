const dateInput = document.getElementById("date-input");
const startBtn = document.getElementById("start-btn");
const countdownContainer = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let countdownInterval;

startBtn.addEventListener("click", () => {
  const selectedDate = new Date(dateInput.value);
  if (isNaN(selectedDate.getTime())) {
    alert("Please select a valid date and time.");
    return;
  }

  countdownContainer.classList.remove("hidden");
  clearInterval(countdownInterval);
  startCountdown(selectedDate);
});

function startCountdown(targetDate) {
  function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      alert("Countdown has ended!");
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
  }

  updateCountdown(); // Run once immediately
  countdownInterval = setInterval(updateCountdown, 1000);
}
