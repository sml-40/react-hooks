const user = {
  firstName: 'Robin',
  lastName: 'Wieruch',
  pet: {
    petName: 'Mia',
    type: 'dog'
  },
};

//** with nested object destructuring */
const { firstName, lastName, pet: { petName, type } } = user;

console.log(firstName, lastName, petName, type); // Robin Wieruch Mia dog

//** rest operator */
// const { firstName, lastName, ...pet } = user;


