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

const interests = [
  {
    name: "programming",
    emoji: "💻",
    score: 80,
  },
  {
    name: "motorcycle",
    emoji: "🏍",
    score: 45,
  },
];

// console.log(person);
