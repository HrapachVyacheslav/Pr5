function sumInput() {
    const numbers = [];

    while (true) {
      let input = prompt("Введіть число:");

      if (input === null || input.trim() === "" || isNaN(input)) {
        break;
      }

      numbers.push(+input); // перетворюємо на число і додаємо
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    document.getElementById("result").innerHTML =
      `Введені числа: ${numbers.join(", ")}<br>Сума: ${sum}`;
  }