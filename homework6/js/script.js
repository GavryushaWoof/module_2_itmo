//Задача 1
let a = {
    name: 'static',
    count: 0
};

function foo(obj, key, i) {
    let arr = [];
    for (let j = 0; j < i; j++) {
        arr[j] = {...obj };
        arr[j][key] += j;
    }
    return arr;
}
console.log(foo(a, 'count', 10));
//Задача 2

//Задача 3

//Задача 4

//Задача 5