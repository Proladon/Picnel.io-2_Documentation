module.exports = {
    title :  'Picnel.io 2 Documentation',
    description:  'Picnel.io 2 Documentation',
    themes: 'vuepress',
    base: '/Picnel.io-2_Documentation/',

    themeConfig: {
        //  頁面滾動
        smoothScroll: true,
        // 側邊導航欄設定
        sidebar:[
            '/',
            {
                title:'Coding',
                path:'/Coding/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'Coding/must_learn',
                    '/Coding/sense',
                    '/Coding/dont_todo',
                    '/Coding/need_todo',
                ]
            },
        ],

        //  頂部導航欄
        nav: [
            { text: 'Github', link: 'https://github.com/Proladon/Picnel.io-2' },
        ]
    }        
}
