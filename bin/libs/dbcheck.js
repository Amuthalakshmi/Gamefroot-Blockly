var mysql = require('mysql');
var fs = require('fs');
var colors = require('colors');


colors.setTheme({
	error: 'red',
	info: 'green'
});

var sql, silent = false;


var out = fs.openSync('log.out', 'a');



module.exports.getConnection = function( username, password, database, silent ){
	sql = mysql.createConnection({
		host: 'localhost',
		user: username,
		password: password,
		database: database
	});

	if (!silent){
		console.log( 'STEP 2 - checking the database'.info.bold.underline );
	}

	sql.connect(function(err){
		if (err) throw new Error( err );

		checkItems();
		checkTerrain();
	});	
}



/**
 * Terrain check....
 */

function checkTerrain(){
	sql.query("SELECT * FROM wp_posts WHERE post_type = 'tile'", function( err, result ){
		if (err){
			throw new Error(err);
		} else {
			for (var i = 0; i < result.length; i++){
				getTerrainMeta( result[i] );
			}
		}
	});
}	


function getTerrainMeta( result ){
	sql.query('SELECT meta_value, meta_key FROM wp_postmeta WHERE post_id = ?', [result.ID], function( err, result ){
		if (err){
			throw new Error(err);
		} else {
			for (var key in result){
				if (result[key].meta_key == 'animation_id'){
					getTerrainFile( result[key].meta_value );
				}
			}
		}		
	});
}

function getTerrainFile ( animation_id ){
	sql.query('SELECT post_id, meta_value, meta_key FROM wp_postmeta WHERE post_id = ?', [ animation_id ], function( err, result ){
		if (err){
			throw new Error(err);
		} else {	
			for (var key in result){
				if (result[key].meta_key == 'frames'){
					checkFile( JSON.parse(result[key].meta_value)[0], result[key].post_id );
				}
			}
		}		
	});
}



function checkFile ( location, post_id ) {	
	if (location && location.frame && location.frame.indexOf('wp-content') != -1){
		var tempLoc = location.frame;
		location = '../' + tempLoc;
	} else if (location && location.frame && location.frame.indexOf('wp-content') == -1){
		location = location.frame;		
	} else if (typeof location == 'string'){
		if (location.indexOf('worker') == -1){
			location = '..' + location;
		} 
	}

	fs.exists(location, function(value){
		if (!value) {
			if (!silent){
				console.error(('Woop\'s one of your tiles files doesn\'t exists - ' + location).error);
			}
			fs.writeSync(out,  ('Woop\'s one of your tiles files doesn\'t exists - ' + location + '\n'));
		}
	});
}


/**
 * Items Check....
 */



function checkItems(){
	sql.query("SELECT * FROM wp_posts WHERE post_type = 'item' AND post_type = 'character'", function( err, result ){
		if (err){
			throw new Error(err);
		} else {
			for (var i = 0; i < result.length; i++){
				getItemsSprite( result[i] );
			}
		}
	});
}	


function getItemsSprite( result ){
	sql.query('SELECT sprites FROM wp_gfdl_items WHERE post_id = ?', [result.ID], function( err, result ){
		if (err){
			throw new Error(err);
		} else {
			if (result[0] && result[0].sprites){
			 	var sprites = JSON.parse(result[0].sprites);
			 	for (var i = 0; i < sprites.length; i++){
			 		checkSprite( sprites[i] ); 
			 	}
		 	}
		}		
	});
}

function checkSprite ( sprite_id ){
	sql.query('SELECT filename, post_id FROM wp_gfdl_sprites WHERE post_id = ?', [ sprite_id ], function( err, result ){
		if (err){
			throw new Error(err);
		} else {	
			if ( result[0] && result[0].filename ){
				checkFile( result[0].filename, result[0].post_id );
			}	
		}		
	});
}
