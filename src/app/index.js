/* eslint-disable no-undef */
import MenuList from '../MenuList';
import NewsCard from '../components/newsCard/NewsCard';
import '../style/app.scss';
import '../style/custom.scss';
import 'bootstrap';

function createMenu() {
    console.log('Menu creation');
    console.log('API Key from Define Plugin:', API_KEY);
    document.body.customMenu = new NewsCard('hello', '18rem');
    window.removeEventListener('DOMContentLoaded', createMenu);
}

window.addEventListener('DOMContentLoaded', createMenu);
