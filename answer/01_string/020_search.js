// 文字列検索に関する問題

// 問題1: `str`に含まれる`pattern`の数を返してください。
// 例) 赤パジャマ黃パジャマ青パジャマ の パジャマ の数を数えて返す。
// 第1引数`str`: string
// 第2引数`pattern`: string

function countUp(str, pattern) {
    let count = 0;
    while(str.indexOf(pattern) > 0) {
        str = str.substr(str.indexOf(pattern) + pattern.length);
        count++;
    }
    return count;
}

// 問題2: `str`に含まれる`pattern`が何文字目から始まっているかを配列で返してください。
// 戻り値の配列は数値が昇順に並んでいるものとする。
// 例) 赤パジャマ黃パジャマ青パジャマ の パジャマ であれば、2文字目、7文字目、12文字目から始まり、配列で[2, 7, 12]を返す。
// 第1引数`str`: string
// 第2引数`pattern`: string

function startIndexs(str, pattern) {
    const result = [];
    while(str.lastIndexOf(pattern) > 0) {
        let lastIndex = str.lastIndexOf(pattern);
        result.unshift(lastIndex + 1);
        str = str.substr(0, lastIndex);
    }
    return result;
}

// 問題3: `patterns`に含まれる要素が`str`に含まれているかどうかをオブジェクトで返してください。
// 戻り値のオブジェクトはプロパティー名に`patterns`の要素が1つ、プロパティーの値はプロパティー名の値が含まれていれば`true`、そうでなければ`false`を返す。
// 例) 赤パジャマ黃シャツ青パジャマ に ['シャツ', 'ズボン', 'パジャマ'] が含まれるかを確認すると、{'シャツ': true, 'ズボン': false, 'パジャマ': true} が返る。
// 第1引数`str`: string
// 第2引数`pattern`: Array<string>

function findEachParams(str, patterns) {
    const result = {};
    for (let pattern of patterns) {
        result[pattern] = str.includes(pattern);
    }
    return result;
}

// 問題4: `patterns`に含まれる要素が`str`に含まれているか数をオブジェクトで返してください。
// 戻り値のオブジェクトはプロパティー名に`patterns`の要素が1つ、プロパティーの値はプロパティー名の値が含まれていれば`true`、そうでなければ`false`を返す。
// 例) 赤パジャマ黃シャツ青パジャマ に ['シャツ', 'ズボン', 'パジャマ'] が含まれるかを確認し、{'シャツ': 1, 'ズボン': 0, 'パジャマ': 2} が返る。
// 第1引数`str`: string
// 第2引数`pattern`: Array<string>

function countEachParams(str, patterns) {
    const originStr = str;
    const result = {};
    for (let pattern of patterns) {
        if (result[pattern] === undefined) {
            result[pattern] = 0;
        }
        while(str.indexOf(pattern) > 0) {
            str = str.substr(str.indexOf(pattern) + pattern.length);
            result[pattern]++;
        }
        str = originStr;
    }
    return result;
}

// 問題4: `str`は以下の形式の文字列です。
// プロパティ名1=値1&プロパティ名2=値2&プロパティ名3=値3&プロパティ名4=値4
// 文字列を元にオブジェクトを作成し、返してください
// なおプロパティ名と値には`&`と`=`は入らないものとする。
// またプロパティ名は重複しないとする。
// 例) 赤パジャマ=ブランドA&黃シャツ=ブランドB青パジャマ=ブランドC を元に {'赤パジャマ': 'ブランドA', '黃シャツ': 'ブランドB', '青パジャマ': 'ブランドC'} が返る。
// 第1引数`str`: string

function parseSimple(str) {
    const props = str.split('&');
    const result = {};
    for (let prop of props){
        const splited = prop.split('=');
        result[splited[0]] = splited[1];
    }
    return result;
}

// 問題4: `str`は以下の形式の文字列です。
// プロパティ名1=値1&プロパティ名2=値2&プロパティ名3=値3-1&プロパティ名3=値3-2...
// 文字列を元にオブジェクトを作成し、返してください。
// なおプロパティ名と値には`&`と`=`は入らないものとする。
// 今回はプロパティ名は重複しえるので、重複した場合はプロパティ値を配列にしてください。
// 例) 赤パジャマ=ブランドA&黃シャツ=ブランドB青パジャマ=ブランドC を元に {'赤パジャマ': 'ブランドA', '黃シャツ': 'ブランドB', '青パジャマ': 'ブランドC'} が返る。
// 第1引数`str`: string

function parseComplex(str) {
    const props = str.split('&');
    const result = {};
    for (let prop of props){
        const splited = prop.split('=');
        if (result[splited[0]] === undefined) {
            result[splited[0]] = splited[1];
        } else if (result[splited[0]] instanceof Array) {
            result[splited[0]].push(splited[1]);
        } else {
            result[splited[0]] = [result[splited[0]]];
            result[splited[0]].push(splited[1]);
        }
    }
    return result;
}




module.exports = {
    countUp,
    startIndexs,
    findEachParams, 
    countEachParams,
    parseSimple,
    parseComplex,
};