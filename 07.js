// Promiseを使わない非同期処理

// タイマー処理
setTimeout(() => {
  console.log("Hello!");
}, 1000);

// サーバとの通信（fetch以前）
const req = new XMLHttpRequest();
req.addEventListener("load", (e) => {
  console.log(e.target.response);
});
req.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
req.send();

// コールバック地獄
setTimeout(() => {
  console.log("Hello!");
  setTimeout(() => {
    console.log("Hello!");
    setTimeout(() => {
      console.log("Hello!");
      setTimeout(() => {
        console.log("Hello!");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

const asyncHello = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello!");
      // resolve();
      // resolve("hello");
      reject();
    }, 1000);
  });

asyncHello()
  .then(() => asyncHello())
  .then(() => asyncHello())
  .then(() => asyncHello())
  .catch((error) => {
    console.log(error);
  });

const main = async () => {
  try {
    const hello = await asyncHello();
  } catch (error) {
    console.log("error");
  }
};
main();

const ids = [1, 2, 3, 4, 5];

// 直列で非同期処理を行う
const main = async () => {
  for (const id of ids) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const json = await res.json();
    console.log(json);
  }
};
main();

// 並列で非同期処理を行う
const main = async () => {
  const fetches = ids.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
      res.json()
    )
  );
  const jsons = await Promise.all(fetches);
  console.log(jsons);
};
main();
