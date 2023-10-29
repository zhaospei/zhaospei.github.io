$(document).ready(function () {
    const mobile_menu_btn_open = document.querySelector("button.mobile-menu-btn-open");
    const mobile_menu_btn_close = document.querySelector("button.mobile-menu-btn-close");
    const mobile_menu = document.querySelector(".mobile-menu");

    mobile_menu_btn_open.addEventListener("click", () => {
        mobile_menu.classList.toggle("hidden");
        mobile_menu_btn_open.classList.toggle("hidden");

    });
    mobile_menu_btn_close.addEventListener("click", () => {
        mobile_menu.classList.toggle("hidden");
        mobile_menu_btn_open.classList.toggle("hidden");
    });

});

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-100px";
//   }
// }

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (document.documentElement.scrollTop < 100) {
    document.getElementById("navbar").style.bottom = "-100px";
   } else {
        if (st > lastScrollTop) {
            document.getElementById("navbar").style.bottom = "-100px";

        } else if (st < lastScrollTop) {
            document.getElementById("navbar").style.bottom = "30px";
        } // else was horizontal scroll
    }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);