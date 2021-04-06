//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
/*
class Teg {
    constructor(name, description, atributs = []
    ) {
        this.name = name
        this.description = description
        this.atributs = atributs
    }
}
class Atribut{
    constructor(name, description) {
        this.name = name
        this.description = description
    }
}
let href = new Atribut('href', 'Задает адрес документа, на который следует перейти.')
let type = new Atribut('type', 'Указывает MIME-тип документа, на который ведёт ссылка.')
let download = new Atribut('download', 'Предлагает скачать указанный по ссылке файл.')
let name = new Atribut('name', 'Устанавливает имя якоря внутри документа.')
let title = new Atribut('title', 'Добавляет всплывающую подсказку к тексту ссылки.')
let id = new Atribut('id', 'Указывает имя стилевого идентификатора.')
let class_ = new Atribut('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
let value = new Atribut('value', 'Значение элемента.')
let align = new Atribut('align', 'Задает выравнивание содержимого тега <div>.')
let a = new Teg('a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
[href , type, download, name, title ])
let div = new Teg('div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    [title, align])
let h1 = new Teg('h1',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
    [align, class_])
let span = new Atribut('span',
    'Тег <span> предназначен для определения строчных элементов документа',
    [title, id, class_])
let input = new Teg('input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ',
    [type, name, value])
let form = new Teg('form',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером',
    [name, id, class_])
let option = new Teg('option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
[value, class_])
let select = new Teg('select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    [name, id])
console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let audi = {
    model : 'A5',
    producer : 'Germany',
    year : 2018,
    maxSpeed : 220,
    volumeMotor : 2.3,
    drive: function (speed){
        console.log(`We drive with speed ${this.maxSpeed} on an hour`)
    },
    info: function (){
        console.log(audi)
    },
    newSpeed : function (speed){
        this.maxSpeed = speed
    },
    newYear : function (year){
        this.year = year
    },
    driver : function (driver ={}){
        audi.driver = driver
    }
}

 audi.info()



