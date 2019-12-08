//Задача 1
let str = prompt('Введите число', '');
let rez = +str + +str;
if (!isNaN(rez)) {
    console.log(rez);
} else {
    console.log('Введено не число');
}
//Задача 2
let str2 = prompt('Введите слово', '');
let sim = prompt('Введите символ', '');
let reg = new RegExp(sim, 'ig');
console.log(str2.replace(reg, sim + sim));

//задача 3
let password = prompt('Введите пароль', '');
let reg = /(.*[a-z][A-Z])+(.*\d){2,}(.*\!|\$|\#|\%)+/;
if (reg.test(password) && password.length >= 9) {
    console.log('Верный пароль');
} else {
    console.log('Неверный пароль');
}
//Задача 4