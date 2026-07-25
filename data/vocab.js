/* ============================================================
   單字寵物 · 分年級單字庫
   來源基礎：108 課綱國小英語基本 300 字表 + 常見康軒各冊主題字
   （長頸鹿美語版本待 Kevin 拍照補入，見 WHITEPAPER.md）

   結構：VOCAB[年級] = [ {en, zh, theme}, ... ]
   - 年級 1~6，後台可勾選「目前出現範圍」（可複選）
   - theme 供未來分主題出題/家長報表用
   - 可持續擴充到 7000 字，只要往對應年級 push 即可
   ============================================================ */
const VOCAB = {
  1: [
    // 顏色
    {en:"red", zh:"紅色", theme:"顏色"},
    {en:"blue", zh:"藍色", theme:"顏色"},
    {en:"yellow", zh:"黃色", theme:"顏色"},
    {en:"green", zh:"綠色", theme:"顏色"},
    {en:"black", zh:"黑色", theme:"顏色"},
    {en:"white", zh:"白色", theme:"顏色"},
    // 數字
    {en:"one", zh:"一", theme:"數字"},
    {en:"two", zh:"二", theme:"數字"},
    {en:"three", zh:"三", theme:"數字"},
    {en:"four", zh:"四", theme:"數字"},
    {en:"five", zh:"五", theme:"數字"},
    {en:"six", zh:"六", theme:"數字"},
    // 動物
    {en:"cat", zh:"貓", theme:"動物"},
    {en:"dog", zh:"狗", theme:"動物"},
    {en:"bird", zh:"鳥", theme:"動物"},
    {en:"fish", zh:"魚", theme:"動物"},
    {en:"pig", zh:"豬", theme:"動物"},
    {en:"cow", zh:"牛", theme:"動物"},
    // 家人
    {en:"mom", zh:"媽媽", theme:"家人"},
    {en:"dad", zh:"爸爸", theme:"家人"},
    {en:"baby", zh:"寶寶", theme:"家人"},
    // 常見物
    {en:"apple", zh:"蘋果", theme:"食物"},
    {en:"egg", zh:"蛋", theme:"食物"},
    {en:"cake", zh:"蛋糕", theme:"食物"},
    {en:"milk", zh:"牛奶", theme:"食物"},
    {en:"ball", zh:"球", theme:"玩具"},
    {en:"book", zh:"書", theme:"學校"},
    {en:"pen", zh:"筆", theme:"學校"},
    {en:"sun", zh:"太陽", theme:"自然"},
    {en:"star", zh:"星星", theme:"自然"},
    {en:"tree", zh:"樹", theme:"自然"},
    {en:"hand", zh:"手", theme:"身體"}
  ],
  2: [
    // 身體
    {en:"eye", zh:"眼睛", theme:"身體"},
    {en:"ear", zh:"耳朵", theme:"身體"},
    {en:"nose", zh:"鼻子", theme:"身體"},
    {en:"mouth", zh:"嘴巴", theme:"身體"},
    {en:"face", zh:"臉", theme:"身體"},
    {en:"foot", zh:"腳", theme:"身體"},
    // 食物
    {en:"rice", zh:"飯", theme:"食物"},
    {en:"bread", zh:"麵包", theme:"食物"},
    {en:"water", zh:"水", theme:"食物"},
    {en:"juice", zh:"果汁", theme:"食物"},
    {en:"meat", zh:"肉", theme:"食物"},
    {en:"candy", zh:"糖果", theme:"食物"},
    // 學校
    {en:"desk", zh:"書桌", theme:"學校"},
    {en:"chair", zh:"椅子", theme:"學校"},
    {en:"bag", zh:"書包", theme:"學校"},
    {en:"ruler", zh:"尺", theme:"學校"},
    {en:"door", zh:"門", theme:"學校"},
    {en:"window", zh:"窗戶", theme:"學校"},
    // 動物
    {en:"duck", zh:"鴨子", theme:"動物"},
    {en:"rabbit", zh:"兔子", theme:"動物"},
    {en:"tiger", zh:"老虎", theme:"動物"},
    {en:"bear", zh:"熊", theme:"動物"},
    {en:"lion", zh:"獅子", theme:"動物"},
    {en:"monkey", zh:"猴子", theme:"動物"},
    // 自然
    {en:"moon", zh:"月亮", theme:"自然"},
    {en:"rain", zh:"雨", theme:"自然"},
    {en:"cloud", zh:"雲", theme:"自然"},
    {en:"flower", zh:"花", theme:"自然"},
    {en:"grass", zh:"草", theme:"自然"},
    {en:"wind", zh:"風", theme:"自然"}
  ],
  3: [
    // 動作
    {en:"run", zh:"跑", theme:"動作"},
    {en:"jump", zh:"跳", theme:"動作"},
    {en:"walk", zh:"走路", theme:"動作"},
    {en:"sing", zh:"唱歌", theme:"動作"},
    {en:"read", zh:"閱讀", theme:"動作"},
    {en:"write", zh:"寫", theme:"動作"},
    {en:"eat", zh:"吃", theme:"動作"},
    {en:"drink", zh:"喝", theme:"動作"},
    {en:"swim", zh:"游泳", theme:"動作"},
    {en:"play", zh:"玩", theme:"動作"},
    // 星期
    {en:"Monday", zh:"星期一", theme:"星期"},
    {en:"Tuesday", zh:"星期二", theme:"星期"},
    {en:"Sunday", zh:"星期日", theme:"星期"},
    // 天氣
    {en:"sunny", zh:"晴天", theme:"天氣"},
    {en:"rainy", zh:"雨天", theme:"天氣"},
    {en:"cloudy", zh:"陰天", theme:"天氣"},
    {en:"windy", zh:"颳風的", theme:"天氣"},
    {en:"hot", zh:"熱的", theme:"天氣"},
    {en:"cold", zh:"冷的", theme:"天氣"},
    // 衣物
    {en:"shirt", zh:"襯衫", theme:"衣物"},
    {en:"pants", zh:"褲子", theme:"衣物"},
    {en:"shoes", zh:"鞋子", theme:"衣物"},
    {en:"hat", zh:"帽子", theme:"衣物"},
    {en:"coat", zh:"外套", theme:"衣物"},
    // 形容
    {en:"big", zh:"大的", theme:"形容"},
    {en:"small", zh:"小的", theme:"形容"},
    {en:"happy", zh:"快樂的", theme:"形容"},
    {en:"sad", zh:"難過的", theme:"形容"},
    {en:"fast", zh:"快的", theme:"形容"},
    {en:"slow", zh:"慢的", theme:"形容"}
  ],
  4: [
    // 地點
    {en:"school", zh:"學校", theme:"地點"},
    {en:"park", zh:"公園", theme:"地點"},
    {en:"home", zh:"家", theme:"地點"},
    {en:"store", zh:"商店", theme:"地點"},
    {en:"zoo", zh:"動物園", theme:"地點"},
    {en:"library", zh:"圖書館", theme:"地點"},
    {en:"market", zh:"市場", theme:"地點"},
    {en:"hospital", zh:"醫院", theme:"地點"},
    // 職業
    {en:"teacher", zh:"老師", theme:"職業"},
    {en:"doctor", zh:"醫生", theme:"職業"},
    {en:"nurse", zh:"護士", theme:"職業"},
    {en:"farmer", zh:"農夫", theme:"職業"},
    {en:"cook", zh:"廚師", theme:"職業"},
    {en:"driver", zh:"司機", theme:"職業"},
    // 情緒/形容
    {en:"angry", zh:"生氣的", theme:"情緒"},
    {en:"tired", zh:"累的", theme:"情緒"},
    {en:"hungry", zh:"餓的", theme:"情緒"},
    {en:"scared", zh:"害怕的", theme:"情緒"},
    {en:"tall", zh:"高的", theme:"形容"},
    {en:"short", zh:"矮的／短的", theme:"形容"},
    {en:"long", zh:"長的", theme:"形容"},
    {en:"new", zh:"新的", theme:"形容"},
    {en:"old", zh:"舊的／老的", theme:"形容"},
    // 家具/家電
    {en:"table", zh:"桌子", theme:"居家"},
    {en:"bed", zh:"床", theme:"居家"},
    {en:"clock", zh:"時鐘", theme:"居家"},
    {en:"phone", zh:"電話", theme:"居家"},
    {en:"kitchen", zh:"廚房", theme:"居家"},
    {en:"bedroom", zh:"臥室", theme:"居家"},
    {en:"garden", zh:"花園", theme:"居家"}
  ],
  5: [
    // 交通
    {en:"car", zh:"汽車", theme:"交通"},
    {en:"bus", zh:"公車", theme:"交通"},
    {en:"train", zh:"火車", theme:"交通"},
    {en:"bike", zh:"腳踏車", theme:"交通"},
    {en:"boat", zh:"船", theme:"交通"},
    {en:"plane", zh:"飛機", theme:"交通"},
    {en:"taxi", zh:"計程車", theme:"交通"},
    // 自然/地理
    {en:"river", zh:"河", theme:"自然"},
    {en:"mountain", zh:"山", theme:"自然"},
    {en:"sea", zh:"海", theme:"自然"},
    {en:"beach", zh:"海灘", theme:"自然"},
    {en:"forest", zh:"森林", theme:"自然"},
    {en:"island", zh:"島", theme:"自然"},
    // 運動/活動
    {en:"soccer", zh:"足球", theme:"運動"},
    {en:"basketball", zh:"籃球", theme:"運動"},
    {en:"tennis", zh:"網球", theme:"運動"},
    {en:"dance", zh:"跳舞", theme:"運動"},
    {en:"draw", zh:"畫畫", theme:"活動"},
    {en:"cook", zh:"烹飪", theme:"活動"},
    // 動詞
    {en:"buy", zh:"買", theme:"動作"},
    {en:"sell", zh:"賣", theme:"動作"},
    {en:"give", zh:"給", theme:"動作"},
    {en:"take", zh:"拿", theme:"動作"},
    {en:"open", zh:"打開", theme:"動作"},
    {en:"close", zh:"關", theme:"動作"},
    // 月份
    {en:"January", zh:"一月", theme:"月份"},
    {en:"March", zh:"三月", theme:"月份"},
    {en:"July", zh:"七月", theme:"月份"},
    {en:"December", zh:"十二月", theme:"月份"}
  ],
  6: [
    // 抽象/情感
    {en:"friend", zh:"朋友", theme:"人際"},
    {en:"family", zh:"家庭", theme:"人際"},
    {en:"dream", zh:"夢想", theme:"抽象"},
    {en:"future", zh:"未來", theme:"抽象"},
    {en:"idea", zh:"點子", theme:"抽象"},
    {en:"problem", zh:"問題", theme:"抽象"},
    {en:"answer", zh:"答案", theme:"抽象"},
    {en:"story", zh:"故事", theme:"抽象"},
    // 學科
    {en:"math", zh:"數學", theme:"學科"},
    {en:"science", zh:"自然科學", theme:"學科"},
    {en:"music", zh:"音樂", theme:"學科"},
    {en:"history", zh:"歷史", theme:"學科"},
    {en:"English", zh:"英文", theme:"學科"},
    // 環境/世界
    {en:"world", zh:"世界", theme:"世界"},
    {en:"country", zh:"國家", theme:"世界"},
    {en:"city", zh:"城市", theme:"世界"},
    {en:"earth", zh:"地球", theme:"世界"},
    {en:"space", zh:"太空", theme:"世界"},
    {en:"nature", zh:"大自然", theme:"世界"},
    // 進階動詞/形容
    {en:"learn", zh:"學習", theme:"動作"},
    {en:"teach", zh:"教", theme:"動作"},
    {en:"believe", zh:"相信", theme:"動作"},
    {en:"remember", zh:"記得", theme:"動作"},
    {en:"understand", zh:"理解", theme:"動作"},
    {en:"important", zh:"重要的", theme:"形容"},
    {en:"different", zh:"不同的", theme:"形容"},
    {en:"beautiful", zh:"美麗的", theme:"形容"},
    {en:"careful", zh:"小心的", theme:"形容"},
    {en:"favorite", zh:"最愛的", theme:"形容"}
  ]
};

// 取出指定年級範圍（陣列，例如 [1,2,3]）的所有單字
function getWords(grades){
  let out = [];
  grades.forEach(g => { if(VOCAB[g]) out = out.concat(VOCAB[g].map(w => ({...w, g}))); });
  return out;
}

if(typeof window !== "undefined"){ window.VOCAB = VOCAB; window.getWords = getWords; }
