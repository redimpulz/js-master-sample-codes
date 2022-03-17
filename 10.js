const ulRef = document.querySelector("ul");
const inputRef = document.querySelector("input");
const buttonRef = document.querySelector("button");

const handleAddItem = () => {
  const liRef = document.createElement("li");
  const spanRef = document.createElement("span");
  const itemButtonRef = document.createElement("button");

  const value = inputRef.value;
  inputRef.value = "";
  spanRef.textContent = value;
  itemButtonRef.textContent = "delete";

  liRef.appendChild(spanRef);
  liRef.appendChild(itemButtonRef);

  itemButtonRef.addEventListener("click", () => liRef.remove());

  ulRef.appendChild(liRef);
  inputRef.focus();
};

buttonRef.addEventListener("click", handleAddItem);

inputRef.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    handleAddItem();
  }
});
