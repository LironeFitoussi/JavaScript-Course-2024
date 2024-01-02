const country = 'Israel'
const continent = 'Asia'
let population = 9
const isIsland = false
const language = 'Hebrew'

const canLiveHere = language === 'English' && population < 50 && !isIsland;

if (canLiveHere) {
    console.log(`You should live in ${country} :).`);
} else {
    console.log(`${country} does not meet your criteria :(`);
};