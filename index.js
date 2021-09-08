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
        type: 'checkbox',
        message: 'Choose one license for the application.',
        choices: ['a', 'b', 'c', 'd']
    },
    {   name: 'installation',
        type: 'input',  // change?
        message: 'What is required to install your project?'
    },
    { 
        name: 'instructions', 
        type: 'input', // have options to include 1 instruction at a time, add more until selected no
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
    const data = answers.licenses.map(license => `- ${license}`).join('\n'); // ${data}

    const template = 

`# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#guidelines)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.instructions}

## Guidelines
[Rules to Follow - "Contributor Covenant"](https://www.contributor-covenant.org/)

## Tests
${answers.tests}

## License
${answers.license}

## Questions
For your convinience, the developer's Github account is provided below.\n
[Github Profile](https://github.com/${answers.username})

For further questions, you may reach out via the following email.\n
${answers.email}
`;

fs.writeFile('README.md', template, (error) => {
        if (error) console.log(error);
        console.log('Success');
    })
});