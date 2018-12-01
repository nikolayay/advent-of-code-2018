const axios = require("axios");

async function getData(day) {
  console.log("fetching data...");
  try {
    let res = await axios.get(`https://adventofcode.com/2018/day/1/input`, {
      headers: {
        Cookie:
          "session=53616c7465645f5f31543c04c1f3598ddec10ec58ff0f429c301a6a8b2b7ead1897c983e525e824ee8c0bba2284785fc"
      }
    });
    let data = await res.data;
    console.log("Success!");
    return data;
  } catch (e) {
    throw e;
  }
}

getData(1)
  .then(r => r.trim().split("\n"))
  .then(r => {
    let frequency = 0;
    let frequencies = [0];
    loop1: while (1) {
      for (let i = 0; i < r.length; i++) {
        frequency += parseInt(r[i]);
        if (frequencies.includes(frequency)) {
          console.log("FOUND IT: " + frequency);
          break loop1;
        } else {
          frequencies.push(frequency);
        }
      }
    }
    console.log(frequency);
  });
