// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_91porn.js

let eleOne = '<head>'
let newStyle = '<head><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Css/91porn.css\" type=\"text/css\">'
var eleTwo = '</body>'
var newJavaScript = '<script type=\"text/javascript\"  async="async" src=\"https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Scripts/Limbo/91porn.js\"></script></body>'
let body = $response.body
    .replace(eleOne, newStyle)
    .replace(eleTwo, newJavaScript);
$done({ body });
