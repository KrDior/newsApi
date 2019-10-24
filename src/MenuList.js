/* eslint-disable indent */
import defaultConfig from './defaultConfig';
import menuData from './menuData';
import MenuItem from './MenuItem';

export default class MenuList {
    constructor(parentElement = document.body, menuItemsData = menuData) {
        this.container = parentElement;
        this.menuItemsData = menuItemsData;
        this.defaultActive = defaultConfig.defaultActive.element;
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleKeyboard = this.handleKeyboard.bind(this);

        this.destroy = this.destroy.bind(this);
        this.items = [];
        this.addList();
        this.buildMenuList();
        this.drawList();
    }

    handleKeyboard(event) {
        this.move = function move(direction) {
            this.items[this.selectedInd].setDisabled();
            if (direction > 0) {
                this.selectedInd += 1;
                if (this.selectedInd === Object.keys(this.items).length) {
                    this.selectedInd = 0;
                }
            } else {
                this.selectedInd -= 1;
                if (this.selectedInd < 0) {
                    this.selectedInd = Object.keys(this.items).length - 1;
                }
            }
            this.items[this.selectedInd].setActive();
        };
        this.move = this.move.bind(this); //
        switch (event.keyCode) {
            case defaultConfig.actions.right: {
                this.move(1);
                break;
            }
            case defaultConfig.actions.left: {
                this.move(-1);
                break;
            }
            default: {
                break;
            }
        }
    }

    handleMouseOver() {
        this.element.classList.add(defaultConfig.classNames.menuListActive);
        this.element.removeEventListener('mouseenter', this.handleMouseOver);
        this.element.addEventListener('mouseleave', this.handleMouseOut);
        document.addEventListener('keydown', this.handleKeyboard);
    }

    handleMouseOut() {
        this.element.classList.remove(defaultConfig.classNames.menuListActive);
        this.element.addEventListener('mouseenter', this.handleMouseOver);
        this.element.removeEventListener('mouseleave', this.handleMouseOut);
        document.removeEventListener('keydown', this.handleKeyboard);
    }

    addList() {
        this.element = document.createElement('ul');
        this.element.classList.add(defaultConfig.classNames.menuClass);
    }

    buildMenuList() {
        this.menuItemsData.forEach((it) => {
            const item = new MenuItem(it);
            this.items.push(item);
        });
        this.items[this.defaultActive].setActive();
        this.selectedInd = 0;

        this.element.addEventListener('mouseenter', this.handleMouseOver);
    }

    drawList() {
        this.items.forEach((it) => {
            this.element.appendChild(it.getItemElement());
        });
        this.container.appendChild(this.element);
    }

    destroy() {
        this.removeElement = document.querySelector('.simple-menu');
        this.removeElement.removeEventListener('mouseenter', this.handleMouseOver);
        this.removeElement.removeEventListener('mouseleave', this.handleMouseOut);
        this.removeElement.parentNode.removeChild(this.removeElement);
    }
}
