const person = {
    firstname: 'Alan',
    lastname: 'Walker'
};

const welcome = function (city, country) {
    const message = `Welcome ${this.firstname} ${this.lastname} from ${city}, ${country}. Glad to see you here!`;
    console.log(message);
};

// Polyfill
Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function () {
        fn.call(context);
    };
}

// Execute myBind()
const welcomePerson = welcome.myBind(person);
welcomePerson();