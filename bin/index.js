#!/usr/bin/env node

var program = require('commander');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var colors = require('colors');
var readline = require('readline');
var dbcheck = require('./libs/dbcheck.js');



colors.setTheme({
	error: 'red',
	info: 'green',
	warn: 'magenta'
});



var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;


var defaultPath = './app.js';
var requiredPaths = [
	'./worker/',
	'./app.js',
	'./logs/',
	'./upload/',
	'./package.json',
	'./worker/core/',
	'./worker/core/account/',
	'./worker/core/database/',
	'./worker/core/api/',
	'./worker/core/socket/',
	'./worker/core/views/',
	'./worker/core/regenerate',
	'./worker/public/',
	'./worker/public/gamefroot_cache/',
	'./worker/public/gamefroot_cache/backgrounds/',
	'./worker/public/gamefroot_cache/game_data/',
	'./worker/public/gamefroot_cache/temp/',
	'./worker/public/gamefroot_cache/blogs.dir/',
	'./worker/public/gamefroot_cache/files/',
	'./worker/public/gamefroot_cache/users/',
	'./worker/public/gamefroot_cache/pack/',
	'./worker/public/gamefroot_cache/tmp/',
	'./worker/public/gamefroot_cache/game/',
	'./worker/public/gamefroot_cache/game/temp',
	'./worker/public/cocoon',
	'./worker/public/style/',
]




program
	.version('0.1.0')
	.option('-f, --fix', 'fix')
	.option('-i, --install', 'install')
	.option('-rm, --remove', 'remove')
	.option('-s, --stop', 'stop')
	.option('-r, --run [value]', 'run')
	.option('-u, --user [value]', "The username for you db fix")
	.option('-p, --password [value]', "The password for you db fix")
	.option('-d, --database [value]', "The database you want to edit")
	.option('--stage', "Push your local to the staging.gamefroot.com")
	.option('--live', "Push your local to the gamefroot.com")
	.option('--silent')
	.parse( process.argv );

if ( program.run ){	
	if (typeof program.run !== 'boolean'){
		defaultPath = program.run;
	}
	
	var outFD = fs.openSync('log.out', 'a');
	var errFD = fs.openSync('err.out', 'a');			
	var script = defaultPath;

	var monitor = spawn(process.execPath, [script], {
		stdio: ['ipc', outFD, errFD],
		detached: true
	});

	//writes the pid so we can receive it later.	
	fs.writeFileSync(path.join(homedir, '.gamefroot-pid.json'), JSON.stringify({
		pid: monitor.pid
	}));

	monitor.on('exit', function(code){
		console.error('Monitor died unexpectedly with exit code %d', code);
	});

	monitor.disconnect();

	monitor.unref();	
}


if (program.stop){
	var pid = fs.readFileSync( path.join(homedir, '.gamefroot-pid.json'), 'utf8');
		pid = JSON.parse( pid );
	fs.unlinkSync( path.join( homedir, '.gamefroot-pid.json'));	
	exec('sudo kill ' + pid.pid );
}


if (program.fix){
	if (!program.silent){
		console.log( 'STEP 1 - checking file directories'.info.bold.underline );
	}
	//now we need to run though to check the most prominent error's... 
	for (var i = 0; i < requiredPaths.length; i++){
		if (!fs.existsSync( requiredPaths[i] ) ){			
			if (requiredPaths[i].indexOf('.js') < 0){
				if (!program.silent){
					console.error(('Woop\'s! This path is require - ' + requiredPaths[i]).error);
					console.info('creating dir'.info);
				}
				fs.mkdirSync( requiredPaths[i] );
			} else {
				if (!program.silent){				
					console.error(('Woop\'s! This file is require - ' + requiredPaths[i]).error);
					console.info('can\'t fix this, what i suggest to do is pull down the latest files from github and then run this again'.underline.info);
				}
			}
		}
	}

	dbcheck.getConnection(program.user, program.password, program.database, program.silent);
}


if (program.remove){

}


if (program.install){
	var install = require('./libs/install.js');
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	console.info( 'Installing Gamefroot - '.info.bold.underline );
	console.log( 'This may take a while'.warn );

	//now lets ask for more information... 
	rl.question("Do a full install? > ", function( answer ){
		if ( answer == 'yes' || answer == "true") {
			install.full( rl );
		}
		//rl.close();
	});
}


if (program.stage){
	var stage = require('./libs/stage.js');
		stage.stage('stage', program.full || false);
}

if (program.live){
	var stage = require('./libs/stage.js');
		stage.stage('live',  program.full || false);
}



