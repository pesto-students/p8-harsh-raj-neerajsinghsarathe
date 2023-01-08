
function example_call(a,b) {
    this.a = a;
    this.b = b;

    return this.a + this.b + this.c ;
}

//* Example to implement bind function

const bind = example_call.bind({c: 30},10, 20);
console.log(bind());


//* Example to implement call function

const call = example_call.call({c: 30},10, 20)
console.log(call);


//* Example to implement apply function
const apply = example_call.apply({c: 30},[10, 20])
console.log(apply);
