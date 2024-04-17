const execCommand = require('../utils/execCommand')


describe('Cli integration', () => {
    it('Unknown flag', async () => {
        const response = await execCommand('node', ['app.js', '--toto='])
        expect(response.code).toEqual(1)
        expect(response.output).toEqual('Unknown flag "--toto="\n')
    });
    it('Missing Filter', async () => {
        const response = await execCommand('node', ['app.js', '--filter='])
        expect(response.code).toEqual(1)
        expect(response.output).toEqual('Missing filter string after the --filter=\n')
    });
});
