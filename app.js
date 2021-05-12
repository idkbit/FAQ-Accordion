const btns = document.querySelectorAll(".accordion__question");
const texts = document.querySelectorAll(".accordion__content");
console.log(texts);

btns.forEach((el, i) => el.addEventListener("click", () => {
  el.classList.toggle("active-btn");
  texts[i].classList.toggle("active__content");
}))