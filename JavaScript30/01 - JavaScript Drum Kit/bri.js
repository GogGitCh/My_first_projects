// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//   for (let i = 0; i < multiplyAll.length; i++){
//     for (let bri = 0; bri < multiplyAll[i].length; bri++){
//       console.log(multiplyAll([i][bri]));
//     }
//   }
//     // Only change code above this line
//     return product;
//   }

//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// const arr = [
//     [1, 2], [3, 4], [5, 6]
//   ];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }

// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     console.log("sum(arr, n - 1)" + " " + sum(arr, n - 1));
//     console.log("arr[n - 1]" + " " + arr[n - 1]);
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));

// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   let n = 0;
//   while (n < 4) {
//     // console.log(contacts[n]['firstName'])
//     // console.log(contacts[n].firstName)
//     // console.log(contacts[n].hasOwnProperty(prop))
//     // console.log(contacts[n][prop])

//     if (name === contacts[n].firstName) {
//       if (contacts[n].hasOwnProperty(prop)) {
//         return contacts[n][prop];

//       } else if (contacts[n].hasOwnProperty(prop) === false) {
//         return "No such property";
//       }

//     } else if (name !== contacts[n]["firstName"]) {
//       return "No such contact";
//     }

//     n++;
//   }

//   // Only change code above this line
// }

// // console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName") + " " +'bri')

// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   {
//     return "No such contact";
//   }

//   // Only change code above this line
// }

// console.log(lookUpProfile("Akira", "likes"));

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   }
//   if (startNum === endNum) {
//     let briVal = [];

//     briVal.unshift(startNum);
//   } else {
//     let briVal2 = rangeOfNumbers(startNum, endNum - 1);

//     briVal2.push(endNum);
//     return endNum;
//     console.log(endNum);
//   }
// }

// console.log(rangeOfNumbers(1, 5));
// // console.log(rangeOfNumbers(6, 9));
// // console.log(rangeOfNumbers(4, 4));
// // console.log(rangeOfNumbers(6, 4));

// function checkScope() {
//   let i = 'function scope';
//   if (true) {
//    let i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }

// checkScope()


// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a,b,...arr] = list // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);

// console.log(arr);
// console.log(source);


// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// // const {max, min} = stats;
// // const half = (stats) => (stats.max + stats.min) / 2.0; 
// const half = ({max, min}) => ((max + min) / 2.0);
// // Only change code above this line

// console.log(half(stats));

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for (let i = 0; i < result.failure.length; i++){
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
 
//   }
  
  
//   // Only change code above this line

//   console.log(failureItems); // me 
//   return failureItems;
// }

// const failuresList = makeList(result.failure);


// // Only change code below this line
// class Vegetable {
//   constructor(name) {
//     this.name = name
//     console.log(this);
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'

// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

// let reCriminals = new RegCrime( '/.CC/g'); // Change this line
// console.log(reCriminals);

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);
 
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace).length;
// console.log(result);

// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor) Roosevelt/g; // Change this line
// // let result = myRegex.test(myString); // Change this line
// // // After passing the challenge experiment with myString and see how the grouping works
// // console.log(result);
// let result = myString.match(myRegex);
// console.log(result);

// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof []);
// console.log(typeof {});

// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     let row = [];
//     for (let i = 0; i < m; i++) {
//       // Adds the m-th row into newArray
  
//       for (let j = 0; j < n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         row.push(0);
//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
     
//       newArray.push(row);
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);
  

// function forecast(arr) {
//   // Only change code below this line
  
//   return arr.slice(2, 4);
// }

// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
// newArr.push([...arr])
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

// function quickCheck(arr, elem) {
//   // Only change code below this line
// if ((arr.indexOf(elem)) === -1 ){
//   return false;
// } else {
//   return true
// }
//   // Only change code above this line
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf[elem] == -1) {
//       newArr.push(arr[i]);
//     }
//   }

//   // Only change code above this line
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// let bri = 'strawberries';

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };

// // Only change code below this line
// foods[bri] = 27;
// foods.bananas = 13;
// foods["grapes"] = 35;
// // Only change code above this line

// console.log(foods);


// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
// return foods[scannedItem]
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));


// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//     userObj.hasOwnProperty(name)
//   );
// }

// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
// return Object.keys(obj)
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
console.log(user.data.friends.push(friend))
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));