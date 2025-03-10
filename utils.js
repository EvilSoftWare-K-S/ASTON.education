/*-----------------1-------------------*/
const ob = {a: 3, b: {c: 7}}

function deepCopy (obj) {
    return JSON.parse(JSON.stringify(obj));
}

  const obCopy = deepCopy(ob);
  obCopy.a = 10;
  obCopy.b.c = 11;
  
  console.log('ob: ', ob.a); // 3
  console.log('ob: ', ob.b.c); // 7
  console.log('obCopy: ', obCopy.a); // 10
  console.log('obCopy: ', obCopy.b.c); // 11
/*-----------------2-------------------*/
function selectFromInterval(arr, a, b) {
    if (!Array.isArray(arr)) {
      throw new Error("first parameter must be an array!");
    }
  
    if (!arr.every((item) => typeof item === "number" && !isNaN(item))) {
      throw new Error("There are not only numbers in the array!");
    }
  
    if ( !Number.isInteger(a) || !Number.isInteger(b) ) {
      throw new Error("incorrect input parameters!");
    }
  
    const start = Math.min(a, b);
    const end = Math.max(a, b);
  
    return arr
      .filter((item) => item >= start && item <= end)
      .sort((x, y) => x - y);
  }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let arr = "not an array";
//let arr = [1, 2, 3, 4, "not a number", 6, 7, 8, 9, 10];
let a = 1;
let b = 5;

try {
    newArr = selectFromInterval(arr, a, b);
    console.log(newArr);
  } catch (e) {
    console.log(e.message); 
  }
/*-----------------3-------------------*/
const Arr = [
    {name: 'Bob', age: '25'},
    {name: 'Ann', age: '30'},
    {name: 'Tom', age: '35'},
]

const fn = (property) => (item) => {
    console.log(item[`${property}`]);
  };

Arr.forEach(fn('name')); // Bob, Ann, Tom
Arr.forEach(fn('age')); // 25, 30, 35
/*-----------------4-------------------*/

function reverseStr(str) {
  revstr = [...str].reverse().join("");
  console.log(revstr);
}
let str = "abcde"
reverseStr(str);