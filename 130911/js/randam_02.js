// ランダムに画像を表示する
jmp = new Array();
img = new Array();
// ジャンプ先のアドレス(数字は画像と対応)
jmp[0] = "recruitment.html";
jmp[1] = "act-gagaku.html";
jmp[2] = "act-kagura.html";
jmp[3] = "act-sansaku.html";
jmp[4] = "act-study.html";
// 画像のアドレス(数字はジャンプ先のアドレスと対応)
img[0] = "img/banner_001.jpg";
img[1] = "img/banner_002.jpg";
img[2] = "img/banner_003.jpg";
img[3] = "img/banner_004.jpg";
img[4] = "img/banner_005.jpg";
n = Math.floor(Math.random()*jmp.length);
document.write("<a href='"+jmp[n]+"'>");
document.write("<img src='"+img[n]+"' border='0' height=90 width=615>");
document.write("</a>");