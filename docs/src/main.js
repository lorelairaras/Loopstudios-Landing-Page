document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("hidden");

      if (isOpen) {
        // Open
        mobileMenu.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
        menuBtn.classList.add("menu-open");
        menuBtn.setAttribute("aria-expanded", "true");
      } else {
        // Close
        mobileMenu.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        menuBtn.classList.remove("menu-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});
