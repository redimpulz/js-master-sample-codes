const person = {
  firstName: "Ken",
  lastName: "Takahashi",
  age: 29,
  // gender: "male",
  interests: [
    {
      name: "programming",
      emoji: "💻",
    },
    {
      name: "motorcycle",
      emoji: "🏍",
    },
  ],
};

sessionStorage.setItem("person", JSON.stringify(person));
const item = sessionStorage.getItem("person");
console.log(item);
const parsedItem = JSON.parse(item);
console.log(parsedItem);

localStorage.setItem("person", JSON.stringify(person));
const item = localStorage.getItem("person");
console.log(item);
const parsedItem = JSON.parse(item);
console.log(parsedItem);
