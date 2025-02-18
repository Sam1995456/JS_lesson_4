//Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.

function enterNum() {
  let num = Number(prompt("Введите любое число для подсчета: "));
  let count = 0;
  let sum = 0;

  for (count; count <= num; count++) {
    sum = sum + count;
    console.log(sum);
  }
}

// enterNum();

// Запросить 2 числа и найти только наибольший общий
// делитель.

function nod() {
  let firstNum = Number(prompt("Введите первое число: "));
  let secondNum = Number(prompt("Введите второе число: "));
  let nod = 0;
  for (let i = 1; i <= firstNum && i <= secondNum; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      nod = i;
    }
  }
  console.log(nod);
}

// nod();

// Запросить у пользователя число и вывести все делители
// этого числа.

function numbers() {
  let enterNum = Number(prompt("Введите число"));

  for (let i = 1; i <= enterNum; i++) {
    if (enterNum % i === 0) {
      console.log(i);
    }
  }
}

// numbers();

// Определить количество цифр в введенном числе.

function infonumbers() {
  let enterNum = prompt("Введите число");

  for (let i = 0; i <= enterNum.length; i++) {
    if (enterNum[0] === "-") {
      enterNum = enterNum.slice(1);
    }
    console.log("кол-во цифр: ", enterNum.length);
  }
}

// infonumbers();

// Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести

// статистику на экран. Учтите, что достаточно одной пере-
// менной (не 10) для ввода чисел пользователем.

function calcNum() {
  let positiveNum = 0;
  let negativeNum = 0;
  let zeroNum = 0;
  let evenNum = 0;
  let oddNum = 0;

  for (let i = 0; i < 10; i++) {
    let enterNum = Number(prompt(`Введите число: `));

    if (enterNum > 0) {
      positiveNum += 1;
    } else if (enterNum < 0) {
      negativeNum += 1;
    } else {
      zeroNum += 1;
    }

    if (enterNum % 2 === 0) {
      evenNum += 1;
    } else if (enterNum % 2 !== 0) {
      oddNum += 1;
    }
  }

  console.log(`Положительных чисел: ${positiveNum}`);
  console.log(`Отрицательных чисел: ${negativeNum}`);
  console.log(`Нулей: ${zeroNum}`);
  console.log(`Четных чисел: ${evenNum}`);
  console.log(`Нечетных чисел: ${oddNum}`);
}

// calcNum();

// Зациклить калькулятор. Запросить у пользователя 2 числа

// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока

// пользователь не откажется.

function calculation() {
  for (let i = 1; i > 0; i++) {
    let firstRequest = Number(prompt("Введите первое число: "));
    let secondRequest = Number(prompt("Введите второе число: "));
    let thirdIsSign = prompt("Введите знак (/,*,+,-): ");

    let result;

    switch (thirdIsSign) {
      case `+`:
        result = firstRequest + secondRequest;
        break;
      case `-`:
        result = firstRequest - secondRequest;
        break;
      case `*`:
        result = firstRequest * secondRequest;
        break;
      case `/`:
        result = firstRequest / secondRequest;
        break;

      default:
        console.log("неизвестная операция");
        continue;
    }

    alert(`Результат: ${result}`);

    let continueCalc = confirm("Хотите ли продолжить?: ");

    if (!continueCalc) {
      break;
    }
  }

  alert(`Калькулятор завершил работу!`);
}

calculation();
