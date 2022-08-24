// 正規表現の作成
const tel = "090-1234-5678";
const re1 = /^0[789]0-\d{4}-\d{4}$/;
// バックスラッシュを使用する場合は2回必要
const re2 = new RegExp("^0[789]0-\\d{4}-\\d{4}$");

re1.test(tel);
/^0[789]0-\d{4}-\d{4}$/.test(tel);

// フラグを用いた高度な検索の例
/ab+c/g.test("abcccccccccddddabc");

// exec
const re = /ab+c/;
re.exec("abcccccccccddddabc");
// グローバル検索にした場合
const re_g = /ab+c/g;
re.exec("abcccccccccddddabc");

// test
/ab+c/.test("abcccccccccddddabc");

// match
"abcccccccccddddabc".match(/ab+c/g);

// matchAll
"abcccccccccddddabc".matchAll(/ab+c/g);
for (const v of "abcccccccccddddabc".matchAll(/ab+c/g)) {
  console.log(v);
}

// search
"abcccccccccddddabc".search(/ab+c/);
"aaabcccccccccddddabc".search(/ab+c/);

// replace
"abcccccccccddddabc".replace(/ab+c/, "hoge");

// replaceAll
"abcccccccccddddabc".replaceAll(/ab+c/g, "hoge");

// split
"abcccccccccddddabc".split(/ab+c/);
