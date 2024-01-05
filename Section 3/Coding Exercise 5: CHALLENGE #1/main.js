const calcAverage = (a, b, c) => (a + b + c) / 3;

let koalaScore = calcAverage(44, 23, 71);
let dolphinScore = calcAverage(65, 54, 49);

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgKoalas * 2 >= avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else if (avgKoalas <= avgDolhins * 2 ) {
        console.log(`Dolhins win (${avgDolhins} vs. ${ avgKoalas})`);
    } else {
        console.log(`Draw!`);
    }
}

checkWinner(dolphinScore ,koalaScore);
koalaScore = calcAverage(23, 34, 27);
dolphinScore = calcAverage(85, 54, 41);

checkWinner(dolphinScore ,koalaScore);
