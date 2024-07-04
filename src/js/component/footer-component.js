// =====Start footer with dynamic component=====

// Import data from data file
import { FooterData } from "../data/footer-data.js";

// Declare variable 'dataSources' to set 'footer-data' and can use it in html file
const dataSources = {
  "footer-data": FooterData,
};

// =====Start the component that map list menu in footer=====
const FooterContainer = (footerContents) => {
  return `
        <footer class="footer">
            <section class="footer-container container-max-width">
                <div class="footer-logo"> 
                    <a href=" /index.html" class="logo">
                        <img src=" /src/image/logo.png" alt="" />
                    </a>
                    <h1>Khun Malen</h1>
                </div>
                <ul class="footer-menu">
                ${footerContents
                  .map(
                    (items) => `
                     <li class="list-footer"><a href="#" class="list-item">
                        <img src=${items} alt="">
                     </a></li>
                `
                  )
                  .join("")}  
                </ul>
            </section>
        </footer>
    `;
};
// =====End the component that map list menu in footer=====

// Create one class to working with footer component
class Footer extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = FooterContainer(data);
  }
}

// For the 'footer-component' is component's name
customElements.define("footer-component", Footer);

// =====End the component that map list menu in footer=====
