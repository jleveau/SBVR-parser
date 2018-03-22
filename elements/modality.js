const Node = require('./node');

class Modality extends Node {
    constructor(name) {
        super(name);
    }

    getChilds() {
        return [];
    }
}

class Obligation extends Modality {
    constructor() {
        super("must");
    }
}

module.exports = {
    Obligation
};