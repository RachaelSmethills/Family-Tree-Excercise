const {
    generation1,
    generation2,
    generation3
} = require('./family');
const person = require('./person')

describe('family tree', () => {
    
    describe('Generation 1', () => {
        test('has two people', () => {
            expect(generation1.length).toEqual(2)
        });

        console.log('every person should have two parents');
        generation1.map(person => {
            test(`${person.FirstName} has two parents`, () => {
                expect(person.parents).not.toEqual(undefined);
                expect(person.parents.length).toEqual(2);
            });

            test(`can access the grandparents of ${person.FirstName}`, () => {
                person.parents.map(parent => {
                    expect(parent.parents.length).toEqual(2);
                    console.log(`${person.FirstName} grandparents are: `, parent.parents);
                });
            });

        });
    })

    describe('Generation 2', () => {
        test('has two people', () => {
            expect(generation2.length).toEqual(2)
        });

        console.log('every person should have two parents');
        generation2.map(person => {
            test(`${person.FirstName} has two parents`, () => {
                expect(person.parents).not.toEqual(undefined);
                expect(person.parents.length).toEqual(2);
            });

            test(`${person.FirstName} has no grandparents listed`, () => {
                person.parents.map(parent => {
                    expect(parent.parents.length).toEqual(0);
                    console.log(`${person.FirstName} grandparents are: `, parent.parents);
                });
            });

        });
    })

    describe('Generation 3', () => {
        test('has two people', () => {
            expect(generation3.length).toEqual(4)
        });

        console.log('No Parents listed');
        generation3.map(person => {
            test(`${person.FirstName} has no parents listed`, () => {
                expect(person.parents).not.toEqual(undefined);
                expect(person.parents.length).toEqual(0);
            });

            test(`${person.FirstName} has no grandparents listed`, () => {
                person.parents.map(parent => {
                    expect(parent.parents.length).toEqual(0);
                    console.log(`${person.FirstName} grandparents are: `, parent.parents);
                });
            });

        });
    })

})