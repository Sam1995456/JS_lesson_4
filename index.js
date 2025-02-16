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
  for (let i = 1; i < firstNum && i < secondNum; i++) {
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

  for (let i = 1; i < enterNum; i++) {
    if (enterNum % i === 0) {
      console.log(i);
    }
  }
}

numbers();
