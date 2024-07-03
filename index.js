function randomDelayPrint(message) {
  for (let i = 0; i < message.length; i++) {
      const delay = Math.random() * 1000;
      setTimeout(() => {
          console.log(message[i]);
      }, delay);
  }
  setTimeout(() => console.log(), message.length * 1000);
}

//randomDelayPrint('my name is kolya');

function intervalRace(functions, t) {
  return new Promise((resolve) => {
      let results = [];
      let index = 0;

      function callNextFunction() {
          if (index < functions.length) {
              let result = functions[index]();
              results.push(result);
              index++;
              setTimeout(callNextFunction, t);
          } else {
              resolve(results);
          }
      }

      callNextFunction();
  });
}

const functions = [
  () => "1,2,3,4,5",
  () => "5,4,3,2,1",
  () => "1,5,3,4,2",
];

intervalRace(functions, 1000).then((results) => {console.log(results);});


/*randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.
debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.
intervalRac.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. Коли всі функції виконано, intervalRace має повернути масив із результатами.*/


