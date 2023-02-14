const Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.age = age;
    this.name = name;
}
function Teacher() {
    Person.call(this);
};

Teacher.prototype.teach = function(subject) {
    this.subject = subject;
    return `${this.name} is now teaching ${this.subject}`;
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);
const professor = new Teacher();

professor.initialize("Neeraj", 24);
console.log(professor.teach('JavaScript'));