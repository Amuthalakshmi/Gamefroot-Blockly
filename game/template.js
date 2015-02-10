
/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class RobotXJ9
* @static
* 
*/
Kiwi.Plugins.RobotXJ9 = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'RobotXJ9'
	* @public
	*/
	name: 'RobotXJ9',

	/**
	*
	* @property version
	* @type String
	* @default '0.5.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.5.0',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.1.1'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.1.1',

	/**
	*
	* @property kiwifrootPlugins
	* @type Array
	* @public
	*/
	kiwifrootPlugins: [
	]
	
};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.RobotXJ9 );


/**
* 
* @module Plugins
* @submodule RobotXJ9
* 
*/ 

/**
* 
* @class Component
* @namespace Kiwi.Plugins
* @extends Kiwi.Component
* @constructor
* @param gameObject {Kiwi.Entity}
*
*/
Kiwi.Plugins.RobotXJ9.Component = function( gameObject ) {

	Kiwi.Component.call( this, gameObject, 'RobotXJ9' );

	this.state = this.owner.state;


	// Behaviour addition points

	/**
	* Update Methods
	**/
	this.state.robots.onPreUpdate.add( this.onPreUpdate, this );
	this.state.robots.onUpdate.add( this.onUpdate, this );
	this.state.robots.onPostUpdate.add( this.onPostUpdate, this );

	/**
	* On Stage Pressed Events
	**/
	this.game.input.onDown.add( this.onPress, this, 25 ); // Priority set lower than those below so that it fires last
	this.game.input.onUp.add( this.onReleased, this, 25 );

	/**
	* On Key Pressed Events
	**/
	this.game.input.keyboard.onKeyDownOnce.add( this.onKeyPress, this );
	this.game.input.keyboard.onKeyUp.add( this.onKeyReleased, this );

	/**
	* On this gameobject pressed events
	**/
	if( this.owner.components.hasComponent( 'Box' ) ) { 
		// You guys of course can check to see if a gameobject has a box component.
		// Sprites / Static Images do by default but others don't
		this.box = this.owner.components.getComponent( 'Box' );
		this.game.input.onDown.add( this.onThisPress, this, 50 ); // Priority set lower than those below so that it fires last
		this.game.input.onUp.add( this.onThisReleased, this, 50 );
	}

	/**
	* Camera in/out of view events
	**/
	if( this.owner.components.hasComponent( 'Box' ) && this.state.components.hasComponent( 'Camera' ) ) { 
		// You guys of course can check to see if a gameobject has a box component.
		// Sprites / Static Images do by default but others don't
		this.camera = this.state.components.getComponent( 'Camera' );

		this.inView = false;

		this.cameraRect = new Kiwi.Geom.Rectangle( 
			this.camera.x, 
			this.camera.y, 
			this.camera.camera.width, 
			this.camera.camera.height );
		
		this.box = this.owner.components.getComponent( 'Box' );
		
		this.state.robots.onUpdate.add( this.onViewStuff, this );
	}


	//Special 'onDeath' Event
	this.deathCallback = this.onDeath;
	//Special 'onSpawn' Event
	this.state.robots.onPreUpdate.addOnce( this.onSpawn, this );

};	

Kiwi.extend( Kiwi.Plugins.RobotXJ9.Component, Kiwi.Component );


Kiwi.Plugins.RobotXJ9.Component.prototype.boot = function() {
	//Execute when all the components have been generated.
};


Kiwi.Plugins.RobotXJ9.Component.add = function( state, gameObject, params ) {

	//Create an animation component and add it to the gameobject
	var robotComp = gameObject.components.add( new Kiwi.Plugins.RobotXJ9.Component( gameObject ) );

	//Any params

};


/**
* 
* Method names which are not allowed:
* 	'update'
*	'preUpdate'
*	'postUpdate'
*	'destroy'
*/

Kiwi.Plugins.RobotXJ9.Component.prototype.onPreUpdate = function() { /* Execute Commands */ };

Kiwi.Plugins.RobotXJ9.Component.prototype.onUpdate = function() { /* Execute Commands */ };

