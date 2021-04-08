const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];
//
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
/*
let arr = cars.filter(n => n.volume > 3)
console.log(arr);

 */
//---------------------------------------------------
// - двигун = 2л
/*
let arr = cars.filter(n => n.volume === 2)
console.log(arr);

 */
//-------------------------------------------------------------
// - виробник мерс
/*
let arr = cars.filter(n => n.producer ==='mercedes')
console.log(arr);

 */
//-----------------------------------------------
// - двигун більше 3х літрів + виробник мерседес
/*
let arr = cars.filter((a) => (a.volume > 3 && a.producer === 'mercedes'))
console.log(arr);

 */
//-------------------------------------------------------------------------------------
// - двигун більше 3х літрів + виробник субару
/*
let arr = cars.filter((a) => (a.volume > 3 && a.producer === 'subaru'))
console.log(arr);

 */
//-------------------------------------------------------------------------------------
// - сили більше ніж 300
/*
let arr = cars.filter((a) => (a.power > 300 ))
console.log(arr);

 */
//-----------------------------------------------------------------------------------------
// - сили більше ніж 300 + виробник субару
/*
let arr = cars.filter((a) => (a.power > 300 && a.producer === 'subaru'))
console.log(arr);
*/

//---------------------------------------------------------------------------------
// - мотор серіі ej
/*
let arr = cars.filter(m => m.engine.startsWith('ej'))
console.log(arr);

 */
//-----------------------------------------------------------------------------------------
// - сили більше ніж 300 + виробник субару + мотор серіі ej
/*
let arr = cars.filter((a)=>(a.power>300 && a.producer==='subaru'&& a.engine.startsWith('ej')))

console.log(arr);

 */
//---------------------------------------------------------------------------------------------------
// - двигун меньше 3х літрів + виробник мерседес
/*
let arr = cars.filter(a => (a.volume < 3 && a.producer === 'mercedes'))
console.log(arr);

 */
// - двигун більше 2л + сили більше 250
/*
let arr = cars.filter(a =>(a.volume > 2 && a.power > 250))
console.log(arr);

 */
// - сили більше 250  + виробник бмв
/*
let arr = cars.filter(a =>(a.power > 250 && a.producer === 'bmw'))
console.log(arr);

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// - взять слдующий массив
 const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
 ];
//
// -- Відсортувати їх по ID
/*
usersWithAddress.sort((a,b)=>a.id - b.id)
console.log(usersWithAddress);

 */
// -- Відсортувати їх по ID в зворотньому порядку
/*
usersWithAddress.sort((a,b)=>b.id - a.id)
console.log(usersWithAddress);

 */
// -- Відсортувати по віку
/*
usersWithAddress.sort((a,b)=>a.age - b.age)
console.log(usersWithAddress);

 */
// -- Відсортувати по віку в зворотньому порядку
/*
usersWithAddress.sort((a,b)=>b.age - a.age)
console.log(usersWithAddress);

 */
// -- Відсорутвати по імені
/*
usersWithAddress.sort((a, b)=> {
    if(a.name > b.name)
        return 1
    return -1
})
console.log(usersWithAddress);

 */
// -- Відсорутвати по назві вулиці
/*
usersWithAddress.sort((a, b)=> {
    if(a.address.street > b.address.street)
        return 1
    return -1
})
console.log(usersWithAddress);

 */
// -- Відсорутвати по номеру будинку
/*
usersWithAddress.sort((a, b)=> a.address.number - b.address.number)
console.log(usersWithAddress);

 */
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
/*
let arr = usersWithAddress.filter(age => age.age < 30)
console.log(arr);

 */
// -- Залишити тільки одружених
/*
let married = usersWithAddress.filter(n => n.isMarried === true)
console.log(married);

 */
// -- Залишити тільки одружених, які молодні за 30
/*
let arr = usersWithAddress.filter(a => (a.isMarried === true && a.age < 30))
console.log(arr);

 */
// -- Залишити лише тих, в кого парні номери будинків.
/*
let arr = usersWithAddress.filter(n => (n.address.number % 2 === 0))
console.log(arr);

 */
// -- Порахувати загальний вік всіх людей. (reduce)
/*
let age1 = usersWithAddress.reduce((acc, age) => {
    return acc + age.age;
}, 0)
console.log(age1);

 */
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

usersWithAddress.reduce((acc, currunt)=>{
    if(currunt.isMarried === true && currunt.age > 30){
        currunt.child = true
    }

    return -1
}, 0)
let arr = usersWithAddress.filter(n => (n.child === true))
console.log(arr);
