const {data} = require('../../data')

/**
 * Returns the count of each sub-field in the parent name as "<name> [<subfield length>]"
 *
 * @param {Array} countries data to count
 * @returns {Array} countries with edited name
 */
module.exports = (countries = data) => {
    return countries.map(country => {
        return {
            ...country,
            name: `${country.name} [${country.people?.length || 0}]`,
            people: country?.people?.map(people => {
                return {
                    ...people,
                    name: `${people.name} [${people.animals?.length || 0}]`
                }
            })
        }
    })
}
