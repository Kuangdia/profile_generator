const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer0) => {
  let one = `Your name is: ${answer0}\n`;

  rl.question('What\'s your pet\'s name? ', (answer1) => {
    let two = `Your pet\'s name is: ${answer1}\n`;

    rl.question('I am Q3, what am i? ', (answer2) => {
      let three = `I am Q3, what am i?: ${answer2}\n`;

      rl.question('What is your favorite food? ', (answer3) => {
        let four = `My favorite food is: ${answer3}\n`;

        rl.question('What is your favorite Color? ', (answer4) => {
          let five = `My favorite Color is: ${answer4}\n`;

          rl.question('Do you like cats? ', (answer5) => {
            let six = `Do you like cats?: ${answer5}\n`;

            rl.question('Say "\Goodbye"\ ', (answer6) => {
              let seven = `You said: ${answer6}\n`;
              
              if (answer6) {
                console.log(` ${one} ${two} ${three} ${four} ${five} ${six} ${seven}`);
                setTimeout( () => {
                  rl.close();
                }, 1000)
              }
            }); 
          }); 
        }); 
      }); 
    }); 
  });
}); 
