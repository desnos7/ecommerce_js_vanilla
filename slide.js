let heart = document.querySelectorAll(".fa-heart");

console.log(heart);

heart.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.classList.toggle("icon");
  });
});
