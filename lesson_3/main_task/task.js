//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//a) отримує текст з параграфа з id "content"
/*
let p = document.getElementById('content').textContent;
console.log(p);

 */
//=====================================================================================================
// b) отримує текст з блоку з id "rules"
/*
let rules = document.getElementById('rules');
console.log(rules);

 */
//==================================================================================================
//  c) замініть текст параграфа з id 'content' на будь-який інший
/*
let p = document.getElementById('content');
p.innerText = 'Hi';

 */
//=========================================================================================================
//   d) замініть текст параграфа з id 'rules' на будь-який інший
/*
let rules = document.getElementById('rules');
rules.innerText = 'Hello, my name is Valentyn';

 */

//======================================================================================================
//  e) змініть кожному елементу колір фону на червоний
/*
let all = document.getElementsByClassName('all');
for (const allElement of all) {
    allElement.style.background = 'red';
}

 */
//=================================================================================================
// f) змініть кожному елементу колір тексту на синій
/*
let all = document.getElementsByClassName('all');
for (const allElement of all) {
    allElement.style.color = 'blue';
}

 */
//============================================================================================
//  g) отримати весь список класів елемента з id=rules і вивести їх в console.log
/*
let rules = document.getElementById('content').classList;
console.log(rules);

 */
//================================================================================================
// h) отримати всі елементи з класом fc_rules
/*
let fc_rules = document.getElementsByClassName('fc_rules');
console.log(fc_rules);

 */
//===========================================================================================
// i) поміняти колір тексту у всіх елементів fc_rules на червоний
/*
let all = document.getElementsByClassName('fc_rules');
for (const allElement of all) {
    allElement.style.color = 'red';
}

 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
  Вставити цей блок на сторінку
3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Блок з адресою зробити окремим блоком, з блоками для кожної властивості*/
let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
let conteiner = document.getElementById('conteiner')
for (const user of users) {
let divElement = document.createElement('div')
    divElement.classList.add('user')
    conteiner.appendChild(divElement)
    for (const field in user) {
        if(field !== 'address') {
            let divElementInto = document.createElement('div')
            divElementInto.innerText = `${user[field]}`;
            divElement.appendChild(divElementInto)
        }

    }
    for (const field in user.address) {
        let address = document.createElement('span')
        address.classList.add('address')
        address.innerText = `${user.address[field]}  `;
        divElement.appendChild(address)
    }
}