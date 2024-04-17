const execCommand = require('../utils/execCommand')


describe('Filter integration', () => {
    it('CLI Filter OK', async () => {
        const response = await execCommand('node', ['app.js', '--filter=ry'])
        expect(response.code).toEqual(0)
        expect(JSON.parse(response.output)).toEqual([
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
    it('CLI Filter No result', async () => {
        const response = await execCommand('node', ['app.js', '--filter=zzz'])
        expect(response.code).toEqual(0)
        expect(response.output).toEqual('No item matched the filter "zzz"\n')
    });
});
