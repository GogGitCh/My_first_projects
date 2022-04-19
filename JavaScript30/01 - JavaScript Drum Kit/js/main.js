// function teamBri(input) {
//   let index = 0;
//   let k = 0;
//   let kInt = Number(input[index]);
//   index++;
//   let l = 0;
//   let lInt = Number(input[index]);
//   index++;
//   let m = 0;
//   let mInt = Number(input[index]);
//   index++;
//   let n = 0;
//   let nInt = Number(input[index]);
//   let isSame = false;
//   let firstSixCombo = 0;

//   for (k = kInt; k <= 8; k++) {
//     if (firstSixCombo === 6) {
//       break;
//     }
//     for (l = 9; l >= lInt; l--) {
//       if (firstSixCombo === 6) {
//         break;
//       }
//       for (m = mInt; m <= 8; m++) {
//         if (firstSixCombo === 6) {
//           break;
//         }
//         for (n = 9; n > nInt; n--) {
//           if (k === m && l === n) {
//             console.log(`Cannot change the same player`);
//             firstSixCombo++;
//             isSame = true;
//           } else if (k % 2 == 0 && l % 2 !== 0 && m % 2 == 0 && n % 2 !== 0) {
//             console.log(`${k}${l}-${m}${n} `);
//             firstSixCombo++;
//           }

//           if (firstSixCombo === 6) {
//             break;
//           }
//         }
//       }
//     }
//   }
// }

// teamBri(["7", "6", "8", "5"]);
// console.log(`--------------`)
// teamBri(["6", "7", "5", "6"]);

// function exercise6(input) {
//   let index = 0;
//   let K = Number(input[index++]);
//   let L = Number(input[index++]);
//   let M = Number(input[index++]);
//   let N = Number(input[index++]);
//   let counter = 0;

//   for (let k = K; k <= 8; k++) {
//     for (let l = 9; l >= L; l--) {
//       for (let m = M; m <= 8; m++) {
//         for (let n = 9; n >= N; n--) {
//           if (counter === 6) {
//             break;
//           }
//           if (m % 2 === 0 && n % 2 === 1 && k % 2 === 0 && l % 2 === 1) {
//             if ("" + k + l === "" + m + n) {
//               console.log(`Cannot change the same player.`);
//             } else {
//               console.log("" + k + l + " - " + m + n);
//               counter++;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// exercise6(["7", "6", "8", "5"]);
// console.log(`--------------`);
// exercise6(["6", "7", "5", "6"]);

function teamBri(input) {
  let index = 0;
  let k = 0;
  let kInt = Number(input[index]);
  index++;
  let l = 0;
  let lInt = Number(input[index]);
  index++;
  let m = 0;
  let mInt = Number(input[index]);
  index++;
  let n = 0;
  let nInt = Number(input[index]);

  let firstSixCombo = 0;

  for (k = kInt; k <= 8; k++) {
    if (firstSixCombo === 6) {
      break;
    }
    for (l = 9; l >= lInt; l--) {
      if (firstSixCombo === 6) {
        break;
      }
      for (m = mInt; m <= 8; m++) {
        if (firstSixCombo === 6) {
          break;
        }
        for (n = 9; n > nInt; n--) {

          if (k % 2 == 0 && l % 2 !== 0 && m % 2 == 0 && n % 2 !== 0) {
            if (k === m && l === n) {
              console.log(`Cannot change the same player`);
              break;
            } else {
              console.log(`${k}${l}-${m}${n} `);
              firstSixCombo++;
            }
          }

          if (firstSixCombo === 6) {
            break;
          }
        }
      }
    }
  }
}

teamBri(["7", "6", "8", "5"]);
console.log(`--------------`);
teamBri(["6", "7", "5", "6"]);
