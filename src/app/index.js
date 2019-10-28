
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
import NewsCard from '../components/newsCard/NewsCard';
import ModalWindowFiller from '../components/modalWindowFiller/ModalWindowFiller';
import getNewsData from '../servises/getNewsData';
import defaultConfig from '../defaultConfig';
import '../style/app.scss';
import '../style/custom.scss';
import 'bootstrap';

function createMenu() {

    const parentElem = document.createElement('div');
    parentElem.classList.add(defaultConfig.classNames.cardRow);

    const inputCategory = document.querySelector('#inputCategory');
    const inputNumberNews = document.querySelector('#inputNumberNews');
    const getNewsButton = document.querySelector('#getNewsButton');
    const newsContainer = document.getElementById('newsContainer');
    const country = 'ru';
    const language = 'en';


    function getNews() {


        if (parentElem.childNodes.length > 0) {
            console.log('!!!', parentElem.childNodes);
            // parentElem.childNodes = '';
        }
        return getNewsData(country, language, inputCategory.value, inputNumberNews.valueize)
            .then((newsData) => {
                newsData.articles.forEach((newsItemData) => {
                    const { title, description, url, urlToImage, content } = newsItemData;
                    const newsItem = new NewsCard(parentElem, title, description, url, urlToImage, content);
                    return newsItem;
                });
            });
    }

    getNewsButton.addEventListener('click', getNews);

    defaultConfig.newsCategory.forEach((category) => {
        const optionSelect = document.createElement('option');
        optionSelect.value = category;
        optionSelect.innerText = category.toUpperCase();
        inputCategory.appendChild(optionSelect);
    });
    defaultConfig.newsOnPage.forEach((newsNumber) => {
        const optionSelect = document.createElement('option');
        optionSelect.value = newsNumber;
        optionSelect.innerText = newsNumber;
        inputNumberNews.appendChild(optionSelect);
    });

    // getNewsData(country, language, category2, pageSize)
    //     .then((newsData) => {
    //         newsData.articles.forEach((newsItemData) => {
    //             const { title, description, url, urlToImage, content } = newsItemData;
    //             const newsItem = new NewsCard(parentElem, title, description, url, urlToImage, content);
    //             return newsItem;
    //         });
    //     });

    newsContainer.appendChild(parentElem);
    window.removeEventListener('DOMContentLoaded', createMenu);
}

window.addEventListener('DOMContentLoaded', createMenu);
