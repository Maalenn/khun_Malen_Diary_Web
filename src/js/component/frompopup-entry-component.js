// =====Start the component form popup=====
// It will works when user click on New button, edit button and click on entry to view but for view it will hide create buuton in home page
const FormPopupEntryContainer = () => {
  return `
        <section class="main-entry">
            <div id="entries-container"></div>
        </section>
        <section id="form-popup" class="main-form">
            <form id="diary-form">
                <section class="header1">
                    <nav class="navigation-bar container-max-width">
                        <div class="navigation-left">
                            <div class="logo">
                                <img src="/src/image/logo.png" alt="Logo" />
                            </div>
                            <h2>Diary Website Application</h2>
                        </div>
                    </nav>
                </section>
                <section class="info-container container-max-width">
                    <input type="date" id="date" required />
                    <input type="text" id="title" placeholder="Untitled....." required />
                    <textarea id="content" placeholder="Write something here......"required></textarea>
                    <div class="btn-container-popup">
                        <button type="submit" id="submit-button">Create</button>
                        <button type="button" id="cancel-button">Cancel</button>
                    </div>
                </section>
            </form>
        </section>
      `;
};

// Create one class to working with Form Popup component
class FormPopupEntry extends HTMLElement {
  connectedCallback() {
    this.innerHTML = FormPopupEntryContainer();
  }
}

// Create a name component called 'formpopup-entry-component'
customElements.define("formpopup-entry-component", FormPopupEntry);

// =====End the component form popup=====
