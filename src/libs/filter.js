const {data} = require("../../data");

/**
 * Returns JSON elements containing the pattern passed as argument
 *
 * By using reduce we avoid cycling multiple time over each array
 * If the filtered array is empty the function doesn't return it
 *
 * @param {string} filterString filter applied
 * @param {Array} countries data to filter
 * @returns {Array} countries filtered
 */
module.exports = (filterString, countries = data) => {
    return countries.reduce((accCountries, country) => {
        const filteredPeople = country?.people?.reduce((accPeople, people) => {
            const filteredAnimals = people?.animals?.filter(animal => animal.name.includes(filterString));
            if (filteredAnimals?.length) {
                accPeople.push({...people, animals: filteredAnimals});
            }
            return accPeople;
        }, []);

        if (filteredPeople?.length) {
            accCountries.push({...country, people: filteredPeople});
        }
        return accCountries;
    }, []);
}
