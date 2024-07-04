// =====Start Navigation Bar with dynamic component=====

// Import data from data file
import { NavBarMenuData } from "../data/nav-bar-data.js";

// Declare variable 'dataSources' to set 'nav-bar-menu-data' and can use it in html file
const dataSources = {
  "nav-bar-menu-data": NavBarMenuData,
};

// =====Start the component that map list menu in navigation bar=====
const NavigationBarContainer = (menuContents) => {
  return `
        <header class="header">
            <nav class="navigation-bar container-max-width">
                <button class="menu-bar-icon" onclick="enableSideBar()">
                    <span class="material-symbols-outlined menu-bar"> menu </span>
                </button>
                    <h1>Diary Website Application</h1>
                <div class="navigation-left">
                    <a href="/khunmalen-diary-web/index.html" class="logo">
                        <img src="/khunmalen-diary-web/src/image/logo.png" alt="" />
                    </a>
                    <h3>Diary Website Application</h3>
                </div>
                <ul class="navigation-menu">
                ${menuContents
                  .map(
                    (items) => `
                     <li class="list-top"><a href="${items.menuLink}" class="list-item">${items.menuTitle}</a></li>
                `
                  )
                  .join("")}  
                </ul>
                <section class="navigation-right"> 
                    <div class="search-container">
                        <button class="search-btn">
                            <span class="material-symbols-outlined"> search </span>
                        </button>
                        <div class="search-title">Search...</div>
                    </div>
                    <a href="/khunmalen-diary-web/public/contact-us.html"><span class="material-symbols-outlined">person</span></a>
                </section>
            </nav>
        </header>
    `;
};
// =====End the component that map list menu in navigation bar=====

// Create one class to working with my component
class NavigationBarMenu extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = NavigationBarContainer(data);
  }
}

// Create a name component called 'navigation-bar-component'
customElements.define("navigation-bar-component", NavigationBarMenu);

// =====End the component that map list menu in navigation bar=====
