const Node = require('./node');

class Relation extends Node{

    constructor(name, left, right) {
        super(name);
        this.left = left;
        this.right = right;
    }
    getChilds() {
        return [this.left, this.right];
    }
}

class Match extends Relation {

    constructor(left, right) {
        super("match");
        this.left = left;
        this.right = right;
    }
}

class Have extends Relation {
    constructor(left, right) {
        super("have");
        this.left = left;
        this.right = right;
    }
}

class Equal extends Relation {
    constructor(left, right) {
        super("=");
        this.left = left;
        this.right = right;
    }
}

class LesserThan extends Relation {
    constructor(left, right) {
        super("<");
        this.left = left;
        this.right = right;
    }
}

class GreaterThan extends Relation {
    constructor(left, right) {
        super(">");
        this.left = left;
        this.right = right;
    }
}

class Before extends Relation {
    constructor(left, right) {
        super("before");
        this.left = left;
        this.right = right;
    }
}

class After extends Relation {
    constructor(left, right) {
        super("after");
        this.left = left;
        this.right = right;
    }
}

class In extends Relation {
    constructor(left, right) {
        super("in");
        this.left = left;
        this.right = right
    }
}

class Be extends Relation {
    constructor(left, right) {
        super('be');
        this.left = left;
        this.right = right;
    }
}

module.exports = {
    Have,
    Equal,
    LesserThan,
    GreaterThan,
    Before,
    After,
    Match,
    In,
    Be
};

