// document.querySelector(".img").addEventListener("click", function (e) {
//   console.log("Hello World");
// });
function onClick(e) {
  console.log(e);
  e.target.style.background = "yellow";
}
document.querySelector("#heading").addEventListener("click", onClick);
