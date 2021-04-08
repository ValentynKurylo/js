//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
/*
class Car{
    constructor(model, power, driver, price, year) {
        this.model = model
        this.power = power
        this.driver = driver
        this.price = price
        this.year = year
    }
    fix(){
      this.power *= 1.1
      this.price *= 1.05
    }
}
class Driver{
    constructor(name, age, experience) {
        this.name = name
        this.age = age
        this.experience = experience
    }
    add_experience(){
        this.experience += 1
    }

}
let Ivan = new Driver('Ivan', 19, 2)
let Olga = new Driver('Olga', 24, 1)
let Bogdan = new Driver('Bogdan', 43, 19)
let Olena = new Driver('Olena', 40, 14)
let Sasha  = new Driver('Sasha', 21, 1.5)
let Roman = new Driver('Roman', 35, 11)
let Lida = new Driver('Lida', 29, 7)
let Vlad = new Driver('Vlad', 32, 5)
let Petro = new Driver('Petro', 67, 36)
let bmw = new Car('bmw', 300, Ivan, 6000, 2002)
let audi = new Car('audi', 250, Olena, 5000, 2012)
let mercedes = new Car('mercedes', 400, Sasha,18000, 2017)
let fiat = new Car('fiat', 200, Bogdan, 5000, 2004)
let nissan = new Car('nissan', 280, Olga, 10000, 2014)
let subaru = new Car('subaru', 300, Roman,12000, 2018)
let opel = new Car('opel', 200, Lida, 6600, 2010)
let lexus = new Car('lexus', 500, Vlad, 25000, 2012)
let toyota = new Car('toyota', 290, Petro, 9000, 2014)
opel.fix()
lexus.fix()
fiat.fix()
nissan.fix()
subaru.fix()
let Andri = new Driver('Andri', 28, 3)
let Victor = new Driver('Victor', 49, 28)
let Ira = new Driver('Ira', 36, 12)
let Vika = new Driver('Vika', 27, 6)
opel.driver = Andri
lexus.driver = Victor
fiat.driver = Ira
nissan.driver = Vika
subaru.driver = Petro
let cars = [bmw, audi, mercedes, toyota, opel, lexus, fiat,nissan, subaru]
let sum = 0
for (let i = 0; i < cars.length; i+= 2) {
    cars[i].power *= 1.1
    cars[i].price *= 1.05
    if(cars[i].driver.experience < 5 && cars[i].driver.age > 25)
        cars[i].driver.add_experience()
    sum += cars[i].price
}
console.log(cars);
console.log(sum);

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 8, 6, 1, 8, 1, 8, 4, 1, 6, 8, 1, 0, 6, 3, 2]
function find(n, arr = []){
    arr.sort((a, b) => a - b)
    let minIndex = 0,  maxIndex = 0, newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === n){
            newArr.push(i)
        }
    }
    console.log(arr);
    console.log(`min index = ${newArr[0]},  max index = ${newArr[newArr.length - 1]}`);
}
find(1, arr)