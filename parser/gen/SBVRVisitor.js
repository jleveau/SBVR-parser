// Generated from C:/Users/jleveau/WebstormProjects/sbvrParser/parser/grammar\SBVR.g4 by ANTLR 4.7
// jshint ignore: start
const antlr4 = require('antlr4/index');
const BusinessRule = require('../../elements/businessRule');
const rules = [];
const Relation = require('../../elements/relation');
const Quantifier = require('../../elements/quantifier');
const Term = require('../../elements/term');
const Concept = require('../../elements/concept');
const Modality = require('../../elements/modality');
const Context = require('../../elements/context');
const Constraint = require('../../elements/constraint');
const Specfier = require('../../elements/specifier');
// This class defines a complete generic visitor for a parse tree produced by SBVRParser.

function SBVRVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SBVRVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SBVRVisitor.prototype.constructor = SBVRVisitor;

// Visit a parse tree produced by SBVRParser#relation.
SBVRVisitor.prototype.visitRelation = function(ctx) {
    if (ctx.match) {
        return new Relation.Match();
    } else if (ctx.have) {
        return new Relation.Have();
    } else if (ctx.equal) {
        return new Relation.Equal();
    } else if (ctx.lesser_than) {
        return new Relation.LesserThan
    } else if (ctx.greater_than) {
        return new Relation.GreaterThan();
    } else if (ctx.before) {
        return new Relation.Before();
    } else if (ctx.after) {
        return new Relation.After();
    }
};

// Visit a parse tree produced by SBVRParser#term.
SBVRVisitor.prototype.visitTerm = function(ctx) {
    return new Term(ctx.getText());
};

// Visit a parse tree produced by SBVRParser#specifier.
SBVRVisitor.prototype.visitSpecifier = function(ctx) {
    if (ctx.constraint_specifier()) {
        return this.visitConstraint_specifier(ctx.constraint_specifier());
    } else if (ctx.attribut_specifier()) {
        return this.visitAttribut_specifier(ctx.attribut_specifier());
    }
};

// Visit a parse tree produced by SBVRParser#constraint_specifier.
SBVRVisitor.prototype.visitConstraint_specifier = function(ctx) {
    return new Specfier.ConstraintSpecifier(this.visitConstraint(ctx.constraint()));
};

// Visit a parse tree produced by SBVRParser#attribut_specifier.
SBVRVisitor.prototype.visitAttribut_specifier = function(ctx) {
    return new Specfier.AttributSpecifier(this.visitConcept(ctx.concept()));
};


// Visit a parse tree produced by SBVRParser#concept.
SBVRVisitor.prototype.visitConcept = function(ctx) {
    if (ctx.term()) {
    return this.visitTerm(ctx.term())
  }
  if (ctx.specifier()) {
        return new Concept(
            this.visitConcept(ctx.concept()),
            this.visitSpecifier(ctx.specifier())
        );
  }
};

// Visit a parse tree produced by SBVRParser#quantifier.
SBVRVisitor.prototype.visitQuantifier = function(ctx) {
    if (ctx.each) {
        return new Quantifier.Each();
    } else if (ctx.some) {
        return new Quantifier.Some();
    } else if (ctx.no) {
        return new Quantifier.No();
    } else if (ctx.a) {
        return new Quantifier.A();
    }
};

// Visit a parse tree produced by SBVRParser#obligation.
SBVRVisitor.prototype.visitObligation= function(ctx) {
    return new Modality.Obligation();
};

// Visit a parse tree produced by SBVRParser#modality.
SBVRVisitor.prototype.visitModality = function(ctx) {
    if (ctx.obligation){
        return this.visitObligation(ctx.obligation())
    }
};

// Visit a parse tree produced by SBVRParser#constraint.
SBVRVisitor.prototype.visitConstraint = function(ctx) {
  return new Constraint (
      this.visitRelation(ctx.relation()),
      this.visitQuantifier(ctx.quantifier()),
      this.visitConcept(ctx.concept()))
};


// Visit a parse tree produced by SBVRParser#context.
SBVRVisitor.prototype.visitContext = function(ctx) {
  return new Context(
      this.visitQuantifier(ctx.quantifier()),
      this.visitConcept(ctx.concept())
  );
};

// Visit a parse tree produced by SBVRParser#business_rule.
SBVRVisitor.prototype.visitBusiness_rule = function(ctx) {
    return new BusinessRule(
        this.visitContext(ctx.context()),
        this.visitModality(ctx.modality()),
        this.visitConstraint(ctx.constraint()));
};


// Visit a parse tree produced by SBVRParser#business_rules.
SBVRVisitor.prototype.visitBusiness_rules = function(ctx) {
    if (ctx.business_rule()) {
        rules.push(this.visitBusiness_rule(ctx.business_rule()));
    }
    if (ctx.business_rules()) {
        return this.visitBusiness_rules(ctx.business_rules());
    }
};


// Visit a parse tree produced by SBVRParser#main.
SBVRVisitor.prototype.visitMain = function(ctx) {
    this.visitBusiness_rules(ctx.business_rules());
    return rules;
};


exports.SBVRVisitor = SBVRVisitor;