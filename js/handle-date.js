/**
 * Show the new date as inner text in the HTML element.
 * @param {string} date The current date.
 * @param {HTMLElement} element The HTML element to update.
 */
function showDate(element, date) {
  element.innerText = date;
}

/**
 * Get the current date as locale string.
 */
function getDate() {
  return new Date().toLocaleString();
}

/**
 * Handle date rendering
 */
export function handleDate() {
  const date = getDate();

  showDate(
    dateElement,
    date
  );
}

const dateElement = document.getElementById('date');
const milliseconds = 1000;

// handle date every second
setInterval(
  handleDate,
  milliseconds
);