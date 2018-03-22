class Quantifier {

}

class Each extends Quantifier {
    constructor() {
        super();
        this.name = "each";
    }
}

class Some extends Quantifier {
    constructor() {
        super();
        this.name = "some";
    }}

class No extends Quantifier {
    constructor() {
        super();
        this.name = "no";
    }}

class A extends Quantifier {
    constructor() {
        super();
        this.name = "a";
    }}

module.exports = {
    Each,
    Some,
    No,
    A
};