const {count, filter} = require("./src");

/**
 * Main function executed by the cli
 * Only works with one flag as the argument
 */
function main() {
    const command = process?.argv?.[2]
    if (!command) {
        console.error('Missing flag --count or --filter')
        process.exit(1)
    }

    if (command.includes('--count')) {
        console.log(JSON.stringify(count(), null, 2))
    } else if (command.includes('--filter=')) {
        const filterString = command.split('=')[1]
        if (!filterString || !filterString.length) {
            console.error('Missing filter string after the --filter=')
            process.exit(1)
        } else {
            const list = filter(filterString)
            if (list && list.length) {
                console.log(JSON.stringify(list, null, 2))
            } else {
                console.error(`No item matched the filter "${filterString}"`)
            }
        }
    } else {
        console.error(`Unknown flag "${command}"`)
        process.exit(1)
    }
}

main()
