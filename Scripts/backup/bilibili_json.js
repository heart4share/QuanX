/*
应用名称：自用B站去广告脚本
脚本作者：Cuttlefish
微信账号：公众号墨鱼手记
更新时间：2023-01-06
通知频道：https://t.me/ddgksf2021
问题反馈：ddgksf2013@163.com
*/

const version = "V2.0.81";

let body = $response.body;
if (body) {
  switch (!0) {
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test(
      $request.url
    ):
      try {
        let t = JSON.parse(body),
          e = [];
        for (let i of t.data.items)
          !i.hasOwnProperty("banner_item") &&
            (i.hasOwnProperty("ad_info") ||
              -1 !== i.card_goto.indexOf("ad") ||
              ("small_cover_v2" !== i.card_type &&
                "large_cover_v1" !== i.card_type &&
                "large_cover_single_v9" !== i.card_type) ||
              e.push(i));
        (t.data.items = e), (body = JSON.stringify(t));
      } catch (a) {
        console.log("There is an exception in recommending ads:" + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\/story\?/.test(
      $request.url
    ):
      try {
        let s = JSON.parse(body),
          r = [];
        for (let o of s.data.items)
          o.hasOwnProperty("ad_info") ||
            -1 !== o.card_goto.indexOf("ad") ||
            r.push(o);
        (s.data.items = r), (body = JSON.stringify(s));
      } catch (d) {
        console.log(
          "An exception occurred when recording the aid of the Story:" + d
        );
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v\d\/account\/teenagers\/status\?/.test(
      $request.url
    ):
      try {
        let c = JSON.parse(body);
        (c.data.teenagers_status = 0), (body = JSON.stringify(c));
      } catch (n) {
        console.log("An exception occurred in teenagers:" + n);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(
      $request.url
    ):
      try {
        let l = new Set([
            39, 40, 41, 774, 857, 545, 151, 442, 99, 100, 101, 554, 556
          ]),
          p = new Set([176, 107]),
          y = new Set([177, 178, 179, 181, 102, 104, 106, 486, 488, 489]),
          b = JSON.parse(body);
        if (b.data.tab) {
          let h = b.data.tab.filter((t) => l.has(t.id));
          b.data.tab = h;
        }
        if (b.data.top) {
          let m = b.data.top.filter((t) => p.has(t.id));
          b.data.top = m;
        }
        if (b.data.bottom) {
          let u = b.data.bottom.filter((t) => y.has(t.id));
          b.data.bottom = u;
        }
        body = JSON.stringify(b);
      } catch (f) {
        console.log("An exception occurred in tab processing:" + f);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(
      $request.url
    ):
      try {
        let g = JSON.parse(body),
          v = new Set([
            396, 397, 398, 399, 402, 404, 407, 410, 425, 426, 427, 428, 430,
            432, 433, 434, 494, 495, 496, 497, 500, 501
          ]);
        g.data.sections_v2.forEach((t, e) => {
          t.items.forEach((t) => {
            622 === t.id &&
              ((t.title = "会员购"), (t.uri = "bilibili://mall/home"));
          });
          let i = t.items.filter((t) => v.has(t.id));
          (g.data.sections_v2[e].items = i),
            (g.data.sections_v2[e].button = {}),
            delete g.data.sections_v2[e].be_up_title,
            delete g.data.sections_v2[e].tip_icon,
            delete g.data.sections_v2[e].tip_title;
          for (let a = 0; a < g.data.sections_v2.length; a++)
            ("创作中心" == g.data.sections_v2[a].title ||
              "創作中心" == g.data.sections_v2[a].title) &&
              (delete g.data.sections_v2[a].title,
              delete g.data.sections_v2[a].type);
          delete g.data.vip_section_v2,
            delete g.data.vip_section,
            g.data.hasOwnProperty("live_tip") && (g.data.live_tip = {}),
            g.data.hasOwnProperty("answer") && (g.data.answer = {}),
            (g.data.vip_type = 2),
            (g.data.vip.type = 2),
            (g.data.vip.status = 1),
            (g.data.vip.vip_pay_type = 1),
            (g.data.vip.due_date = 4669824160);
        }),
          (body = JSON.stringify(g));
      } catch (_) {
        console.log("An exception occurred in mypage processing:" + _);
      }
      break;
    case /^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(
      $request.url
    ):
      try {
        let x = JSON.parse(body);
        (x.data.activity_banner_info = null), (body = JSON.stringify(x));
      } catch ($) {
        console.log("An exception occurred in live broadcast:" + $);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity/.test(
      $request.url
    ):
      try {
        let w = JSON.parse(body);
        w.data && ((w.data.hash = "ddgksf2013"), (w.data.online.icon = "")),
          (body = JSON.stringify(w));
      } catch (k) {
        console.log("An exception occurred in upper right corner:" + k);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square/.test(
      $request.url
    ):
      try {
        let O = JSON.parse(body);
        (O.data = {
          type: "history",
          title: "搜索历史",
          search_hotword_revision: 2
        }),
          (body = JSON.stringify(O));
      } catch (A) {
        console.log("An exception occurred in hot search:" + A);
      }
      break;
    case /https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test(
      $request.url
    ):
      try {
        let P = JSON.parse(body);
        (P.data.vip.type = 2),
          (P.data.vip.status = 1),
          (P.data.vip.vip_pay_type = 1),
          (P.data.vip.due_date = 4669824160),
          (body = JSON.stringify(P));
      } catch (W) {
        console.log("An exception occurred in 1080p:" + W);
      }
      break;
    case /pgc\/page\/bangumi/.test($request.url):
      try {
        let E = JSON.parse(body);
        E.result.modules.forEach((t) => {
          t.style.startsWith("banner") &&
            (t.items = t.items.filter((t) => -1 != t.link.indexOf("play"))),
            t.style.startsWith("function") &&
              (t.items = t.items.filter(
                (t) => -1 == t.blink.indexOf("www.bilibili.com")
              )),
            t.style.startsWith("tip") && (t.items = []);
        }),
          (body = JSON.stringify(E));
      } catch (q) {
        console.log("An exception occurred in fanju:" + q);
      }
      break;
    case /pgc\/page\/cinema\/tab\?/.test($request.url):
      try {
        let j = JSON.parse(body);
        j.result.modules.forEach((t) => {
          t.style.startsWith("banner") &&
            (t.items = t.items.filter((t) => -1 != t.link.indexOf("play"))),
            t.style.startsWith("function") &&
              (t.items = t.items.filter(
                (t) => -1 == t.blink.indexOf("www.bilibili.com")
              )),
            t.style.startsWith("tip") && (t.items = []);
        }),
          (body = JSON.stringify(j));
      } catch (B) {
        console.log("An exception occurred in video:" + B);
      }
      break;
    case /^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\?/.test(
      $request.url
    ):
      try {
        let I = JSON.parse(body),
          R = [];
        I.data.cards.forEach((t) => {
          t.hasOwnProperty("display") &&
            0 >= t.card.indexOf("ad_ctx") &&
            ((t.desc.dynamic_id = t.desc.dynamic_id_str),
            (t.desc.pre_dy_id = t.desc.pre_dy_id_str),
            (t.desc.orig_dy_id = t.desc.orig_dy_id_str),
            (t.desc.rid = t.desc.rid_str),
            R.push(t));
        }),
          (I.data.cards = R),
          (body = JSON.stringify(I));
      } catch (S) {
        console.log("An exception occurred in dynamic_svr:" + S);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(
      $request.url
    ):
      try {
        let T = JSON.parse(body);
        T &&
          T.hasOwnProperty("data") &&
          T.data.hasOwnProperty("common_equip") &&
          T.data.common_equip.hasOwnProperty("package_url"),
          (body = JSON.stringify(T));
      } catch (z) {
        console.log("An exception occurred in skin:" + z);
      }
      break;
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(
      $request.url
    ):
      try {
        let C = JSON.parse(body);
        if (C.data && C.data.list)
          for (let D of C.data.list)
            (D.duration = 0),
              (D.begin_time = 2240150400),
              (D.end_time = 2240150400);
        body = JSON.stringify(C);
      } catch (F) {
        console.log("An exception occurred in openad:" + F);
      }
      break;
    default:
      $done({});
  }
  $done({ body });
} else $done({});