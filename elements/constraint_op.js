const Node = require('./node');

class And extends Node {
    constructor(left, right) {
        super("and");
        this.left = left;
        this.right = right;
    }

    getChilds() {
        return [this.left, this.right];
    }
}

class Or extends Node {
    constructor(left, right) {
        super('or');
        this.left = left;
        this.right = right;
    }

    getChilds() {
        return [this.left, this.right];
    }
}

class Not extends Node {
    constructor(expr) {
        super('not');
        this.expr = expr;
    }

    getChilds() {
        return [this.expr];
    }

}

module.exports = {
    And,
    Or,
    Not
};
