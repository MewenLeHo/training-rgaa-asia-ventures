const links = document.querySelectorAll(".country a");

links.forEach((element) => {
  element.addEventListener("mousedown", () => {
    window.location.href = element.getAttribute("href");
  });
});
