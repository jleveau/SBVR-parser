grammar SBVR;

regex                        : QUOTED_CONTENT;

date_value                   : IDENTIFIER;
numeric_value                : IDENTIFIER;
boolean_value                : IDENTIFIER;

is_in                        : IS_IN context;
be                           : BE boolean_value;
matches                      : MATCHES regex;
have                         : HAVE context;
equal                        : EQUAL context;
lesser_than                  : LESSER_THAN numeric_value;
greater_than                 : GREATER_THAN numeric_value;
before                       : BEFORE date_value;
after                        : AFTER date_value;

and                          : AND;
or                           : OR;
not                          : NOT;
binary_logical_op            : or | and;
unary_logical_op             : not;

constraint_elem              : have | matches | equal | lesser_than| greater_than | before | after | is_in;
constraint_expr              : unary_logical_op constraint_elem | constraint_elem;
constraint                   : constraint_expr binary_logical_op constraint | constraint_expr;

term                         : IDENTIFIER;
attribut_specifier           : OF context;
constraint_specifier         : THAT constraint;
specifier                    : attribut_specifier | constraint_specifier;

a                            : A;
no                           : NO;
some                         : SOME;
each                         : EACH;
quantifier                   : EACH | SOME | NO | A;

obligation                   : OBLIGATION;
modality                     : obligation;

quantified_context           : quantifier context;

context                      : context specifier |
                               quantified_context |
                               term;

business_rule                : context modality constraint DOT;

business_rules               : business_rule business_rules |;
main                         : business_rules EOF;

/*
 * Lexer Rules
 */

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment DIGIT      : [0-9] ;
fragment COMMENT    : '#' ~[\r\n]* ;
fragment ESCAPED_QUOTE : '\\"';
fragment CONTENT    : ('\\"' | . )+?;
fragment QUOTE      : '"';

SKIPED              : ( WHITESPACE | COMMENT | LINE_JOINING ) -> skip ;
LINE_JOINING        : ('\r'? '\n' | '\r')+ ;
NOT                 : 'not';
AND                 : 'and';
OR                  : 'or';
IS_IN               : 'is in' | 'are in';
BE                  : 'be';
FALSE               : 'false';
TRUE                : 'true';
THAT                : 'that';
DOT                 : '.';
OBLIGATION          : 'must';
EACH                : 'each';
SOME                : 'some';
NO                  : 'no';
A                   : 'a';
OF                  : 'of';
MATCHES             : 'matches' | 'match';
EQUAL               : 'is equal to';
LESSER_THAN         : 'is lesser than';
GREATER_THAN        : 'is greater than';
BEFORE              : 'before';
AFTER               : 'after';
HAVE                : 'has' | 'have';


QUOTED_CONTENT      : QUOTE CONTENT QUOTE;
IDENTIFIER			: (LOWERCASE | UPPERCASE | '_' |DIGIT)+ ;
WHITESPACE          : (' ' | '\t')+ ;
