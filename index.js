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
        type: 'checkbox',
        message: 'What is required to install your project?',
        choices: ['VS Code', 'Github', 'Chrome', 'node.js', ]
    },
    { 
        name: 'usage', 
        type: 'input',
        message: 'Any special instructions to use this application?'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Describe an example test you would like a user to try in your project.'
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
    let license
    if (answers.license.includes('MIT')) {
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } if (answers.license.includes('ISC')) {
        license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    } if (answers.license.includes('Mozilla')) {
        license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    };

    const installReqs = answers.installation.map(install => `- ${install}`).join('\n');

    const template = 
`# ${answers.title}

License that explains which license the application is covered under:

${license}
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#guidelines)
- [Tests](#tests)
- [Questions](#questions)

## Installation
necessities to use, run, or download application.
${installReqs}

## Usage
Must use ${answers.usage}

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