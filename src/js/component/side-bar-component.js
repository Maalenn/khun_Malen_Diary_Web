// =====Start Side Bar with dynamic component=====

// Import data from data file
import { SideBarData } from "../data/side-bar-data.js";

// Declare variable 'dataSources' to set 'nav-bar-menu-data' and can use it in html file
const dataSources = {
  "side-bar-data": SideBarData,
};

// =====Start the component that map list menu in side bar=====
const SideBarContainer = (sideContents) => {
  return `
          <aside class="side-bar">
            <button class="close-button" onclick="disableSideBar()">
              <span class="material-symbols-outlined">close</span>
            </button>
            <section class="app-container">
              <a href="/khunmalen-diary-web/index.html" class="app-image">
                <img src="/khunmalen-diary-web/src/image/logo.png" alt="" />
              </a>
              <h2>To Do List</h2>
            </section>
            <ul class="menu-side-bar">
            ${sideContents
              .map(
                (items) => `
              <li class="side-bar-list">
                <a href="${items.menuLink}">
                  <div>
                    <span class="material-symbols-outlined">${items.menuIcon}</span>
                    <div>${items.menuTitle}</div>
                  </div>
                </a>
              </li>
              `
              )
              .join("")}
            </ul>
          </aside>
    `;
};
// =====End the component that map list menu in side bar=====

// Create one class to working with my component
class SideBarMenu extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = SideBarContainer(data);
  }
}

// For the 'side-bar-component' is component's name
customElements.define("side-bar-component", SideBarMenu);

// =====End the component that map list menu in side bar=====
