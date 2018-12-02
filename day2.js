const axios = require("axios");

async function getData(day) {
  console.log("fetching data...");
  try {
    let res = await axios.get(
      `https://adventofcode.com/2018/day/${day}/input`,
      {
        headers: {
          Cookie:
            "session=53616c7465645f5f31543c04c1f3598ddec10ec58ff0f429c301a6a8b2b7ead1897c983e525e824ee8c0bba2284785fc"
        }
      }
    );
    let data = await res.data;
    console.log("Success!");
    return data.trim().split("\n");
  } catch (e) {
    throw e;
  }
}

// getData(2)
//   .then(r => {
//     let twoOfAny = 0;
//     let threeOfAny = 0;
//     for (let i = 0; i < r.length; i++) {
//       let word = r[i];

//       let hasTwoOfAny = false;
//       let hasThreeOfAny = false;

//       // iterate over chars in string
//       while (word.length) {
//         // pop first char and store it
//         let char = word[0];

//         // remove the char from string
//         let replaced = word.replace(new RegExp(char, "gi"), "");

//         // find how many characters got removed
//         let foundChars = word.length - replaced.length;

//         console.log(`Found char ${char} in word ${word} ${foundChars} times`);

//         if (foundChars === 2 && !hasTwoOfAny) {
//           twoOfAny += 1;
//           hasTwoOfAny = true;
//         }

//         if (foundChars === 3 && !hasThreeOfAny) {
//           threeOfAny += 1;
//           hasThreeOfAny = true;
//         }

//         // replace word
//         word = replaced;
//       }
//     }

//     console.log("CHECKSUM: " + twoOfAny * threeOfAny);
//   })
//   .catch(e => console.log(e));

getData(2)
  .then(r => {
    // compare two strings
    for (let i = 0; i < r.length - 1; i++) {
      let primaryWord = r[i];
      for (j = 0; j < r.length; j++) {
        let toCompare = r[j];
        if (primaryWord === toCompare) break;
        else {
          differences = primaryWord
            .split("")
            .filter((c, i) => c !== toCompare[i]).length;
          if (differences === 1) {
            console.log(primaryWord);
            console.log(toCompare);
          }
        }
      }
    }
  })
  .catch(e => console.log(e));
