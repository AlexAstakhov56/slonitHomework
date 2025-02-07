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
