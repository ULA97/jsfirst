/* const category = 'toys';

console.log(`https://someurl.com/${category}/5/`);

const user = 'Ivan';

alert(`Привет, ${user}`); */
/* 
let incr = 10,
    decr = 10; */

/* incr++; */ // Увеличивает на 1 инкримент префиксная это когда ты ставишь до переменной, постфиксная это когда ты ставишь после

/* decr--; */ // Уменьшает на 1 декримент

/* console.log(incr); 
console.log(decr); */
/* 
console.log(5%2); */ //% Возвращает остаток от деления
/* 
console.log(2*4 == 8); */ // == два знака сравнивают, а не один . Три знака равенста - это строгое сравнение

/* const isChecked = true, */ // Оператор (И) возвращает правду только если оба является истиной 
/* isClose = true; */ // Оператор ИЛИ наоборот возращает истину если хотя бы одно равно правдой ||
// Оператор ! отрицание возращает правду там, где использовалась ложь 

/* console.log(isChecked && isClose); */





/* if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
}
 */

/* if (num < 49) {
    console.log('Erroe');
} else if (num > 100) {
    console.log('Many');
} else {
    console.log('ok!');
}

(num == 50) ? console.log('ok!') : console.log('Erroe'); */ // тернарный оператор
/* 
switch (num) {
    case 49: 
        console.log('None');
        break;
    case 100: 
        console.log('None');
        break;
    case 50:
        console.log('ON apple');
        break;
    default:
        console.log('Не в этот раз');
        break;
} */

//ЦИкл пока меньше 55 будем прибавлять по 1 к переменной

/* let num1 = 50;

while (num1 < 55) {
    console.log(num1);
    num1++;
} */


/* 
do {
    console.log(num1);
    num1++;
}
while (num1 < 55); */


// Цикл for

/* for (let i = 1; i < 10; i++) {
    if (i === 6) { */
/* break; */
/*         continue;
    }

    console.log(i);
} */




/* let i = 0;

while (i  < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          i++;
          personalMovieDB.movies[a] = b;
}  */






/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 20;
}

showFirstMessage("Hello world");
console.log(num); */

/* function calc (a, b) {
    return (a + b);
}

console.log(calc(1923, 493943)); */
/* 
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); */

/* const logger = function() {

}; */

/* const str = "test"; */
/* const arr = [1,3,5]; */

/* console.log(str[2]); */

/* console.log(str.toUpperCase()); делает все большими буквами */
/* console.log(str); */

/* const fruit = "Some fruit"; */
/* console.log(fruit.indexOf('fruit')); вычисляет какой по очереди является элемент */

/* const logg = "hello world"; */

/* console.log(logg.slice(6, 11)) */

/* console.log(logg.substring(6, 11)); */

/* console.log(logg.substr(6, 5)); */

/* const num2 =12.2; */

/* console.log(Math.round(num2)); Округляет число */

/* const test = "12.2px"; */
/* console.log(parseInt(test)); переводит строку в число и округляет его */

/* console.log(parseFloat(test)); переводит строку в число без округления дает так как есть */


/* 
---------------------------------------------------------------------Callback---------------------------------------------------------------------------------
 */

/* function first() {
    // do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done () {
    console.log('Im go to teacher');
}

learnJS('JavaScript', done); */


/* ----------------------------------------------------------Object---------------------------------------------------------------------------------------- */

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; */

/* console.log(Object.keys(options).length);  */ // пересчет свойств объекта

/* console.log(options.name);

delete options.name;

console.log(options); */
/* console.log(options["colors"] ["border"]);  */

/* let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
        
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}


console.log(counter); */

/* ------------------------------------------------------------------------ Massive----------------------------------------------------------------------------- */

/* const arr = [5, 2, 3, 10, 8]; */

/* arr.sort(compareNum);  */ // call back a-b, тогда правильно сортирует числа

/* console.log(arr);

function compareNum(a, b) {
    return a - b;
} */

/* arr.pop(); */ // Удаляет последний элемент массива

/* arr.push(10); */ // Добавляет в конец элемент массива

/* for (let i = 0; i < arr.length; i++) { // length определяет сколько элементов в массиве 
    console.log(arr[i]);
} */

/* for (let value of arr) {  // of переберает только масивоподобные 
    console.log(value);
}
 */

/* arr.forEach(function(item, i, arr) {    // Гибко перебирает массив, 1 арг - то, что будем перебирать элемент, 2- номер по порядку, 3 ссылка на массив break не работает тут
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* const str = prompt("", ""); */
/* const products = str.split(", ");  */ // из строки формируем массив
/* products.sort();  */ // Метод сортировки по алфавиту как строки
/* console.log(products.join('; ')); */ // из массива формируем строку


/* ------------------------------------Передача по ссылке---------------------------------------- */
/* 
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
}; */


/* const copy = obj; // Ccылка на существующий объект 

copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy (mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}; */


/* const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
}; */

/* console.log(Object.assign(numbers, add));  */ //метод создает поверхнотную копию и засовывает туда дополнительный (в намб засунули адд)

/* const clone = Object.assign({}, add); */ // создает поверхнотную копию и засовывает туда дополнительный

/* clone.d = 20; */

/* console.log(add);
console.log(clone); */

/* const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); */ // копирует массив метод слайс можно внутрь передать ограничения по кол-во

/* 
newArray[1] = 'sadadadasdasdasd';
console.log(newArray);
console.log(oldArray);
 */
/* 
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['worpdpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb']; // ... оператор разворачивает 1 арг 1 массив 2 арг второй массив, и добавили свое

      console.log(internet);

function log (a, b, c)  {
    console.log(a);
    console.log(b);
    console.log(c);
}
 */
/* const num =  [2, 5, 7];

log(...num);
 */

/* const array = ['a', 'b'];

const newwArray = [...array]; */ // оператор спрэд ... также работает и для массива 

/* const q = {
    one: 1,
    two: 2
};


const newObj = {...q}; */

/* 
---------------------------------------------ООП----------------- */

/* 
let str = 'some';
let strObj = new String(str);


console.log(typeof(str));
console.log(typeof(strObj)); */


/* const soldier = {
    health: 400,
    armor: 100
}; */

/* const jonh = Object.create(soldier);  */ // создаем прототип Джон ,который будет иметь прототип солдата


/* Object.setPrototypeOf(jonh, soldier); */ // Устанавливает прототип

/* console.log(jonh.armor); */

