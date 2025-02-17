let sum = (arr) => {
    let allSum = 0;
    for (const arrElement of arr) {
        allSum = allSum + arrElement;
    }

    return allSum;
}

console.log(sum([1000, 37, 93878, 762]))