function isStraightFlush(communityCards, playerCards) {
    return isFlush(communityCards, playerCards) && haveStraight(communityCards, playerCards)
}

function isFourOfAKind(communityCards, playerCards) {
    return communityCards
        .concat(playerCards)
        .some((card, i, allCards) => allCards.filter(e => e.value === card.value).length === 4)
}

function isFullHouse(communityCards, playerCards) {
    return haveThreeOfAKind(communityCards, playerCards) && havePair(communityCards, playerCards)
}

function isFlush(communityCards, playerCards) {
    return communityCards
        .concat(playerCards)
        .some((card, i, allCards) => allCards.filter(e => e.suit === card.suit).length >= 5)
}

function isStraight(communityCards, playerCards) {
    return haveStraight(communityCards, playerCards) && !isStraightFlush(communityCards, playerCards) && !isFlush(communityCards, playerCards)
}

function isThreeOfAKind(communityCards, playerCards) {
    return haveThreeOfAKind(communityCards, playerCards) && !isFullHouse(communityCards, playerCards) && !isFourOfAKind(communityCards, playerCards) && !isFlush(communityCards, playerCards)
}

function isTwoPair(communityCards, playerCards) {
    return communityCards
        .concat(playerCards)
        .filter((card, i, allCards) => allCards.filter(e => e.value === card.value).length === 2).length === 4 && !isFlush(communityCards, playerCards)
}

function isPair(communityCards, playerCards) {
    return havePair(communityCards, playerCards) && !isFullHouse(communityCards, playerCards) && !isFourOfAKind(communityCards, playerCards) && !isTwoPair(communityCards, playerCards) && !isFlush(communityCards, playerCards)
}

function haveStraight(communityCards, playerCards) {
    const allCards = communityCards.concat(playerCards).sort((a, b) => a.value - b.value)
    let counter = 0
    for (let i = 0; i < allCards.length; i++) {
        if ((allCards[i].value === 13 && allCards[0].value === 1) || allCards[i].value === allCards[i + 1]?.value - 1) {
            counter++
            if (counter >= 4)
                return true
        }
        else {
            counter = 0
        }
    }
    return false
}

function haveThreeOfAKind(communityCards, playerCards) {
    return communityCards
        .concat(playerCards)
        .some((card, i, allCards) => allCards.filter(e => e.value === card.value).length === 3)
}

function havePair(communityCards, playerCards) {
    return communityCards
        .concat(playerCards)
        .some((card, i, allCards) => allCards.filter(e => e.value === card.value).length === 2)
}

//Compara dois jogadores e retorna qual o vencedor, se for empate retorna 0
function getWinner(communityCards, playerOneCards, playerTwoCards) {
    const forceOne = getForce(communityCards, playerOneCards)
    const forceTwo = getForce(communityCards, playerTwoCards)
    if (forceOne === forceTwo)
        return isDraw(communityCards, playerOneCards, playerTwoCards, forceOne)
    if (forceOne > forceTwo)
        return 1
    return 2
}

//Se playerOne venceu return 1, se playerTwo venceu return 2, se for empate retorna 0
function isDraw(communityCards, playerOneCards, playerTwoCards, force) {
    const oneCards = communityCards.concat(playerOneCards).map(e => e.value === 1 ? { ...e, value: 14 } : e).sort((a, b) => b.value - a.value)
    const twoCards = communityCards.concat(playerTwoCards).map(e => e.value === 1 ? { ...e, value: 14 } : e).sort((a, b) => b.value - a.value)
    switch (force) {
        case 0:
            return highCard(5, oneCards, twoCards)
        case 1:
            
    }
}

function highCard(totalCards, oneCards, twoCards) {
    for (let i = 0; i < totalCards; i++) {
        if (oneCards[i].value > twoCards[i].value)
            return 1
        else if (oneCards[i].value < twoCards[i].value)
            return 2
    }
    return 0
}

//Retorna a força da mão de um jogador, varia de 0 a 8
function getForce(communityCards, playerCards) {
    if (isStraightFlush(communityCards, playerCards))
        return 8
    if (isFourOfAKind(communityCards, playerCards))
        return 7
    if (isFullHouse(communityCards, playerCards))
        return 6
    if (isFlush(communityCards, playerCards))
        return 5
    if (isStraight(communityCards, playerCards))
        return 4
    if (isThreeOfAKind(communityCards, playerCards))
        return 3
    if (isTwoPair(communityCards, playerCards))
        return 2
    if (isPair(communityCards, playerCards))
        return 1
    return 0
}

/* [{}, {}, {}].reduce((acc, curr) => {
    if (curr ganhou ao acc) {å
        curr passa a ser o acc
    }
}) */

const community = [
    { value: 3, suit: "a" },
    { value: 5, suit: "b" },
    { value: 7, suit: "c" },
    { value: 10, suit: "d" },
    { value: 9, suit: "e" }
]
const player1 = [
    { value: 1, suit: "e" },
    { value: 2, suit: "q" }
]
const player2 = [
    { value: 13, suit: "a" },
    { value: 12, suit: "j" }
]

/* console.log({
    StraightFlush: isStraightFlush(community, player),
    FourOfAKind: isFourOfAKind(community, player),
    FullHouse: isFullHouse(community, player),
    Flush: isFlush(community, player),
    Straight: isStraight(community, player),
    ThreeOfAKind: isThreeOfAKind(community, player),
    TwoPair: isTwoPair(community, player),
    Pair: isPair(community, player)
}) */

console.log(isDraw(community, player1, player2, getForce(community, player1)))