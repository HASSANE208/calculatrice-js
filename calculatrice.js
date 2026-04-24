// calculatrice.js
// Calculatrice simple en JavaScript

function additionner(a, b) { return a + b; }
function soustraire(a, b) { return a - b; }
function multiplier(a, b) { return a * b; }
function diviser(a, b) {
    if (b === 0) { throw new Error('Division par zéro impossible !'); }
    return a / b;
}

console.log('5 + 3 =', additionner(5, 3));
console.log('10 - 4 =', soustraire(10, 4));
console.log('6 x 7 =', multiplier(6, 7));
console.log('15 / 3 =', diviser(15, 3));


function racineCarree(n) {
if (n < 0) {
throw new Error('Impossible : racine carrée d un nombre négatif !');
}
return Math.sqrt(n);
}
console.log('√16 =', racineCarree(16));    
// Attendu : 4
console.log('√2 ≈', racineCarree(2));      
// Attendu : 1.4142...
// Ajouter cette fonction à calculatrice.js
function modulo(a, b) {
    if (b === 0) {
        throw new Error('Modulo par zéro impossible !');
    }
    return a % b;
}
// Tester la fonction
console.log('10 % 3 =', modulo(10, 3));   // Attendu : 1
console.log('15 % 4 =', modulo(15, 4));   // Attendu :

