var Hrushi;
Hrushi = {
    name: 'Hrushi',
    id: 19990,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
Hrushi.greet('Welcome to the compnay MR.' + Hrushi.name + 'Your employee id is ' + Hrushi.id);
