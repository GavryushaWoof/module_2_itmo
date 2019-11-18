//Задача 1
let month = +prompt('Введите номер месяца', '1');
switch (true) {
    case month == 12 || month == 1 && month == 2:
        alert('Зима');
        break;
    case month >= 3 && month <= 5:
        alert('Весна');
        break;
    case month >= 6 && month <= 8:
        alert('Лето');
        break;
    case month >= 9 && month <= 11:
        alert('Осень');
        break;
    default:
        alert('Некорректно введен номер месяца');
}

//Задача 2
let measure = +prompt('Выберете меру измерения: \n 1. Километр \n 2. Метр \n 3. Дециметр \n 4. Сантиметр \n 5. Миллиметр', '2');
let lenght = +prompt('Введите длину', '0');
switch (measure) {
    case 1:
        alert('Ваше значение ' + (lenght * 1000) + ' м');
        break;
    case 2:
        alert('Ваше значение ' + lenght + ' м');
        break;
    case 3:
        alert('Ваше значение ' + (lenght / 10) + ' м');
        break;
    case 4:
        alert('Ваше значение ' + (lenght / 100) + ' м');
        break;
    case 5:
        alert('Ваше значение ' + (lenght / 1000) + ' м');
        break;

}

//задача 3
let num = +prompt('Введите число', '0');
switch (true) {
    case num === 0:
        alert('Нулевое число');
        break;
    case num > 0 && num < 10:
        alert('Положительное однозначное число');
        break;
    case num > 9 && num < 100:
        alert('Положительное двузначное число');
        break;
    case num > 99 && num < 1000:
        alert('Положительное трехзначное число');
        break;
    case num < 0 && num > -10:
        alert('Отрицательное однозначное число');
        break;
    case num < -9 && num > -100:
        alert('Отрицательное двузначное число');
        break;
    case num < -99 && num > -1000:
        alert('Отрицательное трехзначное число');
        break;
}

//Задача 4
for (let i = 1; i <= 100; i++) {
    switch (true) {
        case i % 3 == 0 && i % 5 == 0:
            console.log('ThreeFive');
            break;
        case i % 3 == 0:
            console.log('Three');
            break;
        case i % 5 == 0:
            console.log('Five');
            break;
        default:
            console.log(i);
    }
}

//Задача 5
let year = +prompt('Введите год', '2000');
if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
    alert(year + ' - високосный год');
} else {
    alert(year + ' - невисокосный год');
}

//задача 6
// let plate = +prompt('Введите кол-во тарелок', '0');
// let detergents = +prompt('Введите кол-во моющего средства', '0');
// if (plate == 0 || detergents == 0) {
//     alert('Осталось ' + )
// }
// for () {

// }