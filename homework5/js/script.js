// Задача 1
arr1 = [1, 5];
arr2 = arr1;
arr3 = arr1.slice();

function test(arr, arr2) {
    return arr == arr2;
}
console.log(test(arr1, arr2));
console.log(test(arr1, arr3));

//Задача 2
function range(a, b, i = 1) {
    let arr = [];
    arr[0] = a;
    let sum = a;
    for (let j = 1; sum < b - i; j++) {
        sum += i;
        arr[j] = sum;
    }
    return arr;
}
console.log(range(1, 10, 2));
//задача 3
let student = {
    'Имя': 'Иван',
    'Фамилия': 'Иванов',
    'Возраст': '21',
    'Интересы': ['Компьютерные игры', ' аниме'],
    'Место обучения': 'ИТМО',
};

function info(arr) {
    for (let key in arr) {
        console.log(`${key} : ${arr[key]}`);
    }
}
info(student);
//Задача 4