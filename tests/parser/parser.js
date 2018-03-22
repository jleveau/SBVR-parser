const chai = require('chai');
const expect = chai.expect;
const path = require("path");
const Parser = require('../../parser/parser');

describe('Recognize corpus rules', () => {

    it('parse a set of rules', (done) => {
        Parser.parseFile(path.join(__dirname, 'test_corpus'))
            .then((rules) => {
                console.log(JSON.stringify(rules));
                done();
            })
            .catch((error) => {
                return done(error);
            });
    });
});

