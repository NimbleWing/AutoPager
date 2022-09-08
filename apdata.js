{
    "Gdaily": {
        "host": "www.gdaily.org",
        "url": "/\\/(software|app|online|teaching)/",
        "history": false,
        "pager": {
            "nextL": "li.active+li>a",
            "pageE": ".columns .column",
            "replaceE": ".navigation"
        }
    },
    "阿榮福利味": {
        "host": "www.azofreeware.com",
        "url": "/(\\/search\\?|\\/\\d+)?/",
        "history": false,
        "pager": {
            "nextL": ".blog-pager-older-link",
            "pageE": ".blog-posts.hfeed",
            "replaceE": "#blog-pager"
        }
    },
    "imgasd": {
        "host": "imgasd.com",
        "url": "",
        "history": false,
        "pager": {
            "nextL": "a.active+a",
            "pageE": ".list",
            "replaceE": ".pagination"
        }
    },
    "小黃書搜索": {
        "host": ["tw.xchina.co", "kr.xchina.co", "xchina.co"],
        "url": "/\\/search\\//",
        "history": false,
        "pager": {
            "nextL": "a.next",
            "pageE": ".list",
            "replaceE": ".pager",
            "scrollD": 2000
        }
    },
    "小黃書 圖片清單瀏覽": {
        "host": ["tw.xchina.co", "kr.xchina.co", "xchina.co"],
        "url": "/\\/photo\\//",
        "style": ".photos > div.item {display: none !important;}",
        "history": false,
        "pager": {
            "nextL": "a.next",
            "pageE": ".photos > a",
            "replaceE": ".pager",
            "scrollD": 2000
        }
    },
    "小黃書": {
        "host": ["tw.xchina.co", "kr.xchina.co", "xchina.co"],
        "url": "/^\\/(photos|videos)\\//",
        "history": false,
        "pager": {
            "nextL": "a.next",
            "pageE": "div.list div.item,.videos",
            "replaceE": ".pager"
        }
    },
    "性愛套圖": {
        "host": "myjkwd.com",
        "url": "/e\\/action/",
        "history": false,
        "pager": {
            "nextL": "//a[text()='下一页']",
            "pageE": "div.bloglist > ul,.entry>center,.entry>img",
            "replaceE": ".pageLink",
            "scrollD": 3000
        }
    },
    "愛下電子書 閱讀": {
        "host": "tw.ixdzs.com",
        "url": "/\\/read\\//",
        "history": false,
        "pager": {
            "nextL": "//a[text()='下一章']",
            "pageE": "#page",
            "replaceE": ".page-d.page-turn"
        }
    },
    "愛下電子書 清單": {
        "host": "tw.ixdzs.com",
        "url": "/\\/(sort|hot|end)\\//",
        "history": false,
        "pager": {
            "nextL": "//a[text()='»']",
            "pageE": ".u-list",
            "replaceE": ".page"
        }
    }
}