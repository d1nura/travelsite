var x = document.querySelector(".menu");
var y = document.querySelector(".show");

x.addEventListener("click", () => {
  console.log("fdf");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
});
