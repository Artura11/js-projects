const fullName = {
    name: 'artur',
    last_name: 'brener',
    fname: function () {
        console.log('my full name', this.name, this.last_name);
    }
};

fullName.fname();

export default fullName;