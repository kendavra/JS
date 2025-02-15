// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий


function list(t) {
    document.write(`
        <ul>
        <li>${t}</li>
        <li>${t}</li>
        <li>${t}</li>
        </ul>
        `)
}

list('also some text')