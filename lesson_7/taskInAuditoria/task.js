//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
/*
let words = ['beach', 'dick', 'fuck']
let but = document.getElementById('but')
but.onclick=()=>{
    let form = document.getElementById('words')
    for(let i = 0; i < words.length;i++){
        if(words[i] === form.word.value){
            alert('your word is not correct')
        }
    }
}

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
/*
let words = ['beach', 'dick', 'fuck']
let but = document.getElementById('but')
but.onclick=()=>{
    let form = document.getElementById('words')
    let text = []
    text = form.word.value.split(' ')

    for(let i = 0; i < words.length;i++){
        for(let j = 0; j < text.length;j++){
            if(words[i] === text[j]){
               alert('your text is not correct');
               return text[j]
            }
        }
    }
}

 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//?????????????????????????????????????????????????????????????????????????????????
//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//??????????????????????????????????????????????????????????????????????????????????????????
//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
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
const usersDiv = document.getElementById('users')
for (const user of usersWithAddress) {
let userDiv = document.createElement('div')
    userDiv.classList.add('userDiv')
    usersDiv.appendChild(userDiv)
    for (const field in user) {
        if(field !== 'address'){
            let fieldDiv = document.createElement('div')
            fieldDiv.classList.add('fieldDiv')
            userDiv.appendChild(fieldDiv)
            fieldDiv.innerText = `${field} - ${user[field]}`
            if (user.isMarried === true) {
                userDiv.classList.add('married')
            }
            if(user.age < 29){
                userDiv.classList.add('young')
            }

        }
    }
    for (const field in user.address) {
        let fieldDiv = document.createElement('div')
            fieldDiv.classList.add('cityDiv')
            userDiv.appendChild(fieldDiv)
            fieldDiv.innerText = `${field} - ${user.address[field]}`
        if(user.address.city !== 'Kyiv'){
                userDiv.classList.add('Kyiv')
            }
    }
}
let onlyFalse = document.getElementById('onlyFalse')
let married = []
married = document.getElementsByClassName('married')
console.log(married);
onlyFalse.onclick = () => {
    for(let i = 0; i < married.length;i++){
        married[i].hidden = true
    }
}
let older = document.getElementById('older')
let young = []
young = document.getElementsByClassName('young')
older.onclick=()=>{
    for(let i = 0; i < young.length;i++){
        young[i].hidden = true
    }
}
let cityKyiv = document.getElementById('cityKyiv')
let kyivs = []
kyivs = document.getElementsByClassName('Kyiv')
cityKyiv.onclick = ()=>{
    for(let i = 0; i < kyivs.length;i++){
        kyivs[i].hidden = true
    }
}