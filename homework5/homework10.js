let minValue = (numbers) => {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(minValue([98, 7382, 72, 2, 34]));
