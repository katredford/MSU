const inquirer = require('inquirer');

// inquirer
const prompt = () => {
  return inquirer.prompt([
      /* Pass your questions in here */
      {
         type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      },
        
      {
      type: 'input',
      name: 'lang',
      message: "What languages do you know?",
      },
        
    {
     type: 'input',
      name: 'communicate',
      message: "What is your preferred method of communication?",
    }


  ])

}
.then(answers => console.log(answers));
  
