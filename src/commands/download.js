const fs = require('fs')
const inquirer = require('inquirer')
const ora = require('ora')
const chalk = require('chalk')
const symbol = require('log-symbols')
const downloadGit = require('../utils');

module.exports = async projectName=>{
    if (!fs.existsSync(projectName)) {
    let loading = ora('Downloading template')
    //命令行交互
    const { description, author } = await inquirer.prompt([
        {
            name: 'description',
            default: 'description',
            message: 'Please enter the project description: '
        },
        {
            name: 'author',
            default: 'okay',
            message: 'Please enter the author name: '
        }
    ])

    loading.start();
    await downloadGit(projectName)

    const package = `${projectName}/package.json`;
    if (fs.existsSync(package)) {
        const data = fs.readFileSync(package).toString();
        let json = JSON.parse(data);

        json.name = projectName;
        json.author = author;
        json.description = description;

        fs.writeFileSync(package, JSON.stringify(json, null, '\t'), 'utf-8')
    }
    loading.succeed();} else {
        console.log(symbol.error, chalk.red('The project already exists'));
    }
}