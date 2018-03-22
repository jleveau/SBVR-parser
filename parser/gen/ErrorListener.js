const ErrorListener = require('antlr4/error/index').ErrorListener;

class CustomErrorListener extends ErrorListener {

    syntaxError(recognizer, offendingSymbol, line, column, msg, e)  {
        throw new Error(msg + " at line : " + line + ", col : " + column);
    }

}

module.exports = CustomErrorListener;