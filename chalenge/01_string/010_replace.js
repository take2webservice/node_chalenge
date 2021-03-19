// 文字列置換に関する問題
// 絵文字(🍣 など)は含まないものとする。

// 問題1: `str`に含まれる`pattern`をすべて`newStr`に置き換えた結果を返してください。
// 例) 赤パジャマ黃パジャマ青パジャマ の パジャマ を 寝間着 に置き換え、赤寝間着黃寝間着青寝間着を返す。
// 第1引数`str`: string
// 第2引数`pattern`: string
// 第3引数`newStr`: string

function replaceAll(str, pattern, newStr) {
}


// 問題2: `str`に含まれる`patterns`に含まれる文字列ををすべて`newStr`に置き換えた結果を返してください。
// 例) 赤パジャマ黃パジャマ青パジャマ の パジャマ を 寝間着 に置き換え、赤寝間着黃寝間着青寝間着を返す。
// 第1引数`str`: string
// 第2引数`patterns`: Array<string>
// 第3引数`newStr`: string

function replaceAllByList(str, patterns, newStr) {
}

// 問題3: `str`に含まれる`patternObj`を使い置き換えた結果を返してください。
// `patternObj`のプロパティー名を検索し、対応するプロパティー値で置き換える
// 例) 赤パジャマ黃シャツ青半パン の パジャマ=>寝間着、シャツ=>襯衣、半パン=>ズボン に置き換え、赤寝間着黃襯衣青ズボンを返す。
// 第1引数`str`: string
// 第2引数`patternObj`: Object<string, string>

function replaceAllByObj(str, patternObj) {
}

// 問題4: `str`に含まれる`pattern`をすべて`newStr`に置き換えた結果を返してください。
// なお問題1とは異なり無限ループは考慮してください。 
// 例) 赤シャツ黃シャツ青シャツ の シャツ を Tシャツ に置き換え、赤Tシャツ黃Tシャツ青Tシャツを返す。
// 第1引数`str`: string
// 第2引数`pattern`: string
// 第3引数`newStr`: string

function loopableReplaceAll(str, pattern, newStr) {
}

// 問題5: `str`の中で最初みつけた`pattern`より前を`newStr`に置き換えた結果を返してください。
// 例) 週刊少年マガジン の 少年 以前を 月刊 に置き換え、月刊少年マガジンを返す。
// 第1引数`str`: string
// 第2引数`pattern`: string
// 第3引数`newStr`: string

function replaceHead(str, pattern, newStr) {
}

// 問題6: `str`の中で最初みつけた`pattern`より後を`newStr`に置き換えた結果を返してください。
// 例)週刊少年チャンピオン の 少年 以降を マガジン に置き換え、週刊少年マガジンを返す。
// 第1引数`str`: string
// 第2引数`pattern`: string
// 第3引数`newStr`: string

function replaceTail(str, pattern, newStr) {
}

// 問題7: `str`が`length`よりも長い場合、後半を省略して最後に`elipsis`をつけ、`length`文字となるようにした結果を返してください。
// 例) 隣の客はよく柿食う客だ を省略し、最後に … をつけて「隣の客はよく…」(合計7文字)として返す。
// 第1引数`str`: string
// 第2引数`length`: number
// 第3引数`newStr`: string

function ommitText(str, length, ellipsis) {
}

module.exports = {
    replaceAll,
    replaceAllByList,
    replaceAllByObj,
    loopableReplaceAll,
    replaceHead,
    replaceTail,
    ommitText,
};