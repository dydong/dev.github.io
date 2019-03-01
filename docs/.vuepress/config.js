module.exports = {
    base: '',
    title: 'Hello My VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/list/'
            },
            {
                text: 'Google',
                link: 'https://google.com'
            },
        ],
        sidebar: [
            '/',
            '/list/'
        ]
    }
}