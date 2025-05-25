const menuIcon = document.querySelector(".menu");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
