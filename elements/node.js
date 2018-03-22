class Node {

    constructor(name) {
        this.name = name;
    }

    getChild() {
        return [];
    }

    toString() {
        return this.name;
    }

}

module.exports = Node;