Kiwi.Plugins.RobotXJ9.Component.prototype.onPostUpdate = function() { /* Execute Commands */ };

Kiwi.Plugins.RobotXJ9.Component.prototype.onSpawn = function() { console.log( "Execute Commands - Spawn" ); };

Kiwi.Plugins.RobotXJ9.Component.prototype.onDeath = function() { console.log( "Execute Commands - Death" ); };

Kiwi.Plugins.RobotXJ9.Component.prototype.onPress = function() { console.log( "Execute Commands - Stage Press" ); };

Kiwi.Plugins.RobotXJ9.Component.prototype.onReleased = function() { console.log( "Execute Commands - Stage Released" ); };

Kiwi.Plugins.RobotXJ9.Component.prototype.onThisPress = function( x, y ) { 
	//Check to see if the point intersects
	if( this.box.worldHitbox.contains( x, y ) ) {
		console.log( "Execute Commands - This Pressed" ); 
	}
};

Kiwi.Plugins.RobotXJ9.Component.prototype.onThisReleased = function( x, y ) { 
	//Check to see if the point intersects
	if( this.box.worldHitbox.contains( x, y ) ) {
		console.log( "Execute Commands - This Released" );
	}
};

Kiwi.Plugins.RobotXJ9.Component.prototype.onKeyPress = function( keycode ) { 
	//Check to see if the Keycode matches one the user selected
	if( keycode === 37 ) {
		console.log( "Execute Commands - Key Pressed" );
	}
};

Kiwi.Plugins.RobotXJ9.Component.prototype.onKeyReleased = function( keycode ) { 
	//Check to see if the Keycode matches one the user selected
	if( keycode === 37 ) {
		console.log( "Execute Commands - Key Released" );
	}
};

Kiwi.Plugins.RobotXJ9.Component.prototype.onViewStuff = function( keycode ) { 
	//Get camera 
	this.cameraRect.x = this.camera.x;
	this.cameraRect.y = this.camera.y;

	if( Kiwi.Geom.Intersect.rectangleToRectangle( this.cameraRect, this.box.worldHitbox ).result ) {

		if( !this.inView ) {
			console.log( "Execute Commands - This in View" );
			this.inView = true;
		}

		/* Execute WhileInView Commands */

	} else {

		if( this.inView ) {
			console.log( "Execute Commands - This out of View" );
			this.inView = false;	
		}

	}
};



// Remove the events added when it dies
Kiwi.Plugins.RobotXJ9.Component.prototype.destroy = function() {

	if( this.deathCallback ) {
		this.deathCallback();
		delete this.deathCallback;
	}

	// Behaviour removal points

	/**
	* Update Methods
	**/
	this.state.robots.onPreUpdate.remove( this.onPreUpdate, this );
	this.state.robots.onUpdate.remove( this.onUpdate, this );
	this.state.robots.onPostUpdate.remove( this.onPostUpdate, this );

	/**
	* On Stage Pressed Events
	**/
	this.game.input.onDown.remove( this.onPress, this );
	this.game.input.onUp.remove( this.onReleased, this );

	/**
	* On Key Pressed Events
	**/
	this.game.input.keyboard.onKeyDownOnce.remove( this.onKeyPress, this );
	this.game.input.keyboard.onKeyUp.remove( this.onKeyReleased, this );

	/**
	* On this gameobject pressed events
	**/
	delete this.box;
	this.game.input.onDown.remove( this.onThisPress, this );
	this.game.input.onUp.remove( this.onThisReleased, this );
	

	/**
	* Camera in/out of view events
	**/
	delete this.camera;
	delete this.inView;
	delete this.cameraRect;
	delete this.box;
	this.state.robots.onUpdate.remove( this.onViewStuff, this );

	Kiwi.Component.prototype.destroy.call( this );

	delete this.state;

};



//Add the Component to the list
Kiwi.Plugins.RobotXJ9.kiwifrootPlugins.push( 

		{
			type: Kiwifroot.Plugins.COMPONENT,
			name: 'robot-xj9',
			namespace: Kiwi.Plugins.RobotXJ9.Component
		} 

	);
