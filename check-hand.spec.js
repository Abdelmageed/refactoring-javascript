const assert = require('assert');

const check = require('./check-hand');
const checkHand = check.checkHand;
const isPair = check.isPair;
const isTriple = check.isTriple;
const isStraight = check.isStraight;
const getMultiples = check.getMultiples;
const getValues = check.getValues;
const getSuits = check.getSuits;
const getHighestCount = check.getHighestCount;
const getCounts = check.getCounts;
const areValuesInSequence = check.areValuesInSequence;

describe('check-hand', () => {
    it('finds duplicates', () => {
        const hand = ['3-S', '3-C', '3-H', '5-S', '6-H'];

        assert(getMultiples(hand) === 3);
    });

    it('gets values', () => {
        const hand = ['3-S', '3-C', '3-H', '5-S', '6-H'];

        const expected = ['3', '3', '3', '5', '6'];

        assert.deepEqual(getValues(hand), expected);
    });

    it('gets suits', () => {
        const hand = ['3-S', '3-C', '3-H', '5-S', '6-H'];

        const expected = ['S', 'C', 'H', 'S', 'H'];
        
        assert.deepEqual(getSuits(hand), expected);
    })
    

    it('gets highest count', () => {
        const values = ['3', '3', '3', '5', '6'];

        assert(getHighestCount(values) === 3);
    });

    it('gets all counts sorted descendingly', () => {
        const values = ['3', '3', '3', '5', '6'];
        
        const expected = [3, 1, 1];

        assert.deepEqual(getCounts(values), expected);
    })
    
    it('finds a pair', () => {
        assert(isPair(['2-H', '2-C', '7-D', '3-S', '4-S']));
    });

    it('finds a triple', () => {
        assert(isTriple(['2-H', '2-C', '2-D', '3-S', '4-S']));
    });

    it('detects values in sequence', () => {
        const hand = ['1', '2', '3', '4', '5'];
        
        assert(areValuesInSequence(hand));
    });
    
    it('handles pair', () => {
        assert(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C'])==='pair');
    });

    it('handles three of a kind', () => {
        assert(checkHand(['3-H', '3-C', '3-D', '5-H', '2-H'])==='three of a kind');
    });

    it('handles four of a kind', () => {
        const hand = ['2-H', '2-S', '2-C', '2-D', '6-S'];

        assert(checkHand(hand) === 'four of a kind');
    });

    it('handles high card', () => {
        const hand = ['1-H', '9-H', '3-S', '4-C', '5-D'];

        assert(checkHand(hand) === 'high card');
    });

    it('handles flush', () => {
        const hand = ['1-H', '2-H', '3-H', '9-H', '8-H'];

        assert(checkHand(hand) === 'flush');
    });

    it('handles straight', () => {
        const hand = ['1-H', '2-S', '3-D', '4-H', '5-C'];

        assert(checkHand(hand) === 'straight');
    });

    it('handles straight flush', () => {
        const hand = ['1-H', '2-H', '3-H', '4-H', '5-H'];

        assert(checkHand(hand) === 'straight flush');
    });

    it('handles full house', () => {
        const hand = ['2-H', '2-C', '4-S', '4-C', '4-D'];

        assert(checkHand(hand) === 'full house');
    });

    it('handles two pair', () => {
        const hand = ['2-H', '2-C', '4-S', '4-C', '9-D'];

        assert(checkHand(hand) === 'two pair');
    })

});