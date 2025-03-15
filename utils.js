/*-----------------1-------------------*/
const ob = {a: 3, b: {c: 7}};

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
let str = "abcde";
reverseStr(str);

/*-----------------hw5-------------------*/
/*-----------------5-------------------*/
console.log("-----------5---------");
function memoize(callback) {
  const cache = {};
  
  return function(...args) {
      const key = JSON.stringify(args.sort((a,b)=>a-b));//+сортировка ключа перед записью+
      console.log(key);
      console.log('cache before ', cache);

      if (cache[`${key}`] !== undefined) {
          console.log('Get from cache');
          return cache[`${key}`];
      }

      console.log('First calculation');
      const result = callback(...args);
      cache[`${key}`] = result;
      console.log('cache after ', cache);

      return result;
  }
}
function sum(a,b,c,d){
  return a + b + c + d;
};

let fun = memoize(sum);
console.log(fun(3,5,1,2));
console.log(fun(5,3,2,1));
console.log(fun(1,3,5,2));
console.log(fun(3,2,1,5));
console.log("-----------5---------");
/*-----------------6-------------------*/
let add=(a)=>(b)=>{
  if(b === undefined){
    return (`add: ${a}`);
  }
  return add(`${a}`+b);
}
console.log(add(5)(2)(3)(4)());

/*-----------------7-------------------*/
function logger(call) {
  console.log(`${call}: I output only external context: ${this.item}`);
}

const obj = { item: "some value" };
logger.call(obj,"call");
logger.apply(obj,["apply"]);
logger.bind(obj,"bind")();
/*-----------------8-------------------*/
let objtest = {res:10};

Function.prototype.BINDt = function(context, ...args) {
  const originalFunc = this;
  return function() {
    return originalFunc.apply(context, args);
  };
};

function BIND(callback,context,...args) {
  return function() {
    return (callback.apply(context, args));
  }
}

function sumtest(a){
  console.log(a.reduce((accum,current) => accum + current, this.res));
}

sumtest.BINDt(objtest,[5,3])();
BIND(sumtest,objtest,[5,3])();
sumtest.bind(objtest,[5,3])();

/*-----------------hw6-------------------*/
/*-----------------9-------------------*/