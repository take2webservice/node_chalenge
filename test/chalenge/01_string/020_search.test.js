const {
    countUp,
    startIndexs,
    findEachParams,
    countEachParams,
    parseSimple,
    parseComplex,
} = require("../../../chalenge/01_string/020_search.js");

test('countUp で 赤パジャマ黃パジャマ青パジャマ の パジャマ の数を数える。', () => {
    expect(countUp(
        '赤パジャマ黃パジャマ青パジャマ',
        'パジャマ',
    )).toBe(3);
});

test('startIndexs で 赤パジャマ黃パジャマ青パジャマ の パジャマ が始まる位置を調べる。', () => {
    expect(startIndexs(
        '赤パジャマ黃パジャマ青パジャマ',
        'パジャマ',
    )).toEqual([2, 7, 12]);
});

test('findEachParams で 赤パジャマ黃パジャマ青パジャマ に シャツ, ズボン, パジャマ が　それぞれ含まれているか', () => {
    expect(findEachParams(
        '赤パジャマ黃シャツ青パジャマ',
        ['シャツ', 'ズボン', 'パジャマ'],
    )).toEqual({ 'シャツ': true, 'ズボン': false, 'パジャマ': true });
});

test('countEachParams で 赤パジャマ黃パジャマ青パジャマ  に シャツ, ズボン, パジャマ が　それぞれ何回含まれているか', () => {
    expect(countEachParams(
        '赤パジャマ黃シャツ青パジャマ',
        ['シャツ', 'ズボン', 'パジャマ'],
    )).toEqual({ 'シャツ': 1, 'ズボン': 0, 'パジャマ': 2 });
});

test('parseSimple で  赤パジャマ=ブランドA&黃シャツ=ブランドB青パジャマ=ブランドC を解析する', () => {
    expect(parseSimple(
        '赤パジャマ=ブランドA&黃シャツ=ブランドB&青パジャマ=ブランドC'
    )).toEqual({ '赤パジャマ': 'ブランドA', '黃シャツ': 'ブランドB', '青パジャマ': 'ブランドC' });
});

test('parseComplex で  赤パジャマ=ブランドA&赤パジャマ=ブランドB&黃シャツ=ブランドB&青パジャマ=ブランドC を解析する', () => {
    expect(parseComplex(
        '赤パジャマ=ブランドA&赤パジャマ=ブランドB&黃シャツ=ブランドB&青パジャマ=ブランドC'
    )).toEqual({ '赤パジャマ': ['ブランドA', 'ブランドB'], '黃シャツ': 'ブランドB', '青パジャマ': 'ブランドC' });
});