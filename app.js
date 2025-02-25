let fruitBasket = ["banan.","apple.","pineaplle.","apricot.","kiwi."];

let getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let strWriteFruit = () => {
  let random = getRandomNumber(0,fruitBasket.length - 1);
  console.log(fruitBasket[random]);
};

strWriteFruit();