module.exports = {
    title :  'Picnel.io 2 Documentation',
    description:  'Picnel.io 2 Documentation',
    themes: 'vuepress',
    base: '/Picnel.io-2_Documentation/',
    // 多國語言
    locales: {
        '/': {
            lang: 'Ebglish',
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
                    // {
                    //     title:'Coding',
                    //     path:'/Coding/',
                    //     collapsable: false,
                    //     sidebarDepth: 1,
                    //     children: [
                    //         'Coding/must_learn',
                    //         '/Coding/sense',
                    //         '/Coding/dont_todo',
                    //         '/Coding/need_todo',
                    //     ]
                    // },
                ],
            },
    
            '/tw/': {
                sidebar: [
                        '/tw/',
                    // {
                    //     title:'Coding',
                    //     path:'/Coding/',
                    //     collapsable: false,
                    //     sidebarDepth: 1,
                    //     children: [
                    //         'Coding/must_learn',
                    //         '/Coding/sense',
                    //         '/Coding/dont_todo',
                    //         '/Coding/need_todo',
                    //     ]
                    // },
                ],
            }
        }
       
    }        
}
