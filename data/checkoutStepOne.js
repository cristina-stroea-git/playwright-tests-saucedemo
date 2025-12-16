module.exports = [
  {
    scenario: 'First Name is required',
    firstName: '',
    lastName: 'Stroea',
    zip: '12345',
    error: 'Error: First Name is required'
  },
  {
    scenario: 'Last Name is required',
    firstName: 'Cristina',
    lastName: '',
    zip: '12345',
    error: 'Error: Last Name is required'
  },
  {
    scenario: 'Postal Code is required',
    firstName: 'Cristina',
    lastName: 'Stroea',
    zip: '',
    error: 'Error: Postal Code is required'
  }
];
