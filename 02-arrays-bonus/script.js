const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i=0; i<teachers.length; i++){  // use origil length to cycle from 0 to list length
  reversedTeachers.unshift(teachers[i]); // to reverse list use unshift
  //console.log(reversedTeachers[j])
}
console.log(reversedTeachers); // print reversed list

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []; // list initialization
for (let i=0; i<teachers.length; i++){ // use for cyle to check elements in list
  if(teachers[i].length>=5){ // check for every element if the length is >=5, if yes push in new list
    longNames.push(teachers[i]);
  }
}
console.log(longNames); // print result

// 3. Rimuovi 'Ed' dall'array teachers
const Ed_index = teachers.indexOf("Ed"); //use indexOf to find index to remove
for (let i=0; i<teachers.length; i++){ // use for cycle to check elements in list
  if (i>Ed_index){ // when i is higher than index to remove, shift other element
    teachers[i-1]=teachers[i] 
  }
}
teachers.pop() //remove last element
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;