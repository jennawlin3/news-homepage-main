const d = document;
const $btn_menu = d.querySelector("navbar-btn");
const $icon_btn = d.querySelector("#btn-icon");
const $mobile_menu = d.querySelector(".navbar_ul-mobile");

console.log($mobile_menu)

$icon_btn.addEventListener("click", (e) => {
    console.log("hola");

    $mobile_menu.classList.toggle("show");

    if($mobile_menu.classList.contains("show")) {
        $icon_btn.src = "./assets/images/icon-menu-close.svg"
    } else {
        $icon_btn.src = "./assets/images/icon-menu.svg"
    }
})