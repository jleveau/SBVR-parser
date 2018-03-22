// Generated from C:/Users/jleveau/WebstormProjects/sbvrParser/parser/grammar\SBVR.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "SBVR.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0019\u009d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006K\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000fh\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0005\u0013t\n\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u008d",
    "\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0098\n",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0002\u0002 ",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.02468:<\u0002\u0003\u0003\u0002\u000b\u000e\u0002\u008a",
    "\u0002>\u0003\u0002\u0002\u0002\u0004@\u0003\u0002\u0002\u0002\u0006",
    "B\u0003\u0002\u0002\u0002\bD\u0003\u0002\u0002\u0002\nJ\u0003\u0002",
    "\u0002\u0002\fL\u0003\u0002\u0002\u0002\u000eO\u0003\u0002\u0002\u0002",
    "\u0010R\u0003\u0002\u0002\u0002\u0012U\u0003\u0002\u0002\u0002\u0014",
    "X\u0003\u0002\u0002\u0002\u0016Z\u0003\u0002\u0002\u0002\u0018\\\u0003",
    "\u0002\u0002\u0002\u001a^\u0003\u0002\u0002\u0002\u001cg\u0003\u0002",
    "\u0002\u0002\u001ei\u0003\u0002\u0002\u0002 k\u0003\u0002\u0002\u0002",
    "\"n\u0003\u0002\u0002\u0002$s\u0003\u0002\u0002\u0002&u\u0003\u0002",
    "\u0002\u0002(w\u0003\u0002\u0002\u0002*y\u0003\u0002\u0002\u0002,{\u0003",
    "\u0002\u0002\u0002.}\u0003\u0002\u0002\u00020\u007f\u0003\u0002\u0002",
    "\u00022\u0081\u0003\u0002\u0002\u00024\u0083\u0003\u0002\u0002\u0002",
    "6\u008c\u0003\u0002\u0002\u00028\u008e\u0003\u0002\u0002\u0002:\u0097",
    "\u0003\u0002\u0002\u0002<\u0099\u0003\u0002\u0002\u0002>?\u0007\u0017",
    "\u0002\u0002?\u0003\u0003\u0002\u0002\u0002@A\u0007\u0018\u0002\u0002",
    "A\u0005\u0003\u0002\u0002\u0002BC\u0007\u0018\u0002\u0002C\u0007\u0003",
    "\u0002\u0002\u0002DE\u0007\u0018\u0002\u0002E\t\u0003\u0002\u0002\u0002",
    "FK\u00056\u001c\u0002GK\u0005\b\u0005\u0002HK\u0005\u0006\u0004\u0002",
    "IK\u0005\u0004\u0003\u0002JF\u0003\u0002\u0002\u0002JG\u0003\u0002\u0002",
    "\u0002JH\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002K\u000b\u0003",
    "\u0002\u0002\u0002LM\u0007\u0005\u0002\u0002MN\u0005\n\u0006\u0002N",
    "\r\u0003\u0002\u0002\u0002OP\u0007\u0010\u0002\u0002PQ\u0005\u0002\u0002",
    "\u0002Q\u000f\u0003\u0002\u0002\u0002RS\u0007\u0016\u0002\u0002ST\u0005",
    "6\u001c\u0002T\u0011\u0003\u0002\u0002\u0002UV\u0007\u0011\u0002\u0002",
    "VW\u0005\n\u0006\u0002W\u0013\u0003\u0002\u0002\u0002XY\u0007\u0012",
    "\u0002\u0002Y\u0015\u0003\u0002\u0002\u0002Z[\u0007\u0013\u0002\u0002",
    "[\u0017\u0003\u0002\u0002\u0002\\]\u0007\u0014\u0002\u0002]\u0019\u0003",
    "\u0002\u0002\u0002^_\u0007\u0015\u0002\u0002_\u001b\u0003\u0002\u0002",
    "\u0002`h\u0005\u0010\t\u0002ah\u0005\u000e\b\u0002bh\u0005\u0012\n\u0002",
    "ch\u0005\u0014\u000b\u0002dh\u0005\u0016\f\u0002eh\u0005\u0018\r\u0002",
    "fh\u0005\u001a\u000e\u0002g`\u0003\u0002\u0002\u0002ga\u0003\u0002\u0002",
    "\u0002gb\u0003\u0002\u0002\u0002gc\u0003\u0002\u0002\u0002gd\u0003\u0002",
    "\u0002\u0002ge\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u001d",
    "\u0003\u0002\u0002\u0002ij\u0007\u0018\u0002\u0002j\u001f\u0003\u0002",
    "\u0002\u0002kl\u0007\u000f\u0002\u0002lm\u00056\u001c\u0002m!\u0003",
    "\u0002\u0002\u0002no\u0007\b\u0002\u0002op\u00054\u001b\u0002p#\u0003",
    "\u0002\u0002\u0002qt\u0005 \u0011\u0002rt\u0005\"\u0012\u0002sq\u0003",
    "\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002t%\u0003\u0002\u0002\u0002",
    "uv\u0007\u000e\u0002\u0002v\'\u0003\u0002\u0002\u0002wx\u0007\r\u0002",
    "\u0002x)\u0003\u0002\u0002\u0002yz\u0007\f\u0002\u0002z+\u0003\u0002",
    "\u0002\u0002{|\u0007\u000b\u0002\u0002|-\u0003\u0002\u0002\u0002}~\t",
    "\u0002\u0002\u0002~/\u0003\u0002\u0002\u0002\u007f\u0080\u0007\n\u0002",
    "\u0002\u00801\u0003\u0002\u0002\u0002\u0081\u0082\u00050\u0019\u0002",
    "\u00823\u0003\u0002\u0002\u0002\u0083\u0084\u0005\u001c\u000f\u0002",
    "\u0084\u0085\u0005.\u0018\u0002\u0085\u0086\u00056\u001c\u0002\u0086",
    "5\u0003\u0002\u0002\u0002\u0087\u0088\u0005.\u0018\u0002\u0088\u0089",
    "\u00056\u001c\u0002\u0089\u008a\u0005$\u0013\u0002\u008a\u008d\u0003",
    "\u0002\u0002\u0002\u008b\u008d\u0005\u001e\u0010\u0002\u008c\u0087\u0003",
    "\u0002\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d7\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u00056\u001c\u0002\u008f\u0090\u0005",
    "2\u001a\u0002\u0090\u0091\u00054\u001b\u0002\u0091\u0092\u0007\t\u0002",
    "\u0002\u00929\u0003\u0002\u0002\u0002\u0093\u0094\u00058\u001d\u0002",
    "\u0094\u0095\u0005:\u001e\u0002\u0095\u0098\u0003\u0002\u0002\u0002",
    "\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0093\u0003\u0002\u0002\u0002",
    "\u0097\u0096\u0003\u0002\u0002\u0002\u0098;\u0003\u0002\u0002\u0002",
    "\u0099\u009a\u0005:\u001e\u0002\u009a\u009b\u0007\u0002\u0002\u0003",
    "\u009b=\u0003\u0002\u0002\u0002\u0007Jgs\u008c\u0097"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'be'", "'false'", "'true'", "'that'", 
                     "'.'", "'must'", "'each'", "'some'", "'no'", "'a'", 
                     "'of'", null, "'is equal to'", "'lesser than'", "'greater than'", 
                     "'before'", "'after'" ];

