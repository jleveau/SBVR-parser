const Node = require('./node');

module.exports =
    class Term extends Node {
        constructor(name) {
            super(name);
        }

        getChilds() {
            return [];
        }
    };