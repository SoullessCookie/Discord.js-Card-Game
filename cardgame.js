// Set up an array of card ranks and suits
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♣', '♦', '♥', '♠'];

// Define a function for generating a random card
const generateCard = () => {
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  return `${rank}${suit}`;
};

// Define a function for playing a round of the card game
const playRound = (player1, player2) => {
  // Generate a random card for each player
  const card1 = generateCard();
  const card2 = generateCard();

  // Compare the ranks of the cards to determine the winner
  if (ranks.indexOf(card1[0]) > ranks.indexOf(card2[0])) {
    return player1;
  } else if (ranks.indexOf(card1[0]) < ranks.indexOf(card2[0])) {
    return player2;
  } else {
    // If the ranks are equal, the game is a tie
    return 'Tie';
  }
};

// Set up a command for playing the card game
client.on('message', message => {
  // Split the message into individual words
  const args = message.content.split(/ +/);
  // Get the command from the first word of the message
  const command = args.shift().toLowerCase();

  // Check if the command is 'cardgame'
  if (command === 'cardgame') {
    // Get the players' names from the arguments
    const player1 = args[0];
    const player2 = args[1];

    // Play a round of the card game and announce the result
    const winner = playRound(player1, player2);
    message.channel.send(`${winner} wins!`);
  }
});
