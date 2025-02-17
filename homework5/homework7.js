
let createList = (someText, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${someText}</li>`);
    }
    document.write('</ul>');
}

createList('Привіт, світ!', 5);