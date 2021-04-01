/*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

/*let a_number = [10,20,30,40,50]
let a_string = ['Valentyn', 'Anna', 'Victor', 'Olena', 'Vika']
let arr = ['Valentyn', 19, true, 'Kurylo', 13]
for (let i = 0; i < 5; i++){
    console.log(a_number[i] + '\n');
    console.log(a_string[i] + '\n');
    console.log(arr[i] + '\n');
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/* let arr = []
arr[0] = 20
arr[9] = 'Hi'
arr[1] = true
arr[3] = 'Hello'
arr[2] = 5
for(let item of arr){
    console.log(item);
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/*for(let i = 0; i < 10;i++){
    document.write('<div>' + 'Hello' + '</div>')
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*for(let i = 0; i < 10;i++){
    document.write('<div>' + 'Hello, index = ' + i + '</div>')
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/* let counter = 0;
while (counter < 20){
    document.write('<h1>' + 'Hi' + '</h1>')
    counter++;
}

 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let counter = 0;
while (counter < 20){
    document.write('<h1>' + 'Hi, index = ' + counter + '</h1>')
    counter++;
}*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*
let arr = [1, 1, 2, 3,5, 8,13, 21, 34, 55];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*
let arr = ['Ukrain', 'Russia', 'USA', 'Canada', 'China', 'France', 'Italy', 'Andora', 'Peru', 'Moldova']
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

/*let arr = [true, false, null, 99999, 'Hi', undefined, 'q', 3.14, 2.7, 0]
for(let item of arr){
    console.log(item);
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*let arr = [true, false, null, 99999, 'Hi', undefined, 'q', 3.14, 2.7, 0]
for(let item of arr){
    if(typeof item === "boolean")
    console.log(item);
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*
let arr = [true, false, null, 99999, 'Hi', undefined, 'q', 3.14, 2.7, 0]
for(let item of arr){
    if(typeof item === "number")
    console.log(item);
}

 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*let arr = [true, false, null, 99999, 'Hi', undefined, 'q', 3.14, 2.7, 0]
for(let item of arr){
    if(typeof item === "string")
    console.log(item);
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
    Вивести в консоль всі його елементи в циклі.*/
/*
let arr = [];
arr[0] = 0;
arr[1] = false;
arr[2] = null;
arr[3] = 'null';
arr[4] = '0';
arr[5] = true;
arr[6] = 1;
arr[7] = '1';
arr[8] = 'one';
arr[9] = undefined;
 for(let i = 0; i < arr.length; i++){
     console.log(arr[i]);
 }

 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*
for(let i = 0; i < 10; i++){
   console.log(i + '\n');
   document.write(i + '\n');
}

 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*
for(let i = 0; i < 100; i++){
   console.log(i + '\n');
   document.write(i + '\n');
}

 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*
for(let i = 0; i < 100; i+=2){
   console.log(i + '\n');
   document.write(i + '\n');
}

 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*
for(let i = 0; i < 100; i++){
    if(i % 2 === 0) {
        console.log(i + '\n');
        document.write(i + '\n');
    }
}

 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*
for(let i = 0; i < 100; i++){
    if(i % 2 !== 0) {
        console.log(i + '\n');
        document.write(i + '\n');
    }
}

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
/*
let time = 0, i = 0;
while(time < 2){
    i++;
    if(i == 60)
    {
        time++;
        i = 0;
    }
    console.log(time + ' хвилини ' + i + ' секунди.')
}

 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
/*
let hour = 0, minute = 0, second = 0;
while(hour <= 2 || minute < 30){
    second++;
    if(second == 60)
    {
        minute++;
        second = 0;
        if(minute == 60){
            hour++;
            minute = 0;
        }
    }
    console.log(hour + ' години ' + minute + ' хвилини ' + second + ' секунди.')
} */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


