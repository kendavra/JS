"use strict"
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let greeting = 'HELLO WORLD';
let placeholder = 'LOREM IPSUM';
let language = 'JAVASCRIPT IS COOL';

console.log(greeting.toLowerCase())
console.log(placeholder.toLowerCase())
console.log(language.toLowerCase())

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   ';
str4 = str4.trim();
console.log(str4);

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str5 = 'Я почував себе тут чужим, ніби все навколо було не для мене';
function stringToarray(str5) {
    return str5.split(' ');
}

console.log(stringToarray(str5))

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let string = numbers.map(number => {
        return number + '';
    }
)
console.log(string)


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [11,21,3];

function sortNums(array,direction) {
    if (direction === 'ascending'){
        return array.sort((a, b) => a - b);
    }
    else if (direction === 'descending'){
        return array.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))


// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================




let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let result = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));

console.log(result);


// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================


const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];


const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit : suit, value: value};
        if (suit === 'heart' || suit === 'diamond'){
            card.color = 'red'
        }else {
            card.color = 'black'
        }
        cards.push(card);
    }
}

console.log(cards)

// - знайти піковий туз
const aceOfSpades = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log("Піковий туз:", aceOfSpades);
// - всі шістки
const sixes  = cards.filter(card => card.value === '6');
console.log("Всі шістки:", sixes);
// - всі червоні карти
const red = cards.filter(card => card.color === 'red')
console.log("Всі червоні карти:", red);
// - всі буби
const diamonds = cards.filter(card => card.cardSuit === 'diamond');
console.log("Всі буби:", diamonds);
// - всі трефи від 9 та більше
const clubsFrom9 = cards.filter(card =>
    card.cardSuit === 'clubs' &&
    card.value !== '6' &&
    card.value !== '7' &&
    card.value !== '8'
);
console.log("Всі трефи від 9:", clubsFrom9);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================


const groupedCards = cards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') acc.spades.push(card);
    if (card.cardSuit === 'diamond') acc.diamonds.push(card);
    if (card.cardSuit === 'heart') acc.hearts.push(card);
    if (card.cardSuit === 'clubs') acc.clubs.push(card);

    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(groupedCards);

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const sassFind = coursesArray.filter(course => course.modules.includes('sass'));
console.log('Тут є sass', sassFind);

const dockerFind = coursesArray.filter(course => course.modules.includes('docker'));
console.log('Тут є docker', dockerFind);





