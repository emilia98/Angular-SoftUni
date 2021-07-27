/*
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const person = new Person("Ivan", 30);
console.log(`Person: ${person.name}, ${person.age}`);
*/

/*
class Person {
    constructor(public name: string, public age: number) {
    }
}

const person = new Person("Ivan", 30);
console.log(`Person: ${person.name}, ${person.age}`);
*/

class Person {
    constructor(public name: string, private age: number) {
        this.name = name
        this.age = age
    }

    getAge() {
        return this.age;
    }

    /*
    getName(): void {
        return this.name;
    }
    */

    setData(newData: { newName: string, newAge: number }) {
        this.name = newData.newName;
        this.age = newData.newAge;
    }
}

const person = new Person("Ivan", 30);
console.log(`Person: ${person.name}, ${person.getAge()}`);
(person as any).age = 10;
person.setData({ newAge: 25, newName: 'Pesho'});