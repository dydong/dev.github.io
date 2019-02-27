module.exports = {
    base: '/wiki/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/list/' },
            { text: 'Google', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/list/',
            ['/list/one.md', 'LALALA']
        ]
    }
}