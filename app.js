const secretNumberGame = (left, right) => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Компьютер 1 загадал число: ${randomNumber}`);
  let number = 0;
  do {
    number = Math.floor((left + right) / 2);
    console.log(`Компьютер 2: Пробую число ${number}`);

    if (randomNumber < number) {
      console.log("Компьютер 1: Меньше");
      right = number - 1;
    } else if (randomNumber > number) {
      console.log("Компьютер 1: Больше");
      left = number + 1;
    }
  } while (number !== randomNumber);

  console.log("Угадал!");
};

secretNumberGame(1, 100);

// custom array functions
const mySlice = (arr, start = 0, end = arr.length) => {
  const result = [];
  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

const myIndexOf = (arr, item, from = 0) => {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
};

const myIncludes = (arr, item, from = 0) => {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

//objects practice
const objectToSum = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof obj[key] === "number") sum += obj[key];
  });
  return sum;
};

const objectToArray = (obj) => {
  let result = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof obj[key] === "number") result.push(key);
  });
  return result.sort((a, b) => obj[b] - obj[a]);
};

//string practice
const capitalizeFirstLetter = (str) => {
  if (str.length === 0) return;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) return str;

  let truncatedStr = str.slice(0, maxLength);

  const lastIndex = Math.max(
    truncatedStr.lastIndexOf(" "),
    truncatedStr.lastIndexOf(","),
    truncatedStr.lastIndexOf("."),
    truncatedStr.lastIndexOf("!"),
    truncatedStr.lastIndexOf("?"),
    truncatedStr.lastIndexOf(":"),
    truncatedStr.lastIndexOf(";")
  );

  return truncateString.slice(0, lastIndex) + "...";
};

const isSubstring = (str1, str2) => {
  return str1.includes(str2) || str2.includes(str1);
};

//simple calculate
const operations = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiply: (a, b) => a * b,
  division: (a, b) => a / b,
};
const selectedOperation = "division";

const simpleCalculate = (a, b, calcFunction) => {
  return calcFunction(a, b);
};
console.log(simpleCalculate(10, 2, operations[selectedOperation])); // 5

//myFilter
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) result.push(array[i]);
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];

const greaterThanThree = myFilter(numbers, (num) => num > 3);
console.log(greaterThanThree); // [4, 5]
