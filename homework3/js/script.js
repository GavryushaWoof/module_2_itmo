//Задача 1
let A = [12, 4, 3, 10, 1, 20],
    B = [-3, -7, -100, -33],
    C = A.concat(B);
console.log(C);
C = B.concat(A);
console.log(C);
//Задача 2
let area = [null, null, null, null, null, null, null, null, null];
for (let i = 0; i < area.length; i++) {
    sim = prompt('Введите 0 для нолика или 1 для крестика');
    if (sim === '0') {
        area[i] = '<td>0</td>';
    } else if (sim === '1') {
        area[i] = '<td>X</td>';
    } else {
        area[i] = '<td></td>';
    }
    if (i == 0 || i == 3 || i == 6) {
        area[i] = `<tr>${area[i]}`;
    } else if (i == 2 || i == 5 || i == 8) {
        area[i] = `${area[i]}</tr>`;
    }
}
document.write(`<table>${area.join('')}</table>`)
    //задача 3
let G = [12, 4, 3, 10, 1, 20],
    min = G[0],
    max = G[0],
    inMax = 0,
    inMin = 0;
for (let i = 1; i < G.length; i++) {
    if (G[i] > max) {
        max = G[i];
        inMax = i;
    } else if (min > G[i]) {
        min = G[i];
        inMin = i;
    }
    if (i == G.length - 1) {
        console.log(min, max);
        G.splice(inMax, 1);
        G.splice(inMin, 1);
        console.log(G);
    }
}
//Задача 4