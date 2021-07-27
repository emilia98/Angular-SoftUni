function identity<T>(arg: T): T {
    return arg;
}

const numIdentity = identity(1);
const strIdentity = identity("str");

console.log(`${numIdentity}, ${typeof numIdentity}`);
console.log(`${strIdentity}, ${typeof strIdentity}`);