// This function will enable a sidebar when user click on menu bar button
function enableSideBar() {
  // Add class openSideBar to side-bar
  document.querySelector(".side-bar").classList.add("open-sideBar");
  // Make what is behind sidebar non-scrollable
  document.querySelector("html").classList.add("overflow-y-hidden");
  // Make what is behind sidebar blur
  document.querySelector(".background-blur").classList.remove("bg-blur");
}

// This function will disable a sidebar when user click on cross button
function disableSideBar() {
  // Remove class openSideBar from side-bar
  document.querySelector(".side-bar").classList.remove("open-sideBar");
  // Allow scrolling
  document.querySelector("html").classList.remove("overflow-y-hidden");
  // Remove blur from background
  document.querySelector(".background-blur").classList.add("bg-blur");
}
