$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

let nav = document.querySelector("nav");
let scrollPervious = window.pageYOffset;
window.onscroll = () => {
  let scrollCurrent = window.pageYOffset;
  if (scrollPervious > scrollCurrent) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-90px";
  }
  scrollPervious = scrollCurrent;
};
