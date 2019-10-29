/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
import NewsCard from '../newsCard/NewsCard';
import getNewsData from '../../servises/getNewsData';
import defaultConfig from '../../defaultConfig';


export default function createNewsTemplate() {
    const getNewsButton = document.querySelector('#getNewsButton');
    const { preferedLanguage: language, preferedCountry: country } = defaultConfig;
    const newsCanvas = document.createElement('div');

    newsCanvas.classList.add(defaultConfig.classNames.cardRow);

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

    return newsCanvas;
}
