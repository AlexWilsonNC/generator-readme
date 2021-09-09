const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    { 
        name: 'title',
        type: 'input',
        message: 'What is the title of your README?'
    },
    { 
        name: 'description',
        type: 'input',
        message: 'Type out a description for this application.'
    },
    {   name: 'license', 
        type: 'rawlist',
        message: 'Choose one license for the application.',
        choices: ['MIT', 'ISC', 'Mozilla']
    },
    {   name: 'installation',
        type: 'input',
        message: 'What is required to install your project?'
    },
    { 
        name: 'usage', 
        type: 'input',
        message: 'Any special instructions to use this?'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'asd' // idk
    },
    {
        name: 'username',
        type: 'input',
        message: 'Provide your Github username.'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Provide your email address.'
    },

]).then((answers) => {
    if (answers.license.includes('MIT') {
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }

    const template = 
`# ${answers.title}

License that explains which license the application is covered under:
${answers.license}
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#guidelines)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Step(s) required to install application.
${answers.installation}

## Usage
${answers.usage}

## Guidelines
[Rules to Follow - "Contributor Covenant"](https://www.contributor-covenant.org/)

## Tests
${answers.tests}

## Questions
For your convenience, the developer's Github account is provided below.\n
[Github Profile](https://github.com/${answers.username})

For further questions, you may reach out via the following email.\n
${answers.email}
`;

fs.writeFile('README.md', template, (error) => {
        if (error) console.log(error);
        console.log('Success');
    })
});