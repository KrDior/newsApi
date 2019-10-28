/* eslint-disable max-len */
import defaultConfig from '../../defaultConfig';

export default class NewsCard {
    constructor(parentElem, title, description, url, urlToImage, content) {
        this.parentElem = parentElem;
        this.title = title || '';
        this.description = description || '';
        this.url = url || '';
        this.urlToImage = urlToImage || '#';
        this.content = content || '';

        this.createItem();
    }

    createItem = () => {
        this.wrapperPosition = document.createElement('div');
        this.wrapperPosition.classList.add(defaultConfig.classNames.newsCard.position);

        this.cardItem = document.createElement('div');
        this.cardItem.classList.add(defaultConfig.classNames.newsCard.cardElement, defaultConfig.classNames.newsCard.cardElement2, defaultConfig.classNames.newsCard.cardElement3);


        this.cardImage = document.createElement('img');
        this.cardImage.classList.add(defaultConfig.classNames.newsCard.image);
        this.cardImage.setAttribute('src', this.urlToImage);
        this.cardImage.setAttribute('alt', 'card image');


        this.cardBody = document.createElement('div');
        this.cardBody.classList.add(defaultConfig.classNames.newsCard.body);

        this.cardTitle = document.createElement('h5');
        this.cardTitle.classList.add(defaultConfig.classNames.newsCard.title);
        this.cardTitle.innerText = this.title;

        this.cardText = document.createElement('p');
        this.cardText.classList.add(defaultConfig.classNames.newsCard.text);
        this.cardText.innerText = this.description;

        this.cardLink = document.createElement('a');
        this.cardLink.classList.add(defaultConfig.classNames.newsCard.button);
        this.cardLink.classList.add(defaultConfig.classNames.newsCard.btnPrimary);
        this.cardLink.setAttribute('href', this.url);
        this.cardLink.setAttribute('target', '_blank');
        this.cardLink.innerText = 'Go to news';

        this.cardBody.appendChild(this.cardTitle);
        this.cardBody.appendChild(this.cardText);
        this.cardBody.appendChild(this.cardLink);

        this.cardItem.appendChild(this.cardImage);
        this.cardItem.appendChild(this.cardBody);
        this.wrapperPosition.appendChild(this.cardItem);
        this.parentElem.appendChild(this.wrapperPosition);
    }
}
