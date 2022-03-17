const inputRef = document.querySelector("input");
const previewRef = document.querySelector(".preview");

const handleCsvFiles = (e) => {
  for (const file of e.target.files) {
    // URLを作成
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const result = reader.result;
      console.log(result);
      const lines = result.split(/\n/).map((line) => line.split(","));
      console.log(JSON.stringify(lines));
      console.log(lines);
      lines.forEach((line) => {
        const item = document.createElement("p");
        item.textContent = line.join(",");
        previewRef.appendChild(item);
      });
    });
    reader.readAsText(file);
  }
};

inputRef.addEventListener("change", handleCsvFiles);
