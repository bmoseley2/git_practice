var quality = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var city = ['Atlanta', 'Chicago', 'Los Angeles', 'Nashville', 'Buffalo', 'Charleston', 'Las Vegas', 'New England', 'Oakland', 'Jacksonville'];
var name = ['Falcons', 'Bears', 'Chargers', 'Grizzlies', 'Bills', 'Hot', 'Raiders', 'Patriots', 'Bruisers', 'Jaguars'];

function generateTeamName(qualityOfTeamYearOne, city, name) {
    let newCity = Math.floor(Math.random() * city.length);
    let newName = Math.floor(Math.random() * name.length);

    let newQuality = Math.floor(Math.random() * qualityOfTeamYearOne.length);

    return `${city[newCity]} is your new city, and ${name[newName]} is your new team name. Welcome to the new league ${city[newCity]} ${name[newName]}! The quality of your team in year one will be ${qualityOfTeamYearOne[newQuality]}. Good Luck!`;
}
console.log(generateTeamName(quality, city, name));