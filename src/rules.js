

function isStraightFlush(communityCards, playerCards) {
    let flush = []
    const allCards = communityCards.concat(playerCards)
    if(isFlush(communityCards, playerCards))
        flush = allCards.filter(card => allCards.filter(e => e.suit === card.suit).length >= 5)
    console.log(flush)
    return haveStraight([], flush)
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
        .filter((card, i, allCards) => allCards.filter(e => e.value === card.value).length === 2).length >= 4 && !isFlush(communityCards, playerCards)
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

//Retorna a força da mão de um jogador, varia de 0 a 8
export function getForce(communityCards, playerCards) {
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

export function handToString(communityCards, playerCards) {
    if (isStraightFlush(communityCards, playerCards)) return "Straight Flush"
    if (isFourOfAKind(communityCards, playerCards)) return "For of a Kind"
    if (isFullHouse(communityCards, playerCards)) return "FullHouse"
    if (isFlush(communityCards, playerCards)) return "Flush"
    if (isStraight(communityCards, playerCards)) return "Straight"
    if (isThreeOfAKind(communityCards, playerCards)) return "Three of a Kind"
    if (isTwoPair(communityCards, playerCards)) return "Two Pair"
    if (isPair(communityCards, playerCards)) return "Pair"
    return "High Card"
}

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

