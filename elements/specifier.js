const Node = require('./node');

class ConstraintSpecifier extends Node {
    constructor(context, constraint) {
        super("that");
        this.context = context;
        this.constraint = constraint;
    }

    getChilds() {
        return [this.context, this.constraint];
    }
}

class AttributSpecifier extends Node {

    constructor(parent, child) {
        super("of");
        this.context_parent = parent;
        this.context_child = child;
    }

    getChilds() {
        return [this.context_child, this.context_parent];
    }
}

module.exports = {
    ConstraintSpecifier,
    AttributSpecifier
};