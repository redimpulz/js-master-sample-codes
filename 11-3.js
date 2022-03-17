const inputRef = document.querySelector("input");
const previewRef = document.querySelector(".preview");
const buttonRef = document.querySelector("button");

const data = [
  ["0001", "itemA", "500yen"],
  ["0002", "itemB", "300yen"],
  ["0003", "itemC", "400yen"],
];

const handleCsvDownload = () => {
  const csvData = data
    .reduce((a, b) => a + b.join(",") + "\n", "")
    .slice(0, -1);
  // const a = document.createElement("a");
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, csvData], { type: "text/csv" });

  // a.href = URL.createObjectURL(blob);
  // a.download = "download.csv";
  // a.click();

  saveAs(blob, "download.csv");
};

buttonRef.addEventListener("click", handleCsvDownload);
