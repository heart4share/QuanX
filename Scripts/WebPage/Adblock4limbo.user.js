const imax={js:{functionx:"https://limbopro.com/Adguard/Adblock4limbo.function.js",duboku:"https://limbopro.com/Adguard/duboku.js",avple:"https://limbopro.com/Adguard/avple.js",contentFarm:"https://limbopro.com/Adguard/contentFarm/contentFarm.js",},css:{globalcss:"https://limbopro.com/CSS/Adblock4limbo.user.css",libvio:".hidden-log ,a[target=\"_blank\"] > .img-responsive ,.advertise ,#adsbox ,.t-img-box ,.inner-advertise ,.advertise  {display: none! important;}",goole:"#tvcap,[data-text-ad] {display:none !important}",avple:"#adsbox,.asg-overlay,.jss20,.jss13,iframe,span[class*=MuiSkeleton-root],.jss16 ,.MuiSkeleton-pulse.jss12.MuiSkeleton-rect.MuiSkeleton-root,[id*=KnvW],img[src*=\".gif\"],iframe[data-width] {display: none! important;}",btbdys:".ayx[style^=\"position\: fixed;bottom\"],#ad-index,#adsbox,.ayx[style=\"display:block;\"],.ayx[style^=\"position: fixed;bottom\"],a[target*=_new] {display:none !important;}",ddrk:"a[href*=\"/kst6632.com/\"] { pointer-events: none !important; } a[href*=\"/kst6632.com/\"] > img { width: 1px !important; } a[onclick^=\"ClickobayST();\"] {display: none !important} a[href=\"###\"] img:not(#trk_hcaptcha):not([src^=\"https://captcha.su.baidu.com\"]) {display: none !important} a[href^=\"javascript\"] img:not(#trk_hcaptcha):not([src^=\"https://captcha.su.baidu.com\"]) {display: none !important}",jable:"div.asg-interstitial,div.asg-interstitial__mask,iframe,div[class*=\"exo\"], .exo-native-widget-outer-container,a[target*=\"_blank\"],a[href*=\"trwl1\"],div[data-width=\"300\"],div.text-center.mb-e-30,div[data-width*=\"300\"],div[style*=\"300px\"],section[class*=\"justify\"],iframe[width=\"728\"][height=\"90\"],#site-content > div.container > section.pb-3.pb-e-lg-40.text-center,.text-center > a[target=\"_blank\"] > img,a[href*=\"\?banner=\"],[class*=\"root--\"],.badge,a[href=\"http\:\/\/uus52\.com/\"] {display :none!important; pointer-events: none!important;}",test:"div,img {display: none!important}",comic_18:"[target='_blank'],.modal-backdrop,[data-height*='90'],div[data-height='250'][data-width='300'],a[href^='http']:not([href*='18comic.']) > img ,#adsbox ,a[target='_blank'][rel*='nofollow'] > img[src*='.gif'] ,#guide-modal ,iframe[width='300'][height='250'] ,.modal-body > ul.pop-list,.adsbyexoclick,div[data-group^='skyscraper_'],.bot-per,.top-a2db,a[href*='.taobao.com'],div[data-height='264'][data-width='956'],div[style^='position: fixed; top:'],.bot-per.visible-xs.visible-sm  {display: none!important; pointer-events: none!important;}",dy555:".playtop.col-pd,a[href*=\"?channelCode=\"] > img[src*=\".com:\"],#adsbox,div.myui-panel.myui-panel-bg.clearfix.wapad {display:none !important}",wnacg:"div > img[src*='gif'],div.sh,div > a[target='_blank'] > img {display:none!important}",missav:"div.under_player,div[style=\"width: 300px; height: 250px;\"] {display:none!important}",porn91:"iframe,img.ad_img {display:none!important}",zhihuAds:"[class='Card AppBanner'],.Footer,.Banner-link,div.Pc-word {display:none ! important; pointer-events: none !important;}",pornhubx:"[rel*='noopener nofollow'],a[href^=\"http://ads.trafficjunky.net/\"],.topAdContainter,.adsbytrafficjunky,.ad-link,a[target='_blank']"}}
function values(){var adsDomain=["pornhub","missav","91porn","avple","18comic","wnacg","ddrk","jable","btbdys","google","bing","duboku","libvio","tvn","www.5dy","o8tv","zhihu"]
var url=document.location.href;console.log("URL : "+url);var i;for(i=0;i<adsDomain.length;i++){if(url.indexOf(adsDomain[i])!==-1){var values=adsDomain[i];console.log("Catch it : "+values)}}
return values;}
function adsDomain_switch(x){switch(x){case 'pornhub':pornhub_interstitialPass();ele_adsRemove(imax.css.pornhubx,0)
tag_adsRemove("script","ads_batch");break;case 'missav':var ua_missav=navigator.userAgent.toLowerCase();var mobile_missav="mobile";cloudflare_captchaBypass();css_adsRemove(imax.css.missav);tagName_appendChild("script",imax.js.functionx,"body");if(ua_missav.indexOf(mobile_missav)===-1){button_dynamicAppend("div.plyr__video-wrapper","离开页面视频继续播放","video_loopPlay()","position:fixed; top:60px;","missavX",2);button_dynamicAppend("div.plyr__video-wrapper","下载视频","window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")","background: red !important; position:fixed; top:100px; border-right: 6px solid #ffc107 !important;","how",3);}else if(ua_missav.indexOf(mobile_missav)>-1){button_dynamicAppend("div.plyr__video-wrapper","下载视频","window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")","background: red !important; position:fixed; border-right: 6px solid #ffc107 !important;","how",3);}
break;case '91porn':cloudflare_captchaBypass();css_adsRemove(imax.css.porn91);break;case 'avple':cloudflare_captchaBypass();css_adsRemove(imax.css.avple);tagName_appendChild("script",imax.js.avple,"body")
break;case '18comic':css_adsRemove(imax.css.comic_18);button_dynamicRemove("#chk_cover",200);_18comic_adsRemove();break;case 'www.5dy':css_adsRemove(imax.css.dy555);break;case 'o8tv':css_adsRemove(imax.css.dy555);break;case 'wnacg':css_adsRemove(imax.css.wnacg);break;case 'ddrk':css_adsRemove(imax.css.ddrk);ele_adsRemove("#sajdhfbjwhe,#kasjbgih",0)
break;case 'duboku':tagName_appendChild("script",imax.js.duboku,"body")
break;case 'libvio':css_adsRemove(imax.css.libvio)
break;case 'tvn':break;case 'jable':var ua=navigator.userAgent.toLowerCase();var mobile="mobile";cloudflare_captchaBypass();css_adsRemove(imax.css.jable);jable_adsRemove();tagName_appendChild("script",imax.js.functionx,"body");if(ua.indexOf(mobile)===-1){button_dynamicAppend("div.my-3","点此获取M3U8文件","repeat_regex.forEach(m3u8_tempt)","position:absolute; right:92px;","jablex",1);button_dynamicAppend("div.my-3","下载视频","window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")","background: red !important; position:absolute; right:0px; border-right: 6px solid #ffc107 !important;","how",2);}else if(ua.indexOf(mobile)>-1){button_dynamicAppend("div.my-3","点此获取M3U8文件","repeat_regex.forEach(m3u8_tempt)","position:absolute; right:92px;","jablex",1);button_dynamicAppend("div.my-3","下载视频","window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")","background: purple !important; position:absolute; right:0px; border-right: 6px solid #ffc107 !important;","how",2);}
video_delayPlay(1000);break;case 'btbdys':css_adsRemove(imax.css.btbdys,500);videoAds_accelerateSkip(0.1);hrefAttribute_set();break;case 'google':js_adsRemove(imax.js.contentFarm);css_adsRemove(imax.css.goole);var goole_selector="h3,#bres,[class*='AuVD wHYlTd mnr-c']";setAttribute_after(goole_selector,"contentFarm_AdsRemove_Auto()");break;case 'bing':js_adsRemove(imax.js.contentFarm);break;case 'zhihu':var zhihu_id="zhihux"
button_dynamicRemove("[class='Button Modal-closeButton Button--plain']",10);css_adsRemove(imax.css.zhihuAds,100,"hloyx");indexLogin();break;default:console.log("Catch Nothing!");}}
adsDomain_switch(values())
function pornhub_interstitialPass(){const ele_skip="[onclick*='clearModalCookie']"
const exist=document.querySelectorAll(ele_skip);if(document.querySelectorAll(ele_skip).length>0){const href=exist[1].href;window.location=href;}}
function _18comic_adsRemove(){document.cookie="cover=1";document.cookie="shunt=1";document.cookie="guide=1";}
function ele_adsRemove(selector,time){var i;setTimeout(()=>{var href_blank=document.querySelectorAll(selector)
for(i=0;i<href_blank.length;i++){href_blank[i].remove();href_blank[i].style="display:none ! important; pointer-events: none;"}},time)}
function jable_adsRemove(){document.cookie="ts_popunder=1";document.cookie="kt_tcookie=1";document.cookie="asgsc262182=2";var adsDomain=['r.trwl1.com','r.www.com'];var i,l;for(l=0;l<adsDomain.length;l++){var css_sel="a[href*='"+adsDomain[l]+"']";var css_catch=[".video-img-box.mb-e-20,.col-6.col-sm-4.col-lg-3"];var huge=document.querySelectorAll(css_catch);for(i=0;i<huge.length;i++){if(huge[i].querySelectorAll(css_sel).length>0){huge[i].style.display="none";}}}}
function tag_adsRemove(tagname,keyword){var i;var tag=document.getElementsByTagName(tagname);for(i=0;i<tag.length;i++){if(tag[i].src.indexOf(keyword)!==-1){tag[i].remove()}
if(tag[i].innerHTML.indexOf(keyword)!==-1){tag[i].remove()}}}
function button_dynamicAppend(ele,text,onclick,position,id,array){var button=document.createElement("button");button.innerHTML=text;button.setAttribute("onclick",onclick);button.setAttribute("id",id);var button_style_values=position+"padding: 6px 6px 6px 6px; display: inline-block; "+
"font-size: 15px; color:white; z-index:114154; border-right: 6px solid #38a3fd; "+
"border-left: #292f33 !important; border-top: #292f33 !important; "+
"border-bottom: #292f33 !important; background: black; "+
"border-radius: 0px 0px 0px 0px; margin-bottom: 10px; "+
"font-weight: 800 !important; "+
"text-align: right !important;"
button.setAttribute("style",button_style_values);var here=document.querySelectorAll(ele);if(here.length>0){here[0].insertBefore(button,here[0].childNodes[array])
console.log("按钮已添加；")}}
function cloudflare_captchaBypass(){var title=document.title;if(title.search("Cloudflare")>=0||title.search("Attention")>=0){window.location.reload();console.log("captchaBypass done;")};}
function video_loopPlay(){setInterval(function(){var ele=["video[preload='none'],video#player"];var ele_catch=document.querySelectorAll(ele);if(ele_catch.length>0){ele_catch[0].play();ele_catch[1].play();console.log("视频已开启循环播放；")}},1000)}
function video_delayPlay(time){setTimeout(function(){var ele=["video[preload='none'],video#player"];var ele_catch=document.querySelector(ele);if(ele_catch){ele_catch.play()
console.log("视频已延后播放；")}},time)}
function addListener(selector,funx){setTimeout(()=>{var ele=document.querySelectorAll(selector);for(let index=0;index<ele.length;index++){ele[index].addEventListener("click",funx,false)}},1000)}
function loopq(){alert("Got it!")}
function setAttribute_after(x,y){var index;var ele=document.querySelectorAll(x)
for(index=0;index<ele.length;index++){ele[index].setAttribute("onclick",y);console.log("属性设置中...");}}
function cheat(){var ele=document.getElementById("holyx");ele.innerHTML=imax.css.ddrk_cheat;setTimeout(()=>{ele.innerHTML=imax.css.ddrk_hidden;console.log("正在切换剧集；")},150);}
function hrefAttribute_set(){var href=document.querySelectorAll("a");var i;if(href.length>0){console.log("新标签页打开链接已被禁止；")
for(i=0;i<href.length;i++){href[i].target="_self";}}}
function href_attributeSet(time,id){document.getElementById(id).style.background="black";document.getElementById(id).innerHTML="清理中! ♻️";setTimeout(()=>{let selector="button[class*='Button PaginationButton']";let ele_button=document.querySelectorAll(selector);if(ele_button.length>0){window.onload=addListener(selector,()=>{href_attributeSet(time,id)});}
let times=0;let loop=setInterval(()=>{times+=1;let href=document.querySelectorAll("a");let i;for(i=0;i<href.length;i++){if(href[i].target=="_blank"){href[i].setAttribute("target","_self");}}
let href_Length=document.querySelectorAll("a[target='_blank']").length;if(href_Length===0&&times>=2){clearInterval(loop);if(document.getElementById(id)){document.getElementById(id).innerHTML="100%! ♻️";document.getElementById(id).style.background="green";console.log("循环第"+times+"遍；")
console.log("清理完毕!");}}},time)},time)}
function js_adsRemove(url){var script=document.createElement("script");script.src=url;document.body.appendChild(script);console.log("JavaScript脚本新增完毕！");}
function tagName_appendChild(tagname,url,where){var eleCreate=document.createElement(tagname);if(tagname=="script"){eleCreate.src=url;}else if(tagname=="link"){eleCreate.href=url;}
if(where=="body"){document.body.appendChild(eleCreate);}else if(where=="head"){document.head.appendChild(eleCreate);}}
function css_adsRemove(newstyle,delaytime,id){setTimeout(()=>{var creatcss=document.createElement("style");creatcss.id=id;creatcss.innerHTML=newstyle;document.getElementsByTagName('head')[0].appendChild(creatcss)
console.log("CSS样式新增完毕！");},delaytime);}
function button_dynamicRemove(selector,times){var initCount=0;var loop=setInterval(()=>{var ele=document.querySelectorAll(selector);if(ele.length>0){ele[0].click()}
initCount+=1;if(initCount==times){clearInterval(loop);}},0)}
function indexLogin(){let url=document.location.href;let cssSelector="a[href='//www.zhihu.com/'],a[href='//www.zhihu.com']";let rewrite_url="https://www.zhihu.com/knowledge-plan/hot-question/hot/0/hour";let reg=/^https:\/\/www.zhihu.com\/signin/gi;if(url.search(reg)!==-1){window.location=rewrite_url;}
var ele=document.querySelectorAll(cssSelector)
if(ele.length>0){let i;for(i=0;i<ele.length;i++){ele[i].href=rewrite_url;}}}
function videoAds_accelerateSkip(fasterx){let needleArg='{{1}}';if(needleArg==='{{1}}'){needleArg='';}
let delayArg='{{2}}';if(delayArg==='{{2}}'){delayArg='';}
let boostArg='{{3}}';if(boostArg==='{{3}}'){boostArg='';}
if(needleArg===''){needleArg='.?';}else if(needleArg.charAt(0)==='/'&&needleArg.slice(-1)==='/'){needleArg=needleArg.slice(1,-1);}else{needleArg=needleArg.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
const reNeedle=new RegExp(needleArg);let delay=delayArg!=='*'?parseInt(delayArg,10):-1;if(isNaN(delay)||isFinite(delay)===false){delay=1000;}
let boost=parseFloat(boostArg);boost=isNaN(boost)===false&&isFinite(boost)?Math.min(Math.max(boost,fasterx),50):fasterx;self.setInterval=new Proxy(self.setInterval,{apply:function(target,thisArg,args){const[a,b]=args;if((delay===-1||b===delay)&&reNeedle.test(a.toString())){args[1]=b*boost;}
return target.apply(thisArg,args);}});};