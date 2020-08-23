const person1 = {
    firstname: 'Jonh',
    lastname: 'Smith'
}

const person2 = {
    firstname: 'Alan',
    lastname: 'Walker'
}

const welcome = function (city, country) {
    const message = `Welcome ${this.firstname} ${this.lastname} from ${city}, ${country}. Glad to see you here!`;
    console.log(message);
}

// Call
console.log('\nExample for "call":')
welcome.call(person1, 'Mumbai', 'India');
welcome.call(person2, 'New York', 'US');

// apply
console.log('\nExample for "apply":')
welcome.apply(person1, ['Mumbai', 'India']);
welcome.apply(person2, ['New York', 'US']);
