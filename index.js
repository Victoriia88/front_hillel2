// Перше завдання виведено в документ, всі інші в console.log

// 1
let taskFirst = 10;

while (taskFirst <= 20) {
  document.write(taskFirst);

  if (taskFirst < 20) {
    document.write(', ');
  }
  taskFirst++;
}

// 2 
for (let taskSecond = 10; taskSecond <= 20; taskSecond++) {
  console.log(taskSecond * taskSecond);
}

// 3
let taskThird = 1;

while (taskThird <= 10) {
  console.log(7 + ' * ' + taskThird + ' = ' + 7 * taskThird + ';');
  taskThird++;
}

// 4
let sum = 0;
let taskFour = 1;

while (taskFour <= 15) {
  sum += taskFour;
  taskFour++;
}
console.log(`Сума цілих чисел від 1 до 15 = ${sum}`);

// 5
let taskFive = 15;
let multiplication = BigInt(1);

while (taskFive <= 35) {
  multiplication *= BigInt(taskFive);
  taskFive++;
}
console.log(`Добуток усіх цілих чисел від 15 до 35 = ${multiplication}`);

// 6
let taskSix = 1;
let sumSix = 0;
let average = 0;

while (taskSix <= 500) {
  sumSix += taskSix;
  taskSix++;
  average++;
}

console.log(`Cереднє арифметичне всіх цілих чисел від 1 до 500 = ${sumSix / average}`);

// 7
let taskSeven = 30;
let sumSeven = 0;

while (taskSeven <= 80) {
  if (!(taskSeven % 2)) {
    sumSeven += taskSeven;
  }
  taskSeven++;
}
console.log(`Сума лише парних чисел в діапазоні від 30 до 80 = ${sumSeven}`);

// 8
let taskEight = 100;

while (taskEight <= 200) {
  if (!(taskEight % 3)) {
    console.log(`Число в діапазоні від 100 до 200 кратне 3 = ${taskEight}`);
  }
  taskEight++;
}

// 9-10-11
let taskNine = parseInt(prompt('Введіть, будь ласка, будь-яке число'));
let i = 1;
let countTen = 0;
let sumEleven = 0;

while (i <= taskNine) {
  if (taskNine % i === 0) {
    console.log(i);
    if (i % 2 === 0) {
      countTen++;
      sumEleven += i;
    }
  }
  i++;
}
console.log(`Кількість парних дільників = ${countTen}. Сума парних дільників = ${sumEleven} `);

// 12
let firstNum = 1;
while (firstNum <= 10) {
  let secondNum = 1;
  while (secondNum <= 10) {
    console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
    secondNum++;
  }
  firstNum++;
}
