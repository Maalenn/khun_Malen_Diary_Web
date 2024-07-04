// =====Start About Us with dynamic component=====

// Import data from data file
import { AboutUsData } from "../data/about-us-data.js";

// Declare variable 'dataSources' to set 'about-us-data' and can use it in html file
const dataSources = {
  "about-us-data": AboutUsData,
};

// =====Start the component that map list menu in about us page=====
// It will map to about us content
const AboutUsContainer = (aboutUsContents) => {
  return `
          <section class="main-about-us">
            ${aboutUsContents
              .map(
                (items) => `
                <article class="article-about-us">
                    <h1>${items.aboutUsTitle}</h1>
                    <section class="about-content">
                        <div class="about-us-image-container">
                            <img src="${items.aboutUsImage}" alt="">
                        </div>
                        <div class="about-us-des">
                            <p>${items.aboutUsDes}</p>
                        </div>
                    </section>
                </article>
              `
              )
              .join("")}
            </section>
    `;
};
// =====End the component that map list menu in about us page=====

// Create one class to working with my component
class AboutUs extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = AboutUsContainer(data);
  }
}

// For the 'about-us-component' is component's name
customElements.define("about-us-component", AboutUs);

// =====End the component that map list menu in about us=====
