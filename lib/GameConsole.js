/*
The constructor should accept a single argument systemName, and set a public variable systemName to the value of that constructor argument.

The class should have a play method that accepts a single argument game and return a status message.
game is an object with a single key title with a value that's a string.
status message should be in the format: 'this system name plays the game object's title'
example: Jupiter Station plays Shynobie
*/

function GameConsole( systemName ){
  this.systemName = systemName;
}

GameConsole.prototype.play = function( { title }  ){
  return `${ this.systemName } plays ${ title }`;
};

module.exports = GameConsole;
//In order for a class to import another class (or be able to reference it) you'll need to require (other word is import) it via something like: `var fruit = require('./fruit')` at the top (edited)