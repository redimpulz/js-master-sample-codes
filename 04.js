const person = {
  firstName: "Ken",
  lastName: "Takahashi",
  age: 29,
  gender: "male",
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
  // greeting: function () {
  //   alert("Hi! I'm " + this.firstName + " " + this.lastName);
  // },
  greeting: () => {
    alert("Hi! I'm " + this.firstName + " " + this.lastName);
  },
};

const f = () => {
  alert("Hello!");
};

setTimeout(f, 5000);

const interests = [
  {
    name: "programming",
    emoji: "💻",
  },
  {
    name: "motorcycle",
    emoji: "🏍",
  },
];

interests.forEach((item) => {
  console.log(item.name);
  console.log(item.emoji);
});
