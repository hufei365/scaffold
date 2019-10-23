const fs = require('fs')
const chalk = require('chalk')
const download = require('./download')
const initGitSubtree = require('./subtree')


module.exports = async projectName => {
    try {
        await download(projectName)
        await initGitSubtree(projectName)
        finishInit()
    } catch (e) {
        console.log(e)
    }
}



function finishInit() {
    console.log(`
You can run command: 
    ${chalk.bold.yellow('npm run preinstall')}
to install dependencies. Then you can run command:
    ${chalk.bold.yellow('npm run start')}
to start the development server.
    `)
}
