const dateElement = document.getElementById('date');

function calcDate() {
  let date = getDate();
  displayDate(date);
}

function updateDate() {
  setInterval(() => {
    calcDate();
  }, 1000);
}

function displayDate(date) {
  dateElement.innerText = date;
}

function getDate() {
  return new Date().toLocaleString();
}

export default function () {
  calcDate();
  updateDate();
}