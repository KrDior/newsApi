import defaultConfig from '../../defaultConfig';

<div class="input-group mb-3">
    <select class="custom-select" id="inputGroupSelect02">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <div class="input-group-append">
        <label class="input-group-text" for="inputGroupSelect02">Options</label>
    </div>
</div>


export default class CustomSelect {
    constructor(selectOption) {
        this.optionItem = selectOption;
        this.createSelector(this.optionItem);
    }

    creatcreateSelectoreItem = (optionItem) => {
        const {
            imgPath, imgText, title, text, link,
        } = itemData;

        this.cardItem = document.createElement('div');
        this.cardItem.classList.add(defaultConfig.classNames.newsCard.wrapper);
        this.cardItem.style.width = this.style.width || '18rem';

        this.cardImage = document.createElement('img');
        this.cardImage.classList.add(defaultConfig.classNames.newsCard.image);
        this.cardImage.setAttribute('src', imgPath || '');
        this.cardImage.setAttribute('alt', imgText || '');

        this.cardBody = document.createElement('div');
        this.cardBody.classList.add(defaultConfig.classNames.newsCard.body);

        this.cardTitle = document.createElement('h5');
        this.cardTitle.classList.add(defaultConfig.classNames.newsCard.title);
        this.cardTitle.innerText = title || '';

        this.cardText = document.createElement('p');
        this.cardText.classList.add(defaultConfig.classNames.newsCard.text);
        this.cardText.innerText = text || '';

        this.cardLink = document.createElement('a');
        this.cardLink.classList.add(defaultConfig.classNames.newsCard.button, defaultConfig.classNames.newsCard.btnPrimary);
        this.cardLink.setAttribute('href', link || '#');
        this.cardLink.innerText = 'Go to news';

        this.cardBody.appendChild(this.cardTitle);
        this.cardBody.appendChild(this.cardText);
        this.cardBody.appendChild(this.cardLink);

        this.cardItem.appendChild(this.cardImage);
        this.cardItem.appendChild(this.cardBody);
        document.body.appendChild(this.cardItem);
    }
}
