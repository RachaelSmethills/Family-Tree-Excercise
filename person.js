class person {

    parents = [];

    constructor(firstName, surName) {
        this.FirstName = firstName;
        this.Surname = surName;
    }

    childOf() {
        return this.parents.map(
            parent => `${parent.FirstName} ${parent.Surname}`).join(' & ') ||
            'Parents Unknown';
    }

}

module.exports = person;
