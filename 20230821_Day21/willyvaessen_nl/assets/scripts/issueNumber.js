// Declaring 3 variables to work with
// Declaring my birthdate
const birthday = new Date('1978-10-01T00:46:00');
// Declaring today's date
const today = new Date();
// Declaring the difference between the former 2 dates.
const volume = ((today - birthday) / 1000 / 60 / 60 / 24);
console.log((volume.toFixed()-1))