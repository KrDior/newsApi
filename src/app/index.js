/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
import NewsCard from '../components/newsCard/NewsCard';
import ModalWindowFiller from '../components/modalWindowFiller/ModalWindowFiller';
import getNewsData from '../servises/getNewsData';
import createCanvas from '../container/newsCanvas/newsCanvas';
import defaultConfig from '../defaultConfig';
import '../style/app.scss';
import '../style/custom.scss';
import 'bootstrap';

function showNewsCards() {
    const newsContainer = createCanvas();
    const { newsCategory, newsOnPage, inputCategoryId, inputNumberId } = defaultConfig;
    const parentModalElem = document.querySelector(`.${defaultConfig.classNames.modalParentElement}`);
    // eslint-disable-next-line no-unused-vars
    const modal = new ModalWindowFiller(parentModalElem, newsCategory, newsOnPage, inputCategoryId, inputNumberId);

    const newsCanvas = document.createElement('div');
    newsCanvas.classList.add(defaultConfig.classNames.cardRow);

    const getNewsButton = document.querySelector('#getNewsButton');

    const { preferedLanguage: language, preferedCountry: country } = defaultConfig;

    function getNews() {
        while (newsCanvas.childNodes.length !== 0) {
            const child = document.querySelector('.col-md-4');
            newsCanvas.removeChild(child);
        }
        return getNewsData(country, language, inputCategory.value, inputNumberNews.value)
            .then((newsData) => {
                newsData.articles.forEach((newsItemData) => {
                    const { title, description, url, urlToImage, content } = newsItemData;
                    const newsItem = new NewsCard(newsCanvas, title, description, url, urlToImage, content);
                    return newsItem;
                });
            });
    }

    getNewsButton.addEventListener('click', getNews);

    newsContainer.firstChild.appendChild(newsCanvas);
    document.body.querySelector('main').appendChild(newsContainer);
    window.removeEventListener('DOMContentLoaded', createMenu);
}

window.addEventListener('DOMContentLoaded', showNewsCards);
