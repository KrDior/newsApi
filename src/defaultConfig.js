/* eslint-disable no-undef */
const defaultConfig = {

    newsCategory: [
        'business',
        'entertainment',
        'general',
        'science',
        'sports',
        'technology',
    ],
    newsOnPage: [
        3,
        5,
        7,
        10,
        20,
    ],
    classNames: {
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
        cardRow: 'row',
        menuItemActive: 'menu-item__active',
        menuItemDisabled: 'menu-item__disabled',
        menuListActive: 'menu-list__active',
        menuLinkClass: 'link-item',
    },
    typeOfElement: {
        menu: 'linksMenu',
    },
    defaultActive: {
        element: 0,
    },
};

export default defaultConfig;
