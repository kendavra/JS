
function primitive(arrayPrimitives) {
    for (const arrayPrimitive of arrayPrimitives) {
        document.write(
            `
            <li>${arrayPrimitive}</li>
            `
        )
    }
}

primitive([1,3,true,'text', 100500, 'lion'])