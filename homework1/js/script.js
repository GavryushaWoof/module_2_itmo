//Задача 1
function getRemainder(a, d) {
    return a % d;
}
let field = 10 * 100;
let area = 15 * 25;
console.log(getRemainder(field, area));

//Задача 2
function subtraction(a, d) {
    return a - d;
}
let bigOval = 15 * 100;
let smallOval = 600;
console.log(subtraction(bigOval, smallOval));

//Задача 3
let a = +prompt("Введите первое число?", "0");
let b = +prompt("Введите второе число?", "0");
let d = +prompt("Введите третье число?", "0");
console.log(Math.min(a, b, d));

//Задача 4
function h(m, n, j) {
    let k = m - j;
    let r = n - j;
    if (k < 0) {
        k = -k;
    }
    if (r < 0) {
        r = -r;
    }
    return (k >= r) ? console.log(n) : console.log(m);
}
let m = +prompt("Введите первое число?", "0");
let n = +prompt("Введите второе число?", "0");
let j = 10;
h(m, n, j);

//Задача 5
// let x = +prompt("Введите первое число?", "0");
// let y = +prompt("Введите второе число?", "0");
// let z = +prompt("Введите третье число?", "0");