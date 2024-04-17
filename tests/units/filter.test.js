const {emptyAnimals, noAnimals, em, noPeople, emptyPeople, normal} = require('../fixtures/filter')
const {filter} = require("../../src");

describe('Filter Unit', () => {
    it('Empty animals', () => {
        const response = filter("ry", emptyAnimals.data)
        expect(response).toBeUndefined()
    });
    it('No animals', () => {
        const response = filter("ry", noAnimals.data)
        expect(response).toBeUndefined()
    });

    it('Empty people', () => {
        const response = filter("ry", emptyPeople.data)
        expect(response).toBeUndefined()
    });
    it('No people', () => {
        const response = filter("ry", noPeople.data)
        expect(response).toBeUndefined()
    });
    it('Nothing', () => {
        const response = filter("ry", [])
        expect(response).toBeUndefined()
    });

    it('Filter standard', () => {
        const response = filter("ry", normal.data)
        expect(response).toEqual([
            {
                "name": "Uzuzozne",
                "people": [
                    {
                        "name": "Lillie Abbott",
                        "animals": [
                            {
                                "name": "John Dory"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Satanwi",
                "people": [
                    {
                        "name": "Anthony Bruno",
                        "animals": [
                            {
                                "name": "Oryx"
                            }
                        ]
                    }
                ]
            }
        ])
    });

    it('Filter standard case', () => {
        const response = filter("RY", normal.data)
        expect(response).toBeUndefined()
    });
});
