//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
/*
function  Car(model, producer, year, maxSpeed, volumeMotor) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.volumeMotor = volumeMotor

this.drive = function (speed){
        console.log(`We drive with speed ${this.maxSpeed} on an hour`)
    }
    this.info = function (){
        for (const argumentsKey in Car) {
            console.log(argumentsKey + " : " + Car[argumentsKey] )
        }
    }
    this.newSpeed = function (speed){
        this.maxSpeed = speed
    }
    this.newYear = function (year){
        this.year = year
    }
    this.driver = function (driver ={}){
        this.driver = driver
    }
}
let bmv = new Car('bmv', 'Germany', 2017, 280, 2.3)
bmv.newSpeed(300)
console.log(bmv);
bmv.driver(driver = {name : 'Valentyn', year : 19})
console.log(bmv);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
/*
class  Car {
    constructor(model, producer, year, maxSpeed, volumeMotor) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.volumeMotor = volumeMotor
    }
drive(speed){
        console.log(`We drive with speed ${this.maxSpeed} on an hour`)
    }
    info(){
        for (const argumentsKey in Car) {
            console.log(argumentsKey + " : " + Car[argumentsKey] )
        }
    }
    newSpeed(speed){
        this.maxSpeed = speed
    }
    newYear(year){
        this.year = year
    }
    driver(driver ={}){
        this.driver = driver
    }
}
let bmv = new Car('bmv', 'Germany', 2017, 280, 2.3)
bmv.newSpeed(300)
console.log(bmv);
bmv.driver(driver = {name : 'Valentyn', year : 19})
console.log(bmv);

 */
///////////////////////////////////////////////////////////////////////////////////////////////////

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
/*
class Girl{
    constructor(name, age, size) {
        this.name = name
        this.age = age
        this.size = size
    }
}
class Boy{
    constructor(name, age, sizeFound) {
        this.name = name
        this.age = age
        this.sizeFound = sizeFound
    }
    foundGirl(arr = [], sizeFound){
        this.sizeFound = sizeFound
        for (const girl of arr) {
            for (const field in girl) {
                if(girl[field] === this.sizeFound && field === 'size'){
                    console.log(girl);
                }
            }
        }
    }
}
let girls = [
 girl_1 = new Girl('Anna', 23, 39),
 girl_2 = new Girl('Maria', 20, 37),
 girl_3 = new Girl('Olena', 36, 40),
 girl_4 = new Girl('Olga', 24, 41),
 girl_5 = new Girl('Lida', 17, 39.5),
 girl_6 = new Girl('Viktoria', 18, 37.8),
 girl_7 = new Girl('Lilia', 31, 40.2),
 girl_8 = new Girl('Olexsandra', 19, 43),
 girl_9 = new Girl('Lisa', 25, 36),
 girl_10 = new Girl('Tania', 21, 37.5),
    ]
 boy = new Boy('Petro', 25, )
boy.foundGirl(girls, 41)

 */
////////////////////////////////////////////////////////////////////////////////////////////////////////

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Girl(name, age, size) {
        this.name = name
        this.age = age
        this.size = size
    }

function Boy(name, age, sizeFound) {
    this.name = name
    this.age = age
    this.sizeFound = sizeFound
    this.foundGirl = function (arr = [], sizeFound) {
        this.sizeFound = sizeFound
        for (const girl of arr) {
            for (const field in girl) {
                if (girl[field] === this.sizeFound && field === 'size') {
                    console.log(girl);
                }
            }
        }
    }
}
let girl_1 = new Girl('Anna', 23, 39)
let girl_2 = new Girl('Maria', 20, 37)
let girl_3 = new Girl('Olena', 36, 40)
let girl_4 = new Girl('Olga', 24, 41)
let girl_5 = new Girl('Lida', 17, 39.5)
let girl_6 = new Girl('Viktoria', 18, 37.8)
let girl_7 = new Girl('Lilia', 31, 40.2)
let girl_8 = new Girl('Olexsandra', 19, 43)
let girl_9 = new Girl('Lisa', 25, 36)
let girl_10 = new Girl('Tania', 21, 37.5)
let girls = [girl_1, girl_2, girl_3, girl_4, girl_5, girl_6, girl_7, girl_8, girl_9, girl_10]
let  boy = new Boy('Petro', 25, 38)
boy.foundGirl(girls, 40.2)