module.exports = class BusinessRule {

    constructor (context, modality, constraint) {
        this.context = context;
        this.modality = modality;
        this.constraint = constraint;
    }
};