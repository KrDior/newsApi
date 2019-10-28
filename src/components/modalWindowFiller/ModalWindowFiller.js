/* eslint-disable max-len */
import defaultConfig from '../../defaultConfig';

export default class ModalWindowFiller {
    constructor(parentModalElem, newsCategory, newsOnPage, inputCategoryId, inputNumberId) {
        const category = 'Category';
        const newsNumber = 'News per page';

        this.modalWindow = null;
        this.parent = parentModalElem;
        this.addOption(newsCategory, inputCategoryId, category);
        this.addOption(newsOnPage, inputNumberId, newsNumber);
    }

    addOption = (optionParams, id, labelText) => {
        this.selectElem = document.createElement('select');
        this.selectElem.classList.add(defaultConfig.classNames.modalInput.select);
        this.selectElem.id = id;
        optionParams.forEach((param) => {
            const optionSelect = document.createElement('option');
            optionSelect.value = param;
            optionSelect.innerText = (typeof param === 'string') ? param.toUpperCase() : param;
            this.selectElem.appendChild(optionSelect);
        });

        this.inputWrapper = document.createElement('div');
        this.inputWrapper.classList.add(defaultConfig.classNames.modalInput.inputGroup1, defaultConfig.classNames.modalInput.inputGroup1);

        this.labelWrapper = document.createElement('div');
        this.labelWrapper.classList.add(defaultConfig.classNames.modalInput.inputGroupApp);

        this.inputLabel = document.createElement('label');
        this.inputLabel.classList.add(defaultConfig.classNames.modalInput.inputGroupText);
        this.inputLabel.setAttribute('for', id);
        this.inputLabel.innerText = labelText;

        this.labelWrapper.appendChild(this.inputLabel);
        this.inputWrapper.appendChild(this.selectElem);
        this.inputWrapper.appendChild(this.labelWrapper);

        this.inputItem = document.createElement('div');
        this.inputItem.classList.add(defaultConfig.classNames.modalInput.inputItem);

        this.inputItem.appendChild(this.inputWrapper);
        this.parent.appendChild(this.inputItem);
    }
}
