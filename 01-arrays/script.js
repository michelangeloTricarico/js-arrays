const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]; //for 4th theacher in the list index == 3 because index start to 0
console.log(fourthTeacher); // to print variable

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick"; // Carlo is the 5th teacher in the list previously, new value is Patrick
console.log(teachers); // To check that Carlo is out of list and Patrick is in 5th position

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length-1]; // to take last place in the list
console.log(lastTeacher); // to print last value in the list
teachers.pop(); // to remove last element in the list
console.log(teachers); // print list without last element 

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0]; // to save first element in a variable
console.log(firstTeacher); // to print first element
teachers.shift(); // to remove first element in the list
console.log(teachers); // print list without first element 

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa"); // to add a teacher at the end of list
console.log(teachers); // print list to check

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah"); // to add a teacher at the start of list
console.log(teachers); // print list to check

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis'); // to take Lewis index in the list
console.log(lewisIndex) // to print index

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;