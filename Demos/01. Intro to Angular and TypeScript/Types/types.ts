let isOpen: boolean;
isOpen = true;

let decimal: number = 6;
let hexNumber: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let list: number[] = [1, 2, 3]; // Recommended
// let list: Array<number> = [1, 2, 3];

type UserData = {
    newName: string;
    newAge: number;
}

type SomeOtherData = {
    newName: string;
    otherName: number;
}

type Test = UserData | SomeOtherData;

const testType: Test = null;
testType.newName = "Test"
