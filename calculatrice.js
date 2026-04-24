// calculatrice.js
// Calculatrice Avancée v2.0 - Développée par l'équipe A

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

// Historique des opérations
const historique = [];
function ajouterAHistorique(operation, resultat) {
const entree = {
operation: operation,
resultat: resultat,
date: new Date().toLocaleString()
};
historique.push(entree);
}
function afficherHistorique() {
console.log('=== Historique des calculs ===');
historique.forEach((entree, index) => {
});
}
console.log(`${index + 1}. ${entree.operation} = ${entree.resultat}`);
// Exemple d'utilisation
ajouterAHistorique('5 + 3', additionner(5, 3));
ajouterAHistorique('10 - 4', soustraire(10, 4));
afficherHistorique()

function puissance(base, exposant) {
return Math.pow(base, exposant);
// Ou : return base ** exposant;  (syntaxe moderne ES2016)
}
console.log('2^10 =', puissance(2, 10));    
// Attendu : 1024
console.log('3^3 =', puissance(3, 3));       
// Attendu : 27

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

function puissance(base, exposant) {
return Math.pow(base, exposant);
// Ou : return base ** exposant;  (syntaxe moderne ES2016)
}
console.log('2^10 =', puissance(2, 10));    
// Attendu : 1024
console.log('3^3 =', puissance(3, 3));       
// Attendu : 27

