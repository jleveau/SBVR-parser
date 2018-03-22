// Generated from C:/Users/jleveau/WebstormProjects/sbvrParser/parser/grammar\SBVR.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "SBVR.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001e\u00d2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005\u0012",
    "s\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u007f\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u008e\n\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0095\n",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0005\u001c\u00a0\n\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0005!\u00ae\n!\u0003\"\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003#\u0005#\u00b6\n#\u0003#\u0003#\u0007",
    "#\u00ba\n#\f#\u000e#\u00bd\u000b#\u0003$\u0003$\u0003%\u0003%\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'",
    "\u0005\'\u00cd\n\'\u0003(\u0003(\u0003(\u0003(\u0002\u0003D)\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLN\u0002\u0002\u0002\u00bf\u0002P\u0003\u0002",
    "\u0002\u0002\u0004R\u0003\u0002\u0002\u0002\u0006T\u0003\u0002\u0002",
    "\u0002\bV\u0003\u0002\u0002\u0002\nX\u0003\u0002\u0002\u0002\fZ\u0003",
    "\u0002\u0002\u0002\u000e\\\u0003\u0002\u0002\u0002\u0010^\u0003\u0002",
    "\u0002\u0002\u0012`\u0003\u0002\u0002\u0002\u0014b\u0003\u0002\u0002",
    "\u0002\u0016d\u0003\u0002\u0002\u0002\u0018f\u0003\u0002\u0002\u0002",
    "\u001ah\u0003\u0002\u0002\u0002\u001cj\u0003\u0002\u0002\u0002\u001e",
    "l\u0003\u0002\u0002\u0002 n\u0003\u0002\u0002\u0002\"r\u0003\u0002\u0002",
    "\u0002$t\u0003\u0002\u0002\u0002&~\u0003\u0002\u0002\u0002(\u0080\u0003",
    "\u0002\u0002\u0002*\u0083\u0003\u0002\u0002\u0002,\u0086\u0003\u0002",
    "\u0002\u0002.\u008d\u0003\u0002\u0002\u00020\u0094\u0003\u0002\u0002",
    "\u00022\u0096\u0003\u0002\u0002\u00024\u009a\u0003\u0002\u0002\u0002",
    "6\u009f\u0003\u0002\u0002\u00028\u00a1\u0003\u0002\u0002\u0002:\u00a3",
    "\u0003\u0002\u0002\u0002<\u00a5\u0003\u0002\u0002\u0002>\u00a7\u0003",
    "\u0002\u0002\u0002@\u00ad\u0003\u0002\u0002\u0002B\u00af\u0003\u0002",
    "\u0002\u0002D\u00b5\u0003\u0002\u0002\u0002F\u00be\u0003\u0002\u0002",
    "\u0002H\u00c0\u0003\u0002\u0002\u0002J\u00c2\u0003\u0002\u0002\u0002",
    "L\u00cc\u0003\u0002\u0002\u0002N\u00ce\u0003\u0002\u0002\u0002PQ\u0007",
    "\u001c\u0002\u0002Q\u0003\u0003\u0002\u0002\u0002RS\u0007\u001d\u0002",
    "\u0002S\u0005\u0003\u0002\u0002\u0002TU\u0007\u001d\u0002\u0002U\u0007",
    "\u0003\u0002\u0002\u0002VW\u0007\u001d\u0002\u0002W\t\u0003\u0002\u0002",
    "\u0002XY\u0007\t\u0002\u0002Y\u000b\u0003\u0002\u0002\u0002Z[\u0007",
    "\n\u0002\u0002[\r\u0003\u0002\u0002\u0002\\]\u0007\u0015\u0002\u0002",
    "]\u000f\u0003\u0002\u0002\u0002^_\u0007\u001b\u0002\u0002_\u0011\u0003",
    "\u0002\u0002\u0002`a\u0007\u0016\u0002\u0002a\u0013\u0003\u0002\u0002",
    "\u0002bc\u0007\u0017\u0002\u0002c\u0015\u0003\u0002\u0002\u0002de\u0007",
    "\u0018\u0002\u0002e\u0017\u0003\u0002\u0002\u0002fg\u0007\u0019\u0002",
    "\u0002g\u0019\u0003\u0002\u0002\u0002hi\u0007\u001a\u0002\u0002i\u001b",
    "\u0003\u0002\u0002\u0002jk\u0007\u0007\u0002\u0002k\u001d\u0003\u0002",
    "\u0002\u0002lm\u0007\b\u0002\u0002m\u001f\u0003\u0002\u0002\u0002no",
    "\u0007\u0006\u0002\u0002o!\u0003\u0002\u0002\u0002ps\u0005\u001e\u0010",
    "\u0002qs\u0005\u001c\u000f\u0002rp\u0003\u0002\u0002\u0002rq\u0003\u0002",
    "\u0002\u0002s#\u0003\u0002\u0002\u0002tu\u0005 \u0011\u0002u%\u0003",
    "\u0002\u0002\u0002v\u007f\u0005\u0010\t\u0002w\u007f\u0005\u000e\b\u0002",
    "x\u007f\u0005\u0012\n\u0002y\u007f\u0005\u0014\u000b\u0002z\u007f\u0005",
    "\u0016\f\u0002{\u007f\u0005\u0018\r\u0002|\u007f\u0005\u001a\u000e\u0002",
    "}\u007f\u0005\n\u0006\u0002~v\u0003\u0002\u0002\u0002~w\u0003\u0002",
    "\u0002\u0002~x\u0003\u0002\u0002\u0002~y\u0003\u0002\u0002\u0002~z\u0003",
    "\u0002\u0002\u0002~{\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002",
    "~}\u0003\u0002\u0002\u0002\u007f\'\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0005&\u0014\u0002\u0081\u0082\u0005D#\u0002\u0082)\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0005$\u0013\u0002\u0084\u0085\u0005(\u0015\u0002",
    "\u0085+\u0003\u0002\u0002\u0002\u0086\u0087\u0005(\u0015\u0002\u0087",
    "\u0088\u0005\"\u0012\u0002\u0088\u0089\u0005.\u0018\u0002\u0089-\u0003",
    "\u0002\u0002\u0002\u008a\u008e\u0005(\u0015\u0002\u008b\u008e\u0005",
    "*\u0016\u0002\u008c\u008e\u0005,\u0017\u0002\u008d\u008a\u0003\u0002",
    "\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008c\u0003\u0002",
    "\u0002\u0002\u008e/\u0003\u0002\u0002\u0002\u008f\u0095\u0007\u001d",
    "\u0002\u0002\u0090\u0095\u0005\u0004\u0003\u0002\u0091\u0095\u0005\u0006",
    "\u0004\u0002\u0092\u0095\u0005\b\u0005\u0002\u0093\u0095\u0005\u0002",
    "\u0002\u0002\u0094\u008f\u0003\u0002\u0002\u0002\u0094\u0090\u0003\u0002",
    "\u0002\u0002\u0094\u0091\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002",
    "\u0002\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u00951\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0007\u0014\u0002\u0002\u0097\u0098\u0005D",
    "#\u0002\u0098\u0099\u0007\u0005\u0002\u0002\u00993\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0007\r\u0002\u0002\u009b\u009c\u0005.\u0018\u0002",
    "\u009c5\u0003\u0002\u0002\u0002\u009d\u00a0\u00052\u001a\u0002\u009e",
    "\u00a0\u00054\u001b\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f",
    "\u009e\u0003\u0002\u0002\u0002\u00a07\u0003\u0002\u0002\u0002\u00a1",
    "\u00a2\u0007\u0013\u0002\u0002\u00a29\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0007\u0012\u0002\u0002\u00a4;\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0007\u0011\u0002\u0002\u00a6=\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0007\u0010\u0002\u0002\u00a8?\u0003\u0002\u0002\u0002\u00a9",
    "\u00ae\u0005> \u0002\u00aa\u00ae\u0005<\u001f\u0002\u00ab\u00ae\u0005",
    ":\u001e\u0002\u00ac\u00ae\u00058\u001d\u0002\u00ad\u00a9\u0003\u0002",
    "\u0002\u0002\u00ad\u00aa\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002",
    "\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002\u00aeA\u0003\u0002",
    "\u0002\u0002\u00af\u00b0\u0005@!\u0002\u00b0\u00b1\u0005D#\u0002\u00b1",
    "C\u0003\u0002\u0002\u0002\u00b2\u00b3\b#\u0001\u0002\u00b3\u00b6\u0005",
    "B\"\u0002\u00b4\u00b6\u00050\u0019\u0002\u00b5\u00b2\u0003\u0002\u0002",
    "\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b6\u00bb\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\f\u0005\u0002\u0002\u00b8\u00ba\u00056\u001c\u0002",
    "\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bd\u0003\u0002\u0002\u0002",
    "\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002",
    "\u00bcE\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0007\u000f\u0002\u0002\u00bfG\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0005F$\u0002\u00c1I\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\u0005D#\u0002\u00c3\u00c4\u0007\u0005\u0002\u0002\u00c4\u00c5\u0005",
    "H%\u0002\u00c5\u00c6\u0005.\u0018\u0002\u00c6\u00c7\u0007\u000e\u0002",
    "\u0002\u00c7K\u0003\u0002\u0002\u0002\u00c8\u00c9\u0005J&\u0002\u00c9",
    "\u00ca\u0005L\'\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb\u00cd",
    "\u0003\u0002\u0002\u0002\u00cc\u00c8\u0003\u0002\u0002\u0002\u00cc\u00cb",
    "\u0003\u0002\u0002\u0002\u00cdM\u0003\u0002\u0002\u0002\u00ce\u00cf",
    "\u0005L\'\u0002\u00cf\u00d0\u0007\u0002\u0002\u0003\u00d0O\u0003\u0002",
    "\u0002\u0002\u000br~\u008d\u0094\u009f\u00ad\u00b5\u00bb\u00cc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "','", "'not'", "'and'", "'or'", 
                     null, "'be'", "'false'", "'true'", "'that'", "'.'", 
                     "'must'", "'each'", "'some'", "'no'", "'a'", "'of'", 
                     null, "'is equal to'", "'is lesser than'", "'is greater than'", 
                     "'before'", "'after'" ];

