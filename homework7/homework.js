// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const usersArray = [
    new User(4554, "John", "Doe", "john.doe@example.com", "123-456-7890"),
    new User(23, "Jane", "Smith", "jane.smith@example.com", "123-456-7891"),
    new User(254, "Alice", "Johnson", "alice.johnson@example.com", "123-456-7892"),
    new User(11, "Bob", "Brown", "bob.brown@example.com", "123-456-7893"),
    new User(5, "Charlie", "Davis", "charlie.davis@example.com", "123-456-7894"),
    new User(87654, "David", "Miller", "david.miller@example.com", "123-456-7895"),
    new User(34, "Eva", "Wilson", "eva.wilson@example.com", "123-456-7896"),
    new User(8, "Frank", "Moore", "frank.moore@example.com", "123-456-7897"),
    new User(1, "Grace", "Taylor", "grace.taylor@example.com", "123-456-7898"),
    new User(1012, "Hannah", "Anderson", "hannah.anderson@example.com", "123-456-7899"),
];

console.log(usersArray);


// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//     залишивши тільки об'єкти з парними id (filter)

let filter = usersArray
    .filter(value => value.id % 2 === 0);

console.log(filter);


// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = usersArray
    .sort((user1, user2) => user1.id - user2.id);

console.log(sort);


// #nkMXISv
// - створити конструктор для
// об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client



function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(35, 'Петро', 'Петренко', 'petro@gmail.com', '0567876543', ['чай', 'молоко']),
    new Client(36, 'Олександр', 'Іваненко', 'oleksandr@gmail.com', '0561234567', ['кава']),
    new Client(37, 'Марія', 'Сидорова', 'maria@gmail.com', '0569876543', ['вода', 'чай']),
    new Client(38, 'Олена', 'Коваленко', 'olena@gmail.com', '0561122334', ['сир', 'хліб', 'сметана', 'гречка', 'рис']),
    new Client(39, 'Сергій', 'Павленко', 'sergiy@gmail.com', '0565566778', ['макарони', 'соус']),
    new Client(40, 'Ірина', 'Новак', 'irina@gmail.com', '0562233445', ['фрукти', 'масло','овочі']),
    new Client(41, 'Володимир', 'Козак', 'volodymyr@gmail.com', '0563344556', ['молоко', 'масло']),
    new Client(42, 'Анна', 'Бойко', 'anna@gmail.com', '0564455667', ['яйця', 'борошно', 'шоколад', 'варення', 'пельмені', 'тунець']),
    new Client(43, 'Михайло', 'Гончар', 'mykhailo@gmail.com', '0565566778', ['чай', 'цукор']),
    new Client(44, 'Олександра', 'Лисенко', 'oleksandra@gmail.com', '0566677889', ['чай','молоко','кава', 'печиво'])
];

console.log(clients);



// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort2 = clients
    .sort((u1, u2) => u1.order.length - u2.order.length);
console.log(sort2);

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }

}


const myCar = new Car('Model S', 'Tesla', 2020, 250, 0);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2021);
myCar.addDriver({ name: 'Іван', age: 30 });

console.log(myCar);




// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarNew {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(key, this[key]);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const myCarNew = new CarNew('7 Series', 'BMW', 2024, 250, 3);
myCarNew.drive();
myCarNew.info();
myCarNew.increaseMaxSpeed(10);
myCarNew.changeYear(2019);
myCarNew.addDriver({ name: 'Катя', age: 19 });

console.log(myCarNew);


// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const cinderellas = [
    new Cinderella('Anna', 19, 36.5),
    new Cinderella('Maria', 21, 37.0),
    new Cinderella('Sophia', 18, 35.5),
    new Cinderella('Olena', 22, 38.0),
    new Cinderella('Victoria', 20, 34.0),
    new Cinderella('Diana', 23, 39.5),
    new Cinderella('Natalia', 19, 37.5),
    new Cinderella('Yulia', 24, 40.0),
    new Cinderella('Tanya', 22, 38.5),
    new Cinderella('Iryna', 25, 39.0),
];

const prince = new Prince('Nazar', 25, 34)
;

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        console.log('Знайдена Попелюшка:', cinderella);
    }
}


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const findSize = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);
console.log('Знову знайдена', findSize);



// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter


Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
    
}

const arr = [55, 34, 14, 93, 99];

arr.myForEach((element, index) => {
    console.log(`Елемент: ${element}, Індекс: ${index}`);
});





Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const arrFilter = [1, 2, 3, 4, 5];

const filtered = arrFilter.myFilter((item) => item > 3);

console.log(filtered);











