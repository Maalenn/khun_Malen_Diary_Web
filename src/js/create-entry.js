// =====Start CRUD operation (Create, Read, Update, Delete)===
document.addEventListener("DOMContentLoaded", () => {
  // Get all elemnt using DOM
  const form = document.getElementById("diary-form");
  const entriesContainer = document.getElementById("entries-container");
  const formPopup = document.getElementById("form-popup");
  const openFormButton = document.getElementById("open-form-button");
  const cancelButton = document.getElementById("cancel-button");
  const createButton = document.getElementById("submit-button");
  let entries = [];

  // This function use for disable scroll and Enable backgroud blur
  const disableScroll_EnableBlur = () => {
    // Make what is behind form non-scrollable
    document.querySelector("html").classList.add("overflow-y-hidden");
    // Make what is behind form blur
    document.querySelector(".background-blur").classList.remove("bg-blur");
    // Change z-index of side bar
    document.querySelector(".side-bar").style.zIndex = "1";
  };

  // This function use for enable scroll and disable backgroud blur
  const enableScroll_DisableBlur = () => {
    // Allow scrolling
    document.querySelector("html").classList.remove("overflow-y-hidden");
    // Remove blur from background
    document.querySelector(".background-blur").classList.add("bg-blur");
    // Change z-index of side bar
    document.querySelector(".side-bar").style.zIndex = "99";
  };

  // This function working when user click on New button in Form Popup
  // It will show a Popup form on screen
  openFormButton.addEventListener("click", () => {
    formPopup.classList.add("show");
    disableScroll_EnableBlur();
  });

  // This function working when user click on cancel button in Form Popup
  // It will disable a Form popup from this web page
  cancelButton.addEventListener("click", () => {
    formPopup.classList.remove("show");
    form.reset();
    form.dataset.mode = "";
    form.dataset.index = "";
    // Show the create button again
    createButton.style.display = "block";
    // Make fields editable
    document.getElementById("title").readOnly = false;
    document.getElementById("content").readOnly = false;
    document.getElementById("date").readOnly = false;

    enableScroll_DisableBlur();
  });

  // This function working when user click on create button
  // First it get all the information that user input then submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = document.getElementById("date").value;

    if (title && content && date) {
      const entry = { title, content, date };

      if (form.dataset.mode === "edit") {
        const index = parseInt(form.dataset.index);
        entries[index] = entry;
        form.dataset.mode = "";
        form.dataset.index = "";
      } else {
        entries.push(entry);
      }

      saveEntries();
      displayEntries();
      form.reset();
      formPopup.classList.remove("show");
      // Show the create button again
      createButton.style.display = "block";
      // Make fields editable
      document.getElementById("title").readOnly = false;
      document.getElementById("content").readOnly = false;
      document.getElementById("date").readOnly = false;
      enableScroll_DisableBlur();
    } else {
      alert("Please fill in all fields.");
    }
  });
  // This is working for saving data in local storage
  const saveEntries = () => {
    localStorage.setItem("diary-entries", JSON.stringify(entries));
  };

  const loadEntries = () => {
    const storedEntries = localStorage.getItem("diary-entries");
    entries = storedEntries ? JSON.parse(storedEntries) : [];
  };

  //This is a function that working for showing entry after created 
  const displayEntries = () => {
    // Main entries container: all entries after create will appended to this scope
    entriesContainer.innerHTML = "";
    // Loop entry content when entry create
    entries.forEach((entry, index) => {
      const entryDiv = document.createElement("div");
      entryDiv.classList.add("entry");
      entryDiv.innerHTML = `
            <section class="entry-to-container"> 
                <div> Date: ${entry.date} </div>
                    <hr>
                    <section class="btn-edit-delete-container">
                        <button onclick="editEntry(${index}, event)">
                            <span class="material-symbols-outlined edit-btn">edit</span></button>
                        <button onclick="deleteEntry(${index}, event)">
                            <span class="material-symbols-outlined delete-btn">delete</span>
                        </button> 
                    </section>
                <div>
                    <p>${entry.content}</p> 
                </div>
            </section>
            <div class="entry-title">
                <hr> 
                <h3>${entry.title}</h3>
            </div>
            
            `;
      entryDiv.addEventListener("click", () => viewEntry(index));
      entriesContainer.appendChild(entryDiv);
    });
  };
  //View: This function working when user click every where on entry accept edit and delete icon
  window.viewEntry = (index) => {
    const entry = entries[index];
    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
    const dateElement = document.getElementById("date");

    titleElement.value = entry.title;
    contentElement.value = entry.content;
    dateElement.value = entry.date;

    // Set fields to readonly
    titleElement.readOnly = true;
    contentElement.readOnly = true;
    dateElement.readOnly = true;

    // Hide the create button
    createButton.style.display = "none";
    formPopup.classList.add("show");
    form.dataset.mode = "view";
    disableScroll_EnableBlur();
  };

  //Update: This function working when user click on edit icon on entry
  window.editEntry = (index, event) => {
    event.stopPropagation();
    const entry = entries[index];
    document.getElementById("title").value = entry.title;
    document.getElementById("content").value = entry.content;
    document.getElementById("date").value = entry.date;
    formPopup.classList.add("show");
    form.dataset.mode = "edit";
    form.dataset.index = index;
    // Show the create button
    createButton.style.display = "block";
    // Make fields editable
    document.getElementById("title").readOnly = false;
    document.getElementById("content").readOnly = false;
    document.getElementById("date").readOnly = false;
    disableScroll_EnableBlur();
  };

  // This function working when user click on trash icon on entry
  window.deleteEntry = (index, event) => {
    event.stopPropagation();
    entries.splice(index, 1);
    saveEntries();
    displayEntries();
  };

  // Initial load from localStorage
  loadEntries();
  displayEntries();
});

// =====End CRUD operation (Create, Read, Update, Delete)===