var symbolicNames = [ null, "SKIPED", "LINE_JOINING", "BE", "FALSE", "TRUE", 
                      "THAT", "DOT", "OBLIGATION", "EACH", "SOME", "NO", 
                      "A", "OF", "MATCHES", "EQUAL", "LESSER_THAN", "GREATER_THAN", 
                      "BEFORE", "AFTER", "HAVE", "QUOTED_CONTENT", "IDENTIFIER", 
                      "WHITESPACE" ];

var ruleNames =  [ "regex", "date_value", "numeric_value", "boolean_value", 
                   "value", "be", "matches", "have", "equal", "lesser_than", 
                   "greater_than", "before", "after", "relation", "term", 
                   "attribut_specifier", "constraint_specifier", "specifier", 
                   "a", "no", "some", "each", "quantifier", "obligation", 
                   "modality", "constraint", "context", "business_rule", 
                   "business_rules", "main" ];

function SBVRParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SBVRParser.prototype = Object.create(antlr4.Parser.prototype);
SBVRParser.prototype.constructor = SBVRParser;

Object.defineProperty(SBVRParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SBVRParser.EOF = antlr4.Token.EOF;
SBVRParser.SKIPED = 1;
SBVRParser.LINE_JOINING = 2;
SBVRParser.BE = 3;
SBVRParser.FALSE = 4;
SBVRParser.TRUE = 5;
SBVRParser.THAT = 6;
SBVRParser.DOT = 7;
SBVRParser.OBLIGATION = 8;
SBVRParser.EACH = 9;
SBVRParser.SOME = 10;
SBVRParser.NO = 11;
SBVRParser.A = 12;
SBVRParser.OF = 13;
SBVRParser.MATCHES = 14;
SBVRParser.EQUAL = 15;
SBVRParser.LESSER_THAN = 16;
SBVRParser.GREATER_THAN = 17;
SBVRParser.BEFORE = 18;
SBVRParser.AFTER = 19;
SBVRParser.HAVE = 20;
SBVRParser.QUOTED_CONTENT = 21;
SBVRParser.IDENTIFIER = 22;
SBVRParser.WHITESPACE = 23;

SBVRParser.RULE_regex = 0;
SBVRParser.RULE_date_value = 1;
SBVRParser.RULE_numeric_value = 2;
SBVRParser.RULE_boolean_value = 3;
SBVRParser.RULE_value = 4;
SBVRParser.RULE_be = 5;
SBVRParser.RULE_matches = 6;
SBVRParser.RULE_have = 7;
SBVRParser.RULE_equal = 8;
SBVRParser.RULE_lesser_than = 9;
SBVRParser.RULE_greater_than = 10;
SBVRParser.RULE_before = 11;
SBVRParser.RULE_after = 12;
SBVRParser.RULE_relation = 13;
SBVRParser.RULE_term = 14;
SBVRParser.RULE_attribut_specifier = 15;
SBVRParser.RULE_constraint_specifier = 16;
SBVRParser.RULE_specifier = 17;
SBVRParser.RULE_a = 18;
SBVRParser.RULE_no = 19;
SBVRParser.RULE_some = 20;
SBVRParser.RULE_each = 21;
SBVRParser.RULE_quantifier = 22;
SBVRParser.RULE_obligation = 23;
SBVRParser.RULE_modality = 24;
SBVRParser.RULE_constraint = 25;
SBVRParser.RULE_context = 26;
SBVRParser.RULE_business_rule = 27;
SBVRParser.RULE_business_rules = 28;
SBVRParser.RULE_main = 29;

function RegexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_regex;
    return this;
}

RegexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegexContext.prototype.constructor = RegexContext;

RegexContext.prototype.QUOTED_CONTENT = function() {
    return this.getToken(SBVRParser.QUOTED_CONTENT, 0);
};




SBVRParser.RegexContext = RegexContext;

SBVRParser.prototype.regex = function() {

    var localctx = new RegexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SBVRParser.RULE_regex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(SBVRParser.QUOTED_CONTENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Date_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_date_value;
    return this;
}

Date_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Date_valueContext.prototype.constructor = Date_valueContext;

Date_valueContext.prototype.IDENTIFIER = function() {
    return this.getToken(SBVRParser.IDENTIFIER, 0);
};




SBVRParser.Date_valueContext = Date_valueContext;

SBVRParser.prototype.date_value = function() {

    var localctx = new Date_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SBVRParser.RULE_date_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(SBVRParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Numeric_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_numeric_value;
    return this;
}

Numeric_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Numeric_valueContext.prototype.constructor = Numeric_valueContext;

Numeric_valueContext.prototype.IDENTIFIER = function() {
    return this.getToken(SBVRParser.IDENTIFIER, 0);
};




SBVRParser.Numeric_valueContext = Numeric_valueContext;

SBVRParser.prototype.numeric_value = function() {

    var localctx = new Numeric_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SBVRParser.RULE_numeric_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(SBVRParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Boolean_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_boolean_value;
    return this;
}

Boolean_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Boolean_valueContext.prototype.constructor = Boolean_valueContext;

Boolean_valueContext.prototype.IDENTIFIER = function() {
    return this.getToken(SBVRParser.IDENTIFIER, 0);
};




SBVRParser.Boolean_valueContext = Boolean_valueContext;

SBVRParser.prototype.boolean_value = function() {

    var localctx = new Boolean_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SBVRParser.RULE_boolean_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(SBVRParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};

ValueContext.prototype.boolean_value = function() {
    return this.getTypedRuleContext(Boolean_valueContext,0);
};

ValueContext.prototype.numeric_value = function() {
    return this.getTypedRuleContext(Numeric_valueContext,0);
};

ValueContext.prototype.date_value = function() {
    return this.getTypedRuleContext(Date_valueContext,0);
};




SBVRParser.ValueContext = ValueContext;

SBVRParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SBVRParser.RULE_value);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.context();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.boolean_value();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 70;
            this.numeric_value();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
            this.date_value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_be;
    return this;
}

BeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BeContext.prototype.constructor = BeContext;

BeContext.prototype.BE = function() {
    return this.getToken(SBVRParser.BE, 0);
};

BeContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};




SBVRParser.BeContext = BeContext;

SBVRParser.prototype.be = function() {

    var localctx = new BeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SBVRParser.RULE_be);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(SBVRParser.BE);
        this.state = 75;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatchesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_matches;
    return this;
}

MatchesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatchesContext.prototype.constructor = MatchesContext;

MatchesContext.prototype.MATCHES = function() {
    return this.getToken(SBVRParser.MATCHES, 0);
};

MatchesContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
};




SBVRParser.MatchesContext = MatchesContext;

SBVRParser.prototype.matches = function() {

    var localctx = new MatchesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SBVRParser.RULE_matches);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(SBVRParser.MATCHES);
        this.state = 78;
        this.regex();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HaveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_have;
    return this;
}

HaveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HaveContext.prototype.constructor = HaveContext;

HaveContext.prototype.HAVE = function() {
    return this.getToken(SBVRParser.HAVE, 0);
};

HaveContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};




SBVRParser.HaveContext = HaveContext;

SBVRParser.prototype.have = function() {

    var localctx = new HaveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SBVRParser.RULE_have);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(SBVRParser.HAVE);
        this.state = 81;
        this.context();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_equal;
    return this;
}

EqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualContext.prototype.constructor = EqualContext;

EqualContext.prototype.EQUAL = function() {
    return this.getToken(SBVRParser.EQUAL, 0);
};

EqualContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};




SBVRParser.EqualContext = EqualContext;

SBVRParser.prototype.equal = function() {

    var localctx = new EqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SBVRParser.RULE_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(SBVRParser.EQUAL);
        this.state = 84;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Lesser_thanContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_lesser_than;
    return this;
}

Lesser_thanContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lesser_thanContext.prototype.constructor = Lesser_thanContext;

Lesser_thanContext.prototype.LESSER_THAN = function() {
    return this.getToken(SBVRParser.LESSER_THAN, 0);
};




SBVRParser.Lesser_thanContext = Lesser_thanContext;

SBVRParser.prototype.lesser_than = function() {

    var localctx = new Lesser_thanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SBVRParser.RULE_lesser_than);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(SBVRParser.LESSER_THAN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Greater_thanContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_greater_than;
    return this;
}

Greater_thanContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Greater_thanContext.prototype.constructor = Greater_thanContext;

Greater_thanContext.prototype.GREATER_THAN = function() {
    return this.getToken(SBVRParser.GREATER_THAN, 0);
};




