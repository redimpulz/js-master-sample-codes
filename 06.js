// 非同期処理の例（fetch）
const res = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(res);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
console.log("hogehoge");

// エラーハンドリング
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => {
    console.log(error);
  });

// Async / Await でより分かりやすく
async function main() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  console.log(json);
}
main();

//  Async / Await の場合のエラーハンドリング
async function main() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
main();
