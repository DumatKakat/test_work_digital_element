const burger = document.querySelector(".nav_burgerbutton");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_isActive");
});
