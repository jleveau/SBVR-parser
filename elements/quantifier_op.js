const Node = require('./node');

class Each extends Node {
    constructor(context) {
        super("each");
        this.context = context;
    }

    getChilds() {
        return [this.context];
    }
}

class Some extends Node {
    constructor(context) {
        super("some");
        this.context = context;
    }

    getChilds() {
        return [this.context];
    }
}


class No extends Node {
    constructor(context) {
        super("no");
        this.context = context;
    }

    getChilds() {
        return [this.context];
    }
}

class A extends Node {
    constructor(context) {
        super("a");
        this.context = context;
    }

    getChilds() {
        return [this.context];
    }
}

module.exports = {
    Each,
    Some,
    No,
    A
};