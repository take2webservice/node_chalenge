const { replaceAll,
    replaceAllByList,
    replaceAllByObj,
    loopableReplaceAll,
    replaceHead,
    replaceTail,
    ommitText,
} = require("../../../chalenge/01_string/010_replace");

test('replaceAll で 赤パジャマ黃パジャマ青パジャマ の パジャマ を 寝間着 に置き換える', () => {
    expect(replaceAll(
        '赤パジャマ黃パジャマ青パジャマ',
        'パジャマ',
        '寝間着'
    )).toBe('赤寝間着黃寝間着青寝間着');
});

test('replaceAllByList で 赤パジャマ黃シャツ青半パン の パジャマ と シャツ と 半パン を 部屋着 に置き換える', () => {
    expect(replaceAllByList(
        '赤パジャマ黃シャツ青半パン',
        ['パジャマ', 'シャツ', '半パン',],
        '部屋着'
    )).toBe('赤部屋着黃部屋着青部屋着');
});

test('replaceAllByObj で 赤パジャマ黃シャツ青半パン の パジャマ=>寝間着、シャツ=>襯衣、半パン=>ズボン に置き換える', () => {
    expect(replaceAllByObj(
        '赤パジャマ黃シャツ青半パン',
        {
            'パジャマ': '寝間着',
            'シャツ': '襯衣',
            '半パン': 'ズボン',
        }
    )).toBe('赤寝間着黃襯衣青ズボン');
});

test('loopableReplaceAll で 赤シャツ黃シャツ青シャツ の シャツ を Tシャツ に置き換える', () => {
    expect(loopableReplaceAll(
        '赤シャツ黃シャツ青シャツ',
        'シャツ',
        'Tシャツ'
    )).toBe('赤Tシャツ黃Tシャツ青Tシャツ');
});

test('headReplace で 週刊少年マガジン の 少年 以前を 月刊 に置き換える', () => {
    expect(replaceHead(
        '週刊少年マガジン',
        '少年',
        '月刊',
    )).toBe('月刊少年マガジン');
});

test('tailReplace で 週刊少年チャンピオン の 少年 以降を マガジン に置き換える', () => {
    expect(replaceTail(
        '週刊少年チャンピオン',
        '少年',
        'マガジン',
    )).toBe('週刊少年マガジン');
});

test('ommitText で 隣の客はよく柿食う客だ を 省略し　最後に …　をつけて 7文字に置き換える', () => {
    expect(ommitText(
        '隣の客はよく柿食う客だ',
        7,
        '…',
    )).toBe('隣の客はよく…');
});

test('ommitText で 隣の客はよく柿食う客だ を 省略し　最後に …　をつけて 7文字に置き換える', () => {
    expect(ommitText(
        '隣の客はよく柿食う客だ',
        7,
        '...',
    )).toBe('隣の客は...');
});