"use strict";
// const axios = require("axios");

// const gotAQuote = new Promise((resolve, reject) => {
//   if (axios.get("https://api.kanye.rest")) {
//         resolve(response.data.quote)}
//     // .then((response) => {
//     //   console.log(response.data.quote);
//     // })
//     // .catch((error) => {
//     //   console.log("Kanye is sleeping");
//     // })
//     // .then(console.log("It works!"));
// });

// myPromise.then((message) => {
//     console.log(message);
// });
// console.log()
// axios.get("https://api.kanye.rest")

// const myPromise = new Promise((resolve, reject) => {
//     if ()
//     console.log("Please wait for two seconds...");
//     setTimeout(() => {
//         console.log("Thank you for waiting...")
//     }, 2000)

// });

const setNumber = () => {
  if (document.getElementById("newNumber").value) {
    document.getElementById("yourNumber").innerHTML =
      document.getElementById("newNumber").value;
  }

  document.getElementById("newNumber").value = "";
};

const createPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    let yourNumber = document.getElementById("yourNumber").innerHTML;
    if (yourNumber === "42") {
      resolve(yourNumber);
    } else {
      reject(yourNumber);
    }
  });

  console.log(myPromise);

  myPromise
    .then((value) => {
      alert(`The universe is yours! Your number is ${value}.`);
    })
    .catch((value) => {
      alert(`Not yet the universe is yours you see. Your number is ${value}.`);
    });
};

const work = () => {
  setNumber();
  setTimeout(createPromise, 100);
};
