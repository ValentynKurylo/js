//1) Напишіть код, який :
    //a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
/*
let mon_year = document.getElementById('main_header')
mon_year.innerText = 'mon-year'

 */
//=======================================================================
// b) робить шириниу елементу ul 400px
/*
let ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.fontSize = '400px';
}
console.log(ul);

 */
//======================================================================================
//    c) робить шириниу всіх елементів з класом linkList шириною 50%
/*
let linkList = document.getElementsByClassName('linkList')
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%'
    linkListElement.style.background= 'blue'
}

 */
//======================================================================================
//  d) отримує текст який зберігається в елементі з класом listElement2
/*
let listElement2 = document.getElementsByClassName('listElement2')
let text = listElement2[0].textContent
console.log(text);

 */
//===============================================================================================
// e) отримує всі елементи li та змінює ім колір фону на сірий
/*
let li = document.getElementsByTagName('li')
for (const liElement of li) {
    liElement.style.color = 'gray'
}

 */
//==============================================================================================
//f) отримує всі елементи 'a' та додає їм клас anchor
/*
let aList = document.getElementsByTagName('a')
for (const aListElement of aList) {
    aListElement.classList.add('anchor')
}

 */
//=====================================================================================================
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
/*
let link3 = document.getElementsByTagName('a')
for (const link3Element of link3) {
    if (link3Element.textContent === 'link3'){
        link3Element.style.fontSize = '40px'
    }
}

 */
//=================================================================================================================
//   h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*
let aList = document.getElementsByTagName('a')
for (const aListElement of aList) {
    aListElement.classList.add(`element_${aListElement.textContent}`)
}

 */
//============================================================================================================
//   i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*
let subList = document.getElementsByClassName('sub-header')
let color = prompt("Enter color")
for (const subListElement of subList) {
    subListElement.style.background = color
}

 */
//=======================================================================================================
//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
/*
let subList = document.getElementsByClassName('sub-header')
let color = prompt("Enter color")
for (const subListElement of subList) {
    if(subListElement.textContent === 'content 2 segment')
        subListElement.style.color = color
    else
        subListElement.style.color = '#215f79'
}

 */
//================================================================================================
//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*
let content1 = document.getElementsByClassName('content_1')
let text = prompt('enter text')
for (const content1Element of content1) {
    content1Element.innerText = text;
}

 */
//=======================================================================================================
//l) отримати елементи p та змінити їм padding на 20px
/*
let pList = document.getElementsByTagName('p')
for (const pListElement of pList) {
    pListElement.style.padding = '20px'
}

 */
//=====================================================================================================
//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
/*
let text_2_list = document.getElementsByClassName('text2')
for (const text2ListElement of text_2_list) {
    text2ListElement.innerText = 'Feb-2021'
}

 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*2) Є масив котрий характеризує правила.
   Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
   При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
   Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html*/
/*
			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				}
			];
for (const rule of rules) {

    let divElement = document.createElement('div')
    divElement.classList.add('rules')
    document.body.appendChild(divElement)
    for (const field in rule) {
        let divElementInto = document.createElement('div')
        divElementInto.innerText = `${rule[field]}`;
        divElementInto.classList.add('element')
        divElement.appendChild(divElementInto)

    }
}

 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1,  <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1,  <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
     TO BE CONTINUED .....
]
*/
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
for (const users of usersWithId) {
    for (const cities of citiesWithId) {
        for (const user in usersWithId) {
            for (const city in citiesWithId) {
                if (users.id === cities.user_id) {
                    users.address = cities
                }
            }
        }
    }
}
console.log(usersWithId);
