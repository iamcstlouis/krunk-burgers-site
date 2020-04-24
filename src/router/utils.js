export const closeMenu = () => {
  const menuToggler = document.querySelector(".mobile-menu");

  if (menuToggler) {
    const selectElement = element => document.querySelector(element);
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.body;

    mobileMenu.classList.remove("open");
    body.classList.remove("fixed-position");
    selectElement(".hamburger-toggler").classList.remove("open");
    selectElement(".bar__top").classList.remove("open");
    selectElement(".bar__mid").classList.remove("open");
    selectElement(".bar__btm").classList.remove("open");
  }
};
