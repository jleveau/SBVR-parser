const Node = require('./node');

module.exports = class BusinessRule extends Node {

    constructor (context, modality, constraint) {
        super("rule");
        this.context = context;
        this.modality = modality;
        this.constraint = constraint;
    }

    getChilds() {
        return [this.context, this.modality, this.constraint];
    }

};