const users = [
    { name: 'Бенджамин', age: 63 },
    { name: 'Бронислав', age: 67 },
    { name: 'Богдан', age: 41 },
    { name: 'Борис', age: 52 },
    { name: 'Бронислав', age: 40 },
    { name: 'Бенджамин', age: 55 },
    { name: 'Богдан', age: 22 },
    { name: 'Богдан', age: 61 },
    { name: 'Булаг', age: 64 },
    { name: 'Булаг', age: 66 },
    { name: 'Бенджамин', age: 48 },
    { name: 'Богдан', age: 20 },
    { name: 'Богдан', age: 20 },
    { name: 'Бенджамин', age: 50 },
    { name: 'Булат', age: 29 },
    { name: 'Булаг', age: 58 },
    { name: 'Бенджамин', age: 62 },
    { name: 'Бенджамин', age: 38 },
    { name: 'Булат', age: 37 },
    { name: 'Борис', age: 25 },
    { name: 'Богдан', age: 51 },
    { name: 'Бенджамин', age: 33 },
    { name: 'Булат', age: 40 },
    { name: 'Булаг', age: 37 },
    { name: 'Булаг', age: 58 },
    { name: 'Бронислав', age: 52 },
    { name: 'Булат', age: 48 },
    { name: 'Бенджамин', age: 60 },
    { name: 'Богдан', age: 27 },
    { name: 'Булаг', age: 45 },
    { name: 'Бахрам', age: 58 },
    { name: 'Бенджамин', age: 66 },
    { name: 'Бахрам', age: 32 },
    { name: 'Бахрам', age: 42 },
    { name: 'Бенджамин', age: 23 },
    { name: 'Борислав', age: 46 },
    { name: 'Бронислав', age: 20 },
    { name: 'Борис', age: 34 },
    { name: 'Богдан', age: 33 },
    { name: 'Борислав', age: 30 },
    { name: 'Богдан', age: 51 },
    { name: 'Булаг', age: 41 },
    { name: 'Борислав', age: 35 },
    { name: 'Борис', age: 60 },
    { name: 'Бенджамин', age: 64 },
    { name: 'Булаг', age: 63 },
    { name: 'Булат', age: 59 },
    { name: 'Булат', age: 20 },
    { name: 'Булаг', age: 60 },
    { name: 'Бенджамин', age: 47 }
]

function SortByAge(users) {
    let newobg = users;
    x = 0;
    let n = 0;
    while (true) {
        n = 0;
        for (let i = 0; i + 1 < newobg.length; i++) {
            if (newobg[i].age > newobg[i + 1].age) {
                x = newobg[i + 1];
                newobg[i + 1] = newobg[i];
                newobg[i] = x;
                n++;
            }
        }
        if (n == 0) { break; }
    }
    //for (let i = 0; i < newobg.length; i++) {
    // console.log(JSON.stringify(newobg[i]));
    // }
    return newobg;
}
console.log(JSON.stringify(SortByAge(users)));