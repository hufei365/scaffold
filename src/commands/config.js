import inquirer from 'inquirer';
inquirer.prompt([
    {
        name: 'description',
        message: 'Please enter the project description: '
    },
    {
        name: 'author',
        message: 'Please enter the author name: '
    }
]).then((answer) => {
    //...
});
