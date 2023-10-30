const themeToggler = document.querySelector(".theme-toggle-btn");

// Switch theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle('dark-theme-variables')

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  document.querySelector(".searchbar span").classList.toggle('active');
});