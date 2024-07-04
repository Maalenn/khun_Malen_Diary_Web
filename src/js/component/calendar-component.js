import "../calendar.js";
// =====Start calendar with dynamic component=====

// Import data from data file
import { DateData } from "../data/calendar-data.js";

// Declare variable 'dataSources' to set 'date-data' and can use it in html file
const dataSources = {
  "date-data": DateData,
};

// =====Start the component that map list menu in calendar days title=====
const CalendarContainer = (calendarContents) => {
  return `
            <ul class="weeks">
            ${calendarContents
              .map(
                (items) => `
                <li>${items}</li>
            `
              )
              .join("")} 
            </ul>       
    `;
};
// =====End the component that map list menu in calendar day title=====

// Create one class to working with canlendar component
class Calendar extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = CalendarContainer(data);
  }
}

// For the 'calendar-component' is component's name
customElements.define("calendar-component", Calendar);

// =====End the component that map list menu in calendar day title=====
