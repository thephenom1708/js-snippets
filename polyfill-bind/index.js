const person = {
    firstname: 'Alan',
    lastname: 'Walker'
};

const welcome = function (city, state, country) {
    const message = `Welcome ${this.firstname} ${this.lastname} from ${city}, ${state}, ${country}. Glad to see you here!`;
    console.log(message);
};

// Polyfill
Function.prototype.myBind = function (context, ...args1) {
    const fn = this;
    return function (...args2) {
        fn.apply(context, [...args1, ...args2]);
        // This can also be used
        // fn.call(context, ...args1, ...args2);
    };
}

// Execute myBind()
const welcomePerson = welcome.myBind(person, 'Mumbai', 'Maharashtra');
welcomePerson('India');
