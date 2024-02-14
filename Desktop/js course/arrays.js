//1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4

//2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();

//4
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}

alert( sumInput() );

//5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
}

//6
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

//7
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
}

arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//8
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}

//9
arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

//10
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );

//11
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
//12
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

arr = [1, 2, 3];
shuffle(arr);
alert(arr);

//13
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

//14
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}

//15
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}


  