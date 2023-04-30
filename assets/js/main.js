window.onload = function () {
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
    })
}