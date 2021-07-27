interface IUserNewData {
    newName: string;
    newAge: number;
}

class InterfacePerson {
    constructor(public name: string, private age: number) {
        this.name = name
        this.age = age
    }

    setData(newData: IUserNewData) {
        this.name = newData.newName;
        this.age = newData.newAge;
    }
}

const interfacePerson = new InterfacePerson("Ivan", 30);
console.log(`Person: ${interfacePerson.name}, ${interfacePerson.getAge()}`);
(interfacePerson as any).age = 10;
let newData: IUserNewData = { newAge: 25, newName: 'Pesho'}
interfacePerson.setData(newData);