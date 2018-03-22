class Specifier {
}

class ConstraintSpecifier extends Specifier {
    constructor(constraint) {
        super();
        this.constraint = constraint;
    }
}

class AttributSpecifier extends Specifier {
    constructor(concept) {
        super();
        this.concept = concept;
    }
}

module.exports = {
    ConstraintSpecifier,
    AttributSpecifier
};