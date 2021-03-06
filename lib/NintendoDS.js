/*

This class inherits from the Game Console class and the Web Browser class.

The constructor should invoke the Game Console class constructor with the hard coded constructor argument 'Nintendo DS'

//In order for a class to import another class (or be able to reference it) you'll need to require (other word is import) it via something like: `var fruit = require('./fruit')` at the top (edited)

*/
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');
var extend = require('./extend.js');

function NintendoDS(){
  GameConsole.call( this, 'Nintendo DS' );
}

extend( NintendoDS.prototype, GameConsole.prototype );
extend ( NintendoDS.prototype, WebBrowser.prototype );



module.exports = NintendoDS;