// =====Start Developer Information with dynamic component=====

// Import data from data file
import { DeveloperInfoData } from "../data/developer-info-data.js";

// Declare variable 'dataSources' to set 'developer-info-data' and can use it in html file
const dataSources = {
  "developer-info-data": DeveloperInfoData,
};

// =====Start the component that map div menu in developer information content=====
const DeveloperInfoContainer = (infoContents) => {
  return `
        <section class="developer-container">
            <div class="info-title">Developer Information</div>
            ${infoContents
              .map(
                (items) => `
                    <div class="info-developer">
                        <h2>${items.infoLabel}</h2>
                        <p>${items.infoDes}</p>
                    </div> 
                `
              )
              .join("")}
        </section>
    `;
};
// =====End the component that map div menu in developer information content=====

// Create one class to working with my component
class DeveloperInfo extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = DeveloperInfoContainer(data);
  }
}

// For the 'developer-info-component' is component's name
customElements.define("developer-info-component", DeveloperInfo);

// =====End the component that map list menu in developer information content=====

// =====End Developer Information with dynamic component=====
