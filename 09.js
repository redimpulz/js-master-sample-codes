// イベント処理の例
const random = (number) => Math.floor(Math.random() * (number + 1));

const bgChange = () => {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  console.log(rndCol);
  document.body.style.backgroundColor = rndCol;
};

// パターン1 : イベントハンドラープロパティ
const btn = document.querySelector("button");
btn.onclick = bgChange;

// パターン2 : インラインイベントハンドラー — 使っちゃだめ
// <button onclick="bgChange()">button</button>

// パターン3 : イベントリスナー
const btn = document.querySelector("button");
btn.addEventListener("click", bgChange);

// イベントオブジェクト
const div = document.querySelector("div");
const bgChangeE = (e) => {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  e.target.style.backgroundColor = rndCol;
  console.log(e);
};
div.addEventListener("click", bgChangeE);

// 標準の動作を抑制する
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");
form.onsubmit = function (e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
};
