module.exports = {
    title :  'Picnel.io 2 Documentation',
    description:  'Picnel.io 2 Documentation',
    themes: 'vuepress',
    base: '/Picnel.io-2_Documentation/',
    
    // 多國語言
    locales: {
        '/': {
            lang: 'English',
            title: 'Picnel.io 2 Documentation',
            description: 'Picnel.io 2 Documentation',
        },
        '/tw/': {
            lang: '繁體中文',
            title: 'Picnel.io 2 官方文檔',
            description: 'Picnel.io 2 官方文檔',
        },
    },

    themeConfig: {
        //::  頁面滾動
        smoothScroll: true,

        //::  頂部導航欄
        nav: [
            { text: 'Github', link: 'https://github.com/Proladon/Picnel.io-2' },
        ],
        locales: {

                //:: 側邊導航欄設定
            '/': {
                sidebar: [
                    '/',
                    '/installation/',
                    '/introduction/',
                    '/contributes/',
                ],
            },
    
            '/tw/': {
                sidebar: [
                    '/tw/',
                    '/tw/installation/',
                    '/tw/introduction/',
                    '/tw/contributes/',
                ],
            }
        }
       
    }        
}
