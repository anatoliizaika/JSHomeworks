const person = {
    firstName: "Igor",
    lastName: "Ivanov",
    age: 20
};

person.email = "igor.ivanov@gmail.com";
delete person.age;

console.log(person);