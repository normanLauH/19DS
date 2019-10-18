//Cards: 0 = clubs, 1= diamonds, 2 = hearts, and 3 = spades(pica)

function factorial(f) {
    var fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

const P = (n, r) => {
    return (factorial(n)) / (factorial(n - r));
}

const C = (n, r) => {
    return (P(n, r)) / (factorial(r));
}


class Cards {
    constructor() {

    }

    printCard(n) {
        let card = {
            data: [ Math.floor(n % 13), Math.floor(n / 13) ]
        }
        return card;
    }

    twoPairs() {
        let totalCases = C(52, 5);
        let tpCases = C(13, 2) * Math.pow(C(4,2), 2) * C(11, 1) * C(4, 1);
        let probability = tpCases / totalCases;
        return probability;
    }
}

(function useCards() {
    let cartas = new Cards();
    let carta32 = cartas.printCard(32);
    console.log("Carta: " + carta32.data);
    console.log("Probabilidad de Dos Pares (Equipo 2): " + cartas.twoPairs())
})()