var symbolicNames = [ null, "SKIPED", "LINE_JOINING", "COMA", "NOT", "AND", 
                      "OR", "IS_IN", "BE", "FALSE", "TRUE", "THAT", "DOT", 
                      "OBLIGATION", "EACH", "SOME", "NO", "A", "OF", "MATCHES", 
                      "EQUAL", "LESSER_THAN", "GREATER_THAN", "BEFORE", 
                      "AFTER", "HAVE", "QUOTED_CONTENT", "IDENTIFIER", "WHITESPACE" ];

var ruleNames =  [ "regex", "date_value", "numeric_value", "boolean_value", 
                   "is_in", "be", "matches", "have", "equal", "lesser_than", 
                   "greater_than", "before", "after", "and", "or", "not", 
                   "binary_logical_op", "unary_logical_op", "constraint_operator", 
                   "constraint_operation", "unary_expr", "binary_expr", 
                   "constraint", "term", "attribut_specifier", "constraint_specifier", 
                   "specifier", "a", "no", "some", "each", "quantifier", 
                   "quantified_context", "context", "obligation", "modality", 
                   "business_rule", "business_rules", "main" ];

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
SBVRParser.COMA = 3;
SBVRParser.NOT = 4;
SBVRParser.AND = 5;
SBVRParser.OR = 6;
SBVRParser.IS_IN = 7;
SBVRParser.BE = 8;
SBVRParser.FALSE = 9;
SBVRParser.TRUE = 10;
SBVRParser.THAT = 11;
SBVRParser.DOT = 12;
SBVRParser.OBLIGATION = 13;
SBVRParser.EACH = 14;
SBVRParser.SOME = 15;
SBVRParser.NO = 16;
SBVRParser.A = 17;
SBVRParser.OF = 18;
SBVRParser.MATCHES = 19;
SBVRParser.EQUAL = 20;
SBVRParser.LESSER_THAN = 21;
SBVRParser.GREATER_THAN = 22;
SBVRParser.BEFORE = 23;
SBVRParser.AFTER = 24;
SBVRParser.HAVE = 25;
SBVRParser.QUOTED_CONTENT = 26;
SBVRParser.IDENTIFIER = 27;
SBVRParser.WHITESPACE = 28;

