const {emptyAnimals, noAnimals, em, noPeople, emptyPeople} = require('../fixtures/count')
const {count} = require("../../src");

describe('Count Unit', () => {
    it('Empty animals', () => {
        const response = count(emptyAnimals.data)
        expect(response).toEqual([
                {
                    "name": "Zuhackog [7]",
                    "people": [
                        {
                            "name": "Elva Baroni [0]",
                            "animals": []
                        },
                        {
                            "name": "Johnny Graziani [0]",
                            "animals": []
                        },
                        {
                            "name": "Herman Christensen [0]",
                            "animals": []
                        },
                        {
                            "name": "Fannie Ancillotti [0]",
                            "animals": []
                        },
                        {
                            "name": "Lawrence Camiciottoli [0]",
                            "animals": []
                        },
                        {
                            "name": "Marion Landi [0]",
                            "animals": []
                        },
                        {
                            "name": "Lou de Bruin [0]",
                            "animals": []
                        }
                    ]
                },
            ]
        )
    });
    it('No animals', () => {
        const response = count(noAnimals.data)
        expect(response).toEqual([
                {
                    "name": "Zuhackog [7]",
                    "people": [
                        {
                            "name": "Elva Baroni [0]",
                        },
                        {
                            "name": "Johnny Graziani [0]",
                        },
                        {
                            "name": "Herman Christensen [0]",
                        },
                        {
                            "name": "Fannie Ancillotti [0]",
                        },
                        {
                            "name": "Lawrence Camiciottoli [0]",
                        },
                        {
                            "name": "Marion Landi [0]",
                        },
                        {
                            "name": "Lou de Bruin [0]",
                        }
                    ]
                },
            ]
        )
    });

    it('Empty people', () => {
        const response = count(emptyPeople.data)
        expect(response).toEqual([
                {
                    "name": "Zuhackog [0]",
                    "people": [
                    ]
                },
            ]
        )
    });
    it('No people', () => {
        const response = count(noPeople.data)
        expect(response).toEqual([
                {
                    "name": "Zuhackog [0]",
                },
            ]
        )
    });
    it('Nothing', () => {
        const response = count([])
        expect(response).toEqual([]
        )
    });
});
