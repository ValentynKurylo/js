//Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class Computer{
    constructor(memory, power, name) {
        this.memory = memory
        this.power = power
        this.name = name
    }
    turnOn(){
        console.log('this computer is turn on');
    }
    apgreidPower(){
        this.power*=1.1
    }
    apgreidMemory(){
        this.memory*=2
    }
}
class Laptop extends Computer{
    constructor(memory, power, name, monitor) {
        super(memory, power, name);
        this.monitor = monitor
    }
    charge(){
        let charge = this.power / (this.monitor * this.memory) *1000
        console.log(`charge is ${charge} hours`);
        return charge
    }
}
class UltraLaptop extends Laptop{
    constructor(memory, power, name, monitor, weight) {
        super(memory, power, name, monitor);
        this.weight = weight
    }
    turnOn() {
        let charge1 = this.charge()
        if(this.weight > 2 && charge1 < 4){
            console.log('Error');
        }
        else
            super.turnOn();

    }
}
class PK extends Computer{
    constructor(memory, power, name) {
        super(memory, power, name);
        this.FSP =  this.power * this.memory
    }
    startGame(name){

        console.log(`You are playing ${name} with ${this.FSP} FSP`);
    }
}
class GamePK extends PK{
    constructor(memory, power, name, FSP) {
        super(memory, power, name, FSP);
    }
    FSP = this.memory * this.power * 2
    startGame(name) {
        this.power *= 0.99
        if(this.power < 500 && this.memory < 8){
            console.log('Error');
        } else
            super.startGame(name);
    }
}
let hp = new Laptop(8, 2000, 'hp', 800)
let asus = new UltraLaptop(10, 2000, 'asus', 800, 3)
let samsung = new GamePK(9, 501, 'samsung')
console.log(hp);
hp.charge()
console.log(asus);
asus.turnOn()
samsung.startGame('contra-strike')