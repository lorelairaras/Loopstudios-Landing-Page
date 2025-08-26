const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
  menuBtn.classList.toggle("menu-open");
});
