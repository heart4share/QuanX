/*
引用地址 https://github.com/toulanboy/scripts/tree/master/ithome_ad

[rewrite_local]
https?:\/\/(api\.ithome\.com\/json\/(((newslist|listpage)\/news)|(slide\/index)))|(napi\.ithome\.com\/api\/news\/index) url script-response-body https://raw.githubusercontent.com/toulanboy/scripts/master/ithome_ad/ithome_ad.js

[mitm]
hostname = api.ithome.com,napi.ithome.com
*/

const url = $request.url;
let body = JSON.parse($response.body);
if (url.indexOf("newslist") != -1 || url.indexOf("listpage") != -1) {
    let i = body.newslist.length;
    while (i--) {
        if (body.newslist[i].hasOwnProperty('aid')) {
            body.newslist.splice(i, 1);
        }
    }
} else if (url.indexOf("slide") != -1) {
    let i = body.length;
    while (i--) {
        if (body[i].isad || body[i].link.indexOf("jd.com") != -1 || body[i].link.indexOf("taobao.com") != -1) {
            body.splice(i, 1);
        }
    }
} else if (url.indexOf("napi") != -1) {
    let listData = body.data.list;
    let i = listData.length;
    while (i--) {
        if (listData[i].feedType == 10002) {
            let j = listData[i].feedContent.focusNewsData.length;
            while (j--) {
                if (listData[i].feedContent.focusNewsData[j].isAd) {
                    listData[i].feedContent.focusNewsData.splice(j, 1);
                }
            }
        } else if (listData[i].feedType == 10000) {
            if (listData[i].feedContent.smallTags[0].text != null && listData[i].feedContent.smallTags[0].text.indexOf("广告") != -1) {
                listData.splice(i, 1)
            }
        }
    }
}
body = JSON.stringify(body)
$done({
    body
})
