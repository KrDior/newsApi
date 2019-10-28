/* eslint-disable no-undef */
const defaultConfig = {
    preferedLanguage: 'en',
    preferedCountry: 'ru',
    newsCategory: [
        'business',
        'entertainment',
        'general',
        'science',
        'sports',
        'technology',
    ],
    newsOnPage: [
        1,
        3,
        5,
        7,
        10,
        20,
    ],
    inputCategoryId: 'inputCategory',
    inputNumberId: 'inputNumberNews',
    classNames: {
        mainCanvas: {
            canvas1: 'album',
            canvas2: 'py-5',
            canvas3: 'bg-light',
            container: 'container',
            containerId: 'newsContainer',
        },
        newsCard: {
            position: 'col-md-4',
            cardElement: 'card',
            cardElement2: 'mb-4',
            cardElement3: 'shadow-sm',
            image: 'card-img-top',
            body: 'card-body',
            title: 'card-title',
            text: 'card-text',
            button: 'btn',
            btnPrimary: 'btn-primary',
        },
        modalParentElement: 'modal-body-wrapper',
        modalInput: {
            inputItem: 'modal-body',
            inputGroup1: 'input-group',
            inputGroup2: 'mb-3',
            inputGroupApp: 'input-group-append',
            inputGroupText: 'input-group-text',
            select: 'custom-select',
        },
        cardRow: 'row',
    },
};

export default defaultConfig;
