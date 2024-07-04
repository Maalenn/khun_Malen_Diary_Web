const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

// Getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

// Storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // Getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // Getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // Getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Getting last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    // Creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // Creating li of all days of current month
    // Adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    // Creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // Passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  // Getting prev and next icons
  icon.addEventListener("click", () => {
    // Adding click event on both icons
    // If clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      // If current month is less than 0 or greater than 11
      // Creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // Updating current year with new date year
      currMonth = date.getMonth(); // Updating current month with new date month
    } else {
      date = new Date(); // Pass the current date as date value
    }
    renderCalendar(); // Calling renderCalendar function
  });
});
