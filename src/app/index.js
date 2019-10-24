import MenuList from "../MenuList";

function createMenu() {
    console.log("Menu creation");
    document.body.customMenu = new MenuList();
    window.removeEventListener("DOMContentLoaded", createMenu);
}

window.addEventListener("DOMContentLoaded", createMenu);
