var rowDataArray = [
  // ["日", "nhật, mặt trời, ngày", "ニチ,ジツ nichi, jitsuひ hi, bi]

  ["一", "nhất" ,"một; đồng nhất", "イチ,イツ ichi, itsu", "ひと-hito"],
  ["二"," nhị", "hai", "ニ ni "," ふた futa"],
  ["三", "tam", "ba", "サン san", "みつ mi(tsu)"],
  ["四", "tứ", "bốn", "シ shi", "よつ yotsu"],
  ["五", "ngũ", "năm (5)" ,"ゴ go","いつつ itsutsu"],
  ["六", "lục", "sáu", "ロク roku", "むつ mutsu"],
  ["七","thất", "bảy (7)" ,"シチ shichi", "なな,ななつ - nana, nanatsu"],
  ["八" ,"bát" ,"tám", "ハチ hachi","やつ yatsu"],
  ["九", "cửu", "chín (9)", "キュウ,ク," ,"ここのつ "],
  ["十", "thập", "mười", "ジュウ,ジッ,ジュッ", "とお tou"],
  ["百", "bách","trăm", "ヒャク hyaku", "もも momo"],
  ["千", "thiên",  "nghìn", "セン sen", "ち chi"],
  ["万","vạn",  "vạn, nhiều, vạn vật" ,"マン,バン - man, ba","よろず yorozu"],
  ["円",  "viên", "tròn; tiền Yên ", "エン en", "まるい marui"],
  ["日", "nhật",  "mặt trời, ngày", "ニチ,ジツ nichi", "jitsuひ hi, bi"],
  ["月", "nguyệt", "mặt trăng, tháng",  "ゲツ,ガツ getsu" , "gatsuつき tsuki"],
  ["火",  "hỏa",  "lửa" ,"カ ka", "ひ hi"],
  ["水", "thủy" ,"nước", "スイ sui", "みず mizu"],
  ["木", "mộc",  "cây, gỗ",  "ボク,モク boku" , "mokuき ki"],
  ["今" ,"kim", "hiện tại, lúc này",  "コン,キン kon,kin", "いま ima"],
  ["土",  "thổ",  "đất; thổ địa" , "ド,ト do, to", "つち tsuchi"],
  ["人", "nhân", "nhân vật",  "ジン,ニン  jin, nin" , "ひと hito"],
  ["先", "tiên", "trước",  "セン sen", "さき saki"],
  ["生" , "sinh", "sống; học sinh(chỉngười)",  "セイ,ショウ sei, shoo", "いきる ikiru"],
  ["学", "học",  "học",  "ガク gaku", "まなぶ manabu"],
  [ " ","phương", " ", " ", " "],
  ["何", "hà", "cái gì, hà cớ = lẽ gì ", "カ ka", "なん,なに nan, nani"],
  ["今", "kim", "hiện tại, lúc này", "コン,キン kon, kin","いま ima"],
  ["分", "phân", "chia, tách rẽ",  "ブン,フン,ブ bun, fun, bu", "わ.ける,わ.け,わ.かれる wakeru, wake,wakareru"],
  ["半",  "bán", "một nửa", "ハン han", "なかば nakaba"],
  ["時", "thời", "thời gian",  "ジ  ji","とき toki"],
  ["年", "niên", "năm; niên đại",  "ネン nen", "とし toshi"],
  ["本", "bản", "sách, cơ bản, bảnchất",  "ホン hon", "もと moto"],
  ["休", "hưu", "nghỉ ngơi, về hưu ", "キュウ kyuu", "やすむ yasumu"],
  ["校", "hiệu", "trường học","コウ koo","めん men"],
  ["" ,"quy", " ", " ", " "],
  ["行", "hành" ,"hàng;thực hành;ngân hàng,đi ","コウ,ギョウ koo, gyoo", "いく,おこなう i(ku), okonau"],
  ["来", "lai", "đến; tương lai, vị lai",  "ライ,タイ rai", "くる kuru"],
  ["車", "xa", "xe", "シャ sha", "くるま kuruma"],
  ["書", "thư",  "viết; thư đạo", "ショ sho", "かく kaku"],
  ["食", "thực", "ăn", "ショク,ジキ shoku", "くう taberu"],
  ["飲", "ẩm", "uống", "イン in", "のむ nomu"],
  ["見" ,"kiến", "nhìn; ý kiến", "ケン ken", "みる miru"],
  ["聞",  "văn", "nghe, tân văn (báo)", "ブン,モン bun, mon","きく kiku"],
  ["新", "tân" ,"mới, trong sạch", "シン shin", "あたら.しい,あら.た,にい"],
  ["肉","nhục", " ", " ", " "],
  ["魚", "ngư", "con cá", "ギョ gyo", "さかな,うお "],
  ["牛", "ngưu", "con bò", " ", " "],
  ["茶", "trà", " ", " ", " "],
  ["物", "vật", " ", " ", " "],
  ["花", "hoa",  "hoa", "カ ka", "はな hana"],
  ["買", "mãi", "mua", "バイ bai", "か.う kau"],
  ["読", "độc", "đọc", "ドク doku", "よむ yomu"],
  ["手", "thủ", "tay, làm, tự tay làm", "シュ shu", "て te"],
  ["少", "thiểu", "ít, một chút, trẻ",  "ショウ shou", "すく.ない,すこ.し sakunai, sukoshi"],
  ["間", "gian", "trung gian, khônggian", "カン,ケン kan, ken", "あいだ aida"],
  ["内", " nội", " ", " ", " "],
  ["田", " điền", " ", " ", " "],
  [ " ", " đinh", " ", " ", " "],
  ["電", "điện",  "điện, điện lực" ,"デン den", " "],
  ["気", "khí", "không khí, khí chất", "キ,ケ ki, ke" ,"いき iki"],
  ["山", "sơn", "núi, sơn hà", "サン,セン san", "やま yama"],
  ["川", "xuyên", "sông", "セン sen", "かわ kawa"],
  [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],

];

// Tạo mảng dataList từ rowDataArray
var dataList = [];
for (var i = 0; i < rowDataArray.length; i++) {
  var row = [i + 1].concat(rowDataArray[i]); // Thêm số thứ tự vào đầu mỗi hàng
  dataList.push(row);
}

// Thêm dữ liệu vào bảng HTML
var tableBody = document.getElementById("data-table").getElementsByTagName('tbody')[0];
for (var i = 0; i < dataList.length; i++) {
  var rowData = dataList[i];
  var row = tableBody.insertRow();
  for (var j = 0; j < rowData.length; j++) {
      var cell = row.insertCell();
      cell.appendChild(document.createTextNode(rowData[j]));
      
  }
}















