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

const a1 = interests.filter((x) => x.score >= 50);
console.log(a1);

const a2 = interests.map((x) => x.name.toUpperCase());
console.log(a2);

const a3 = interests.reduce((a, b) => a + b.score, 0);
console.log(a3);

const a4 = interests
  .filter((x) => x.score >= 40)
  .map((x) => x.name.toUpperCase())
  .reduce((a, b) => a + b + ",", "")
  .slice(0, -1);

console.log(a4);
