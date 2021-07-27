export default interface StringValidator {
    isAcceptable(s: string): boolean;
}

class ZipCodeValidator {
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };