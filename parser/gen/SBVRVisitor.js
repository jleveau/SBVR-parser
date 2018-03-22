// Generated from C:/Users/jleveau/WebstormProjects/sbvrParser/parser/grammar\SBVR.g4 by ANTLR 4.7
// jshint ignore: start
const antlr4 = require('antlr4/index');
const BusinessRule = require('../../elements/businessRule');
const Modality = require('../../elements/modality');
const Quantifiers = require('../../elements/quantifier_op');
const Specifiers = require('../../elements/specifier');
const Term = require('../../elements/term');
const Constraints = require('../../elements/constraint_op');
const Relations = require('../../elements/relation');

// This class defines a complete generic visitor for a parse tree produced by SBVRParser.

function SBVRVisitor() {
    antlr4.tree.ParseTreeVisitor.call(this);
    return this;
}

SBVRVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SBVRVisitor.prototype.constructor = SBVRVisitor;

// Visit a parse tree produced by SBVRParser#regex.
SBVRVisitor.prototype.visitRegex = function (ctx, left, right) {
    return new Term(ctx.getText());
};

// Visit a parse tree produced by SBVRParser#date_value.
SBVRVisitor.prototype.visitDate_value = function (ctx, left, right) {
    return new Term(ctx.getText());
};

// Visit a parse tree produced by SBVRParser#numeric_value.
SBVRVisitor.prototype.visitNumeric_value = function (ctx, left, right) {
    return new Term(ctx.getText());
};


// Visit a parse tree produced by SBVRParser#boolean_value.
SBVRVisitor.prototype.visitBoolean_value = function (ctx, left, right) {
    return new Term(ctx.getText());
};


// Visit a parse tree produced by SBVRParser#is_in.
SBVRVisitor.prototype.visitIs_in = function (ctx, left, right) {
    return new Relations.In(left, right)
};

// Visit a parse tree produced by SBVRParser#be.
SBVRVisitor.prototype.visitBe = function (ctx, left, right) {
    return new Relations.Be(left, right)
};

// Visit a parse tree produced by SBVRParser#matches.
SBVRVisitor.prototype.visitMatches = function (ctx, left, right) {
    return new Relations.Match(left, right)
};


// Visit a parse tree produced by SBVRParser#have.
SBVRVisitor.prototype.visitHave = function (ctx, left, right) {
    return new Relations.Have(left, right)
};

// Visit a parse tree produced by SBVRParser#equal.
SBVRVisitor.prototype.visitEqual = function (ctx, left, right) {
    return new Relations.Equal(left, right)
};

// Visit a parse tree produced by SBVRParser#lesser_than.
SBVRVisitor.prototype.visitLesser_than = function (ctx, left, right) {
    return new Relations.LesserThan(left, right)
};


// Visit a parse tree produced by SBVRParser#greater_than.
SBVRVisitor.prototype.visitGreater_than = function (ctx, left, right) {
    return new Relations.GreaterThan(left, right)
};


// Visit a parse tree produced by SBVRParser#before.
SBVRVisitor.prototype.visitBefore = function (ctx, left, right) {
    return new Relations.Before(left, right)
};

// Visit a parse tree produced by SBVRParser#after.
SBVRVisitor.prototype.visitAfter = function (ctx, left, right) {
    return new Relations.After(left, right)
};


// Visit a parse tree produced by SBVRParser#and.
SBVRVisitor.prototype.visitAnd = function (ctx, left, right) {
    return new Constraints.And(left, right)
};


// Visit a parse tree produced by SBVRParser#or.
SBVRVisitor.prototype.visitOr = function (ctx, left, right) {
    return new Constraints.Or(left, right);
};


// Visit a parse tree produced by SBVRParser#not.
SBVRVisitor.prototype.visitNot = function (ctx, constraint) {
    return new Constraints.Not(constraint);
};


// Visit a parse tree produced by SBVRParser#binary_logical_op.
SBVRVisitor.prototype.visitBinary_logical_op = function (ctx, left, right) {
    if (ctx.or()) {
        return this.visitOr(ctx.or(), left, right);
    }
    if (ctx.and()) {
        return this.visitAnd(ctx.and(), left, right);
    }
};


// Visit a parse tree produced by SBVRParser#unary_logical_op.
SBVRVisitor.prototype.visitUnary_logical_op = function (ctx, constraint) {
    if (ctx.not()) {
        return this.visitNot(ctx.not(), constraint);
    }
};


// Visit a parse tree produced by SBVRParser#constraint_operator.
SBVRVisitor.prototype.visitConstraint_operator = function (ctx, context_left, context_right) {
    if (ctx.have()) {
        return this.visitHave(ctx.have(), context_left, context_right);
    }
    if (ctx.matches()) {
        return this.visitMatch(ctx.matches(), context_left, context_right);
    }
    if (ctx.equal()) {
        return this.visitEqual(ctx.equal(), context_left, context_right);
    }
    if (ctx.lesser_than()) {
        return this.visitLesser_than(ctx.lesser_than(), context_left, context_right);
    }
    if (ctx.greater_than()){
        return this.visitGreater_than(ctx.greater_than(), context_left, context_right);
    }
    if (ctx.before()) {
        return this.visitBefore(ctx.before(), context_left, context_right);
    }
    if (ctx.after()) {
        return this.visitAfter(ctx.after(), context_left, context_right);
    }
    if (ctx.is_in()) {
        return this.visitIs_in(ctx.is_in(), context_left, context_right);
    }
    if (ctx.be()) {
        return this.visitBe(ctx.be(), context_left, context_right);
    }

};


// Visit a parse tree produced by SBVRParser#constraint_operation.
SBVRVisitor.prototype.visitConstraint_operation = function (ctx, context) {
    return this.visitConstraint_operator(ctx.constraint_operator(), this.visitContext(ctx.context()), context);
};


// Visit a parse tree produced by SBVRParser#unary_expr.
SBVRVisitor.prototype.visitUnary_expr = function (ctx, context) {
    return this.visitUnary_logical_op(ctx.unary_logical_op(), this.visitConstraint_operation(ctx.constraint_operation(), context))
};


// Visit a parse tree produced by SBVRParser#binary_expr.
SBVRVisitor.prototype.visitBinary_expr = function (ctx, context) {
    return this.visitBinary_logical_op(ctx.binary_logical_op(),
        this.visitConstraint_operation(ctx.constraint_operation(), context),
        this.visitConstraint(ctx.constraint()));
};


// Visit a parse tree produced by SBVRParser#constraint.
SBVRVisitor.prototype.visitConstraint = function (ctx, context) {
    if (ctx.constraint_operation()) {
        return this.visitConstraint_operation(ctx.constraint_operation(), context);
    }
    if (ctx.unary_expr()) {
        return this.visitUnary_expr(ctx.unary_expr(), context);
    }
    if (ctx.binary_expr()) {
        return this.visitBinary_expr(ctx.binary_expr(), context);
    }
};


// Visit a parse tree produced by SBVRParser#term.
SBVRVisitor.prototype.visitTerm = function (ctx) {
    return new Term(ctx.getText());
};


// Visit a parse tree produced by SBVRParser#attribut_specifier.
SBVRVisitor.prototype.visitAttribut_specifier = function (ctx, context) {
    return new Specifiers.AttributSpecifier(this.visitContext(ctx.context(), context))
};


// Visit a parse tree produced by SBVRParser#constraint_specifier.
SBVRVisitor.prototype.visitConstraint_specifier = function (ctx, context) {
    return new Specifiers.ConstraintSpecifier(context, this.visitConstraint(ctx.constraint()))
};


// Visit a parse tree produced by SBVRParser#specifier.
SBVRVisitor.prototype.visitSpecifier = function (ctx, context) {
    if (ctx.attribut_specifier()) {
        return this.visitAttribut_specifier(ctx.attribut_specifier(), context);
    }
    if (ctx.constraint_specifier()) {
        return this.visitConstraint_specifier(ctx.constraint_specifier(), context);
    }
};


// Visit a parse tree produced by SBVRParser#a.
SBVRVisitor.prototype.visitA = function (ctx, context) {
    return new Quantifiers.A(context);
};


// Visit a parse tree produced by SBVRParser#no.
SBVRVisitor.prototype.visitNo = function (ctx, context) {
    return new Quantifiers.No(context);
};


// Visit a parse tree produced by SBVRParser#some.
SBVRVisitor.prototype.visitSome = function (ctx, context) {
    return new Quantifiers.Some(context);
};


// Visit a parse tree produced by SBVRParser#each.
SBVRVisitor.prototype.visitEach = function (ctx, context) {
    return new Quantifiers.Each(context);
};


// Visit a parse tree produced by SBVRParser#quantifier.
SBVRVisitor.prototype.visitQuantifier = function (ctx, context) {
    if (ctx.each()) {
        return this.visitEach(ctx.each(), context)
    }
    if (ctx.some()) {
        return this.visitSome(ctx.some(), context);
    }
    if (ctx.no()) {
        return this.visitNo(ctx.no(), context);
    }
    if (ctx.a()) {
        return this.visitA(ctx.a(), context);
    }
};


// Visit a parse tree produced by SBVRParser#quantified_context.
SBVRVisitor.prototype.visitQuantified_context = function (ctx) {
    if (ctx.quantifier() && ctx.context()) {
        return this.visitQuantifier(ctx.quantifier(), this.visitContext(ctx.context()));
    }
};


// Visit a parse tree produced by SBVRParser#context.
SBVRVisitor.prototype.visitContext = function (ctx) {
    if (ctx.context() && ctx.specifier()) {
        return this.visitSpecifier(ctx.specifier(), this.visitContext(ctx.context()));
    }
    if (ctx.quantified_context()) {
        return this.visitQuantified_context(ctx.quantified_context());
    }
    if (ctx.term()) {
        return this.visitTerm(ctx.term());
    }
};


// Visit a parse tree produced by SBVRParser#obligation.
SBVRVisitor.prototype.visitObligation = function (ctx) {
    return new Modality.Obligation("must");
};


// Visit a parse tree produced by SBVRParser#modality.
SBVRVisitor.prototype.visitModality = function (ctx) {
    if (ctx.obligation()) {
        return this.visitObligation(ctx.obligation());
    }
};


// Visit a parse tree produced by SBVRParser#business_rule.
SBVRVisitor.prototype.visitBusiness_rule = function (ctx) {
    const context = this.visitContext(ctx.context());
    const modality = this.visitModality(ctx.modality());
    const constraint = this.visitConstraint(ctx.constraint(), context);
    return new BusinessRule(
        context,
        modality,
        constraint
    );
};


// Visit a parse tree produced by SBVRParser#business_rules.
SBVRVisitor.prototype.visitBusiness_rules = function (ctx, rules) {
    if (ctx.business_rule()) {
        rules.push(this.visitBusiness_rule(ctx.business_rule()));
    }
    if (ctx.business_rules()) {
        this.visitBusiness_rules(ctx.business_rules(), rules);
    }
};


// Visit a parse tree produced by SBVRParser#main.
SBVRVisitor.prototype.visitMain = function (ctx) {
    const rules = [];
    this.visitBusiness_rules(ctx.business_rules(), rules);
    return rules;
};


exports.SBVRVisitor = SBVRVisitor;