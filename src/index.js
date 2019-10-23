const program = require('commander');
const VERSION = require('../package.json').version;
const chalk = require('chalk');

let apply = async (action, ...args) => {
    try {
        await require(`./commands/${action}`)(...args);
    } catch(e){
        console.log(e)
    }
    process.exit()
};
/**
 * ofe commands
 *    - config
 *    - init 
 */

let actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: [
            'ofe init <projectName>'
        ]
    },
    download: {
        description: 'just download the source code to the <projectName> from a template',
        usages: [
            'ofe download <projectName>'
        ]
    },
    subtree: {
        description: 'add the dependencies for the downloaded project',
        usages: [
            'ofe subtree <projectName>'
        ]
    }
}

// 添加 init / config 命令
Object.keys(actionMap).forEach((action) => {
    program.command(action)
        .description(actionMap[action].description)
        .alias(actionMap[action].alias) //别名
        .action(() => {
            switch (action) {
                case 'subtree':
                    //配置
                    apply(action, ...process.argv.slice(3));
                    break;
                case 'download':
                    //配置
                    apply(action, ...process.argv.slice(3));
                    break;
                case 'init':
                    apply(action, ...process.argv.slice(3));
                    break;
                default:
                    break;
            }

        });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {
        actionMap[action].usages.forEach(usage => {
            console.log('  $ ' + usage);
        });
    });
    console.log('\r');
}
program.usage('<command> [options]');
// ofe -h 
program.on('-h', help);
program.on('--help', help);

// ofe -V   VERSION 为 package.json 中的版本号
program.version(VERSION, '-V --version').parse(process.argv);

// ofe 不带参数时
if (!process.argv.slice(2).length) {
    program.outputHelp(make_green);
}
function make_green(txt) {
    return chalk.green(txt);
}