import MenuList from "../MenuList";
import '../style/app.scss';
import '../style/_custom.scss';
import 'bootstrap';
import jQuery from 'jquery';
import popper from 'popper.js';


jQuery(function() {
  jQuery('body').css('color', 'blue');
});

function createMenu() {
    console.log("Menu creation");
    console.log('API Key from Define Plugin:', API_KEY);
    document.body.customMenu = new MenuList();
    window.removeEventListener("DOMContentLoaded", createMenu);
}

window.addEventListener("DOMContentLoaded", createMenu);
