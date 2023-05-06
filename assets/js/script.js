let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

const stopYPosition =
  document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
  const currentYPosition = window.pageYOffset;

  text.style.marginTop = currentYPosition * 2.5 + "px";
  leaf.style.top = currentYPosition * -1.5 + "px";
  leaf.style.left = currentYPosition * 1.5 + "px";
  hill5.style.left = currentYPosition * 1.5 + "px";
  hill4.style.left = currentYPosition * -1.5 + "px";
  hill1.style.top = currentYPosition * 1 + "px";

  if (currentYPosition >= stopYPosition) {
    window.scrollTo(0, stopYPosition);
  }
});
// window.addEventListener("scroll", () => {
//   let scrollable = document.documentElement.scrollHeight - window.innerHeight;
//   let scrolled = window.scrollY;

//   text.style.marginTop = scrolled * 2.5 + "px";
//   leaf.style.top = scrolled * -1.5 + "px";
//   leaf.style.left = scrolled * 1.5 + "px";
//   hill5.style.left = scrolled * 1.5 + "px";
//   hill4.style.left = scrolled * -1.5 + "px";
//   hill1.style.top = scrolled * 1 + "px";

//   if (Math.ceil(scrolled) >= scrollable) {
//     window.screenY(0, 0);
//   }
// });
