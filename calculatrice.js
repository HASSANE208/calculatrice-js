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
<<<<<<< HEAD
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

=======

function puissance(base, exposant) {
return Math.pow(base, exposant);
// Ou : return base ** exposant;  (syntaxe moderne ES2016)
}
console.log('2^10 =', puissance(2, 10));    
// Attendu : 1024
console.log('3^3 =', puissance(3, 3));       
// Attendu : 27
>>>>>>> feature/puissance