SBVRParser.Greater_thanContext = Greater_thanContext;

SBVRParser.prototype.greater_than = function() {

    var localctx = new Greater_thanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SBVRParser.RULE_greater_than);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(SBVRParser.GREATER_THAN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BeforeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_before;
    return this;
}

BeforeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BeforeContext.prototype.constructor = BeforeContext;

BeforeContext.prototype.BEFORE = function() {
    return this.getToken(SBVRParser.BEFORE, 0);
};




SBVRParser.BeforeContext = BeforeContext;

SBVRParser.prototype.before = function() {

    var localctx = new BeforeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SBVRParser.RULE_before);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(SBVRParser.BEFORE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AfterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_after;
    return this;
}

AfterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AfterContext.prototype.constructor = AfterContext;

AfterContext.prototype.AFTER = function() {
    return this.getToken(SBVRParser.AFTER, 0);
};




SBVRParser.AfterContext = AfterContext;

SBVRParser.prototype.after = function() {

    var localctx = new AfterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SBVRParser.RULE_after);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(SBVRParser.AFTER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_relation;
    return this;
}

RelationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationContext.prototype.constructor = RelationContext;

RelationContext.prototype.have = function() {
    return this.getTypedRuleContext(HaveContext,0);
};

RelationContext.prototype.matches = function() {
    return this.getTypedRuleContext(MatchesContext,0);
};

RelationContext.prototype.equal = function() {
    return this.getTypedRuleContext(EqualContext,0);
};

RelationContext.prototype.lesser_than = function() {
    return this.getTypedRuleContext(Lesser_thanContext,0);
};

RelationContext.prototype.greater_than = function() {
    return this.getTypedRuleContext(Greater_thanContext,0);
};

RelationContext.prototype.before = function() {
    return this.getTypedRuleContext(BeforeContext,0);
};

RelationContext.prototype.after = function() {
    return this.getTypedRuleContext(AfterContext,0);
};




SBVRParser.RelationContext = RelationContext;

SBVRParser.prototype.relation = function() {

    var localctx = new RelationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SBVRParser.RULE_relation);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.HAVE:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.have();
            break;
        case SBVRParser.MATCHES:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.matches();
            break;
        case SBVRParser.EQUAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 96;
            this.equal();
            break;
        case SBVRParser.LESSER_THAN:
            this.enterOuterAlt(localctx, 4);
            this.state = 97;
            this.lesser_than();
            break;
        case SBVRParser.GREATER_THAN:
            this.enterOuterAlt(localctx, 5);
            this.state = 98;
            this.greater_than();
            break;
        case SBVRParser.BEFORE:
            this.enterOuterAlt(localctx, 6);
            this.state = 99;
            this.before();
            break;
        case SBVRParser.AFTER:
            this.enterOuterAlt(localctx, 7);
            this.state = 100;
            this.after();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.IDENTIFIER = function() {
    return this.getToken(SBVRParser.IDENTIFIER, 0);
};




SBVRParser.TermContext = TermContext;

SBVRParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SBVRParser.RULE_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(SBVRParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attribut_specifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_attribut_specifier;
    return this;
}

Attribut_specifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribut_specifierContext.prototype.constructor = Attribut_specifierContext;

Attribut_specifierContext.prototype.OF = function() {
    return this.getToken(SBVRParser.OF, 0);
};

Attribut_specifierContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};




SBVRParser.Attribut_specifierContext = Attribut_specifierContext;

SBVRParser.prototype.attribut_specifier = function() {

    var localctx = new Attribut_specifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SBVRParser.RULE_attribut_specifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(SBVRParser.OF);
        this.state = 106;
        this.context();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Constraint_specifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_constraint_specifier;
    return this;
}

Constraint_specifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constraint_specifierContext.prototype.constructor = Constraint_specifierContext;

Constraint_specifierContext.prototype.THAT = function() {
    return this.getToken(SBVRParser.THAT, 0);
};

