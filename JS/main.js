const menuToggle = document.querySelector(".header__toggle");
const menuHeader = document.querySelector(".header__menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function(event) {
    menuHeader.classList.add(expandClass);
    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");
})
document.addEventListener("click", handleOut);
function handleOut(event) {
    if(!menuHeader.contains(event.target) && !event.target.matches(".header__toggle")) {
        // console.log(event.target);
        menuHeader.classList.remove(expandClass);
        // menuToggle.classList.remove("fa-times");
        // menuToggle.classList.add("fa-bars");

    }
}

// accordion
const accordionHeaders = document.querySelectorAll(".wedo__select");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", function (e) {
    const content = e.target.nextElementSibling;
    content.classList.toggle("is-active");
    content.style.height = `${content.scrollHeight}px`;
    if (!content.classList.contains("is-active")) {
      content.style.height = "0px";
    }

    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
  })
);
 

//countup event