SBVRParser.RULE_regex = 0;
SBVRParser.RULE_date_value = 1;
SBVRParser.RULE_numeric_value = 2;
SBVRParser.RULE_boolean_value = 3;
SBVRParser.RULE_is_in = 4;
SBVRParser.RULE_be = 5;
SBVRParser.RULE_matches = 6;
SBVRParser.RULE_have = 7;
SBVRParser.RULE_equal = 8;
SBVRParser.RULE_lesser_than = 9;
SBVRParser.RULE_greater_than = 10;
SBVRParser.RULE_before = 11;
SBVRParser.RULE_after = 12;
SBVRParser.RULE_and = 13;
SBVRParser.RULE_or = 14;
SBVRParser.RULE_not = 15;
SBVRParser.RULE_binary_logical_op = 16;
SBVRParser.RULE_unary_logical_op = 17;
SBVRParser.RULE_constraint_operator = 18;
SBVRParser.RULE_constraint_operation = 19;
SBVRParser.RULE_unary_expr = 20;
SBVRParser.RULE_binary_expr = 21;
SBVRParser.RULE_constraint = 22;
SBVRParser.RULE_term = 23;
SBVRParser.RULE_attribut_specifier = 24;
SBVRParser.RULE_constraint_specifier = 25;
SBVRParser.RULE_specifier = 26;
SBVRParser.RULE_a = 27;
SBVRParser.RULE_no = 28;
SBVRParser.RULE_some = 29;
SBVRParser.RULE_each = 30;
SBVRParser.RULE_quantifier = 31;
SBVRParser.RULE_quantified_context = 32;
SBVRParser.RULE_context = 33;
SBVRParser.RULE_obligation = 34;
SBVRParser.RULE_modality = 35;
SBVRParser.RULE_business_rule = 36;
SBVRParser.RULE_business_rules = 37;
SBVRParser.RULE_main = 38;

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
        this.state = 78;
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
        this.state = 80;
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
        this.state = 82;
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
        this.state = 84;
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