Constraint_specifierContext.prototype.constraint = function() {
    return this.getTypedRuleContext(ConstraintContext,0);
};




SBVRParser.Constraint_specifierContext = Constraint_specifierContext;

SBVRParser.prototype.constraint_specifier = function() {

    var localctx = new Constraint_specifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SBVRParser.RULE_constraint_specifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(SBVRParser.THAT);
        this.state = 109;
        this.constraint();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_specifier;
    return this;
}

SpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecifierContext.prototype.constructor = SpecifierContext;

SpecifierContext.prototype.attribut_specifier = function() {
    return this.getTypedRuleContext(Attribut_specifierContext,0);
};

SpecifierContext.prototype.constraint_specifier = function() {
    return this.getTypedRuleContext(Constraint_specifierContext,0);
};




SBVRParser.SpecifierContext = SpecifierContext;

SBVRParser.prototype.specifier = function() {

    var localctx = new SpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SBVRParser.RULE_specifier);
    try {
        this.state = 113;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.OF:
            this.enterOuterAlt(localctx, 1);
            this.state = 111;
            this.attribut_specifier();
            break;
        case SBVRParser.THAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 112;
            this.constraint_specifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_a;
    return this;
}

AContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AContext.prototype.constructor = AContext;

AContext.prototype.A = function() {
    return this.getToken(SBVRParser.A, 0);
};




SBVRParser.AContext = AContext;

SBVRParser.prototype.a = function() {

    var localctx = new AContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SBVRParser.RULE_a);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(SBVRParser.A);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_no;
    return this;
}

NoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoContext.prototype.constructor = NoContext;

NoContext.prototype.NO = function() {
    return this.getToken(SBVRParser.NO, 0);
};




SBVRParser.NoContext = NoContext;

SBVRParser.prototype.no = function() {

    var localctx = new NoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SBVRParser.RULE_no);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(SBVRParser.NO);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SomeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_some;
    return this;
}

SomeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SomeContext.prototype.constructor = SomeContext;

SomeContext.prototype.SOME = function() {
    return this.getToken(SBVRParser.SOME, 0);
};




SBVRParser.SomeContext = SomeContext;

SBVRParser.prototype.some = function() {

    var localctx = new SomeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SBVRParser.RULE_some);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(SBVRParser.SOME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EachContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_each;
    return this;
}

EachContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EachContext.prototype.constructor = EachContext;

EachContext.prototype.EACH = function() {
    return this.getToken(SBVRParser.EACH, 0);
};




SBVRParser.EachContext = EachContext;

SBVRParser.prototype.each = function() {

    var localctx = new EachContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SBVRParser.RULE_each);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(SBVRParser.EACH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuantifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_quantifier;
    return this;
}

QuantifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantifierContext.prototype.constructor = QuantifierContext;

QuantifierContext.prototype.EACH = function() {
    return this.getToken(SBVRParser.EACH, 0);
};

QuantifierContext.prototype.SOME = function() {
    return this.getToken(SBVRParser.SOME, 0);
};

QuantifierContext.prototype.NO = function() {
    return this.getToken(SBVRParser.NO, 0);
};

QuantifierContext.prototype.A = function() {
    return this.getToken(SBVRParser.A, 0);
};




SBVRParser.QuantifierContext = QuantifierContext;

SBVRParser.prototype.quantifier = function() {

    var localctx = new QuantifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SBVRParser.RULE_quantifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SBVRParser.EACH) | (1 << SBVRParser.SOME) | (1 << SBVRParser.NO) | (1 << SBVRParser.A))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObligationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_obligation;
    return this;
}

ObligationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObligationContext.prototype.constructor = ObligationContext;

ObligationContext.prototype.OBLIGATION = function() {
    return this.getToken(SBVRParser.OBLIGATION, 0);
};




SBVRParser.ObligationContext = ObligationContext;

