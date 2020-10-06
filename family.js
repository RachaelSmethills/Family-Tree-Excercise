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

const generation1 = [rachael, charlotte],
    generation2 = [jonathan, catherine],
    generation3 = [ian, nan, harry, joan];

// Get grandparents names of Gen 1
// console.log(generation1.map(
//     x => x.parents.map(
//         y => y.childOf())));

// console.log(generation1, generation2, generation3);

module.exports = {
    generation1,
    generation2,
    generation3
}