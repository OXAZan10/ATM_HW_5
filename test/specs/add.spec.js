const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('add positive scenarios', function(){
    let result;
    beforeEach(function(){
        result = new Calculator();
    });
    it('Should return summ', function(){
        expect(result.add(1,1)).to.be.equal(2);

    });
});