SBVRParser.prototype.obligation = function() {

    var localctx = new ObligationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SBVRParser.RULE_obligation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(SBVRParser.OBLIGATION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModalityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_modality;
    return this;
}

ModalityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModalityContext.prototype.constructor = ModalityContext;

ModalityContext.prototype.obligation = function() {
    return this.getTypedRuleContext(ObligationContext,0);
};




SBVRParser.ModalityContext = ModalityContext;

SBVRParser.prototype.modality = function() {

    var localctx = new ModalityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SBVRParser.RULE_modality);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.obligation();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_constraint;
    return this;
}

ConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstraintContext.prototype.constructor = ConstraintContext;

ConstraintContext.prototype.relation = function() {
    return this.getTypedRuleContext(RelationContext,0);
};

ConstraintContext.prototype.quantifier = function() {
    return this.getTypedRuleContext(QuantifierContext,0);
};

ConstraintContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};




SBVRParser.ConstraintContext = ConstraintContext;

SBVRParser.prototype.constraint = function() {

    var localctx = new ConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SBVRParser.RULE_constraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.relation();
        this.state = 130;
        this.quantifier();
        this.state = 131;
        this.context();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_context;
    return this;
}

ContextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContextContext.prototype.constructor = ContextContext;

ContextContext.prototype.quantifier = function() {
    return this.getTypedRuleContext(QuantifierContext,0);
};

ContextContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};

ContextContext.prototype.specifier = function() {
    return this.getTypedRuleContext(SpecifierContext,0);
};

ContextContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};




SBVRParser.ContextContext = ContextContext;

SBVRParser.prototype.context = function() {

    var localctx = new ContextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SBVRParser.RULE_context);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.EACH:
        case SBVRParser.SOME:
        case SBVRParser.NO:
        case SBVRParser.A:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.quantifier();
            this.state = 134;
            this.context();
            this.state = 135;
            this.specifier();
            break;
        case SBVRParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 137;
            this.term();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Business_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_business_rule;
    return this;
}

Business_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Business_ruleContext.prototype.constructor = Business_ruleContext;

Business_ruleContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};

Business_ruleContext.prototype.modality = function() {
    return this.getTypedRuleContext(ModalityContext,0);
};

Business_ruleContext.prototype.constraint = function() {
    return this.getTypedRuleContext(ConstraintContext,0);
};

Business_ruleContext.prototype.DOT = function() {
    return this.getToken(SBVRParser.DOT, 0);
};




SBVRParser.Business_ruleContext = Business_ruleContext;

SBVRParser.prototype.business_rule = function() {

    var localctx = new Business_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SBVRParser.RULE_business_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.context();
        this.state = 141;
        this.modality();
        this.state = 142;
        this.constraint();
        this.state = 143;
        this.match(SBVRParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Business_rulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_business_rules;
    return this;
}

Business_rulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Business_rulesContext.prototype.constructor = Business_rulesContext;

Business_rulesContext.prototype.business_rule = function() {
    return this.getTypedRuleContext(Business_ruleContext,0);
};

Business_rulesContext.prototype.business_rules = function() {
    return this.getTypedRuleContext(Business_rulesContext,0);
};




SBVRParser.Business_rulesContext = Business_rulesContext;

SBVRParser.prototype.business_rules = function() {

    var localctx = new Business_rulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SBVRParser.RULE_business_rules);
    try {
        this.state = 149;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.EACH:
        case SBVRParser.SOME:
        case SBVRParser.NO:
        case SBVRParser.A:
        case SBVRParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.business_rule();
            this.state = 146;
            this.business_rules();
            break;
        case SBVRParser.EOF:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_main;
    return this;
}

MainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainContext.prototype.constructor = MainContext;

MainContext.prototype.business_rules = function() {
    return this.getTypedRuleContext(Business_rulesContext,0);
};

MainContext.prototype.EOF = function() {
    return this.getToken(SBVRParser.EOF, 0);
};




SBVRParser.MainContext = MainContext;

SBVRParser.prototype.main = function() {

    var localctx = new MainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SBVRParser.RULE_main);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.business_rules();
        this.state = 152;
        this.match(SBVRParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SBVRParser = SBVRParser;
