const person = require('./person')

const rachael = new person('Rachael', 'Smethills'),
    charlotte = new person('Charlotte', 'Smethills'),
    catherine = new person('Catherine','Smethills'),
    jonathan = new person ('Jonathan','Smethills'),
    joan = new person ('Joan', 'Barron'),
    harry = new person ('Harry','Barron'),
    nan = new person ('Joan', 'Nicholas'),
    ian = new person ('Ian', 'Nicholas');

rachael.parents.push(jonathan);
rachael.parents.push(catherine);

charlotte.parents.push(jonathan);
charlotte.parents.push(catherine);

jonathan.parents.push(ian);
jonathan.parents.push(nan);

catherine.parents.push(harry);
catherine.parents.push(joan);


console.log(catherine.childOf());