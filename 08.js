// 基本的なDOM操作

const link = document.querySelector("a");
link.textContent = "REDIMPULZ Lab";
link.href = "https://www.youtube.com/channel/UCdsCNxALP2nAJ_mLLlg3rFQ";

// 新しいノードの作成と配置
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed JS master.";
sect.appendChild(para);

const text = document.createTextNode(
  " — the best source for learning web development by video"
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// 要素を移動したり削除したり
sect.appendChild(linkPara);
sect.removeChild(linkPara);
linkPara.remove();

// スタイルを操作する : パターン1
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

// スタイルを操作する : パターン2
para.setAttribute("class", "highlight");
