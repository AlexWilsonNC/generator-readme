const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title'
    },
]);