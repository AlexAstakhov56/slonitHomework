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
