enum UserRole {
    Admin, // Default Value = 0
    Client // Default Value = 1 
}

class EnumPerson {
    constructor(public name: string, private age: number, public role: UserRole) {
    }
}

const enumPerson = new EnumPerson("Ivan", 30, UserRole.Admin);
console.log(`Person: ${enumPerson.name}, ${enumPerson.getAge()}`);
(enumPerson as any).age = 10;
let role = enumPerson.role
let clientRole = UserRole.Client
if (role == clientRole) {
    console.log("roles matchings")
}