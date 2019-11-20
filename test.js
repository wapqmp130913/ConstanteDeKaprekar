var assert = require('assert');
const main = require('../Kaprekar/main')

describe('kaprekar test', function() {
    describe('invert number function', function() {
        it('i should pass 1234 function must return 5432', function() {
            res = main.invertNumber('5432');
            assert.equal(res,2345);
        });
        it('i should pass 1234 function must return 5432', function() {
            res = main.invertNumber('1112');
            assert.equal(res,2111);
        });
        it('i should pass 1234 function must return 5432', function() {
            res = main.invertNumber('0011');
            assert.equal(res,1100);
        });
    });
});

describe('kaprekar test', function() {
    describe('difference number function', function() {
        it('i should pass two numbers and function will make difference between them: 1234 - 4321, must return 3087‬', function() {
            res = main.difference(4321,1234);
            assert.equal(res,3087);
        });

        it('i should pass two numbers and function will make difference between them: 2111  - 1112 , must return 0999', function() {
            res = main.difference(2111,1112);
            assert.equal(res,999);
        });
    });
});

describe('kaprekar test', function() {
    describe('identity repdigits function', function() {
        it('i should give a number to the function and this one will identify if it is repdigits: 1111 will return true‬', function() {
            res = main.isRepeatDigit(111111);
            assert.equal(res,true);
        });
        it('i should give a number to the function and this one will identify if it is repdigits: 32534645 will return true‬', function() {
            res = main.isRepeatDigit(32534645);
            assert.equal(res,false);
        });
    });
});

describe('kaprekar test', function() {
    describe('number length function', function() {
        it('i should pass a number, and function must return the count of number in there. 4324545 has 7 numbers ', function() {
            res = main.numberLength(4324545);
            assert.equal(res,7);
        });
    });
});



describe('kaprekar test', function() {
    describe('validation function', function() {
        it('first i send a number which has less than four digits 1, function must return false ', function() {
            res = main.validationFunction(1);
            assert.equal(res,false);
        });
        it('first i send a number which has less than four digits 13, function must return false ', function() {
            res = main.validationFunction(13);
            assert.equal(res,false);
        });
     
    });
});


describe('kaprekar test', function() {
    describe('iteration Kaprekar function', function() {
        it('i will pass a number with 0, function must give me the iterations: 1121 ', function() {
            res = main.iterationKaprekar(1121);
            assert.equal(res,5);
        }); 
        it('i will pass a number with 0, function must give me the iterations: 6174 ', function() {
            res = main.iterationKaprekar(6174);
            assert.equal(res,0);
        }); 
        it('i will pass a number with 0, function must give me the iterations: 1893 ', function() {
            res = main.iterationKaprekar(1893);
            assert.equal(res,7);
        }); 
        
        
    });
});

describe('kaprekar test', function() {
    describe('order function', function() {
        
        it('i will pass a number that contains a 0, this test must return the number reversed with the 0', function() {
            res = main.orderNumber('1110');
            assert.equal(res,'0111');
        }); 
    });
});





