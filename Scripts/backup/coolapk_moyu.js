if (-1 != $request.url.indexOf("replyList")) {
  var a = JSON.parse($response.body);
  a.data.length > 0 && (a.data = Object.values(a.data).filter((a) => a.id)),
    $done({ body: JSON.stringify(a) });
} else if (-1 != $request.url.indexOf("indexV8")) {
  var a = JSON.parse($response.body);
  (a.data = Object.values(a.data).filter(
    (a) =>
      !(
        "sponsorCard" == a.entityTemplate ||
        8639 == a.entityId ||
        33006 == a.entityId ||
        32557 == a.entityId ||
        -1 != a.title.indexOf("值得买") ||
        -1 != a.title.indexOf("红包")
      )
  )),
    $done({ body: JSON.stringify(a) });
} else if (-1 != $request.url.indexOf("dataList")) {
  var a = JSON.parse($response.body);
  (a.data = Object.values(a.data).filter(
    (a) => !("sponsorCard" == a.entityTemplate || "精选配件" == a.title)
  )),
    $done({ body: JSON.stringify(a) });
} else if (-1 != $request.url.indexOf("detail")) {
  var a = JSON.parse($response.body);
  a.data.hotReplyRows &&
    a.data.hotReplyRows.length > 0 &&
    (a.data.hotReplyRows = Object.values(a.data.hotReplyRows).filter(
      (a) => a.id
    )),
    a.data.topReplyRows &&
      a.data.topReplyRows.length > 0 &&
      (a.data.topReplyRows = Object.values(a.data.topReplyRows).filter(
        (a) => a.id
      )),
    a.data.include_goods_ids && (a.data.include_goods_ids = []),
    a.data.include_goods && (a.data.include_goods = []),
    a.data.detailSponsorCard && (a.data.detailSponsorCard = []),
    $done({ body: JSON.stringify(a) });
} else $done($response);