function Is_inContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_is_in;
    return this;
}

Is_inContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Is_inContext.prototype.constructor = Is_inContext;

Is_inContext.prototype.IS_IN = function() {
    return this.getToken(SBVRParser.IS_IN, 0);
};




SBVRParser.Is_inContext = Is_inContext;

SBVRParser.prototype.is_in = function() {

    var localctx = new Is_inContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SBVRParser.RULE_is_in);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(SBVRParser.IS_IN);
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




SBVRParser.BeContext = BeContext;

SBVRParser.prototype.be = function() {

    var localctx = new BeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SBVRParser.RULE_be);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(SBVRParser.BE);
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




SBVRParser.MatchesContext = MatchesContext;

SBVRParser.prototype.matches = function() {

    var localctx = new MatchesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SBVRParser.RULE_matches);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(SBVRParser.MATCHES);
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




SBVRParser.HaveContext = HaveContext;

SBVRParser.prototype.have = function() {

    var localctx = new HaveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SBVRParser.RULE_have);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(SBVRParser.HAVE);
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




SBVRParser.EqualContext = EqualContext;

SBVRParser.prototype.equal = function() {

    var localctx = new EqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SBVRParser.RULE_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(SBVRParser.EQUAL);
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
        this.state = 96;
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
        this.state = 98;
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
        this.state = 100;
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
        this.state = 102;
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

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;

AndContext.prototype.AND = function() {
    return this.getToken(SBVRParser.AND, 0);
};




SBVRParser.AndContext = AndContext;

SBVRParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SBVRParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(SBVRParser.AND);
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

function OrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_or;
    return this;
}

OrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrContext.prototype.constructor = OrContext;

OrContext.prototype.OR = function() {
    return this.getToken(SBVRParser.OR, 0);
};




SBVRParser.OrContext = OrContext;

SBVRParser.prototype.or = function() {

    var localctx = new OrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SBVRParser.RULE_or);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(SBVRParser.OR);
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

function NotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_not;
    return this;
}

NotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotContext.prototype.constructor = NotContext;

NotContext.prototype.NOT = function() {
    return this.getToken(SBVRParser.NOT, 0);
};




SBVRParser.NotContext = NotContext;

SBVRParser.prototype.not = function() {

    var localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SBVRParser.RULE_not);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(SBVRParser.NOT);
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

function Binary_logical_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_binary_logical_op;
    return this;
}

Binary_logical_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_logical_opContext.prototype.constructor = Binary_logical_opContext;

Binary_logical_opContext.prototype.or = function() {
    return this.getTypedRuleContext(OrContext,0);
};

Binary_logical_opContext.prototype.and = function() {
    return this.getTypedRuleContext(AndContext,0);
};




SBVRParser.Binary_logical_opContext = Binary_logical_opContext;

SBVRParser.prototype.binary_logical_op = function() {

    var localctx = new Binary_logical_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SBVRParser.RULE_binary_logical_op);
    try {
        this.state = 112;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.OR:
            this.enterOuterAlt(localctx, 1);
            this.state = 110;
            this.or();
            break;
        case SBVRParser.AND:
            this.enterOuterAlt(localctx, 2);
            this.state = 111;
            this.and();
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

function Unary_logical_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_unary_logical_op;
    return this;
}

Unary_logical_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_logical_opContext.prototype.constructor = Unary_logical_opContext;

Unary_logical_opContext.prototype.not = function() {
    return this.getTypedRuleContext(NotContext,0);
};




SBVRParser.Unary_logical_opContext = Unary_logical_opContext;

SBVRParser.prototype.unary_logical_op = function() {

    var localctx = new Unary_logical_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SBVRParser.RULE_unary_logical_op);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.not();
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

function Constraint_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_constraint_operator;
    return this;
}

Constraint_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constraint_operatorContext.prototype.constructor = Constraint_operatorContext;

Constraint_operatorContext.prototype.have = function() {
    return this.getTypedRuleContext(HaveContext,0);
};

Constraint_operatorContext.prototype.matches = function() {
    return this.getTypedRuleContext(MatchesContext,0);
};

Constraint_operatorContext.prototype.equal = function() {
    return this.getTypedRuleContext(EqualContext,0);
};

Constraint_operatorContext.prototype.lesser_than = function() {
    return this.getTypedRuleContext(Lesser_thanContext,0);
};

Constraint_operatorContext.prototype.greater_than = function() {
    return this.getTypedRuleContext(Greater_thanContext,0);
};

Constraint_operatorContext.prototype.before = function() {
    return this.getTypedRuleContext(BeforeContext,0);
};

Constraint_operatorContext.prototype.after = function() {
    return this.getTypedRuleContext(AfterContext,0);
};

Constraint_operatorContext.prototype.is_in = function() {
    return this.getTypedRuleContext(Is_inContext,0);
};




SBVRParser.Constraint_operatorContext = Constraint_operatorContext;

SBVRParser.prototype.constraint_operator = function() {

    var localctx = new Constraint_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SBVRParser.RULE_constraint_operator);
    try {
        this.state = 124;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.HAVE:
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.have();
            break;
        case SBVRParser.MATCHES:
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.matches();
            break;
        case SBVRParser.EQUAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 118;
            this.equal();
            break;
        case SBVRParser.LESSER_THAN:
            this.enterOuterAlt(localctx, 4);
            this.state = 119;
            this.lesser_than();
            break;
        case SBVRParser.GREATER_THAN:
            this.enterOuterAlt(localctx, 5);
            this.state = 120;
            this.greater_than();
            break;
        case SBVRParser.BEFORE:
            this.enterOuterAlt(localctx, 6);
            this.state = 121;
            this.before();
            break;
        case SBVRParser.AFTER:
            this.enterOuterAlt(localctx, 7);
            this.state = 122;
            this.after();
            break;
        case SBVRParser.IS_IN:
            this.enterOuterAlt(localctx, 8);
            this.state = 123;
            this.is_in();
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

function Constraint_operationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_constraint_operation;
    return this;
}

Constraint_operationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constraint_operationContext.prototype.constructor = Constraint_operationContext;

