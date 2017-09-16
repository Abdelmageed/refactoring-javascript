const checkHand = hand => {
    if(isFullHouse(hand)) {
        return 'full house';
    }
    if(isTwoPair(hand)) {
        return 'two pair';
    }
    if(isPair(hand)) {
        return 'pair';
    }
    if(isTriple(hand)) {
        return 'three of a kind';
    }
    if(isQuadruple(hand)) {
        return 'four of a kind';
    }
    if(isStraightFlush(hand)) {
        return 'straight flush';
    }
    if(isFlush(hand)) {
        return 'flush';
    }
    if(isStraight(hand)) {
        return 'straight';
    }
    return 'high card';
}

const isPair = hand => getMultiples(hand) === 2;

const isTriple = hand => getMultiples(hand) === 3;

const isQuadruple = hand => getMultiples(hand) === 4;

const isFlush = hand => getHighestCount(getSuits(hand)) === 5;

const areValuesInSequence = values => {
    values.sort();
    let inSequence = true;
    for(let i = 1; i < values.length; i++) {
        if(+values[i] - +values[i - 1] !== 1) { inSequence = false; break; }
    }
    
    return inSequence;
}

const isStraight = hand => areValuesInSequence(getValues(hand));

const isStraightFlush = hand => isStraight(hand) && isFlush(hand);

const isFullHouse = hand => {
    const values = getValues(hand);
    const counts = getCounts(values);
    return counts[0] === 3 && counts[1] === 2;
};

const isTwoPair = hand => {
    const values = getValues(hand);
    const counts = getCounts(values);

    return counts[0] === 2 && counts[1] === 2;
};

const getCounts = values => {
    valueCounts = {};
    values.forEach(value => valueCounts[value] ? valueCounts[value]++ : valueCounts[value] = 1);

    counts = Object.values(valueCounts);
    counts.sort((a, b) => b - a);
    return counts;
};

const getMultiples = hand => {
    const values = getValues(hand);
    
    return getHighestCount(values);
}

const getValues = hand => hand.map(card => card.split('-')[0]);

const getSuits = hand => hand.map(card => card.split('-')[1]);

const getHighestCount = values => {
    const counts = {};
    values.forEach(value => {
        counts[value] ? counts[value]++ : counts[value] = 1;
    });

    return Object.values(counts).reduce((max, count) => max < count ? count : max, 0);
};

module.exports = {
    checkHand,
    isPair,
    isTriple,
    isStraight,
    areValuesInSequence,
    getMultiples,
    getValues,
    getSuits,
    getHighestCount,
    getCounts
};