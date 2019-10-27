/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
import NewsCard from '../components/newsCard/NewsCard';
import getNewsData from '../servises/getNewsData';
import defaultConfig from '../defaultConfig';
import '../style/app.scss';
import '../style/custom.scss';
import 'bootstrap';

function createMenu() {
    const country = 'ru';
    const language = 'en';
    const category = 'general';
    const pageSize = 5;
    const parentElem = document.createElement('div');
    parentElem.classList.add(defaultConfig.classNames.cardRow);

    getNewsData(country, language, category, pageSize)
        .then((newsData) => {
            newsData.articles.forEach((newsItemData) => {
                const { title, description, url, urlToImage, content } = newsItemData;
                const newsItem = new NewsCard(parentElem, title, description, url, urlToImage, content);
            });
        });
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.appendChild(parentElem);
    window.removeEventListener('DOMContentLoaded', createMenu);
}

window.addEventListener('DOMContentLoaded', createMenu);