Constraint_operationContext.prototype.constraint_operator = function() {
    return this.getTypedRuleContext(Constraint_operatorContext,0);
};

Constraint_operationContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};




SBVRParser.Constraint_operationContext = Constraint_operationContext;

SBVRParser.prototype.constraint_operation = function() {

    var localctx = new Constraint_operationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SBVRParser.RULE_constraint_operation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.constraint_operator();
        this.state = 127;
        this.context(0);
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

function Unary_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_unary_expr;
    return this;
}

Unary_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_exprContext.prototype.constructor = Unary_exprContext;

Unary_exprContext.prototype.unary_logical_op = function() {
    return this.getTypedRuleContext(Unary_logical_opContext,0);
};

Unary_exprContext.prototype.constraint_operation = function() {
    return this.getTypedRuleContext(Constraint_operationContext,0);
};




SBVRParser.Unary_exprContext = Unary_exprContext;

SBVRParser.prototype.unary_expr = function() {

    var localctx = new Unary_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SBVRParser.RULE_unary_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.unary_logical_op();
        this.state = 130;
        this.constraint_operation();
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

function Binary_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_binary_expr;
    return this;
}

Binary_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_exprContext.prototype.constructor = Binary_exprContext;

Binary_exprContext.prototype.constraint_operation = function() {
    return this.getTypedRuleContext(Constraint_operationContext,0);
};

Binary_exprContext.prototype.binary_logical_op = function() {
    return this.getTypedRuleContext(Binary_logical_opContext,0);
};

Binary_exprContext.prototype.constraint = function() {
    return this.getTypedRuleContext(ConstraintContext,0);
};




SBVRParser.Binary_exprContext = Binary_exprContext;

