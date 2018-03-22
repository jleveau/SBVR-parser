const antlr4 = require('antlr4/index');
const SBVRLexer = require('./gen/SBVRLexer');
const SBVRParser = require('./gen/SBVRParser');
const SBVRVisitor = require('./gen/SBVRVisitor');
const CustomErrorListener = require('./gen/ErrorListener');

class Parser {

    parseFile(input_file) {
        return new Promise((resolve, reject) => {
            try {
                const chars = new antlr4.FileStream(input_file);
                const lexer = new SBVRLexer.SBVRLexer(chars);
                const tokens = new antlr4.CommonTokenStream(lexer);
                const parser = new SBVRParser.SBVRParser(tokens);
                parser.removeErrorListeners();
                parser.addErrorListener(new CustomErrorListener());
                parser.buildParseTrees = true;
                const visitor = new SBVRVisitor.SBVRVisitor();

                resolve(visitor.visitMain(parser.main()));
            }
            catch (error) {
                return reject(error);
            }
        });
    }
}

module.exports = new Parser();
