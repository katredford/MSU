// const profileDataArgs = process.argv.slice(2);

//9.1

// 2 examples of a function on where the for loop is condensed by using foreach
// to use: node app "name" "occupation" in the terminal 
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });
// };

// printProfileData(profileDataArgs);

//9.2
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile("index.html", generatePage(name, github), err => {
  if (err) throw err;

  console.log("portfolio complete! check out index.html to see the output!");
});