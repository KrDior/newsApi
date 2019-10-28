import defaultConfig from '../../defaultConfig';

export default class ModalWindowFiller {
    constructor(categoryOption) {
        this.categoryOption = categoryOption;

        this.addCategoryOption();
    }

    addCategoryOption = () => {
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
        this.cardLink.classList.add(defaultConfig.classNames.newsCard.button);
        this.cardLink.classList.add(defaultConfig.classNames.newsCard.btnPrimary);
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
