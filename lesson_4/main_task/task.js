//1) створити функцію яка приймає масив та виводить його
/*
function arrIter(arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
arr = [7, 9,2, 3, 'hi', true]
arrIter(arr)

 */
//////////////////////////////////////////////////////////////////////////////////////
// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
/*
function arrIter(arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
function rand(arr, lenght){
    for(let i = 0;i < lenght; i++){
        arr[i] = Math.floor(Math.random()*100)
    }
}
arr = []
rand(arr, 10)
arrIter(arr)

 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*
function min(a, b, c){
    if(a <= b && a <= c){
        return a;
    }
    else if(b <= a && b <= c )
    {
        return b
    }
    else
        return c
}
let res = min(56, 9,34)
console.log(res);

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*
function max(a, b, c){
    if(a >= b && a >= c){
        return a;
    }
    else if(b >= a && b >= c )
    {
        return b
    }
    else
        return c
}
let res = max(56, 99,34)
console.log(res);

 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5) створити функцію яка повертає найбільше число з масиву
/*
function max(arr = []){
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i]
    }
     return max
}
arr = [9, 89, 56, 123]
let res = max(arr)
console.log(res);

 */
///////////////////////////////////////////////////////////////////////
//6) створити функцію яка повертає найменьше число з масиву
/*
function min(arr = []){
    let min = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min)
            min = arr[i]
    }
     return min
}
arr = [9, 89, 56, 123, 9, 7, 999]
let res = min(arr)
console.log(res);

 */
///////////////////////////////////////////////////////////////////////////////
//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
/*
function sum(arr= []){
    let sum = 0
    for (const arrElement of arr) {
        sum+=arrElement
    }
    return sum
}
let res = sum(arr = [8, 90, 67, 45, 89, 12])
console.log(res);

 */
///////////////////////////////////////////////////////////////////////////////////////
//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
function sum(arr= []){
    let sum = 0
    for (const arrElement of arr) {
        sum+=arrElement
    }
    return sum / arr.length
}
let res = sum(arr = [8, 90, 67, 45, 89, 12])
console.log(res);

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////
//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
/*
let person = [{name: 'Dima', age: 13, model: 'Camry'}]
function keys(arr = [{}]){
    for (const i of arr) {
        for (const personKey in i) {
            console.log(personKey);
        }
    }
}
keys(person)

 */
///////////////////////////////////////////////////////////////////////////////////////////////
//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
/*
let person = [{name: 'Dima', age: 13, model: 'Camry'}]
function keys(arr = [{}]){
    for (const i of arr) {
        for (const personKey in i) {
            console.log(i[personKey]);
        }
    }
}
keys(person)

 */
/////////////////////////////////////////////////////////////////////////////////////
//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
/*
function sum(arr1 = [], arr2 = []) {
    arr_res = []

    for (let i = 0; i < arr1.length; i++) {
        arr_res[i] = arr1[i] + arr2[i]
    }
    return arr_res

}

let res = sum(arr1 = [2, 7, 5, 9, 8, 1], arr2 = [8, 3, 5, 1, 11, 6])
console.log(res);

 */
///////////////////////////////////////////////////////////////////////////////////////////
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*
function max_min(){
    let max = 0
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] >= max){
            max = arguments[i]
        }
    }
    console.log(max);
    let min = arguments[0]
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] <= min){
            min = arguments[i]
        }
    }
    return min
}
let res = max_min(7, 9,4, 21, 1, 90, 7899)
console.log(res);

 */
//////////////////////////////////////////////////////////////////////////////////////////////
//- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
/*
let person = [{name: 'Dima', age: 13, model: 'Camry'}]

function keys(arr = [{}]) {
    let youWant = prompt("Do You want keys or values")
    if (youWant === 'values') {
        for (const i of arr) {
            for (const personKey in i) {
                console.log(i[personKey]);
            }
        }
    } else if (youWant === 'keys') {
        for (const i of arr) {
            for (const personKey in i) {
                console.log(personKey);
            }
        }
    }
}
keys(person)

 */
//////////////////////////////////////////////////////////////////////////////////////////////////////
//- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
/*
function foo(arr = [], i)
{
    let x = arr[i]
    arr[i] = arr[i+1]
    arr[i + 1] = x
    console.log(arr);
}
foo(arr = [9, 8, 0, 4], 0)

 */
////////////////////////////////////////////////////////////////////////////////////////////
//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
/*
function zero(arr = []){
  let arr1 = [], k = 0
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === 0)
       {
           k++
       }
    }
    let i = 0, j = 0, l = arr.length
   while(arr1.length < l - k){
         if(arr[j] === 0){
            arr.shift()
        }
       else if(arr[j] !== 0){
            arr1[i] = arr[j]
            arr.shift()
             i++
        }

   }
    for(let i = 0; i < k; i++){
        arr1.push(0)
    }
    console.log(arr1);
}
zero(arr = [0, 0, 1, 0])

 */
////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
/*
function foo(str = ''){
    console.log(str);
    str = str.trimStart()
    str = str.trimEnd()
    let k = 0
   for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            k++;
        }
    }
    for(let i = 0; i < k- 1; i++) {
        str = str.replace(' ', '')
    }
    console.log(str);
}
let n1 = '    Hermione       Granger      '
foo(n1)

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////
// ******************* НАЗАД В МИНУЛЕ *********************** //
//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
/*
function foo(){
    let div = document.createElement('div')
    div.innerText = 'Hello owu'
    document.body.appendChild(div)
}
foo();

 */
//============================================================================================
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
/*
function foo(type = '', text){
    let element = document.createElement('type')
    element.innerText = text
    document.body.appendChild(element)
}
foo('div', 'Hello')

 */
///=========================================================================
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок
/*
let cars = [{name : 'BMV', year : 2007, motor : 2.5}, {name: 'audi', year: 2017, motor: 1.8}, {name: 'Reno', year: 2010, motor: 2.3}]
function foo(cars = []){
    let k = 1
    for (const car of cars) {
         car.id = k
        k++
        divElement = document.createElement('div')
        document.body.appendChild(divElement)
        for (const field in car) {
            let divElementInto = document.createElement('div')
            divElementInto.innerText = `${car[field]}`;
            divElement.appendChild(divElementInto)
        }

    }

}
foo(cars)

 */
//===========================================================================================