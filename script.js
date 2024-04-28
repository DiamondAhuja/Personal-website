// scripts.js
window.addEventListener("DOMContentLoaded", (event) => {
  const switchButton = document.getElementById("mode-switch");
  switchButton.addEventListener("click", function () {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      this.textContent = "Light Mode";
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      this.textContent = "Dark Mode";
    }
  });
});
