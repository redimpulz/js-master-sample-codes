const inputRef = document.querySelector("input");
const previewRef = document.querySelector(".preview");

// inputRef.addEventListener("change", (e) => {
//   // FileとFileList
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.files);
// });

const handleImageFiles1 = (e) => {
  for (const file of e.target.files) {
    const item = document.createElement("div");
    const image = document.createElement("img");
    // URLを作成
    image.src = URL.createObjectURL(file);
    console.log(image.src);
    item.appendChild(image);
    previewRef.appendChild(item);
  }
};

const handleImageFiles2 = (e) => {
  for (const file of e.target.files) {
    const item = document.createElement("div");
    const image = document.createElement("img");
    // URLを作成
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      image.src = reader.result;
      console.log(image.src);
      item.appendChild(image);
      previewRef.appendChild(item);
    });
    reader.readAsDataURL(file);
  }
};

inputRef.addEventListener("change", handleImageFiles1);
// inputRef.addEventListener("change", handleImageFiles2);