SBVRParser.prototype.binary_expr = function() {

    var localctx = new Binary_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SBVRParser.RULE_binary_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.constraint_operation();
        this.state = 133;
        this.binary_logical_op();
        this.state = 134;
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

ConstraintContext.prototype.constraint_operation = function() {
    return this.getTypedRuleContext(Constraint_operationContext,0);
};

ConstraintContext.prototype.unary_expr = function() {
    return this.getTypedRuleContext(Unary_exprContext,0);
};

ConstraintContext.prototype.binary_expr = function() {
    return this.getTypedRuleContext(Binary_exprContext,0);
};




SBVRParser.ConstraintContext = ConstraintContext;

SBVRParser.prototype.constraint = function() {

    var localctx = new ConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SBVRParser.RULE_constraint);
    try {
        this.state = 139;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 136;
            this.constraint_operation();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 137;
            this.unary_expr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 138;
            this.binary_expr();
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

TermContext.prototype.date_value = function() {
    return this.getTypedRuleContext(Date_valueContext,0);
};

TermContext.prototype.numeric_value = function() {
    return this.getTypedRuleContext(Numeric_valueContext,0);
};

TermContext.prototype.boolean_value = function() {
    return this.getTypedRuleContext(Boolean_valueContext,0);
};

TermContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
};




SBVRParser.TermContext = TermContext;

SBVRParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SBVRParser.RULE_term);
    try {
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.match(SBVRParser.IDENTIFIER);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.date_value();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 143;
            this.numeric_value();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 144;
            this.boolean_value();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 145;
            this.regex();
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

Attribut_specifierContext.prototype.COMA = function() {
    return this.getToken(SBVRParser.COMA, 0);
};




SBVRParser.Attribut_specifierContext = Attribut_specifierContext;

SBVRParser.prototype.attribut_specifier = function() {

    var localctx = new Attribut_specifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SBVRParser.RULE_attribut_specifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(SBVRParser.OF);
        this.state = 149;
        this.context(0);
        this.state = 150;
        this.match(SBVRParser.COMA);
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
    this.enterRule(localctx, 50, SBVRParser.RULE_constraint_specifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(SBVRParser.THAT);
        this.state = 153;
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
    this.enterRule(localctx, 52, SBVRParser.RULE_specifier);
    try {
        this.state = 157;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.OF:
            this.enterOuterAlt(localctx, 1);
            this.state = 155;
            this.attribut_specifier();
            break;
        case SBVRParser.THAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 156;
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
    this.enterRule(localctx, 54, SBVRParser.RULE_a);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
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
    this.enterRule(localctx, 56, SBVRParser.RULE_no);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
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
    this.enterRule(localctx, 58, SBVRParser.RULE_some);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
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
    this.enterRule(localctx, 60, SBVRParser.RULE_each);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
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

QuantifierContext.prototype.each = function() {
    return this.getTypedRuleContext(EachContext,0);
};

QuantifierContext.prototype.some = function() {
    return this.getTypedRuleContext(SomeContext,0);
};

QuantifierContext.prototype.no = function() {
    return this.getTypedRuleContext(NoContext,0);
};

QuantifierContext.prototype.a = function() {
    return this.getTypedRuleContext(AContext,0);
};




SBVRParser.QuantifierContext = QuantifierContext;

SBVRParser.prototype.quantifier = function() {

    var localctx = new QuantifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SBVRParser.RULE_quantifier);
    try {
        this.state = 171;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.EACH:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.each();
            break;
        case SBVRParser.SOME:
            this.enterOuterAlt(localctx, 2);
            this.state = 168;
            this.some();
            break;
        case SBVRParser.NO:
            this.enterOuterAlt(localctx, 3);
            this.state = 169;
            this.no();
            break;
        case SBVRParser.A:
            this.enterOuterAlt(localctx, 4);
            this.state = 170;
            this.a();
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

function Quantified_contextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SBVRParser.RULE_quantified_context;
    return this;
}

Quantified_contextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Quantified_contextContext.prototype.constructor = Quantified_contextContext;

Quantified_contextContext.prototype.quantifier = function() {
    return this.getTypedRuleContext(QuantifierContext,0);
};

Quantified_contextContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};




SBVRParser.Quantified_contextContext = Quantified_contextContext;

SBVRParser.prototype.quantified_context = function() {

    var localctx = new Quantified_contextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SBVRParser.RULE_quantified_context);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.quantifier();
        this.state = 174;
        this.context(0);
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

ContextContext.prototype.quantified_context = function() {
    return this.getTypedRuleContext(Quantified_contextContext,0);
};

ContextContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

ContextContext.prototype.context = function() {
    return this.getTypedRuleContext(ContextContext,0);
};

ContextContext.prototype.specifier = function() {
    return this.getTypedRuleContext(SpecifierContext,0);
};



SBVRParser.prototype.context = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ContextContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 66;
    this.enterRecursionRule(localctx, 66, SBVRParser.RULE_context, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.EACH:
        case SBVRParser.SOME:
        case SBVRParser.NO:
        case SBVRParser.A:
            this.state = 177;
            this.quantified_context();
            break;
        case SBVRParser.QUOTED_CONTENT:
        case SBVRParser.IDENTIFIER:
            this.state = 178;
            this.term();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 185;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ContextContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, SBVRParser.RULE_context);
                this.state = 181;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 182;
                this.specifier(); 
            }
            this.state = 187;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
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
    this.enterRule(localctx, 68, SBVRParser.RULE_obligation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
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
    this.enterRule(localctx, 70, SBVRParser.RULE_modality);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
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

Business_ruleContext.prototype.COMA = function() {
    return this.getToken(SBVRParser.COMA, 0);
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
    this.enterRule(localctx, 72, SBVRParser.RULE_business_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.context(0);
        this.state = 193;
        this.match(SBVRParser.COMA);
        this.state = 194;
        this.modality();
        this.state = 195;
        this.constraint();
        this.state = 196;
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
    this.enterRule(localctx, 74, SBVRParser.RULE_business_rules);
    try {
        this.state = 202;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SBVRParser.EACH:
        case SBVRParser.SOME:
        case SBVRParser.NO:
        case SBVRParser.A:
        case SBVRParser.QUOTED_CONTENT:
        case SBVRParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 198;
            this.business_rule();
            this.state = 199;
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
    this.enterRule(localctx, 76, SBVRParser.RULE_main);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.business_rules();
        this.state = 205;
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


SBVRParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 33:
			return this.context_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SBVRParser.prototype.context_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SBVRParser = SBVRParser;
