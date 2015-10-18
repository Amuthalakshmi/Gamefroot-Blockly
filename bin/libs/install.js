var fs = require('fs');
var path = require('path');
var colors = require('colors');
var readline = require('readline');


module.exports.full = function( rl ){
	//so now we need to do a full install of the install...
	rl.question("Have you pulled down from GIT? > ", function( answer ){
		if ( answer == 'yes' || answer == 'true'){
			console.log( 'google' );
		} else {
			console.warn('Please pull down the lastest from git (the 2.0 repo)');
			process.exit(0);
		}
	});
}
