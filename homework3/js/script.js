//Задача 1
let A = [12, 4, 3, 10, 1, 20],
    B = [-3, -7, -100, -33],
    C = A.concat(B);
console.log(C);
C = B.concat(A);
console.log(C);
//Задача 2


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