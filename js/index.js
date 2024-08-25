let query = document.querySelectorAll(".queryChild");
let child = document.querySelectorAll(".queryChild .chape span");
let chape = document.querySelector(".chape2");
let span = document.querySelector(".chape2 i");
let form = document.querySelector("form");
let theEnd = document.querySelector(".theEnd");
let toDo = document.querySelectorAll(".toDo");
let tog = document.querySelector(".tog");
chape.addEventListener("click", function () {
  chape.classList.toggle("show");
  if (chape.classList.contains("show")) {
    span.style.display = "block";
    chape.style.backgroundColor = "green";
    theEnd.style.cssText = "display:none !important";
  } else {
    chape.style.backgroundColor = "";
    span.style.display = "";
  }
});
query.forEach((el) => {
  el.addEventListener("click", function () {
    query.forEach((element) => {
      element.querySelector(".chape span").style.display = "none";
      element.style.outline = "";
      element.style.backgroundColor = "white";
      el.classList.remove("showing");
      tog.style.cssText = "display:none !important";
    });
    el.querySelector(".chape span").style.display = "block";
    el.style.outline = "solid green 1px ";
    el.style.backgroundColor = " rgba(0, 128, 0, 0.1)";
    el.classList.add("showing");
  });
});

form.addEventListener("submit", function (e) {
  let boolean = true;
  if (!chape.classList.contains("show")) {
    theEnd.style.cssText = "display: block !important;";
    boolean = false;
    e.preventDefault();
  }
  toDo.forEach((el) => {
    if (!el.value) {
      el.parentElement.querySelector(".hidden").style.cssText =
        "display:block !important";
      boolean = false;
      e.preventDefault();
    }
  });
  toDo.forEach((el) => {
    el.addEventListener("input", function () {
      el.parentElement.querySelector(".hidden").style.cssText =
        "display:none !important";
    });
  });
  let num = 0;
  query.forEach((el) => {
    if (el.classList.contains("showing")) {
      num += 1;
    }
    if (num == 0) {
      tog.style.cssText = "display: block !important";
      e.preventDefault();
      boolean = false;
    } else {
      tog.style.cssText = "display: none !important";
    }
  });
});
