const dark = document.getElementById("dark");

document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  dark.addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document
    .querySelectorAll("h1, h2, h3, p, a")
    .forEach((el) => el.classList.toggle("dark-mode"));
  document.querySelector("main").classList.toggle("dark-mode");
  document
    .querySelectorAll(
      ".card, .card-info, .card-icons, .button, .footer-icons a"
    )
    .forEach((el) => el.classList.toggle("dark-mode"));
  document.getElementById("d-selected").classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}

function loadDarkMode() {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.toggle("dark-mode");
    document
      .querySelectorAll("h1, h2, h3, p, a")
      .forEach((el) => el.classList.toggle("dark-mode"));
    document.querySelector("main").classList.toggle("dark-mode");
    document.getElementById("d-selected").classList.toggle("dark-mode");
    document
      .querySelectorAll(
        ".card, .card-info, .card-icons, .button, .footer-icons a"
      )
      .forEach((el) => el.classList.toggle("dark-mode"));
  }
}
