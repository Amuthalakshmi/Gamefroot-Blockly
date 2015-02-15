var path = require('path');
global.basedir = path.join(process.cwd(), '/worker/');


module.exports.stage = function( live, full ){
	var connector = require(path.join(process.cwd(), './worker/core/connector/'));
	if (connector){
		var connector = new connector();
			connector.stage( live || 'stage', full || false );
	}
}


