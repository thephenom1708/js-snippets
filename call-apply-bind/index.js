const person1 = {
    firstname: 'Jonh',
    lastname: 'Smith',
    fullname: function () {
        return `${this.firstname} ${this.lastname}`;
    }
};

const person2 = {
    firstname: 'Alan',
    lastname: 'Walker'
};

const welcome = function (city, country) {
    // Borrow function from person1
    const fullname = person1.fullname.call(this);

    const message = `Welcome ${fullname} from ${city}, ${country}. Glad to see you here!`;
    console.log(message);
};

// Call
console.log('\nExample for "call":');
welcome.call(person1, 'Mumbai', 'India');
welcome.call(person2, 'New York', 'US');

// apply
console.log('\nExample for "apply":');
welcome.apply(person1, ['Mumbai', 'India']);
welcome.apply(person2, ['New York', 'US']);

// bind
console.log('\nExample for "bind":');
const welcomePerson1 = welcome.bind(person1, 'Mumbai', 'India');
const welcomePerson2 = welcome.bind(person2, 'New York', 'US');

welcomePerson1();
welcomePerson2();
