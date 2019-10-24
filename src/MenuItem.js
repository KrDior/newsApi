import defaultConfig from "./defaultConfig";

export default class MenuItem {
    constructor(itemData) {
        this.item = itemData;
        this.element = document.createElement("li");

        this.link = document.createElement("a");
        this.link.classList.add(defaultConfig.classNames.menuLinkClass);
        this.link.title = this.item.title;
        this.link.innerText = this.item.text;
        this.link.setAttribute("href", this.item.link);
        this.element.appendChild(this.link);
        this.setDisabled();
    }

    getItemElement() {
        return this.element;
    }

    setActive() {
        this.element.classList.add(defaultConfig.classNames.menuItemActive);
        this.element.classList.remove(
            defaultConfig.classNames.menuItemDisabled
        );
        this.element.setAttribute("status", "active");
    }

    setDisabled() {
        this.element.classList.remove(defaultConfig.classNames.menuItemActive);
        this.element.classList.add(defaultConfig.classNames.menuItemDisabled);
        this.element.setAttribute("status", "deactive");
    }
}
