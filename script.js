const messages = [ "You picked the wrong house, bub.", "Remember, with great power comes great responsibility.", ' I have lived most my life surrounded by my enemies, I will be grateful to die among my friends.', 'No matter where you go in life there is always going to be the one person that wants to bring you down, so stay strong and face your problems instead of running away.', 'I am Not Gonna Fight Your War, I am Going To End It.', 'What One Does With The Truth Is More Difficult Than You Think.'];
const famousPerson = [['Wolverine',1], ['Spider-Man',1], ['Star-Lord',1], ['Superman',1], ['Captain  Marvel', 2], ['Wonder Woman', 2]];
const gender = ['He', 'She']

// these were just for testing:
//let randomIndex = Math.floor(Math.random() * messages.length);
//console.log(randomIndex)
//console.log(messages[randomIndex], famousPerson[randomIndex])
//let xx=  famousPerson[randomIndex][1]==1 ? gender[0] : gender[1];

//function for alert button on webpage
const mixedMessages1 = () => {
  let randomIndex = Math.floor(Math.random() * messages.length);
   alert(`You have one new message from:\n ${famousPerson[randomIndex][0]}.\n ${famousPerson[randomIndex][1]==1 ? gender[0] : gender[1]} says:\n${messages[randomIndex]} `);
}

mixedMessages1();

//function for console log 
const mixedMessages2 = () => {
  let randomIndex = Math.floor(Math.random() * messages.length);
  console.log(`You have one new nessage from:\n ${famousPerson[randomIndex],[0]}.\n ${famousPerson[randomIndex][1]==1 ? gender[0] : gender[1]} says:\n${messages[randomIndex]} `);
}

mixedMessages2();
