// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з ' +
// 'наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


function userCards(users) {
    for (const user of users) {
        document.write(`
        <div>${user.id} ${user.age} ${user.status}</div>
        `
        )
    }
}

userCards([
    {id: 1, age: 41, status: true},
    {id: 2, age: 29, status: false},
    {id: 3, age: 18, status: false}
])