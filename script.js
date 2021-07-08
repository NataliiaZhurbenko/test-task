const card = document.querySelector(".card");
card.addEventListener("click", function () {
  card.classList.toggle("is-rotate");
});

const bar = document.querySelector(".bar");
bar.addEventListener("click", function () {
  bar.classList.toggle("close");
});
