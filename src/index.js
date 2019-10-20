const program = require('commander');
const VERSION = require('../package.json').version;
const chalk = require('chalk');

let apply = (action, ...args) => {
    require(`./commands/${action}`)(...args);
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
            'ofe init <templateName> <projectName>'
        ]
    },
    config: {
        alias: 'cfg',
        description: 'config .oferc',
        usages: [
            'ofe config set <k> <v>',
            'ofe config get <k>',
            'ofe config remove <k>'
        ]

    },
    //other commands
}

// 添加 init / config 命令
Object.keys(actionMap).forEach((action) => {
    program.command(action)
        .description(actionMap[action].description)
        .alias(actionMap[action].alias) //别名
        .action(() => {
            switch (action) {
                case 'config':
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