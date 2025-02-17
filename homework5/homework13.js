let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let curr = currencyValues;
    for (const currencyElement of curr) {
        if (currencyElement.currency === exchangeCurrency){
            curr = currencyElement;

            let result = sumUAH /curr.value;
            return result;
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))