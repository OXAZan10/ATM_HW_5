const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('scenarios for 2 arguments', function(){
    let result;
    beforeEach(function(){
        result = new Calculator();
    });
    afterEach(function(){
        result = null;
    });
    it('Should return result =2 for 1+1', function(){
        expect(result.add(1,1)).to.be.equal(2);
    });
    it('Should return result =1 for 1+0', function(){
        expect(result.add(1,0)).to.be.equal(1);
    });
    it('Should return result =0 for -1+1', function(){
        expect(result.add(-1,1)).to.be.equal(0);
    });
    it('Should return result =0 for 1*0', function(){
        expect(result.multiply(1,0)).to.be.equal(0);
    });
    it('Should return result =1 for 1*1', function(){
        expect(result.multiply(1,1)).to.be.equal(1);
    });
    it('Should return result =1 for -1*1', function(){
        expect(result.multiply(-1,1)).to.be.equal(-1);
    });
});