let body = $response.body;
if (body) {
  switch (!0) {
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test(
      $request.url
    ):
      try {
        let t = JSON.parse(body),
          i = [];
        for (let e of t.data.items)
          if (!e.hasOwnProperty("banner_item")) {
            if (
              e.hasOwnProperty("ad_info") ||
              -1 !== e.card_goto.indexOf("ad") ||
              ("small_cover_v2" !== e.card_type &&
                "large_cover_v1" !== e.card_type &&
                "large_cover_single_v9" !== e.card_type)
            )
              continue;
            else i.push(e);
          }
        (t.data.items = i), (body = JSON.stringify(t));
      } catch (a) {
        console.log("bilibili index:" + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\/story\?/.test(
      $request.url
    ):
      try {
        let s = JSON.parse(body),
          l = [];
        for (let o of s.data.items)
          o.hasOwnProperty("ad_info") ||
            -1 !== o.card_goto.indexOf("ad") ||
            l.push(o);
        (s.data.items = l), (body = JSON.stringify(s));
      } catch (r) {
        console.log("bilibili Story:" + r);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v\d\/account\/teenagers\/status\?/.test(
      $request.url
    ):
      try {
        let d = JSON.parse(body);
        (d.data.teenagers_status = 0), (body = JSON.stringify(d));
      } catch (b) {
        console.log("bilibili teenagers:" + b);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(
      $request.url
    ):
      try {
        let p = new Set([
            39, 40, 41, 774, 857, 545, 151, 442, 99, 100, 101, 554, 556
          ]),
          c = new Set([176, 107]),
          n = new Set([177, 178, 179, 181, 102, 104, 106, 486, 488, 489]),
          y = JSON.parse(body);
        if (y.data.tab) {
          let h = y.data.tab.filter((t) => p.has(t.id));
          y.data.tab = h;
        }
        if (y.data.top) {
          let f = y.data.top.filter((t) => c.has(t.id));
          y.data.top = f;
        }
        if (y.data.bottom) {
          let m = y.data.bottom.filter((t) => n.has(t.id));
          y.data.bottom = m;
        }
        body = JSON.stringify(y);
      } catch (v) {
        console.log("bilibili tab processing:" + v);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(
      $request.url
    ):
      try {
        let g = JSON.parse(body),
          u = new Set([
            396, 397, 398, 399, 402, 404, 407, 410, 425, 426, 427, 428, 430,
            432, 433, 434, 494, 495, 496, 497, 500, 501
          ]);
        g.data.sections_v2.forEach((t, i) => {
          t.items.forEach((t) => {
            622 === t.id &&
              ((t.title = "会员购"), (t.uri = "bilibili://mall/home"));
          });
          let e = t.items.filter((t) => u.has(t.id));
          (g.data.sections_v2[i].items = e),
            (g.data.sections_v2[i].button = {}),
            delete g.data.sections_v2[i].be_up_title,
            delete g.data.sections_v2[i].tip_icon,
            delete g.data.sections_v2[i].tip_title;
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
        console.log("bilibili mypage:" + _);
      }
      break;
    case /^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(
      $request.url
    ):
      try {
        let $ = JSON.parse(body);
        ($.data.activity_banner_info = null), (body = JSON.stringify($));
      } catch (w) {
        console.log("bilibili live broadcast:" + w);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity/.test(
      $request.url
    ):
      try {
        let k = JSON.parse(body);
        k.data && ((k.data.hash = "ddgksf2013"), (k.data.online.icon = "")),
          (body = JSON.stringify(k));
      } catch (x) {
        console.log("bilibili right corner:" + x);
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
      } catch (P) {
        console.log("bilibili hot search:" + P);
      }
      break;
    case /https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test(
      $request.url
    ):
      try {
        let W = JSON.parse(body);
        (W.data.vip.type = 2),
          (W.data.vip.status = 1),
          (W.data.vip.vip_pay_type = 1),
          (W.data.vip.due_date = 4669824160),
          (body = JSON.stringify(W));
      } catch (E) {
        console.log("bilibili 1080p:" + E);
      }
      break;
    case /pgc\/page\/bangumi/.test($request.url):
      try {
        let q = JSON.parse(body);
        q.result.modules.forEach((t) => {
          t.style.startsWith("banner") &&
            (t.items = t.items.filter((t) => -1 != t.link.indexOf("play"))),
            t.style.startsWith("function") &&
              (t.items = t.items.filter(
                (t) => -1 == t.blink.indexOf("www.bilibili.com")
              )),
            t.style.startsWith("tip") && (t.items = []);
        }),
          (body = JSON.stringify(q));
      } catch (j) {
        console.log("bilibili fanju:" + j);
      }
      break;
    case /pgc\/page\/cinema\/tab\?/.test($request.url):
      try {
        let B = JSON.parse(body);
        B.result.modules.forEach((t) => {
          t.style.startsWith("banner") &&
            (t.items = t.items.filter((t) => -1 != t.link.indexOf("play"))),
            t.style.startsWith("function") &&
              (t.items = t.items.filter(
                (t) => -1 == t.blink.indexOf("www.bilibili.com")
              )),
            t.style.startsWith("tip") && (t.items = []);
        }),
          (body = JSON.stringify(B));
      } catch (I) {
        console.log("bilibili video:" + I);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(
      $request.url
    ):
      try {
        let R = JSON.parse(body);
        R &&
          R.hasOwnProperty("data") &&
          R.data.hasOwnProperty("common_equip") &&
          R.data.common_equip.hasOwnProperty("package_url"),
          (body = JSON.stringify(R));
      } catch (S) {
        console.log("bilibili skin:" + S);
      }
      break;
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(
      $request.url
    ):
      try {
        let z = JSON.parse(body);
        if (z.data && z.data.list)
          for (let A of z.data.list)
            (A.duration = 0),
              (A.begin_time = 2240150400),
              (A.end_time = 2240150400);
        body = JSON.stringify(z);
      } catch (C) {
        console.log("bilibili openad:" + C);
      }
      break;
    default:
      $done({});
  }
  $done({ body });
} else $done({});
