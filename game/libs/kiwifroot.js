

/**
* The core namespace used by Kiwifroot. 
* 
* @class Kiwifroot
* @static
*/
var Kiwifroot = {


	/**
	* The current version of Kiwifroot. 
	*
	* @property VERSION
	* @type string 
	* @public
	* @static
	*/
	VERSION: '1.2.2',


	/**
	* Contains the default values for core kiwifroot classes. 
	*
	* @property DEFAULT
	* @type object 
	* @public
	* @static
	*/
	DEFAULT: {

		/**
		* The default width of Kiwifroot games.
		* 
		* @property DEFAULT.width
		* @type number
		* @default 768
		* @public
		* @static
		*/
		width: 768,

		/**
		* The default height of Kiwifroot games.
		* 
		* @property DEFAULT.height
		* @type Number
		* @default 512
		* @public
		* @static
		*/
		height: 512,

		/**
		* Default name of the game.
		* 
		* @property DEFAULT.name
		* @type String
		* @default 'Kiwifroot'
		* @public
		* @static
		*/
		name: 'Kiwifroot',

		/**
		* 
		* @property taImageURL
		* @type String
		* @default 'assets/kiwifrootAtlas.png'
		* @public
		* @static
		*/
		taImageURL: 'assets/kiwifrootAtlas.png',

		/**
		* 
		* @property taJsonURL
		* @type String
		* @default 'assets/kiwifrootAtlas.json'
		* @public
		* @static
		*/
		taJsonURL: 'assets/kiwifrootAtlas.json',

		/**
		* 
		* @property debugMode
		* @type Boolean
		* @default false
		* @public
		*/ 
		debugMode: false,

		/**
		* When set to true, the game will configure itself to optimise performance. 
		* This can improve performance, but will make it harder to debug. 
		*
		* @property release
		* @type Boolean
		* @default false
		* @public
		*/
		release: false,


		/**
		* 
		* @property webviewURL
		* @type String
		* @default null
		* @public
		*/
		webviewURL: null,

		/**
		* 
		* @property skipLaunch
		* @type Boolean
		* @default false
		* @public
		*/
		skipLaunch: false,

		/**
		* If the splash graphic should open gamefroot when it is clicked
		* @property splashOpenURL
		* @type Boolean
		* @default false
		* @public
		*/
		splashOpenURL: false,

		/**
		* If the game should be rendered using canvas.
		* @property renderCanvas
		* @type Boolean
		* @default false
		* @public
		*/
		renderCanvas: false,

		/**
		* If all the level json should be loaded at the start.
		* Note: This does mean that the levels will have the 'keep' flag marked as true by default.
		* This means the data will be saved across levels, instead of being deleted and reloaded.
		*
		* @property loadLevelJsonAtStart
		* @type Boolean
		* @default false
		* @public
		*/
		loadLevelJsonAtStart: false,

		/**
		* If (image) assets should load via a XHR request instead of via image tags.
		* Turning this on will mean loading will take longer as we can load multiple images in at a time via image tags.
		* 
		* @property assetLoadViaXHR
		* @type Boolean
		* @default false
		* @public
		*/ 
		assetLoadViaXHR: false,

		/**
		* A prefix string to be added in front of all assets when loaded. 
		* 
		* @property assetPrefix
		* @type String
		* @default ''
		* @public
		* @since 0.11.0
		*/
		assetPrefix: ''
		 
	},

	/**
	*
	* @property States
	* @type Object
	* @public
	*/
	States: {},

	/**
	* 
	* @property GameObjects
	* @type Object
	* @public
	*/
	GameObjects: {},

	/**
	* 
	* @property Input
	* @type Object
	* @public
	*/
	Input: {},

	/**
	* 
	* @property Object
	* @type Object
	* @public
	*/
	Object: {

		/**
		*
		* @property Object.Core
		* @type Object
		* @public
		*/
		Core: {

		}

	},

	/**
	*
	* @property System
	* @type Object
	* @public
	*/
	System: {

		/**
		* 
		* @property System.Core
		* @type Object
		* @public
		*/
		Core: {
			
		}

	},

	/**
	* 
	* @property Components
	* @type Object
	* @public
	*/
	Components: {

		/**
		* 
		* @property Components.Core
		* @type Object
		* @public
		*/
		Core: {

		},

		/**
		* 
		* @property Components.Camera
		* @type Object
		* @public
		*/
		Camera: {

		}
		
	},

	/**
	*
	* @property Physics
	* @type Object
	* @public
	*/
	Physics: {

	},

	/**
	*
	* @property Plugins
	* @type Object
	* @public
	*/
	Plugins: {
		
		/**
		*
		* @property Plugins.GAMEOBJECT
		* @static
		* @type String
		* @default 'gameobject'
		* @public
		*/
		GAMEOBJECT: 'gameobject',

		/**
		* 
		* @property Plugins.COMPONENT
		* @static
		* @type String
		* @default 'component'
		* @public
		*/
		COMPONENT: 'component',

		/**
		* 
		* @property Plugins.SYSTEM
		* @static
		* @type String
		* @default 'system'
		* @public
		*/
		SYSTEM: 'system'

	},

	/**
	*
	* @property crossOrigin
	* @type Boolean
	* @default false
	* @public
	*/
	crossOrigin: false

};



/**
* 
* @module Components
* @submodule Camera
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Camera
* @class Component
* @constructor
* @param gameObject {Kiwi.Entity}
* @param system {Kiwifroot.Components.Camera.System}
* @param [camera=this.game.cameras.defaultCamera]
* 
*/
Kiwifroot.Components.Camera.Component = function( gameObject, system, camera ) {

	Kiwi.Component.call( this, gameObject, 'Camera' );

	/**
	* 
	* @property camera
	* @type Kiwi.Camera
	* @public
	*/
	this.camera = camera || this.game.cameras.defaultCamera;

	/**
	*
	* @property snapToCamera
	* @type Boolean
	* @default false
	* @private
	*/
	this._snapToCamera = false;

	/**
	*
	* @property original
	* @type Kiwi.Geom.Point
	* @public
	*/
	this.original = new Kiwi.Geom.Point();

	/**
	* 
	* @property system
	* @type Kiwifroot.Components.Camera.System
	* @public
	*/ 
	this.system = system;

	this.system.add( this );

};

Kiwi.extend( Kiwifroot.Components.Camera.Component, Kiwi.Component );

/**
* 
* @property snapToCamera
* @type Boolean
* @default false
* @public
*/
Object.defineProperty(Kiwifroot.Components.Camera.Component.prototype, "snapToCamera", {

	get: function() {
		return this._snapToCamera;
	},

	set: function(val) {

		if( val ) {
			this._snapToCamera = true;
			this.original.setTo( this.owner.transform.x, this.owner.transform.y );

		} else {
			this._snapToCamera = false;
			this.owner.transform.x = this.original.x;
			this.owner.transform.y = this.original.y;

		}

	}

});


/**
*
* @method updateCoordinates
* @public
*/
Kiwifroot.Components.Camera.Component.prototype.updateCoordinates = function() {

	var p = this.camera.transformPoint( this.original );

	this.owner.transform.x = p.x;
	this.owner.transform.y = p.y;

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Camera.Component.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	this.system.remove( this );

	delete this.system;

	delete this.camera;

	delete this.original;
	
};

/**
* 
* @module Components
* @submodule Camera
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Camera
* @class System
* @constructor
* @param state {Kiwifroot.States.Level}
* 
*/
Kiwifroot.Components.Camera.System = function( state ) {

	Kiwi.Component.call( this, state, 'CameraSystem' );


	/**
	* 
	* @property components
	* @type Array
	* @public
	*/
	this.components = [];

};

Kiwi.extend( Kiwifroot.Components.Camera.System, Kiwi.Component );

Kiwifroot.Components.Camera.System.prototype.configure = function( params ) {
	//Parse any default parameters that can be set here...
};


/**
* 
* @method add
* @param component {Kiwi.Component}
* @public
*/
Kiwifroot.Components.Camera.System.prototype.add = function( component ) {

	if( component.name === 'Camera' ) {
		this.components.push( component );
		return true;
	}	

	return false;
};


/**
* 
* @method remove
* @param component {Kiwi.Component}
* @public
*/
Kiwifroot.Components.Camera.System.prototype.remove = function( component ) {

	var index = this.components.indexOf( component );

	if( index > -1) {
		this.components.splice( index, 1 );
		return true;
	}

	return false;
};


/**
* 
* @method postUpdate
* @public
*/
Kiwifroot.Components.Camera.System.prototype.postUpdate = function() {

	var i = 0;
	while( i < this.components.length) {

		if( this.components[ i ].snapToCamera ) {
			this.components[ i ].updateCoordinates( );
		}

		i++;
	}

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Camera.System.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	this.components = [];
	
};

/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Animation
* @static
* 
*/
Kiwifroot.Components.Core.Animation = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'animation'
	* @static
	* @readOnly
	* @public
	*/
	component: 'animation'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.Animation.add = function( state, gameObject, params ) {

	if( !this.compatible( gameObject) ) {
		state.game.log.warn( "Cannot add a '" + this.component + "' to this type of gameobject as it does not have the required functionality." )
		return;
	}

	//Create an animation component and add it to the gameobject
	var animation = gameObject.components.add( new Kiwi.Components.AnimationManager( gameObject, false ) );

	//Loop through the parameters and create animations on each one.
	for( var index in params ) {

		if( !params[ index ].cells || !params[ index ].speed ) {
			state.game.log.error( "Animation could not be created. Missing 'cells' or 'speed' parameter." );
			continue;
		}

		animation.add( index, 
			params[ index ].cells, 
			params[ index ].speed, 
			params[ index ].loop, 
			params[ index ].play, 
			false );

	}

};


/**
* 
* @method compatible
* @param gameObject {Kiwi.Entity}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Core.Animation.compatible = function( gameObject ) {

	if( gameObject.atlas ) {
		return true;
	} else {
		return false;
	}

};


/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Box
* @static
* 
*/
Kiwifroot.Components.Core.Box = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'box'
	* @static
	* @readOnly
	* @public
	*/
	component: 'box'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.Box.add = function( state, gameObject, params ) {

	//Validate 
	if( !this.validate( params ) ) {

		state.game.log.warn( 'Parameters not valid. Box Component not created on GameObject.' );

		return;
	}

	//Does the gameObject already have a box component.
	if( gameObject.components.hasComponent( 'Box' ) ) {

		//Apply defauls passed.
		var box = gameObject.components.getComponent( 'Box' );
		box.hitbox = new Kiwi.Geom.Rectangle( params.x, params.y, params.width, params.height );
		
		return;
	}

	//Create an animation component and add it to the gameobject
	var box = gameObject.components.add( new Kiwi.Components.Box( gameObject, gameObject.x, gameObject.y, params.width, params.height ) );
	box.hitbox = new Kiwi.Geom.Rectangle( params.x, params.y, params.width, params.height );

};


/**
* 
* @method validate
* @param gameObject {Kiwi.Entity}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Core.Box.validate = function( params ) {

	if( typeof params.width === "undefined" ) {
		state.game.log.warn( 'Box Component: No width passed.' );
		return false;	
	} 

	if( typeof params.height === "undefined" ) {
		state.game.log.warn( 'Box Component: No height passed.' );
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;

};


/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Camera
* @static
* 
*/
Kiwifroot.Components.Core.Camera = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'camera'
	* @static
	* @readOnly
	* @public
	*/
	component: 'camera'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.Camera.add = function( state, gameObject, params ) {

	//Find out if a camera system exists.
	if( !state.components.hasComponent( 'CameraSystem' ) ) {
		state.game.log.error( "No 'CameraSystem' component found. Could not create a camera component." );
		return null;
	}


	//It does, so get it.
	var system = state.components.getComponent( 'CameraSystem' );

	//Create an animation component and add it to the gameobject
	var camera = gameObject.components.add( new Kiwifroot.Components.Camera.Component( gameObject, system ) );

	if( params.snap ) camera.snapToCamera = true;

};



/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class ArcadePhysics
* @static
* 
*/
Kiwifroot.Components.Core.ArcadePhysics = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'arcadephysics'
	* @static
	* @readOnly
	* @public
	*/
	component: 'arcadephysics'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.ArcadePhysics.add = function( state, gameObject, params ) {

	//Does it have an old physics system?
	//This would be added by default by Kiwi
	if( gameObject.components.hasComponent( 'ArcadePhysics' ) ) {
		gameObject.components.removeComponentByName( 'ArcadePhysics' );
	}

	//Find out if a camera system exists.
	if( !state.components.hasComponent( 'ArcadeSystem' ) ) {
		state.game.log.error( "No 'ArcadeSystem' component found. Could not create a ArcadePhysics component." );
		return null;
	}

	//Is it a tilemaplayer?
	if( gameObject.objType() === 'TileMapLayer' ) {

		//Then it wont have a box...
		var box = null;

		//Loop through all tiletypes
		var tile, i = 0;
		while( i < gameObject.tilemap.tileTypes.length ) {

			tile = gameObject.tilemap.tileTypes[ i ];

			//For each one try to see if there is a physics property
			switch( tile.properties[ 'collision' ] ) {
				case "ANY":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.ANY;
					break;

				case "UP":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.UP;
					break;

				case "DOWN":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.DOWN;
					break;

				case "LEFT":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.LEFT;
					break;

				case "RIGHT":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.RIGHT;
					break;
			}

			i++;

		}

	} else {
		//Does it have a box component?
		if( !gameObject.components.hasComponent( 'Box' ) ) {
			state.game.log.error( "No 'Box' component found. Could not create a ArcadePhysics component." );
			return null;
		}

		var box = gameObject.components.getComponent( 'Box' );
	
	}


	//Create an animation component and add it to the gameobject
	var physics = gameObject.components.add( new Kiwifroot.Physics.ArcadeComponent( gameObject, box ) );

	//Defaults that can be passed
	if( params.velocity && typeof params.velocity.x !== "undefined" ) physics.velocity.x = params.velocity.x;
	if( params.velocity && typeof params.velocity.y !== "undefined" ) physics.velocity.y = params.velocity.y;

	if( params.acceleration && typeof params.acceleration.x !== "undefined" ) physics.acceleration.x = params.acceleration.x;
	if( params.acceleration && typeof params.acceleration.y !== "undefined" ) physics.acceleration.y = params.acceleration.y;

	if( params.maxVelocity && typeof params.maxVelocity.x !== "undefined" ) physics.maxVelocity.x = params.maxVelocity.x;
	if( params.maxVelocity && typeof params.maxVelocity.y !== "undefined" ) physics.maxVelocity.y = params.maxVelocity.y;

	if( params.drag  && typeof params.drag.x !== "undefined" ) physics.drag.x = params.drag.x;
	if( params.drag  && typeof params.drag.y !== "undefined" ) physics.drag.y = params.drag.y;

	if( typeof params.mass !== "undefined" ) physics.mass = params.mass;
	if( typeof params.elasticity !== "undefined" ) physics.elasticity = params.elasticity;

	if( typeof params.collisions !== "undefined" ) {

		physics.allowCollisions = Kiwi.Components.ArcadePhysics.NONE;
	
		if( !Kiwi.Utils.Common.isArray( params.collisions ) ) {
			params.collisions = [ params.collisions ];
		}


		for( var i = 0; i < params.collisions; i++ ) {

			switch( params.collisions ) {
				case "ANY":
					physics.allowCollisions = Kiwi.Components.ArcadePhysics.ANY;
					break;

				case "UP":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.UP;
					break;

				case "DOWN":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.DOWN;
					break;

				case "LEFT":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.LEFT;
					break;

				case "RIGHT":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.RIGHT;
					break;
			}
			

		}
 	
	}

	if( gameObject.objType() === 'TileMapLayer' ) {
		gameObject.physics = physics;
		physics.immovable = true;
		physics.gravity = false; 
	}


	if( typeof params.moves !== "undefined" ) physics.moves  = params.moves;
	if( typeof params.immovable  !== "undefined" ) physics.immovable  = params.immovable;
	if( typeof params.layer  !== "undefined" ) physics.layer  = params.layer;
	if( typeof params.gravity  !== "undefined" ) physics.gravity  = params.gravity;

};



/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Animation
* @static
* 
*/
Kiwifroot.Components.Core.TextureAnimation = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'TextureAnimation'
	* @static
	* @readOnly
	* @public
	*/
	component: 'TextureAnimation'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.TextureAnimation.add = function( state, gameObject, params ) {

	if( !this.compatible( gameObject ) ) {
		state.game.log.warn( "Cannot add a '" + this.component + "' to this type of gameobject as it does not have the required functionality." )
		return;
	}

	//Create an animation component and add it to the gameobject
	var animation = gameObject.components.add( new Kiwifroot.Components.TextureAnimation( gameObject, false ) );

	//Loop through the parameters and create animations on each one.
	for( var index in params ) {

		if( !params[ index ].cells ) {
			state.game.log.error( "Animation could not be created. Missing 'cells' parameter." );
			continue;
		}

		animation.create( index, 
			params[ index ].cells, 
			params[ index ].speed, 
			params[ index ].loop, 
			params[ index ].play );

	}

};


/**
* 
* @method compatible
* @param gameObject {Kiwi.Entity}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Core.TextureAnimation.compatible = function( gameObject ) {

	if( gameObject.atlas ) {
		return true;
	} else {
		return false;
	}

};


/**
* 
* @module Kiwifroot
* @submodule Components
*
*/

/**
*
* 
* @namespace Kiwifroot.Components
* @class Manager
* @constructor
* @param state {Kiwifroot.State}
* 
*/
Kiwifroot.Components.Manager = function( state ) {

	/**
	*
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	/**
	* 
	* @property components
	* @type Object
	* @public
	*/
	this.components = {};

	//Create the defaults
	var c; 
	for( var index in Kiwifroot.Components.Core ) {
		c = Kiwifroot.Components.Core[ index ];

		if( c.component ) {
			this.components[ c.component ] = c;
		}
	}


	//Create the plugins 
	this.assignComponentsFromPlugins();


};



/**
* 
* @method exists
* @param type {String}
* @return
*/ 
Kiwifroot.Components.Manager.prototype.exists = function( type ) {
	return ( this.components[ type ] );
};



/**
*
* @method assignComponentsFromPlugins
* @private
*/
Kiwifroot.Components.Manager.prototype.assignComponentsFromPlugins = function() {

	//Get the plugins
	var plugin, i, j, kfp;

	for( i = 0; i < this.game.pluginManager._plugins.length; i++ ) {

		plugin = Kiwi.Plugins[ this.game.pluginManager._plugins[ i ] ];

		if( !plugin ) {
			this.game.log.warn( "Nothing found on 'Kiwi.Plugins." + this.game.pluginManager._plugins[ i ] + "' namespace.", '#components', '#plugins' );
			continue;
		}  


		//Is it a system?
		if( !plugin.kiwifrootPlugins || !Kiwi.Utils.Common.isArray( plugin.kiwifrootPlugins ) ) {
			//Skip to the next plugin...
			continue;
		}
		

		for( j = 0; j < plugin.kiwifrootPlugins.length; j++ ) {

			kfp = plugin.kiwifrootPlugins[ j ];

			if( kfp.type !== Kiwifroot.Plugins.COMPONENT ) {
				continue;
			}

			if( !kfp.name || !kfp.namespace ) {
				this.game.log.warn( "A Component on the '" + plugin.name + "' Plugin is missing a 'name' or 'namespace' property." , '#components', '#plugins');
				continue;
			}

			if( this.exists( kfp.name ) ) {
				this.game.log.warn( "Component creator for '" + kfp.name + "' already exists.", '#components', '#plugins' );
				continue;
			}

			this.components[ kfp.name ] = kfp.namespace;

		}

	}

};

/**
*
* @method addDefaults
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Manager.prototype.addDefaults = function( gameObject, params ) {

	//Add the properties handler to the gameobject
	gameObject.properties = gameObject.components.add( new Kiwifroot.Components.Properties( gameObject, params.properties ) );


};

/**
*
* @method addTo
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @param [executeBoot] {Boolean}
* @public
*/
Kiwifroot.Components.Manager.prototype.addTo = function( gameObject, params, executeBoot ) {

	//Add the 'properties'
	this.addDefaults( gameObject, params );

	//See if there are any components
	if( typeof params.components !== "undefined" ) {
		//No components found...

		//For each component
		for( var index in params.components ) {

			//Does a component exist for that index?
			if( !this.exists( index ) ) {
				this.game.log.warn( "A '" + index +"' component does not exist.", '#components' );
				continue;
			}

			//Get the component 
			this.components[ index ].add( this.state, gameObject, params.components[ index ] );

		}

	}

	if( typeof executeBoot === "undefined" || executeBoot ) {
		this.bootComponentsOnGameObjectPassed( gameObject );
	}

};

/**
* 
* @method bootComponentsOnGameObjectPassed
* @param gameObject
* @public
*/
Kiwifroot.Components.Manager.prototype.bootComponentsOnGameObjectPassed = function( gameObject ) {

	//Loop through the components and execute a boot method...
	for( var name in gameObject.components._components ) {

		if( Kiwi.Utils.Common.isFunction( gameObject.components._components[ name ].boot ) ) {
			gameObject.components._components[ name ].boot();
		}

	}

};
	

/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Manager.prototype.destroy = function() {

	delete this.state;

	delete this.game;

	delete this.components;

};

/**
* 
* @module Kiwifroot
* @submodule Components
*
*/

/**
*
* 
* @namespace Kiwifroot.Components
* @extends Kiwi.Component
* @class Properties
* @constructor
* @param owner {Kiwi.Entity}
* 
*/
Kiwifroot.Components.Properties = function( owner, properties ) {

	Kiwi.Component.call( this, owner, 'Properties' );

	/**
	* 
	* @property callbacks
	* @type Array
	* @private
	*/
	this._callbacks = [];

	/**
	*
	* @property _properties
	* @type Object
	* @private
	*/
	this._properties = {  };

	//properties

	this.processValues( properties );

};

Kiwi.extend( Kiwifroot.Components.Properties, Kiwi.Component );


/**
*
* @method processValues
* @param properties {Array}
* @public
*/
Kiwifroot.Components.Properties.prototype.processValues = function( properties, override ) {

	properties = properties || {};
	override = override || false;

	var property, index, value;

	for( index in properties ) {

		property = properties[ index ];

		if( !override && this.has( index ) ) {
			this.game.log.warn( "Property with the same name already exists.", '#properties' );
			continue;
		}

		value = null;

		//Assign the default values based in the type. 
		switch( property.type ) {

			case 'boolean':
				if( !property.value ) {
					property.value = false;
				} 
				value = property.value;
				break;

			case 'number':
				if( !property.value ) {
					this.set( property.name, 0 );
				} 
				value = property.value;
				break;

			case 'node':
				if( !property.value ) {
					property.value = { x: 0, y: 0 };
				}

				value = new Kiwi.Geom.Point( property.value.x, property.value.y );
				break;

			case 'string':
				if( !property.value ) {
					property.value = '';
				}
				value = property.value;
				break;

			default:
				value = property.value;
				break;

		}

		if( value !== null ) {
			this.set( index, value, false );
		}

	}

};


/**
* 
* @method has
* @param name {String}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Properties.prototype.has = function( name ) {

	return( this._properties[ name ] );

};


/**
*
* @method get
* @param name {String}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Properties.prototype.get = function( name ) {

	return( this._properties[ name ] );

};


/**
*
* @method set
* @param name {String}
* @public
*/
Kiwifroot.Components.Properties.prototype.set = function( name, value, callbacks ) {

	this._properties[ name ] = value;

	if( typeof callback == "undefined" || callback ) {
		this._executeCallbacks( name, value );
	}

};


/**
*
* @method delete
* @param name {String}
* @public
*/
Kiwifroot.Components.Properties.prototype.delete = function( name, callback ) {

	delete this._properties[ name ];

	if( typeof callback == "undefined" || callback ) {
		this._executeCallbacks( name, null );
	}

};

/**
* 
* @method _executeCallbacks
* @param name {String}
* @private
*/
Kiwifroot.Components.Properties.prototype._executeCallbacks = function( name, value ) {

	var i = 0, current;

	while( i < this._callbacks.length ) {

		current = this._callbacks[ i ];

		if( !current.name || current.name === name ) {
			current.callback.call( current.context, name, value );
		}

		i++;
	}


};


/**
* 
* @method onUpdate
* @param callback { Function }
* @param context { Any }
* @param [name=null] {String}
* @public
*/
Kiwifroot.Components.Properties.prototype.onUpdate = function( callback, context, name ) {

	if( !callback ) {
		this.game.log.warn('Properties Component: No callback was passed. Skipping.', '#properties');
		return;
	}

	name = name || null;

	this._callbacks.push( {
		callback: callback,
		context: context,
		name: name
	} );

};


/**
* 
* @method removeOnUpdate
* @param callback { Function }
* @param context { Any }
* @param [name=null] {String}
* @return {Boolean} Successfully removed or not
* @public
*/
Kiwifroot.Components.Properties.prototype.removeOnUpdate = function( callback, context, name ) {

	name = name || null;

	var i = 0, current;

	while( i < this._callbacks.length ) {

		current = this._callbacks[ i ];

		if( current.callback === callback && current.context === context && current.name === name ) {
			this._callbacks.splice( i, 1 );
			return true;
		}

		i++;
	}

	return false;

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Properties.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	delete this._callbacks;

	delete this._properties;

};

Kiwifroot.Components.TextureAnimation = function( owner ) {

	Kiwi.Component.call( this, owner, 'TextureAnimation' );

	this.state = this.owner.state;

	this.clock = this.owner.clock || this.game.time.clock;

	this._animations = {};

	this.isPlaying = true;

	this._startTime = null;
	this._lastFrameElapsed = this.clock.elapsed();

	//Inheritance

	//Create default animation

	this.currentAnimation = this.create( 'default', [ this.owner.atlas, this.owner.cellIndex ], 0.1, false );

	this.onChange = new Kiwi.Signal();
	this.onPlay = new Kiwi.Signal();
	this.onStop = new Kiwi.Signal();
	this.onUpdate = new Kiwi.Signal();

	//On Loop 

};

Kiwi.extend( Kiwifroot.Components.TextureAnimation, Kiwi.Component );


Kiwifroot.Components.TextureAnimation.prototype.objType = function() {
	return "TextureAnimation";
};


Kiwifroot.Components.TextureAnimation.prototype.create = function(name, cells, speed, loop, play) {
	//Kiwi creates sequence, and then uses that...
	return this.add( new Kiwifroot.Components.TextureAnimation.Animation( this, {
		name: name,
		speed: speed,
		loop: loop,
		cells: cells
	} ), play );
};


Kiwifroot.Components.TextureAnimation.prototype.add = function(animation, play) {
	if( !animation.name ) {
		Kiwi.Log.warn('TextureAnimation:Animation requires a name in order to function.');
		return animation;
	} 

	if( !Kiwi.Utils.Common.isArray( animation.cells ) ) {
		Kiwi.Log.warn('TextureAnimation:Animation missing cell definitions.');
		return animation;
	}

	this._animations[ animation.name ] = animation;

	if( play ) {
		this._play( animation.name );
	}
};


Kiwifroot.Components.TextureAnimation.prototype.play = function(name, resetTime) {

	name = name || this.currentAnimation.name;

	if( typeof resetTime === "undefined") resetTime = true;

	if( !resetTime && this.currentAnimation.name === name && this.isPlaying ) {
		return this.currentAnimation;
	} else {
		return this._play( name );
	}

};


Kiwifroot.Components.TextureAnimation.prototype.playAt = function(index, name) {
	name = name || this.currentAnimation.name;

	return this._play(name, index);
};


Kiwifroot.Components.TextureAnimation.prototype._play = function(name, index) {

	if( !this._setCurrentAnimation( name ) ) {
		//Could not play a animation which doesn't exist
		return;
	}

	this.currentAnimation.frameIndex = index || 0;
	
	this.onPlay.dispatch( this.currentAnimation );

	this.isPlaying = true;

	this.updateAnimationOnOwner();

	return this.currentAnimation;
};

Kiwifroot.Components.TextureAnimation.prototype.stop = function() {

	if( this.isPlaying ) {
		this.isPlaying = false;
		this.onStop.dispatch( this.currentAnimation );
	}

};

Kiwifroot.Components.TextureAnimation.prototype.pause = function() {
	//Pause the current animation
	this.stop();
};

Kiwifroot.Components.TextureAnimation.prototype.resume = function() {
	//Resume the current animation
	this.isPlaying = true;
};

//Switch to functionality missing ..

Kiwifroot.Components.TextureAnimation.prototype.nextFrame = function() {
	if( !this.currentAnimation ) return;

	this.currentAnimation.frameIndex++;
	if(this.currentAnimation.frameIndex >= this.currentAnimation.length) this.currentAnimation.frameIndex = 0;

};

Kiwifroot.Components.TextureAnimation.prototype.prevFrame = function() {
	if( !this.currentAnimation ) return;

	this.currentAnimation.frameIndex--;
	if (this.currentAnimation.frameIndex < 0) this.currentAnimation.frameIndex = this.currentAnimation.length - 1;
};

Kiwifroot.Components.TextureAnimation.prototype._setCurrentAnimation = function(name) {

	if( this.currentAnimation && this.currentAnimation.name === name ) {
		return false; 
	}

	if( !this._animations[ name ] ) {
		//Kiwi.Log.warn("TextureAnimation: No animation with the passed name was found. Please make sure it exists.");
		return false;
	}

	//Stop the current animation
	if( this.currentAnimation ) {
		this.stop();
	}

	//
	this.currentAnimation = this._animations[ name ];
	this.onChange.dispatch( this.currentAnimation );

	return true;
};	

Kiwifroot.Components.TextureAnimation.prototype.update = function() {
	//Update the current animation
	Kiwi.Component.prototype.update.call( this );

	if( !this.isPlaying || !this.currentAnimation) return;

	var frameDelta, 
		i,
		animation = this.currentAnimation, 
		length = animation.length;

	// How many frames do we move, ahead or behind?
	frameDelta = ( ( this.clock.elapsed() - this._lastFrameElapsed ) / animation.speed ) % ( length + 1 );

	// Round delta, towards zero
	if ( frameDelta > 0 ) {
		frameDelta = Math.floor( frameDelta );
	} else {
		frameDelta = Math.ceil( frameDelta );
	}

	if( frameDelta === 0 ) {
		return;
	}

	animation.frameIndex += frameDelta;
	this._lastFrameElapsed = this.clock.elapsed();

	// Loop check
	if ( animation.loop ) {

		if ( animation.frameIndex >= length ) {

			var repeats = Math.floor( animation.frameIndex / length );
			animation.frameIndex = animation.frameIndex % length;	

			if( animation._onLoop ) {
				for ( i = 0; i < repeats; i++ ) {
					animation._onLoop.dispatch();
				}
			}

		} else if ( animation.frameIndex < 0 ) {

			var repeats = Math.ceil( Math.abs( animation.frameIndex ) / length );

			animation.frameIndex = ( length + animation.frameIndex % length ) % length;

			if( animation._onLoop ) {
				for ( i = 0; i < repeats; i++ ) {
					animation._onLoop.dispatch();
				}
			}
		}

	} else if ( animation.frameIndex < 0 ) {

		animation.frameIndex = ( length + animation.frameIndex % length ) % length;
		this.stop();
		if( animation._onStop ) animation._onStop.dispatch();

	} else if ( animation.frameIndex >= length ) {
		animation.frameIndex = animation.frameIndex % length;

		this.stop();
		if( animation._onStop ) animation._onStop.dispatch();
		if( animation._onComplete ) animation._onComplete.dispatch();
	}

	this.updateAnimationOnOwner();
	if ( animation._onUpdate ) animation._onUpdate.dispatch();

};

// Missing get 'currentCell', 'frameIndex', 'length'

Kiwifroot.Components.TextureAnimation.prototype.getAnimation = function(name) {
	return this._animations[ name ];
};


Kiwifroot.Components.TextureAnimation.prototype.updateAnimationOnOwner = function() {

	//Get the current texture atlas / cell
	var indexInCells = this.currentAnimation.frameIndex * 2;

	this.owner.atlas = this.currentAnimation.cells[ indexInCells ];
	this.owner.cellIndex = this.currentAnimation.cells[ indexInCells + 1 ];

};


Kiwifroot.Components.TextureAnimation.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	for (var key in this._animations) {
		this._animations[key].destroy();
		delete this._animations[key];
	}

	delete this._animations;
	delete this.currentAnimation;
	delete this.clock;
	delete this.state;

	if( this.onChange ) this.onChange.dispose();
	if( this.onPlay ) this.onPlay.dispose();
	if( this.onStop ) this.onStop.dispose();
	if( this.onUpdate ) this.onUpdate.dispose();

	delete this.onChange;
	delete this.onPlay;
	delete this.onStop;
	delete this.onUpdate;


};


//Represents a singular animation 


Kiwifroot.Components.TextureAnimation.Animation = function(manager, params) {

	this.manager = manager;

	params = params || {};

	this.name = params.name || "Animation";

	this.speed = params.speed || 0.1;

	this.loop = params.loop || false;

	this.frameIndex = 0;

	//Cells 
	this.cells = this.parseCells( params.cells );
 	
	this._onLoop = null;
	this._onComplete = null;
	this._onPlay = null;
	this._onStop = null;
	this._onUpdate = null;

};	

Kiwifroot.Components.TextureAnimation.Animation.prototype = {

	objType: function() {
		return 'Animation'; //Duplicate of the regular Animation, but will do for now.  
	},

	parseCells: function( cells ) {

		if( !Kiwi.Utils.Common.isArray(cells) ) {
			Kiwi.Log.warn("TextureAnimation: Cells isn't in an array format.");
			return this.getCurrentCellOffOwner();
		}

		if( cells.length % 2 > 0 ) {
			Kiwi.Log.warn("TextureAnimation: Cell array passed isn't even. An animation maybe missing or not work as intended.");
		}

		var returnCells = [], 
			i = 0,
			texture;

		for( i; i < cells.length; i += 2 ) {

			//Get the texture 
			if( Kiwi.Utils.Common.isObject( cells[ i ] ) ) {
				//Passed as object 
				texture = cells[ i ];
			} else {
				//From ID on the state
				texture = this.manager.state.textures[ cells[ i ] ];
			}
			
			//Make sure it exists
			if( !texture ) {
				Kiwi.Log.warn("TextureAnimation: Could not find Texture '" + cells[ i ] + "'for Animation.");
				continue;
			}

			//Maybe validate the display = 'table-cell'

			returnCells.push( texture, cells[ i + 1 ] );
		}

		return returnCells;
	},

	getCurrentCellOffOwner: function() {
		return [ this.manager.owner.atlas, this.manager.owner.cellIndex ];
	},

	destroy: function() {

		if(this._onLoop) this._onLoop.dispose();
		if(this._onStop) this._onStop.dispose();
		if(this._onPlay) this._onPlay.dispose();
		if(this._onUpdate) this._onUpdate.dispose();
		if(this._onComplete) this._onComplete.dispose();

		this.cells = [];

		delete this._onLoop;
		delete this._onStop;
		delete this._onPlay;
		delete this._onUpdate;
		delete this._onComplete;
		delete this.manager;

	}

};

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'length', {
	get: function() {
		return Math.floor( this.cells.length * 0.5 );
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onLoop', {
	get: function() {
		if( !this._onLoop ) {
			this._onLoop = new Kiwi.Signal();
		}
		return this._onLoop;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onComplete', {
	get: function() {
		if( !this._onComplete ) {
			this._onComplete = new Kiwi.Signal();
		}
		return this._onComplete;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onPlay', {
	get: function() {
		if( !this._onPlay ) {
			this._onPlay = new Kiwi.Signal();
		}
		return this._onPlay;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onStop', {
	get: function() {
		if( !this._onStop ) {
			this._onStop = new Kiwi.Signal();
		}
		return this._onStop;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onUpdate', {
	get: function() {
		if( !this._onUpdate ) {
			this._onUpdate = new Kiwi.Signal();
		}
		return this._onUpdate;
	}
});

/**
* 
* @module Kiwifroot
*/

/**
* Controls translating, adding game assets from the game/level json to the Kiwi Loader.
* 
* @namespace Kiwifroot
* @class Asset
* @constructor
* @param game {Kiwi.Game}
* 
*/
Kiwifroot.Asset = function( game, gameOptions ) {

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	*
	* @property _assets
	* @type Array
	* @private
	*/
	this._assets = {};

	//Enable parallel loading?
	this._loadViaXHR = gameOptions.assetLoadViaXHR;

	/**
	* A prefix that should be added to all asset urls.
	* 
	* @property prefix
	* @type String
	* @public
	* @since 0.11.0
	*/
	this.prefix = gameOptions.assetPrefix || '';

	this.game.loader.enableParallelLoading = !this._loadViaXHR;

};

/**
* Returns the URL that should be used by taking into account prefix and absolution/relative directories.
* To Do: Absolute directory support.
* 
* @method getUrl
* @param url {String} 
* @return String
*/
Kiwifroot.Asset.prototype.getUrl = function( url ) {
	if( Kiwi.Utils.Common.isArray(url) ) {
		var i = url.length;
		while(i--) {
			url[i] = this.prefix + url[i];
		}
		return url;
	} else {
		return this.prefix + url;
	}
};

/**
* Static property holding the 'image' asset type. 
* @property IMAGE 
* @type String
* @default 'image'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.IMAGE = 'image';


/**
* Static property holding the 'spritesheet' asset type. 
* @property SPRITESHEET 
* @type String
* @default 'spritesheet'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.SPRITESHEET = 'spritesheet';


/**
* Static property holding the 'textureatlas' asset type. 
* @property TEXTUREATLAS 
* @type String
* @default 'textureatlas'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.TEXTUREATLAS = 'textureatlas';



/**
* Static property holding the 'sound' asset type. 
* @property SOUND 
* @type String
* @default 'sound'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.SOUND = 'sound';


/**
* Static property holding the 'json' asset type. 
* @property JSON 
* @type String
* @default 'json'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.JSON = 'json';


/**
* 
* @property SPRITESHEET_COMPILED
* @type String
* @default 'spritesheet-compiled'
* @static
* @readOnly
* @public
* @since 1.2.0
*/
Kiwifroot.Asset.SPRITESHEET_COMPILED = 'spritesheet-compiled';

/**
* 
* @property TAG
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.TAG = {

	/**
	* 
	* @property TAG.GLOBAL
	* @type String
	* @default 'global'
	* @readOnly
	* @public
	*/
	'GLOBAL': 'global',

	/**
	* 
	* @property TAG.LEVEL
	* @type String
	* @default 'level'
	* @readOnly
	* @public
	*/
	'LEVEL': 'level'
};

/**
* Returns a boolean indiciating if an asset with an id passed exists. 
* @method exists
* @param id {Number}
* @return {Boolean}
* @public
*/
Kiwifroot.Asset.prototype.exists = function( id ) {

	return ( typeof this._assets[ id ] !== "undefined" );

};

/**
* Adds an asset with an id to the 'asset' property.
* @method _add
* @param id {Number}
* @param type {String}
* @param metadata {Any}
* @param tag {Any}
* @private
*/
Kiwifroot.Asset.prototype._add = function( id, type, metadata, tag ) {

	metadata = metadata || {};

	this._assets[ id ] = { type: type, metadata: metadata, tag: tag };

};


/**
* Removes an asset from the asset list
* @method _remove
* @param id {Number}
* @return {Boolean}
* @private
*/
Kiwifroot.Asset.prototype._remove = function( id ) {

	if( this._assets[ id ] ) {
		delete this._assets[ id ];
		return true;
	}
	
	return false;
};


/**
* 
* @method get
* @param id {Number}
* @return {Object}
* @public 
*/
Kiwifroot.Asset.prototype.get = function( id ) {
	
	if( this.exists( id ) ) {
		return this._assets[ id ];
	}

	return null;

};


/**
* 
* @method remove
* @param id {Number}
* @public
*/
Kiwifroot.Asset.prototype.remove = function( id ) {

	if( this._remove( id ) && this.game.fileStore.exists( id ) ) {
		this.game.fileStore.removeFile( id );
	}

};



/**
* 
* @method removeAllByTag
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.removeAllByTag = function( tag ) {

	var index;

	for( index in this._assets ) {

		if( this._assets[ index ].tag === tag ) {
			
			this.remove( index );

		}

	}

};



/**
* Attempts to loading in an assets based on the 'type' passed. 
* 
* @method load 
* @param params {Object}
*	@param params.id {Number}
*	@param params.type {String}
* 	@param [params.global=false] {Boolean} 
* @param [global] {Boolean}
* @public
*/ 
Kiwifroot.Asset.prototype.load = function( param, global ) {

	param = param || {};

	if( typeof param.id === "undefined" || !param.type ) {
		this.game.log.error( 'The asset cannot be added. Missing either a type or id.', '#assets' );
		return;
	} 

	if( this.exists( param.id ) ) {
		this.game.log.warn( 'An asset with the id of ' + param.id + ' already exists.', '#assets' );
		return;
	}

	var tag = (global || param.global) ? Kiwifroot.Asset.TAG.GLOBAL : Kiwifroot.Asset.TAG.LEVEL ;

	switch( param.type ) {

		case Kiwifroot.Asset.IMAGE:
			this.loadImage( param, tag );
			break;

		case Kiwifroot.Asset.SPRITESHEET:
			this.loadSpriteSheet( param, tag );
			break;

		case Kiwifroot.Asset.SPRITESHEET_COMPILED:
			this.loadCompiledSpriteSheet( param, tag );
			break;

		case Kiwifroot.Asset.TEXTUREATLAS: 
			this.loadTextureAtlas( param, tag );
			break;

		case Kiwifroot.Asset.SOUND: 
			this.loadSound( param, tag );
			break;

		case Kiwifroot.Asset.JSON: 
			this.loadJson( param, tag );
			break;

		default: 
			this.game.log.error( 'Asset type match not found. Asset ID ' + param.id + ' not loaded.', '#assets' );
			break;
	}

};

/**
* Loops through its internal assets removes any assets that were not loaded.
* Returns an array of metadata for the assets it removed. 
* 
* @method removeAssetsNotLoaded
* @param [ignoreSounds=true] {Boolean} 
* @return Array
* @public
*/
Kiwifroot.Asset.prototype.removeAssetsNotLoaded = function( ignoreSounds ) {

	if( typeof ignoreSounds === "undefined" ) {
		ignoreSounds = true;
	}

	var assetsRemoved = [],
		data;

	for( var index in this._assets ) {

		data = this._assets[ index ].metadata;

		if( !this.hasLoaded( index ) ) {
			
			if( data.type === Kiwifroot.Asset.SOUND && ignoreSounds ) {
				continue;
			} else {
				assetsRemoved.push( data );
			}
		}

	}

	return assetsRemoved;

};

/**
* Returns a boolean indicating if that asset has been loaded or not.
* 
* If the asset has not loaded, and it exists on this asset manager, then it is removed.
* 
* @method hasLoaded
* @param id {Number}
* @public
*/
Kiwifroot.Asset.prototype.hasLoaded = function( id ) {

	if( typeof id === "undefined" ) {
		this.game.log.error( 'Could not check. Missing either a type or id.', '#assets' );
		return;
	} 

	if( this.game.fileStore.exists( id ) ) {
		return true;
	} 

	this._remove( id );
	return false;

};


/**
*
* @method loadImage
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String}
*	@param [params.width] {Number}
*	@param [params.height] {Number}
*	@param [params.offsetX] {Number}
*	@param [params.offsetY] {Number}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadImage = function( params, tag ) {

	params = params || {};

	if( !params.id || !params.url ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#image' );
		return;
	}
	params.width = params.width || null;
	params.height = params.height || null;
	params.offsetX = params.offsetX || null;
	params.offsetY = params.offsetY || null;

	var object = {
		key: params.id, 
		url: this.getUrl( params.url ), 
		width: params.width, 
		height: params.height, 
		offsetX: params.offsetX, 
		offsetY: params.offsetY,
		crossOrigin: "anonymous",
		timeout: null
	};

	if( this._loadViaXHR ) {
		object.xhrLoading = true;
	}

	this._add( params.id, Kiwifroot.Asset.IMAGE, params, tag );
	this.game.loader.addImage( object );

};



/**
*
* @method loadSpriteSheet
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String|Array}
*	@param params.frameWidth {Number}
*	@param params.frameHeight {Number}
*	@param [params.numCells] {Number} 
*	@param [params.rows] {Number} 
*	@param [params.cols] {Number} 
*	@param [params.sheetOffsetX] {Number} 
*	@param [params.sheetOffsetY] {Number} 
*	@param [params.cellOffsetX] {Number} 
*	@param [params.cellOffsetY] {Number} 
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadSpriteSheet = function( params, tag ) {

	params = params || {};

	if( !params.id || !params.url || !params.frameWidth || !params.frameHeight ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#spritesheet' );
		return;
	}

	if( Kiwi.Utils.Common.isArray( params.url ) ) {
		this.loadCompiledSpriteSheet( params, tag );
		return;
	} 

	params.numCells = params.numCells || null;
	params.rows = params.rows || null;
	params.cols = params.cols || null;
	params.sheetOffsetX = params.sheetOffsetX || null;
	params.sheetOffsetY = params.sheetOffsetY || null;
	params.cellOffsetX = params.cellOffsetX || null;
	params.cellOffsetY = params.cellOffsetY || null;

	var object = {
		key: params.id, 
		url: this.getUrl( params.url ), 
		frameWidth: params.frameWidth, 
		frameHeight: params.frameHeight,
		numCells: params.numCells,
		rows: params.rows,
		cols: params.cols,
		sheetOffsetX: params.sheetOffsetX,
		sheetOffsetY: params.sheetOffsetY,
		cellOffsetX: params.cellOffsetX,
		cellOffsetY: params.cellOffsetY,
		crossOrigin: "anonymous",
 		timeout: null
	};

	if( this._loadViaXHR ) {
		object.xhrLoading = true;
	}

	this._add( params.id, Kiwifroot.Asset.SPRITESHEET, params, tag );
	this.game.loader.addSpriteSheet( object );


};

/**
*
* @method loadCompiledSpriteSheet
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {Array}
*	@param params.frameWidth {Number}
*	@param params.frameHeight {Number}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadCompiledSpriteSheet = function( params, tag ) {

	if( !params.id || !params.url || !params.frameWidth || !params.frameHeight ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#spritesheet' );
		return;
	}

	var i,
		object, 
		file = new Kiwi.Files.TextureFile( this.game, {
			type: Kiwi.Files.File.SPRITE_SHEET, 
			url: this.getUrl( params.id + '.png' ), 
			key: params.id, 
			fileStore: this.game.fileStore,
			timeout: null,
			metadata: {
				frameWidth: params.frameWidth,
				frameHeight: params.frameHeight
			}
		} ),
		files = [];

	for( i = 0; i < params.url.length; i++ ) {

		object = {
			key: params.id + '-cell-' + i,
			url: this.getUrl( params.url[ i ] ),
			crossOrigin: "anonymous",
			timeout: null,
			state: this.game.states.current
		};

		if( this._loadViaXHR ) {
			object.xhrLoading = true;
		}

		files.push( this.game.loader.addImage( object ) );
	}


    this.game.fileStore.addFile( params.id, file );
	this._add( params.id, Kiwifroot.Asset.SPRITESHEET_COMPILED, params, tag );


	// When loading is complete, 
	// Compile the images into a singular one
	this.game.loader.onQueueComplete.addOnce( function() {

		var canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d'),
			i, data;

		canvas.width = params.frameWidth * files.length;
		canvas.height = params.frameHeight;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for( i = 0; i < files.length; i++) {

			data = files[i].data;

			if( !data ) {
				file.hasError = true;
				file.success = false;
				this.game.fileStore.removeFile( file.key );
				return;
			}

			ctx.drawImage( data, 
				0, 0, data.width, data.height, 
				i * params.frameWidth, 0, params.frameWidth, params.frameHeight );

		}

	    file.success = true;
	    file.hasError = false;
		file.data = canvas;

	}, this );

};

/**
*
* @method loadTextureAtlas
* @param params {Object}
*	@param params.id {Number}
* 	@param params.imageUrl {String}
*	@param params.jsonId {Number}
* 	@param params.jsonUrl {String}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadTextureAtlas = function( params, tag ) {

	if( !params.id || !params.imageUrl || !( params.jsonUrl || params.data) || !params.jsonId ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#textureatlas' );
		return;
	}

	if( params.jsonUrl ) {

		this._add( params.id, Kiwifroot.Asset.TEXTUREATLAS, params, tag );
		this._add( params.jsonId, Kiwifroot.Asset.JSON, params, tag );

		var object = {
			textureAtlasKey: params.id,
			textureAtlasURL: this.getUrl( params.imageUrl ),
			jsonKey: params.jsonId,
			jsonURL: this.getUrl( params.jsonUrl ),
			crossOrigin: "anonymous",
 			timeout: null
		};

		if( this._loadViaXHR ) {
			object.xhrLoading = true;
		}

		//Load in the texture atlas and the image normally.
		this.game.loader.addTextureAtlas( object );

	} else if( params.data ) {
		//Load in the texture atlas but not the data
		this._loadTextureAtlasNotJson( params );
	}

};



/**
*
* @method _loadTextureAtlasNotJson
* @param params {Object}
*	@param params.id {Number}
* 	@param params.imageUrl {String}
*	@param params.jsonId {Number}
* 	@param params.data {Object}
* @param tag {Any}
* @private
*/
Kiwifroot.Asset.prototype._loadTextureAtlasNotJson = function( params, tag ) {

	//Create the Files
	var object = {
	        type: Kiwi.Files.File.TEXTURE_ATLAS,
	    	url: this.getUrl( params.imageUrl ), 
	    	fileStore: this.game.fileStore,
	    	key: params.id,
			crossOrigin: "anonymous",
 			timeout: null
    	};

	if( this._loadViaXHR ) {
		object.xhrLoading = true;
	}

    var tafile = new Kiwi.Files.TextureFile( this.game, object );
    var jsfile = new Kiwi.Files.DataFile( this.game, {
    		type: Kiwi.Files.File.JSON, 
    		url: this.getUrl( params.jsonId + '.json' ), 
    		key: params.jsonId,
    		fileStore: this.game.fileStore,
 			timeout: null
    	} );

    //Create the meta data.
    tafile.metadata = { jsonID: params.jsonId };
    jsfile.metadata = { imageID: params.id };

    //Add the TextureAtlas to the files to be loaded.
    this.game.loader.addFileToQueue( tafile );

    //Set the success of the load for the json file. This will stop it from loading.
    jsfile.data = JSON.stringify( params.data );
    jsfile.success = true;
    jsfile.hasError = false;

    //Add the JSON file to the filestore.
    this.game.fileStore.addFile( jsName, jsfile );
    
	this._add( params.id, Kiwifroot.Asset.TEXTUREATLAS, params, tag );
	this._add( params.jsonId, Kiwifroot.Asset.JSON, params, tag );

};


/**
*
* @method loadJson
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadJson = function( params, tag ) {

	if( !params.id || !(params.url || params.data) ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#json' );
		return;
	}

	if( params.url ) {

		this._add( params.id, Kiwifroot.Asset.JSON, params, tag );
		this.game.loader.addJSON( {
			key: params.id, 
			url: this.getUrl( params.url ),
 			timeout: null
		} );

	} else {

 		var file = new Kiwi.Files.DataFile( this.game, {
 				type: Kiwi.Files.File.JSON, 
 				url: this.getUrl( params.id + '.json' ), 
 				key: params.id, 
 				fileStore: this.game.fileStore,
 				timeout: null
 			} );

        //Set the success of the load for the json.
        file.data = JSON.stringify( params.data );
        file.success = true;
        file.hasError = false;

        //Add the JSON file to the filestore.
        this.game.fileStore.addFile( params.id, file );
        this._add( params.id, Kiwifroot.Asset.JSON, params, tag );

	}

};


/**
*
* @method loadSound
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String|Array}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadSound = function( params, tag ) {

	if( !params.id || !params.url ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#sound' );
		return;
	}


	this._add( params.id, Kiwifroot.Asset.SOUND, params, tag );
	this.game.loader.addAudio( { 
		key: params.id, 
		url: this.getUrl( params.url ),
 		timeout: null,
		crossOrigin: "anonymous"
	} );

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Core Component which contains useful methods when dealing with the game camera.
* This component is designed to be attached to States. Primarily the 'level' state.
* 
* @namespace Kiwifroot
* @class Camera
* @extends Kiwi.Component
* @constructor
* @param state {Kiwifroot.State}
* @param [params] {Object}
* 	@param [params.maxX=Infinity] {Number} The maximum value on the x-axis the camera can go to.
*	@param [params.maxY=Infinity] {Number} The maximum value on the y-axis the camera can go to.
*	@param [params.minX=-Infinity] {Number} The minimum value on the x-axis the camera can go to.
*	@param [params.minY=-Infinity] {Number} The minimum value on the y-axis the camera can go to.
* 
*/
Kiwifroot.Camera = function( state, params ) {

	params = params || {};

	Kiwi.Component.call( this, state, 'Camera' );

	/**
	*
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = this.owner;

	/**
	* The camera which this component changing.
	* @property camera
	* @type Kiwi.Camera
	* @default game.cameras.defaultCamera
	* @public
	*/
	this.camera = this.game.cameras.defaultCamera;

	/**
	* The transform of an object that the camera should lock on to.
	* @property _lockedTransform
	* @type Kiwi.Geom.Transform
	* @default null
	* @private
	*/
	this._lockedTransform = null;

	/**
	* Coordinates that the camera can be offset by when locked onto a transform.
	* @property _lockedOffset
	* @type Kiwi.Geom.Point
	* @private
	*/
	this._lockedOffset = new Kiwi.Geom.Point(0,0);

	/**
	* 
	* @property minX
	* @type Number
	* @default -Infinity
	* @public
	*/
	this.minX = -Infinity;

	/**
	* 
	* @property minY
	* @type Number
	* @default -Infinity
	* @public
	*/
	this.minY = -Infinity; 
    
	/**
	* 
	* @property maxX
	* @type Number
	* @default Infinity
	* @public
	*/
	this.maxX = Infinity;

	/**
	* 
	* @property maxY
	* @type Number
	* @default Infinity
	* @public
	*/
	this.maxY = Infinity; 

	/**
	* The cooridnates that the camera should pan to.
	* @property _pan
	* @type Kiwi.Geom.Point
	* @private
	*/
	this._pan = new Kiwi.Geom.Point( 0, 0 );

	/**
	* If the camera is currently panning or not.
	* @property panning
	* @type Boolean
	* @default false
	* @public
	*/
	this.panning = false;

	/**
	* The speed at which the camera should pan. In pixels per second.
	* @property panSpeed
	* @type Number
	* @default 100 
	* @public
	*/
	this.panSpeed = 100; //px per second

	/**
	* The current position of the camera
	* @property _pos
	* @type Kiwi.Geom.Point
	* @private
	*/
	this._pos = new Kiwi.Geom.Point( 0, 0 );

	/**
	* An offset set of coordinates to be applied to the camera.
	* @property offset
	* @type Kiwi.Geom.Point
	* @public
	*/
	this.offset = new Kiwi.Geom.Point( 0, 0 );

	this.applyDefaults( params );
};

Kiwi.extend( Kiwifroot.Camera, Kiwi.Component);


/**
*
* @method applyDefaults
* @param [params] {Object}
*	@param [params.x] {Number}
*	@param [params.y] {Number}
*	@param [params.offsetX] {Number}
*	@param [params.offsetY] {Number}
*	@param [params.panSpeed] {Number}
*	@param [params.minX] {Number}
*	@param [params.minY] {Number}
*	@param [params.maxX] {Number}
*	@param [params.maxY] {Number}
* @public
*/
Kiwifroot.Camera.prototype.applyDefaults = function( params ) {

	params = params || {};

	//Params
	params.x = params.x || this._pos.x;
	params.y = params.y || this._pos.y;
	params.offsetX = params.offsetX || this.offset.x;
	params.offsetY = params.offsetY || this.offset.y;
	params.panSpeed = params.panSpeed || this.panSpeed;

	//Apply Defaults
	this._pos.setTo( params.x, params.y );
	this.offset.setTo( params.offsetX, params.offsetY );
	this.panSpeed = params.panSpeed;

	if( typeof params.maxX !== "undefined") {
		this.maxX = params.maxX;
	}

	if( typeof params.maxY !== "undefined") {
		this.maxY = params.maxY; 
	}

	if( typeof params.minX !== "undefined") {
		this.minX = params.minX;
	}

	if( typeof params.minY !== "undefined") {
		this.minY = params.minY; 
	}

};

/**
* The cameras x location.
* @property x
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "x", {

	get: function () {
		return this._pos.x;
	},

	enumerable: true,

	configurable: true

});


/**
* The cameras y location.
* @property y
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "y", {

	get: function () {
		return this._pos.y;
	},

	enumerable: true,

	configurable: true

});


/**
* The scale on the x-axis for the camera.
* @property scaleX
* @type Number
* @default 1
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "scaleX", {

	get: function () {
		return this.camera.transform.scaleX;
	},

	set: function(val) {
		this.camera.transform.scaleX = val;
	},

	enumerable: true,

	configurable: true

});


/**
* The scale on the y-axis for the camera.
* @property scaleY
* @type Number
* @default 1
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "scaleY", {

	get: function () {
		return this.camera.transform.scaleY;
	},

	set: function(val) {
		this.camera.transform.scaleY = val;
	},

	enumerable: true,

	configurable: true

});

/**
* Method to quickly set the min/max values based on x, y, width, height values passed.
* @method setBoundary
* @param x {Number}
* @param y {Number}
* @param width {Number}
* @param height {Number}
* @public
*/
Kiwifroot.Camera.prototype.setBoundary = function(x, y, width, height) {

	this.minX = x;
	this.minY = y;

	this.maxX = x + width;
	this.maxY = y + height;

};

/**
* Pans the camera to a location passed. 
* You can decided if the camera should pan to the location right away, 
*
* This method will automatically 'unlock' the camera if you choose to pan right away.
* Otherwise you will have to manually 'unlock' the camera.
* 
* @method panTo
* @param x {Number} 
* @param y {Number} 
* @param [start=true] {Boolean} If panning should happen straight away. 
* @public
*/
Kiwifroot.Camera.prototype.panTo = function(x, y, start) {

	if( typeof start == "undefined") {
		this.panning = true;
	} else {
		this.panning = start;
	}

	//Unlock the camera if we are going to start panning.
	if( this.panning ) {
		this.unlock();
	}

	this._pan.setTo(x, y);

	if( this._pan.x === this._pos.x && this._pan.y === this._pos.y ) {
		this.panning = false;
	}

};


/**
* Snaps the camera to a set cooridnates passed.
* Unlocks and stops any panning currently occuring.
*
* @method snapTo
* @param x {Number}
* @param y {Number}
* @public
*/
Kiwifroot.Camera.prototype.snapTo = function(x, y) {

	this.panning = false;
	this.unlock();

	this._pos.x = x;
	this._pos.y = y;

};


/**
* Unlocks the camera. 
* @method unlock
* @public
*/
Kiwifroot.Camera.prototype.unlock = function() {
	this._lockedTransform = null;
};


/**
* Locks the camera to a transform passed.
* @method lock
* @param transform {Kiwi.Geom.Transform}
* @param offsetX {Number}
* @param offsetY {Number}
* @public
*/
Kiwifroot.Camera.prototype.lock = function( transform, offsetX, offsetY ) {

	offsetX = offsetX || 0;
	offsetY = offsetY || 0;

	this._lockedTransform = transform;
	this._lockedOffset.setTo( offsetX, offsetY );
};


/**
* Returns a boolean indicated whether or not the camera is currently 'locked' or not.
* @property locked
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "locked", {

	get: function () {
		return ( this._lockedTransform );
	},

	enumerable: true,

	configurable: true

});


/**
* If set, the camera will 'stick' to the transform.  
* 
* @property lockOn
* @type Kiwi.Geom.Transform
* @default null
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "lockOn", {

	get: function () {
		return this._lockedTransform;
	},

	set: function(val) {
		this._lockedTransform = val;
		this._lockedOffset.setTo(0, 0);
	},

	enumerable: true,

	configurable: true

});



/**
*
* @method _calculateBoundary
* @private
*/
Kiwifroot.Camera.prototype._calculateBoundary = function() {

	this._pos.x = Kiwi.Utils.GameMath.clamp( this._pos.x, this.maxX, this.minX );
	this._pos.y = Kiwi.Utils.GameMath.clamp( this._pos.y, this.maxY, this.minY );

};


/**
*
* @method _calculatePan
* @private
*/
Kiwifroot.Camera.prototype._calculatePan = function() {

	if( this.panning ) {


		//Speed per milliseconds to per seconds
		var maxSpeedPerFrame = this.panSpeed * ( this.game.time.delta() / 1000 );
		var angle = this._pos.angleTo( this._pan );
		var moveDistance = Kiwi.Utils.GameMath.clamp( this._pos.distanceTo( this._pan ), -maxSpeedPerFrame, maxSpeedPerFrame);


		//Add the to position variable.
		this._pos.x += +(Math.cos( angle ) * moveDistance).toFixed( 1 );
		this._pos.y += +(Math.sin( angle ) * moveDistance).toFixed( 1 );


		//Are we there yet?
		if( Kiwi.Utils.GameMath.fuzzyEqual( this._pos.x|0, this._pan.x|0 ) &&
			Kiwi.Utils.GameMath.fuzzyEqual( this._pos.y|0, this._pan.y|0 ) ) {

			this.panning = false;
			this._pos.x = this._pos.x|0;
			this._pos.y = this._pos.y|0;

		} 

	}

};


/**
*
* @method _calculateLock
* @private
*/
Kiwifroot.Camera.prototype._calculateLock = function(){

	if( this.locked ) {

		this._pos.x = this._lockedTransform.x + this._lockedOffset.x;
		this._pos.y = this._lockedTransform.y + this._lockedOffset.y;

	}

};



/**
*
* @method postUpdate
* @public
*/
Kiwifroot.Camera.prototype.postUpdate = function() {

	this._calculateLock();
	this._calculatePan();
	this._calculateBoundary();

	this.camera.transform.x = -(this._pos.x + this.offset.x);
	this.camera.transform.y = -(this._pos.y + this.offset.y);

};



/**
*
* @method destroy
* @public
*/
Kiwifroot.Camera.prototype.destroy = function() {
	
	Kiwi.Component.prototype.destroy.call( this );

	//Reset the camera position
	this.camera.transform.x = 0;
	this.camera.transform.y = 0;
	this.camera.transform.scaleX = 1;
	this.camera.transform.scaleY = 1;

	delete this.state;

	delete this.camera;

	delete this._lockedTransform;

	delete this._pan;

	delete this._pos;

	delete this.offset;


};



/**
* 
* @module Kiwifroot
*
*/

/**
* Returns information regarding the fps of the game. 
* If the frame rate is stable, now much information it will collect each frame, e.t.c.
* 
* @namespace Kiwifroot
* @class FPSReadout
* @constructor
* @param game {Kiwifroot.Game}
* 
*/
Kiwifroot.FPSReadout = function(game) {

	/**
	* The game this FPSReadout is for.
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* The number of readings to contain at a single time
	* @property numReadings
	* @type number
	* @default 5
	* @public
	*/
	this.numReadings = 5;

	/**
	* The maximum difference that the fps can have can be to call the framerate stable.  
	* @property maxFlux
	* @type number
	* @default 3
	* @public
	*/
	this.maxFlux = 5;

	/**
	* Contains a list of time rates, which is used to check frame stablity and FPS
	* @property readings
	* @type Array
	* @public
	*/
	this.readings = [];

};


/**
* 
* @method objType
* @return {String} "FPSReadout"
* @public
*/
Kiwifroot.FPSReadout.prototype.objType = function() {
	return 'FPSReadout';
};


/**
* 
* @method update
* @public
*/
Kiwifroot.FPSReadout.prototype.update = function() {
	this.readings.push( Math.round( Math.min( 60 / this.game.time.rate, 60 ) ) );

	while( this.readings.length > this.numReadings ) {
		this.readings.shift();	
	}

	this.debug();
};


/**
* 
* @property fps
* @type number
* @readOnly
* @public
*/
Object.defineProperty(Kiwifroot.FPSReadout.prototype, "fps", {
	get: function() {
		return this.readings[this.readings.length-1];
	}
});


/**
* 
* @method normalizedFPS
* @type number
* @readOnly
* @public
*/
Object.defineProperty(Kiwifroot.FPSReadout.prototype, "normalizedFPS", {
	get: function() {

		var i = 0,
			sum = 0;

		while( i < this.readings.length ) {
			sum += this.readings[i];
 			i++;
		}

		return Math.round(sum / this.readings.length);
	}
});


/**
* 
* @method stable
* @type boolean
* @readOnly
* @public
*/
Object.defineProperty(Kiwifroot.FPSReadout.prototype, "stable", {
	get: function() {

 		var min, max, fps,
 			i = 0;

 		//Get the minimum and maximum readouts in the readings array.
 		while( i < this.readings.length ) {

 			fps = this.readings[i];

 			if( !min || min > fps) {
 				min = fps;
 			}

 			if( !max || max < fps ) {
 				max = fps;
 			}

 			i++;
 		}

 		//Return true/false based on the difference
 		return ( max - min <= this.maxFlux );

	}
});

/**
* 
* @method _getMembers
* @private
*/
Kiwifroot.FPSReadout.prototype._getMembers = function() {
	if( this.game.states.current ) {
		return this.game.states.current.members.length;
	}
	return 'null';
}

/**
* 
* @method debug
* @private
*/
Kiwifroot.FPSReadout.prototype.debug = function() {

	if( this.game.debugMode ) {

		var ctx = this.game.stage.dctx,
			y = 20,
			spacing = 5,
			textSize = 16;

		ctx.textAlign = "left";
		ctx.fillStyle = 'white';
		ctx.font = textSize.toString() + 'px Verdana';
		
		ctx.fillText( "State Members: " + this._getMembers(), 10, y );
		y += textSize + spacing;

		ctx.fillText( "Normalised FPS: " + this.normalizedFPS, 10, y );
		y += textSize + spacing;

		ctx.fillText( "FPS: " + this.fps, 10, y );
		y += textSize + spacing;


	}

}

/**
* 
* @module Kiwifroot
*
*/


/**
* The base class that is used when you create a new Game.
* Handles the creation of game wide managers and states used by the game.
* 
* @namespace Kiwifroot
* @class Game
* @extends Kiwi.Game
* @constructor
* @param params {Object}
*	@param params.jsonURL {String} The URL of the game json file to load.
*	@param [params.data] {Object} Game data. This can be used instead of the 'jsonURL'
*	@param [params.width=Kiwifroot.DEFAULTS.width] {Number} The width of the game. In pixels.
*	@param [params.height=Kiwifroot.DEFAULTS.height] {Number} The height of the game. In pixels.
* 	@param [params.elementId] {String} The ID of the dom element this game should go in.
* 	@param [params.name] {String} Name of the game.
*	@param [params.cocoon=false] {Boolean} If the game is to be executed with CocoonJS settings or not. 
* 	@param [params.taImageURL] {String}
*	@param [params.taJsonURL] {String}
* 
*/
Kiwifroot.Game = function( params ) {

	/**
	*
	* @property log
	* @type Kiwifroot.Log
	* @public
	*/
	this.log = Kiwi.Log;

	params = params || {};

	var gameOptions = this._getDefaultGameOptions( params );

	if( typeof params.name === "undefined") {
		params.name = Kiwifroot.DEFAULT.name;
	}

	/**
	* Executed when the game starts and all the states have been created.
	* @property onStart
	* @type Function
	* @public
	*/
	this._onStart = params.onStart;

	Kiwi.Game.call( this, params.elementId, params.name, null, gameOptions );

	/**
	* The URL of the webview to be loaded in. 
	*
	* @property webviewURL
	* @type String
	* @protected
	*/
	this.webviewURL = gameOptions.webviewURL;

	/**
	* 
	* @property debugMode
	* @type Boolean
	* @default false
	* @public
	*/ 
	this._debugMode = gameOptions.debugMode;

	/**
	* 
	* @property textureAtlas
	* @type Object
	* @public
	*/
	this.textureAtlas = {
	 	image: gameOptions.taImageURL,
		json: gameOptions.taJsonURL
	};


	/**
	*
	* @property info
	* @type Kiwifroot.Information
	* @public
	*/
	this.info = new Kiwifroot.Information( this, gameOptions, params );


	/**
	* 
	* @property fpsReadout
	* @type Kiwifroot.FPSReadout
	* @public
	*/
	this.fpsReadout = new Kiwifroot.FPSReadout( this );

	/**
	*
	* @property logReadout
	* @type Kiwifroot.LogReadout
	* @public
	*/
	this.logReadout = new Kiwifroot.LogReadout( this );

	/**
	*
	* @property asset
	* @type Kiwifroot.Asset
	* @public
	*/
	this.asset = new Kiwifroot.Asset( this, gameOptions );


	if( gameOptions.release ) {
		this.log.maxRecordings = 0;
		this.log.display = false;
		this.log.enabled = false;
		this.log.recording = false;
	}

	//Extend the kiwi plugins manager
	Kiwi.extend( this.pluginManager, Kiwifroot.PluginManagerExtension );

};

Kiwi.extend( Kiwifroot.Game, Kiwi.Game );


/**
* Returns an object literal for the gameoptions to be used with this Kiwifroot game.
* This method is only used when a game is instanated. 
* @method _getDefaultGameOptions
* @param params {Object} 
* @private
*/
Kiwifroot.Game.prototype._getDefaultGameOptions = function( params ) {

	var gameOptions = {};

	if( typeof params.width == "undefined" ) {
		gameOptions.width = Kiwifroot.DEFAULT.width;
	} else {
		gameOptions.width = params.width;
	}

	if( typeof params.height == "undefined" ) {
		gameOptions.height = Kiwifroot.DEFAULT.height;
	} else {
		gameOptions.height = params.height;
	}

	if( params.cocoon ) {
		gameOptions.deviceTarget = Kiwi.TARGET_COCOON;
		gameOptions.scaleType = Kiwi.Stage.SCALE_FIT;
	} else {
		gameOptions.deviceTarget = Kiwi.TARGET_BROWSER;
		gameOptions.scaleType = Kiwi.Stage.SCALE_NONE;
	}

	if( params.scaleType ) {
		gameOptions.scaleType = params.scaleType;
	}

	if( typeof params.plugins !== "undefined" ) {
		this.game.log.log('Plugins have to be added to the Kiwifroot game via their game JSON files/objects.');
		delete params.plugins;
	}

	if( typeof params.taImageURL === "undefined" ) {
		gameOptions.taImageURL = Kiwifroot.DEFAULT.taImageURL;
	} else {
		gameOptions.taImageURL = params.taImageURL;
	}

	if( typeof params.taJsonURL === "undefined" ) {
		gameOptions.taJsonURL = Kiwifroot.DEFAULT.taJsonURL;
	} else {
		gameOptions.taJsonURL = params.taJsonURL;
	}

	if( typeof params.debugMode == "undefined" ) {
		gameOptions.debugMode = Kiwifroot.DEFAULT.debugMode;
	} else {
		gameOptions.debugMode = params.debugMode;
	}

	if( typeof params.release === "undefined" ) {
		gameOptions.release = Kiwifroot.DEFAULT.release;
	} else {
		gameOptions.release = params.release;
	}

	if( typeof params.webviewURL === "undefined" ) {
		gameOptions.webviewURL = Kiwifroot.DEFAULT.webviewURL;
	} else {
		gameOptions.webviewURL = params.webviewURL;
	}

	if( typeof params.skipLaunch === "undefined" ) {
		gameOptions.skipLaunch = Kiwifroot.DEFAULT.skipLaunch;
	} else {
		gameOptions.skipLaunch = params.skipLaunch;
	}

	if( typeof params.splashOpenURL === "undefined" ) {
		gameOptions.splashOpenURL = Kiwifroot.DEFAULT.splashOpenURL;
	} else {
		gameOptions.splashOpenURL = params.splashOpenURL;
	}

	if( typeof params.loadLevelJsonAtStart === "undefined" ) {
		gameOptions.loadLevelJsonAtStart = Kiwifroot.DEFAULT.loadLevelJsonAtStart;
	} else {
		gameOptions.loadLevelJsonAtStart = params.loadLevelJsonAtStart;
	}

	if( typeof params.renderCanvas !== "undefined" && params.renderCanvas || Kiwifroot.DEFAULT.renderCanvas) {
		gameOptions.renderer = Kiwi.RENDERER_CANVAS;
	} //Default renderer is the kiwi default otherwise

	if( typeof params.assetLoadViaXHR === "undefined" ) {
		gameOptions.assetLoadViaXHR = Kiwifroot.DEFAULT.assetLoadViaXHR;
	} else {
		gameOptions.assetLoadViaXHR = params.assetLoadViaXHR;
	}

	if( typeof params.assetPrefix == "undefined" ) {
		gameOptions.assetPrefix = Kiwifroot.DEFAULT.assetPrefix;
	} else {
		gameOptions.assetPrefix = params.assetPrefix;
	}

	return gameOptions;

};


Object.defineProperty(Kiwifroot.Game.prototype, "debugMode", {
	set: function( val ) {

		this._debugMode = val;

		if( !this.stage.debugCanvas ) {
			if( val ) {
				this.stage.createDebugCanvas();
				this.stage.debugCanvas.style.display = "block";
			}
			return;
		}

		if( val ) {
			if( this.stage.debugCanvas.style.display === "none" )
				this.stage.toggleDebugCanvas();
		} else {
			if( this.stage.debugCanvas.style.display === "block" )
				this.stage.toggleDebugCanvas();
		}
	},

	get: function() {
		return this._debugMode;
	}
});
		


/**
* Executed when the DOM has been loaded.
* Boots game managers.
* 
* @method _start
* @private
*/
Kiwifroot.Game.prototype._start = function() {

	Kiwi.Game.prototype._start.call( this );

	if( this._debugMode ) {
		this.debugMode = true;
	}

	this._createStates();


};

/**
* 
* @method _loop
* @private
*/
Kiwifroot.Game.prototype._loop = function() {

	if( this.debugMode ) { 
		this.stage.clearDebugCanvas();
	}

	Kiwi.Game.prototype._loop.call( this );

	this.fpsReadout.update();

	this.logReadout.update();

}



/**
* 
* @method _createStates
* @private
*/
Kiwifroot.Game.prototype._createStates = function() {

	/**
	* 
	* @property launchState
	* @type Kiwifroot.States.Launch
	* @public
	*/ 
	this.launchState = new Kiwifroot.States.Launch();

	/**
	* 
	* @property preloaderState
	* @type Kiwifroot.States.Preloader
	* @public
	*/ 
	this.preloaderState = new Kiwifroot.States.Preloader();

	/**
	* 
	* @property levelState
	* @type Kiwifroot.States.Level
	* @public
	*/ 
	this.levelState = new Kiwifroot.States.Level();

	/**
	* 
	* @property errorState
	* @type Kiwifroot.States.Error
	* @public
	*/
	this.errorState = new Kiwifroot.States.Error();
	
	this.states.addState( this.errorState );
	this.states.addState( this.launchState, true );
	this.states.addState( this.preloaderState );
	this.states.addState( this.levelState );

	if( this._onStart && Kiwi.Utils.Common.isFunction( this._onStart ) ) {
		this._onStart( this );
	}

};

/**
* Storage location for global variables used in the Blockly Script Editor.
* @property GLOBAL_VARIABLES
* @type Object
* @public
*/
Kiwifroot.Game.prototype.GLOBAL_VARIABLES = {};

/**
* 
* @property userErrorMessage
* @type String
* @public
*/
Kiwifroot.Game.prototype.userErrorMessage = '';

/**
* 
* @property error
* @type String
* @public
*/
Kiwifroot.Game.prototype.error = null;

/**
* Halts the game and reports a nice userfacing error message.
* 
* @method reportError
* @param error {String}
* @param userMessage {String}
* @public
*/
Kiwifroot.Game.prototype.reportError = function( error, userMessage, errorType ) {

	this.error = error;
	this.userErrorMessage = userMessage || error;

	errorType = errorType || "ERR";
	this.userErrorMessage = errorType + ': ' + this.userErrorMessage;

	this.states.switchState( Kiwifroot.States.Error.NAME );

};

/**
* 
* @module Kiwifroot
*
*/


/**
* Stores the level and game information that can be, or is to be loaded. 
* 
* @namespace Kiwifroot
* @class Information
* @constructor
* 
*/
Kiwifroot.Information = function(game, gameOptions, params) {

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* URL for the game json file to load in.
	* @property jsonURL
	* @type String
	* @public
	*/
	this.jsonURL = null;

	/**
	* The data contained within the game json file. 
	* @property data 
	* @type Object
	* @readOnly
	* @default null
	* @public
	*/
	this.data = null;
	
	/**
	* 
	* @property switchedLevelCount
	* @type Number
	* @public
	*/
	this.switchedLevelCount = 0;

	/**
	* A list of all the levels this game can have.
	* @property _levels
	* @type Array
	* @public
	*/
	this._levels = [];

	/**
	* The current level which is being displayed.
	* @property currentLevel
	* @type Object
	* @public
	*/
	this.currentLevel = null;

	/**
	* If the game should skip the splash screen animating in.
	* @property skipLaunch
	* @type Boolean
	* @public
	*/
	this.skipLaunch = gameOptions.skipLaunch;

	/**
	* If the splash screen should open the gamefroot URL when someone clicks it
	* @property splashOpenURL
	* @type Boolean
	* @public
	*/
	this.splashOpenURL = gameOptions.splashOpenURL;

	/**
	* If all the level json should be attempt to load at the start of the game.
	* @property loadLevelJsonAtStart
	* @type Boolean
	* @public
	*/
	this.loadLevelJsonAtStart = gameOptions.loadLevelJsonAtStart;

	/**
	* If any sound effects played should be muted or not. 
	* Property kept here to maintain state across levels. 
	* Should only be accessed via the Sound component on States.
	* 
	* @property muteEffects
	* @type Boolean
	* @private
	*/
	this._muteEffects = false;

	/**
	* If the background track should be muted or not.
	* Property kept here to maintain state across levels. 
	* Should only be accessed via the Sound component on States.
	* 
	* @property muteSounds
	* @type Boolean
	* @private
	*/
	this._muteBackground = false;

	if( typeof params.jsonURL !== "undefined" ) {
		this.jsonURL = params.jsonURL; 
	}

	if( typeof params.data !== "undefined" ) {
		this.assignData( params.data );
	} 

	if( !this.data && !this.jsonURL ) {
		this.game.log.error( 'Kiwifroot can\'t continue without a json file to load (jsonURL) or data defining the game.', '#gamejson', '#error' ); 
	}
};

/**
* Returns a list of the current levels.
* @property levels
* @type Array
* @readOnly 
* @public
*/
Object.defineProperty( Kiwifroot.Information.prototype , "levels", {

	get: function() {
		return this._levels;
	}

});


/**
* The index number of the current level in the 'levels' array.
* @property currentLevelNumber
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Information.prototype, "currentLevelNumber", {

	get: function () {
		return this._levels.indexOf( this.currentLevel );
	},

	enumerable: true,

	configurable: true

});


/**
* The number of levels on the game.
* @property numLevels
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Information.prototype, "numLevels", {

	get: function () {
		return this._levels.length;
	},

	enumerable: true,

	configurable: true

});


/**
* Creates a new level for this instance of Kiwifroot. 
* Each level needs to have an 'id' which should be unique (uniqueness is not checked)
*
* And must have either a url (which points to a json file) which contains the information about that level,
* Or an object which defines the information about the level.
* 
* @method createLevel
* @param id {Number} 
* @param params {Object} 
* 	@param params.url {String} The URL of the json object to load. 
*	@param params.data {Object} The information about the level.
* @return {Kiwifroot.Level}
* @public
*/
Kiwifroot.Information.prototype.createLevel = function( params ) {

	params = params || {};

	if( !params.id || !( params.url || params.data ) ) {
		this.game.log.error( 'No level URL, object specified, or id passed. Level not created.', '#leveljson' );
		return null;
	}

	var level = new Kiwifroot.Level( this.game, params.id, params );
	
	this._levels.push( level );

	return level;

};


/**
* Switches to the id of a level passed. 
* 
* @method switchLevel
* @param id {Number} 
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.switchLevel = function( id ) {

	for( var i = 0; i < this._levels.length; i++ ) {
		
		if( id == this._levels[ i ].id ) {
			return this.changeLevel( this._levels[ i ] );
		}

	}

	this.game.log.warn( 'Level could not be found.', '#level' );
	return false;
};

/**
* 
* @method switchLevelByNumber
* @param num {Number} 
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.switchLevelByNumber = function( num ) {

	var level = this._levels[ num ];

	if( level ) {
		return this.changeLevel( level );
	} 


	this.game.log.warn( 'Level with a number of ' + num + ' could not be found.', '#level' );
	return false;
};

/**
* Switches to the next level. If at the end, then this loops back to the first level
* 
* @method nextLevel
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.nextLevel = function( id ) {

	var index = this._levels.indexOf( this.currentLevel );

	if( index == -1 ) {
		this.game.log.error( 'Odd... The currentLevel could not be found', '#level' );
		return false;
	}

	var level = this._levels[ index + 1 ];

	if( !level ) {
		this.game.log.warn( 'Next level not found. Loading in the first level.', '#level' );
		level = this._levels[ 0 ];
	}

	return this.changeLevel( level );
};

/**
* Switches the game to the level passed.
* 
* @method changeLevel
* @param level {Kiwi.Level} The level to be switched to.
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.changeLevel = function( level ) {

	//If we cannot continue if the game is loading.
	if( this.game.states.current.name == Kiwifroot.States.Preloader.NAME ) {
		this.game.log.error( 'Cannot change levels whilst loading a level.', '#level' );
		return false;
	}

	if( this.game.states.switchState( Kiwifroot.States.Preloader.NAME ) ) {

		if( this.currentLevel ) {
			this.currentLevel.reset();
		}

		this.switchedLevelCount ++;
		this.currentLevel = level;
		return true;
	}

};


/**
* Assigns a object passed to the data method.
* Validates the object passed and then processes the data
*
* @method assignData 
* @param data {Object}
* @public
*/
Kiwifroot.Information.prototype.assignData = function( rawData ) {

	this.data = this.validateData( rawData );

	this.processData();

};


/**
* Validates a data object. Returns a new object literal with the update data.
* @method validateData
* @param data {object}
* @return data {object}
* @public
*/
Kiwifroot.Information.prototype.validateData = function( data ) {

	this.game.log.log( 'Validating game data passed.', '#game' );
	
	var newData = {};


	//Game Name
	if( typeof data.name !== "undefined" ) {
		newData.name = data.name;
	} else {
		this.game.log.log( 'Game name not found. Setting to default value.', '#game' );
		newData.name = Kiwifroot.DEFAULT.name;
	}


	//Game Dimensions
	newData.width = data.width || this.game.stage.width;
	newData.height = data.height || this.game.stage.height;


	//Levels
	if( typeof data.levels !== "undefined" ) {

		//If the levels were not in an array format, then make them so.
		if( !Kiwi.Utils.Common.isArray( data.levels ) ) {
			data.levels = [ data.levels ];
		}

		//Validate the levels array quickly. 
		for(var i = 0; i < data.levels.length; i++) {
			if( !data.levels[ i ].id || !( data.levels[ i ].url || data.levels[ i ].data) ) {
				this.game.log.error( 'Level @ index ' + i + ' is missing a required property.', '#game', '#level' );
			}
		}

		newData.levels = data.levels;

	} else {
		this.game.log.warn( 'No levels have been specified in the game json. Are you sure this is correct?', '#game', '#level' );
		newData.levels = [];
	}

	if( typeof data.firstLevel === "undefined" ) {

		//If we have a level that we can assign one to.
		if( newData.levels.length > 0 && newData.levels[0].id ) {
			newData.firstLevel = newData.levels[0].id;
			this.game.log.log( 'Default level to assigned to Level ID: ' + newData.firstLevel, '#game', '#level' );

		} else {
			this.game.log.log( 'No levels found. Cannot assign default level.', '#game', '#level' );

		}

	} else {
		
		newData.firstLevel = data.firstLevel;

	}

	//Assets 
	if( typeof data.assets === "undefined" ) {
		newData.assets = [];
		this.game.log.log( 'No game assets found.', '#game', '#assets' );
	} else {
		newData.assets = data.assets;
	}



	//Plugins
	if( typeof data.plugins === "undefined" ) {
		newData.plugins = [];
		this.game.log.log( 'No plugins found for this game.', '#plugins' );
	} else {
		
		if( !Kiwi.Utils.Common.isArray( data.plugins) ) {
			this.game.log.warn( 'Plugins parameter not in the appropriate format. Skipping parameter.', '#plugins' );
			data.plugins = [];
		}

		newData.plugins = data.plugins;
	}



	return newData;
	
};


/**
* Processes the 'data' property.
* @method processData
* @private
*/
Kiwifroot.Information.prototype.processData = function() {
	
	//Read the data object. 

	//Resize the game if its sizing differs from the current setting.
	if( this.game.stage.width !== this.data.width || this.game.stage.height !== this.data.height ) {
		this.game.log.log( 'Resizing game to: ' + this.data.width + 'x' + this.data.height, '#resizing' );
		this.game.stage.resize( this.data.width, this.data.height );
	}

	//Create the levels.
	for( var i = 0; i < this.data.levels.length; i++ ) {

		this.createLevel( this.data.levels[ i ] );

	}

	
};




/**
* 
* @module Kiwifroot
*
*/

/**
* Definition of a Level in Kiwifroot. 
* 
* @namespace Kiwifroot
* @class Level
* @constructor
* 
*/
Kiwifroot.Level = function( game, id, params ) {

	params = params || {};

	/**
	* 
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* The unique id of this level.
	* @property id
	* @type Number
	* @public
	*/
	this.id = id;

	/**
	* The location of the levels json file.
	* @property url
	* @type String
	* @public
	*/
	this.url = params.url || '';

	/**
	* The level object. This is usually the data located in the 'url' property. 
	* This property should never directly be set. Instead use the 'assignData' method.
	*
	* @property _data
	* @type Object
	* @default null
	* @private
	*/
	this._data = null;

	/**
	* The name of this level.
	* @property name
	* @type String
	* @public
	*/
	this.name = params.name || null;

	/**
	* If the data for this level should be kept after is has been loaded, or deleted. 
	* Delete the data can save memory, whilst keeping it can help with load times.
	* @property keep
	* @type Boolean
	* @default false
	* @public
	*/
	this.keep = params.keep || false;

	if( typeof params.data !== "undefined" ) {
		this.assignData( params.data );
	}

	//Set the 'keep' parameter to true if we were passed data AND the keep parameter was false  
	if( typeof params.data !== "undefined" && typeof params.keep == "undefined" ) {
		this.keep = true;
	}

};


/**
* If the Level has data or not. 
* Used to indicate if the level data needs to be loaded from the URL or not.
* 
* @property hasData
* @type Boolean
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Level.prototype, "hasData", {

	get: function () {
		return ( this._data );
	},

	enumerable: true,

	configurable: true

});

/**
* Returns the level data. These properties should be READ ONLY.
* 
* @property data
* @type Object
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Level.prototype, "data", {

	get: function () {
		return this._data;
	},

	enumerable: true,

	configurable: true

});

/**
* Assigns an object literal passed to the data object.
* The object passed is validated first. 
*
* @method assignData
* @param data {Object}
* @public
*/
Kiwifroot.Level.prototype.assignData = function( data ) {
	
	this._data = this.validate( data );

	if( !this.name ) {
		this.name = this._data.name;
	}

};


/**
* Validates a object literal passed and returns a fresh object
* containing correct values.
*
* @method validate
* @param data {Object}
* @return {Object}
* @private
*/
Kiwifroot.Level.prototype.validate = function( data ) {

	var newData = {};
	this.game.log.log( 'Validating data for Level ID ' + this.id, '#level' );
	

	newData.name = data.name || 'Level ' + this.id;

	//Validate Background Color

	newData.color = this._validateBackgroundColor( data.color );
	newData.gameObjects = this._validateObjects( data.gameObjects );
	newData.music = null;
	newData.keepMusicDuringSwitch = false;
	newData.definitions = this._validateObjects( data.definitions );

	if( typeof data.music !== "undefined" ) {
		newData.music = data.music;
	}

	if( typeof data.keepMusicDuringSwitch !== "undefined" ) {
		newData.keepMusicDuringSwitch = data.keepMusicDuringSwitch;
	} 


	//Validate Assets 
	if( typeof data.assets == "undefined" ) {
		this.game.log.log( 'No assets found', '#level', '#assets' );
		data.assets = [];
	}

	if( !Kiwi.Utils.Common.isArray( data.assets ) ) {
		data.assets = [data.assets];
	}

	newData.assets = data.assets;


	//Validate Systems
	if( typeof data.systems == "undefined" ) {
		newData.systems = {};
	} else {
		newData.systems = data.systems;
	}


	//Loading Screen
	if( typeof data.loader == "undefined" ) {
		this.game.log.log( 'Default loader object added to level.', '#level', '#loader' );
		data.loader = {};
	}

	newData.loader = {}; 
	newData.loader.color = this._validateBackgroundColor( data.loader.color, { r: 0, g: 0, b: 0, a: 1} );
	newData.loader.gameObjects = this._validateObjects( data.loader.gameObjects );
	newData.loader.music = null;
	newData.loader.definitions = this._validateObjects( data.loader.definitions );

	newData.loader.bar = data.loader.bar || {};
	if(typeof newData.loader.bar.visible === "undefined" ){
		newData.loader.bar.visible = true;
	}
	newData.loader.bar.tags = newData.loader.bar.tags || [ 'loading-bar' ];
	newData.loader.bar.addToTop = newData.loader.bar.addToTop || false;


	if( typeof data.loader.music !== "undefined" ) {
		newData.loader.music = data.loader.music;
	}

	if( typeof data.loader.keepMusicDuringSwitch !== "undefined" ) {
		newData.loader.keepMusicDuringSwitch = data.loader.keepMusicDuringSwitch;
	} else {
		newData.loader.keepMusicDuringSwitch = false;
	}

	if( typeof data.camera == "undefined") {
		data.camera = {}; 
	}

	newData.camera = {
		x: data.camera.x || 0,
		y: data.camera.y || 0,
		offsetX: data.camera.offsetX || 0,
		offsetY: data.camera.offsetY || 0
	};

	if( typeof data.camera.minX !== "undefined" ) {
		newData.camera.minX = data.camera.minX;
	} else {
		newData.camera.minX = -Infinity;
	}

	if( typeof data.camera.minY !== "undefined" ) {
		newData.camera.minY = data.camera.minY;
	} else {
		newData.camera.minY = -Infinity;
	}

	if( typeof data.camera.maxX !== "undefined" ) {
		 newData.camera.maxX = data.camera.maxX;
	} else {
		newData.camera.maxX = Infinity;
	}

	if( typeof data.camera.maxY !== "undefined" ) {
		 newData.camera.maxY = data.camera.maxY;
	} else {
		newData.camera.maxY = Infinity;
	}
	
	return newData;	
};


/**
*
* @method _validateBackgroundColor
* @param color {Object}
* @return {Object}
* @public
*/
Kiwifroot.Level.prototype._validateBackgroundColor = function( color, defaultColor ) {

	if( !defaultColor ) {
		var valid = { r: 255, g: 255, b: 255, a: 1 };
	} else {
		var valid = defaultColor;
	}

	
	if( typeof color === "undefined") {
		color = {};
	}

	if( typeof color.r !== "undefined" ) {
		valid.r = color.r;
	}

	if( typeof color.g !== "undefined" ) {
		valid.g = color.g;
	}

	if( typeof color.b !== "undefined" ) {
		valid.b = color.b;
	}

	if( typeof color.a !== "undefined" ) {
		valid.a = color.a;
	}

	return valid;

};


/**
* 
* @method _validateObjects
* @param objects {Array}
* @return {Array}
* @public
*/
Kiwifroot.Level.prototype._validateObjects = function( objects ) {

	var co, 
		i = 0;
	
	if( typeof objects == "undefined") {
		this.game.log.warn( 'No objects found', '#level');
		objects = [];
	}

	if( !Kiwi.Utils.Common.isArray( objects ) ) {
		objects = [ objects ];
	}

	return objects;

};



/**
* Called when this level is about to be switched off of. Deletes the level data.
* @method reset
* @public
*/
Kiwifroot.Level.prototype.reset = function() {
	
	if( !this.keep ) {
		delete this._data;
	}

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Returns information regarding the logs users make. 
* 
* @namespace Kiwifroot
* @class LogReadout
* @constructor
* @param game {Kiwifroot.Game}
* 
*/
Kiwifroot.LogReadout = function(game) {

	/**
	* The game this FPSReadout is for.
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* The number of readings to contain at a single time
	* @property numReadings
	* @type number
	* @default 5
	* @public
	*/
	this.numReadings = 10;

	/**
	* 
	* @property logs
	* @type Array
	* @public
	*/
	this.logs = [];

};


/**
* 
* @method objType
* @return {String} "LogReadout"
* @public
*/
Kiwifroot.LogReadout.prototype.objType = function() {
	return 'LogReadout';
};


/**
* 
* @method update
* @public
*/
Kiwifroot.LogReadout.prototype.update = function() {
	this.debug();
};

/**
* 
* @method record
* @public
*/
Kiwifroot.LogReadout.prototype.record = function( message, tag ) {
	this.logs.push( message );
	this.game.log.log( message, tag );

	while( this.logs.length > this.numReadings ) {
		this.logs.shift();
	}
};

/**
* 
* @method debug
* @private
*/
Kiwifroot.LogReadout.prototype.debug = function() {

	if( this.game.debugMode ) {

		var ctx = this.game.stage.dctx,
			y = 20,
			spacing = 5,
			textSize = 16,
			i = this.logs.length;

		ctx.textAlign = "right";
		ctx.fillStyle = 'white';
		ctx.font = textSize.toString() + 'px Verdana';

		while( i-- ) {
			ctx.fillText( this.logs[i], this.game.stage.debugCanvas.width - 10, y );
			y += textSize + spacing;
		}

	}

}
/**
* 
* @module Kiwifroot
* 
*/


/**
* Essentually an alias to the Kiwi Plugin manager. 
* @namespace Kiwifroot
* @class PluginManager
* @extends Kiwi.PluginManager
* 
*/ 
Kiwifroot.PluginManager = Kiwi.PluginManager;


Kiwifroot.PluginManagerExtension = {

};


/**
* 
* @module Kiwifroot
*
*/

/**
* A System added to the Level when it is created. 
* Scripts can add callbacks to various signals which will fire them periodically.
* 
* @namespace Kiwifroot
* @class UpdateSystem
* @extends Kiwi.Component
* @constructor
* @param state {Kiwifroot.State}
*
*/
Kiwifroot.UpdateSystem = function( state ) {

	Kiwi.Component.call( this, state, 'RobotSystem' );

	/**
	*
	* @property onPreUpdate
	* @type Kiwi.Signal
	* @public
	*/
	this.onPreUpdate = new Kiwi.Signal();

	/**
	*
	* @property onUpdate
	* @type Kiwi.Signal
	* @public
	*/
	this.onUpdate = new Kiwi.Signal();

	/**
	*
	* @property onPostUpdate
	* @type Kiwi.Signal
	* @public
	*/
	this.onPostUpdate = new Kiwi.Signal();

};

Kiwi.extend( Kiwifroot.UpdateSystem, Kiwi.Component);
	

/**
*
* @method preUpdate
* @public
*/
Kiwifroot.UpdateSystem.prototype.preUpdate = function() {

	this.onPreUpdate.dispatch();

};

/**
*
* @method update
* @public
*/
Kiwifroot.UpdateSystem.prototype.update = function() {

	this.onUpdate.dispatch();

};


/**
*
* @method postUpdate
* @public
*/
Kiwifroot.UpdateSystem.prototype.postUpdate = function() {

	this.onPostUpdate.dispatch();

};



/**
*
* @method destroy
* @public
*/
Kiwifroot.UpdateSystem.prototype.destroy = function() {
	
	Kiwi.Component.prototype.destroy.call( this );

	this.onPreUpdate.dispose();
	delete this.onPreUpdate;

	this.onUpdate.dispose();
	delete this.onUpdate;

	this.onPostUpdate.dispose();
	delete this.onPostUpdate;

};



/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class Group
* @constructor
* @param state {Kiwi.State}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.Group = function( state, params ) {

	params = params || {};

	Kiwi.Group.call( this, state );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) ) 			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) ) 			this.y = params.y; 
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) ) 	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) ) 		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) ) 		this.scaleY = params.scaleY;

};

Kiwi.extend( Kiwifroot.GameObjects.Group, Kiwi.Group );

/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class Sprite
* @constructor
* @param state {Kiwi.State}
* @param texture {Kiwi.Textures.TextureAtlas}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.Sprite = function(state, texture, params ) {

	params = params || {};

	Kiwi.GameObjects.StaticImage.call( this, state, texture );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) ) 			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) ) 			this.y = params.y; 
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) ) 	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) ) 		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) ) 		this.scaleY = params.scaleY;
	if( !Kiwi.Utils.Common.isUndefined( params.opacity ) ) 		this.alpha = params.opacity;
	if( !Kiwi.Utils.Common.isUndefined( params.alpha ) ) 		this.alpha = params.alpha;
	if( !Kiwi.Utils.Common.isUndefined( params.cellIndex ) ) 	this.cellIndex = params.cellIndex;

};

Kiwi.extend( Kiwifroot.GameObjects.Sprite, Kiwi.GameObjects.StaticImage );

/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class StaticImage
* @constructor
* @param state {Kiwi.State}
* @param texture {Kiwi.Textures.TextureAtlas}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.StaticImage = function(state, texture, params ) {

	params = params || {};

	Kiwi.GameObjects.StaticImage.call( this, state, texture );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) )  			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) ) 			this.y = params.y; 
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) )  	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) )  		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) )  		this.scaleY = params.scaleY;
	if( !Kiwi.Utils.Common.isUndefined( params.opacity ) ) 		this.alpha = params.opacity;
	if( !Kiwi.Utils.Common.isUndefined( params.alpha ) ) 		this.alpha = params.alpha;
	if( !Kiwi.Utils.Common.isUndefined( params.cellIndex ) )  	this.cellIndex = params.cellIndex;

};

Kiwi.extend( Kiwifroot.GameObjects.StaticImage, Kiwi.GameObjects.StaticImage );

/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class Text
* @constructor
* @param state {Kiwi.State}
* @param text {String}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.Text = function(state, text, params ) {

	params = params || {};

	Kiwi.GameObjects.Textfield.call( this, state, text );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) )			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) )			this.y = params.y;
	if( !Kiwi.Utils.Common.isUndefined( params.color ) ) 		this.color = params.color;
	if( !Kiwi.Utils.Common.isUndefined( params.fontSize ) ) 	this.fontSize = params.fontSize;
	if( !Kiwi.Utils.Common.isUndefined( params.fontWeight ) ) 	this.fontWeight = params.fontWeight;
	if( !Kiwi.Utils.Common.isUndefined( params.textAlign ) ) 	this.textAlign = params.textAlign;
	if( !Kiwi.Utils.Common.isUndefined( params.fontFamily ) )	this.fontFamily = params.fontFamily;

	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) ) 	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) ) 		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) ) 		this.scaleY = params.scaleY;
	if( !Kiwi.Utils.Common.isUndefined( params.opacity ) ) 		this.alpha = params.opacity;
	if( !Kiwi.Utils.Common.isUndefined( params.alpha ) ) 		this.alpha = params.alpha;

};

Kiwi.extend( Kiwifroot.GameObjects.Text, Kiwi.GameObjects.Textfield );

/**
* 
* @module Kiwifroot
* @submodule Input
* 
*/

/**
* 
* @class Binding
* @constructor
* @param signal {Kiwi.Signal}
* @param compare {Function}
*/
Kiwifroot.Input.Binding = function( signal, filter, context ) {

	/**
	* 
	* @property signal
	* @type Kiwi.Signal
	* @public
	*/
	this.signal = signal;

	/**
	*
	* @property filter
	* @type Function
	* @public
	*/
	this.filter = filter || function() { return true };

	/**
	*
	* @property context
	* @type Any
	* @public
	*/
	this.context = context;

	this._event = null;
};

/**
* 
* @method shutDown
* @public
*/
Kiwifroot.Input.Binding.prototype.shutDown = function() {
	delete this.callback;
	delete this.filter;
	delete this.signal;
	delete this.context;
};

/**
* 
* @module Kiwifroot
* @submodule Input
* 
*/

/**
* 
* @class Event
* @constructor
* @param name {String}
* @param [pressSignals] {Array}
*/
Kiwifroot.Input.Event = function( name, signals ) {

	/**
	*
	* @property name
	* @type String
	* @public
	*/
	this.name = name;

	/**
	* 
	* @property onEvent
	* @type Kiwi.Signal
	* @public
	*/
	this.onEvent = new Kiwi.Signal();

	/**
	* 
	* @property _bindings 
	* @type Kiwi.Signal
	* @public
	*/
	this._bindings = [];

	/**
	*
	* @property lastFired 
	* @type Number
	* @public
	*/
	this.lastFired = 0;


	if( signals && Kiwi.Utils.Common.isArray( signals ) ) {

		for( var i = 0; i < signals.length; i++ ) {
			this.add( signals[ i ].signal, signals[ i ].filter, signals[ i ].context );
		}

	}

};


/**
* 
* @method add
* @param signal {Kiwi.Signal}
* @param [filter] {Function}
* @public
*/
Kiwifroot.Input.Event.prototype.add = function( signal, filter, context ) {

	var binding = new Kiwifroot.Input.Binding( signal, filter, context );
	this._bindings.push( binding );


	var that = this;
	binding._event = function() {
		if( binding.filter.apply( binding.context, arguments ) ) {
			that._event();
		}
	};

	binding.signal.add( binding._event, this );

};


/**
* @method remove
* @param signal {Kiwi.Signal}
* @public
*/
Kiwifroot.Input.Event.prototype.remove = function( signal ) {

	var index = this._bindings.indexOf( signal );

	if( index ) {
		//Remove Event.
		binding.signal.remove( binding._event, this );
		signal.shutDown();
		this._bindings.splice( index, 1 ); 
	}

};


/**
* 
* @method _pressed
* @private
*/
Kiwifroot.Input.Event.prototype._event = function() {

	this.lastFired = Date.now();
	this.onEvent.dispatch();

};

/**
* 
* @method shutDown
* @public
*/
Kiwifroot.Input.Event.prototype.shutDown = function() {
	if( this.onEvent ) this.onEvent.dispose();

	delete this.onEvent;

	if( this._bindings ) {
		for(var i = 0; i < this._bindings.length; i++) {
			this._bindings[ i ].shutDown();
		}
	}
	delete this._bindings;


};

/**
* 
* @module Kiwifroot
* @submodule Input
* 
*/

/**
* 
* @class Handler
* @constructor
* 
*/
Kiwifroot.Input.Handler = function( state ) {

	/**
	* 
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	/**
	*
	* @property events
	* @type Array
	* @public
	*/
	this.events = [];

};

/**
* 
* @method get
* @param name {String}
* @return {Kiwifroot.Input.Event}
* @public
*/
Kiwifroot.Input.Handler.prototype.get = function( name ) {

	for( var i = 0; i < this.events.length; i++) {
		if( this.events[ i ].name === name ) {
			return this.events[ i ];
		}
	}

	return null;
};

/**
* 
* @method add
* @param name {String}
* @param signals {Array}
* @return Kiwifroot.Input.Event
* @public
*/
Kiwifroot.Input.Handler.prototype.add = function( name, signals ) {

	var event = new Kiwifroot.Input.Event( name, signals );

	this.events.push( event );

	return event;

};

/**
* 
* @method removeByName
* @param name {String}
* @retur {Boolean}
* @public
*/
Kiwifroot.Input.Handler.prototype.removeByName = function( name ) {

	for( var i = 0; i < this.events.length; i++) {

		if( this.events[ i ].name === name ) {
			return this.remove( this.events[ i ] );
		}

	}

	return false;

};

/**
* 
* @method remove
* @param button {Kiwi.Input.Event}
* @return {Boolean}
* @public
*/
Kiwifroot.Input.Handler.prototype.remove = function( button ) {

	var index = this.events.indexOf( button );

	if( index !== -1 ) {
		button.shutDown();
		this.events.splice( index, 1 );
		return true;
	}

	return false;
};

/**
*
* @method destroy
* @public
*/
Kiwifroot.Input.Handler.prototype.destroy = function() {

	delete this.state;

	delete this.game;

	for( var i = 0; i < this.events.length; i++ ) {
		this.events[ i ].shutDown();
	}

	this.events = [];

};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Group
* @class Group
* 
*/
Kiwifroot.Object.Core.Group = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'group'
	* @static
	* @public
	*/
	gameobject: 'group'

};



/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Entity}
* @static
* @public
*/
Kiwifroot.Object.Core.Group.add = function( state, params, parent, saved ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}
	
	//Create the Group
	var go = new Kiwifroot.GameObjects.Group( state, params );

	//Create the gameobjects inside of it, and add them to the group
	state.objects.createFromArray( params.gameObjects, go, saved );

	//Add the group to its parent
	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Group.validate = function( params ) {

	if( typeof params.gameObjects == "undefined" || !Kiwi.Utils.Common.isArray( params.gameObjects ) ) {
		params.gameObjects = [];
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class Sprite
* 
*/
Kiwifroot.Object.Core.Sprite = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'sprite'
	* @static
	* @public
	*/
	gameobject: 'sprite'

};



/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Entity}
* @static
* @public
*/
Kiwifroot.Object.Core.Sprite.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}

	if( !state.textures[ params.imageId ] ) {
		state.game.log.error( "Image id '" + params.imageId + "' not found."  );
		return null;
	}
	
	var go = new Kiwifroot.GameObjects.Sprite( state, state.textures[ params.imageId ], params );
	

	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Sprite.validate = function( params ) {

	if( typeof params.imageId == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class StaticImage
* 
*/
Kiwifroot.Object.Core.StaticImage = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'static-image'
	* @static
	* @public
	*/
	gameobject: 'static-image'

};




/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Group}
* @static
* @public
*/
Kiwifroot.Object.Core.StaticImage.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}

	if( !state.textures[ params.imageId ] ) {
		state.game.log.error( "Image id '" + params.imageId + "' not found."  );
		return null;
	}
	
	var go = new Kiwifroot.GameObjects.StaticImage( state, state.textures[ params.imageId ], params );

	
	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.StaticImage.validate = function( params ) {

	if( typeof params.imageId == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class Text
* 
*/
Kiwifroot.Object.Core.Text = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'text'
	* @static
	* @public
	*/
	gameobject: 'text'

};




/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Group}
* @static
* @public
*/
Kiwifroot.Object.Core.Text.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}
	
	var go = new Kiwifroot.GameObjects.Text( state, params.text, params );
	
	
	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Text.validate = function( params ) {

	if( typeof params.text == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
*
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class Tilemap
* 
*/
Kiwifroot.Object.Core.Tilemap = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,

	/**
	* 
	* @property gameobject
	* @type String
	* @default 'tilemap'
	* @static
	* @public
	*/
	gameobject: 'tilemap'

};



/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Group}
* @static
* @public
*/
Kiwifroot.Object.Core.Tilemap.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}

	if( !state.textures[ params.imageId ] || !state.data[ params.jsonId ] ) {
		state.game.log.error( "An assets could not be found. Object not created." );
		return null;
	}
	
	var go = new Kiwi.GameObjects.Tilemap.TileMap( state, params.jsonId.toString(), state.textures[ params.imageId ] );


	for( var i = 0; i < go.layers.length; i++) {
		go.layers[ i ].x += params.x;
		go.layers[ i ].y += params.y;
		go.layers[ i ].alpha = params.alpha;
		go.layers[ i ].rotation = params.rotation;
		go.layers[ i ].scaleX = params.scaleX;
		go.layers[ i ].scaleY = params.scaleY;
		go.layers[ i ].visible = params.visible;

		if( parent ) {
			parent.addChild( go.layers[ i ] );
		}
	}

	return go.layers;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Tilemap.validate = function( params ) {

	if( typeof params.imageId == "undefined" ||
		typeof params.jsonId == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( typeof params.opacity !== "undefined" || typeof params.alpha !== "undefined") {
		params.alpha = params.opacity || params.alpha;
	} else {
		params.alpha = 1;
	}

	if( typeof params.visible === "undefined" ) {
		params.visible = true;
	}

	if( typeof params.scaleX === "undefined" ) {
		params.scaleX = 1;
	}

	if( typeof params.scaleY === "undefined" ) {
		params.scaleY = 1;
	}

	if( typeof params.rotation === "undefined" ) {
		params.rotation = 0;
	}

	return true;
};

/**
* 
* @module Kiwifroot
* @submodule Object
*
*/

/**
*
* 
* @namespace Kiwifroot.Object
* @class Manager
* @constructor
* @param state {Kiwifroot.State}
* 
*/
Kiwifroot.Object.Manager = function( state ) {

	/**
	* 
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	* 
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	/**
	* 
	* @property creators
	* @type Object
	* @public
	*/
	this.creators = {};

	/**
	* Objects types that can be used created.
	* 
	* @property objects
	* @type Object
	* @public
	*/
	this.objects = {};

	//Add the default creators
	var c; 
	for( var index in Kiwifroot.Object.Core ) {
		c = Kiwifroot.Object.Core[ index ];

		if( c.gameobject ) {
			this.creators[ c.gameobject ] = c;
		}
	}

	//Create the plugins 
	this.assignCreatorsFromPlugins();

	/**
	* 
	* @property components
	* @type Kiwifroot.Components.Manager
	* @public
	*/
	this.component = new Kiwifroot.Components.Manager( this.state );

	/**
	* 
	* @property onCreate
	* @type Kiwi.Signal
	* @public
	*/
	this.onCreate = new Kiwi.Signal();

};



/**
* 
* @method creatorExists
* @param type {String}
* @return
*/ 
Kiwifroot.Object.Manager.prototype.creatorExists = function( type ) {
	return ( this.creators[ type ] );
};



/**
*
* @method assignCreatorsFromPlugins
* @private
*/
Kiwifroot.Object.Manager.prototype.assignCreatorsFromPlugins = function() {

	//Get the plugins
	var plugin, i, j, kfp;

	for( i = 0; i < this.game.pluginManager._plugins.length; i++ ) {

		plugin = Kiwi.Plugins[ this.game.pluginManager._plugins[ i ] ];

		if( !plugin ) {
			this.game.log.warn( "Nothing found on 'Kiwi.Plugins." + this.game.pluginManager._plugins[ i ] + "' namespace." );
			continue;
		}  


		//Is it a system?
		if( !plugin.kiwifrootPlugins || !Kiwi.Utils.Common.isArray( plugin.kiwifrootPlugins ) ) {
			//Skip to the next plugin...
			continue;
		}
		

		for( j = 0; j < plugin.kiwifrootPlugins.length; j++ ) {

			kfp = plugin.kiwifrootPlugins[ j ];

			if( kfp.type !== Kiwifroot.Plugins.GAMEOBJECT ) {
				continue;
			}

			if( !kfp.name || !kfp.namespace ) {
				this.game.log.warn( "A GameObject on the '" + plugin.name + "' Plugin is missing a 'name' or 'namespace' property." );
				continue;
			}

			if( this.creatorExists( kfp.name ) ) {
				this.game.log.warn( "Object creator for '" + kfp.name + "' already exists." );
				continue;
			}

			this.creators[ kfp.name ] = kfp.namespace;

		}

	}

};


/**
*
* @method hasCreator
* @param type {String}
* @return {Boolean}
* @public
*/
Kiwifroot.Object.Manager.prototype.hasCreator = function( type ) {
	return ( this.creators[ type ] );
};


/**
* 
* @method exists
* @param name {Any}
* @return {Boolean}
* @public
*/
Kiwifroot.Object.Manager.prototype.exists = function( name ) {

	return !( Kiwi.Utils.Common.isUndefined( this.objects[ name ] ) );

};


/**
* 
* @method get
* @param name {Any}
* @return {Object}
* @public
*/
Kiwifroot.Object.Manager.prototype.get = function( name ) {

	if( this.exists( name ) ) {
		return this.objects[ name ];
	}

	return null;

};


/**
* Saves a object definition (prefab in gamefroot context) to be used later on.
* 
* 
* @method createDefinition
* @param object {Object}
* 	@param object.type {String} 
*	@param object.name {String} The class that this gameobject should be assigned.
* @return {Boolean}
* @public 
*/
Kiwifroot.Object.Manager.prototype.createDefinition = function( object ) {

	if( typeof object === "undefined" ) {
		this.game.log.error( 'The object passed is empty.' );
		return false;
	}

	if( !object.type ) {
		this.game.log.error( 'The definition requires a `type`.' );
		return false;
	}

	if( !this.hasCreator( object.type ) ) {
		this.game.log.warn( "'" + object.type + "' game object types are not supported." );
		return false;
	} 


	//If the object does not have an name, then assign it one.
	//The name is the type that it abides by.
	if( Kiwi.Utils.Common.isUndefined( object.name ) ) {
		if( typeof object.class !== "undefined" ) {
			object.name = object.class;
		} else {
			this.game.log.error( "Definition does not contain a 'name'. Could not create a definition for it." );
			return false;
		}
	}

	if( typeof object.id !== "undefined" ) {
		this.game.log.warn('Definitions cannot be assigned as ID, as they should be UNIQUE.')
		delete object.id;
	}

	if( this.exists( object.name ) ) {
		this.game.log.error( "Definition with the name of '" + object.name + "' already exists." );
		return false;
	} else {
		this.objects[ object.name ] = object;
		return true;
	}

}

/**
* Creates a new 'definition' or default set of parameters for a object.
* 
* @method create
* @param object {Object}
* 	@param object.type {String} 
*	@param [object.id] {String} The unique id of this object.
*	@param [object.name|object.class] {String} The class that this gameobject should be assigned. Is automatically assigned on if undefined.
* 	@param [object.tags] {Array} Any tags this object should have by default
* @param [parent=this.state] {Kiwi.Group}
* @param [save] {Boolean}
* @param [executeBoot] {Boolean}
* @return {Kiwi.Entity}
* @public
*/
Kiwifroot.Object.Manager.prototype.create = function( object, parent, save, executeBoot ) {

	if( typeof object === "undefined" ) {
		this.game.log.error( 'A game object is undefined.' );
		return null;
	}

	if( !object.type ) {
		this.game.log.error( 'GameObject cannot be created without a type.' );
		return null;
	}

	if( !this.hasCreator( object.type ) ) {
		this.game.log.warn( "'" + object.type + "' game object types are not supported." );
		return null;
	} 


	//If the object does not have an name, then assign it one.
	//The name is the type that it abides by. (Class in gamefroot context)
	if( Kiwi.Utils.Common.isUndefined( object.name ) ) {
		if( object.class ) {
			object.name = object.class;
		} else {
			object.name = this.game.rnd.uuid();
		}
	}


	//Do we need to save this object to be used later? 
	//Not wanted/needed for objects created via robots
	if( save ) {

		if( this.exists( object.name ) ) {
			this.game.log.warn( "An Object with the name of '" + object.name + "' already exists. Creating the object, but others like it cannot be created." );
		} else {
			this.objects[ object.name ] = object;
		}

	}
  
	//Add the object
	var go = this.creators[ object.type ].add( this.state, object, parent || this.state, save );

	if( !go ) {
		this.game.log.warn( "'" + object.type + "' could not be created." );
		return null;
	} 

	//Object Creators can return an array of game objects they have created.
	if( Kiwi.Utils.Common.isArray( go ) ) {

		for( var i = 0; i < go.length; i++ ) {

			if( object.id ) go[ i ].id = object.id;
			go[ i ].name = object.name;

			if( object.tags && Kiwi.Utils.Common.isArray( object.tags ) ) {
				go[ i ].addTag.apply( go[ i ], object.tags );
			}

			this.component.addTo( go[ i ], object, executeBoot );
		}

	} else {

		//Add the components to the gameobject
		if( object.id ) go.id = object.id;
		go.name = object.name;

		if( object.tags && Kiwi.Utils.Common.isArray( object.tags ) ) {
			go.addTag.apply( go, object.tags );
		}

		this.component.addTo( go, object, executeBoot );

	}

	delete object.id; //Delete the id (if one existed). As it needs to be unique

	//Dispatch GameObject Created Event
	this.onCreate.dispatch( go );

	return go;
};


/**
* Creates a list of gameobjects from an array. 
* 
* If a item in the array contains a 'defined' flag, 
* then its creation will be based off of a pre-existing object creator.
* 
* @method createFromArray
* @param objectList {Array}
* @param parent {Kiwi.Entity}
* @param [save] {Boolean}
* @param [executeBoot] {Boolean}
* @public
*/
Kiwifroot.Object.Manager.prototype.createFromArray = function( objectList, parent, save, executeBoot ) {

	if( typeof objectList == "undefined" ) {
		this.game.log.error( 'The Array is undefined. Cannot generate game objects.' );
		return;
	}

	var i, obj, name, go, gameobjects = [];

	for( i = 0; i < objectList.length; i++ ) {
		obj = objectList[ i ];

		if( obj.defined ) {

			name = obj.name || obj.class;
			if( !name ) {
				this.game.log.warn("Object marked as 'defined' by does not contain a `name` or `class` property. Skipping creation.");
				continue;
			}

			go = this.createFromName( name, parent, obj, executeBoot );

		} else {

			go = this.create( obj, parent, save, executeBoot );

		}

		if( go ) {
			gameobjects.push( go );
		}

	}

	return gameobjects;

};


/**
* Creates a gameobject from a name specified. 
*
* @method createFromName
* @param name {String}
* @param parent {Kiwi.Entity}
* @param [overridingParams] {Object} Any parameters that should be changed from the defintion. Note: You cannot change the `components`.
* @param [executeBoot] {Boolean}
* @return {Kiwi.Entity}
* @public
*/
Kiwifroot.Object.Manager.prototype.createFromName = function( name, parent, overridingParams, executeBoot ) {

	if( typeof parent === "undefined" ) {
		parent = this.state;
	}

	if( !this.exists( name ) ) {
		this.game.log.warn( 'Object could not be found.' );
		return null;
	}

	if( typeof overridingParams === "undefined" ) {
		return this.create( this.objects[ name ], parent, false );
	} 

	var params = {};
	for( var index in this.objects[ name ] ) {
		params[ index ] = this.objects[ name ][ index ];
	}

	for( var index in overridingParams ) {
		if( index === "components" ) continue;
		params[ index ] = overridingParams[ index ];
	}

	return this.create( params, parent, false, executeBoot );

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Object.Manager.prototype.destroy = function() {

	delete this.game;

	delete this.state;

	delete this.creators;

	this.component.destroy();

};

/**
* 
* @module Kiwifroot
* @submodule Physics
* 
*/

/**
* 
* 
* @namespace Kiwifroot.Physics
* @class ArcadeComponent
* @constructor
* @param state {Kiwifroot.States.Level}
* 
*/
Kiwifroot.Physics.ArcadeComponent = function( entity, box ) {

	Kiwi.Components.ArcadePhysics.call( this, entity, box );

	if( !this.owner.state.components.hasComponent( 'ArcadeSystem' ) ) {
		this.game.log.warn( 'Arcade Physics: Could not find the Arcade Physics system.' );
		return;
	}

	//Get the arcade physics system
	this._immovable = false;
	
	/**
	*
	* @property system
	* @type Kiwifroot.Physics.ArcadeSystem
	* @public
	*/
	this.system = this.owner.state.components.getComponent( 'ArcadeSystem' );

	/**
	* If this arcade component is 'enabled' and so is being tracked by System.
	* Being enabled means that collisions, velocities, e.t.c will be applied.
	* If set to false then collisions, velocities (and all other phsyics things) will not apply.
	* 
	* @property _enabled
	* @type Boolean
	* @default true
	* @private
	*/
	this._enabled = false;
	this.enabled = true;

	/**
	* 
	* @property layer
	* @type number
	* @default 0 
	* @public
	*/
	this.layer = 0;

	/**
	* 
	* @property gravity
	* @type boolean
	* @default true
	* @public
	*/
	this.gravity = true;

	/**
	* Contains the hitbox of the owner for this frame.
	* @property _hitbox
	* @type Kiwi.Geom.Rectangle
	* @private
	*/
	this._hitbox = null;

	/**
	* The frame number of when the hitbox was last created/recieved. 
	* @property _lastHitbox
	* @type Number
	* @private
	*/
	this._lastHitbox = null;

	/**
	* 
	* @property canGoLeft
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoLeft = true;

	/**
	* 
	* @property canGoRight
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoRight = true;

	/**
	* 
	* @property canGoUp
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoUp = true;

	/**
	* 
	* @property canGoDown
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoDown = true;

};

Kiwi.extend( Kiwifroot.Physics.ArcadeComponent, Kiwi.Components.ArcadePhysics );

Object.defineProperty( Kiwifroot.Physics.ArcadeComponent.prototype, 'immovable', {
	get: function() {
		return this._immovable;
	}, 
	set: function(val) {

		if( this._immovable === val ) return;

		this._immovable = val;

		if( this.enabled ) {
			this.system.moveTo( this, this._immovable );
		}
	}
});

/**
* Returns the current hitbox for this Component. 
* This method will ensure that a hitbox is only generated once each frame.
*
* @method getHitbox
* @type Number
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.getHitbox = function() {

	if( this.system._passNumber !== this._lastHitbox ) {
		this._hitbox = this.box.worldHitbox;
		this._lastHitbox = this.system._passNumber;
	}

	return this._hitbox;
}


/**
* If this arcade component is 'enabled' and so is being tracked by System.
* Being enabled means that collisions, velocities, e.t.c will be applied.
* If set to false then collisions, velocities (and all other phsyics things) will not apply.
* 
* @property enabled
* @type Boolean
* @default true
* @public
*/
Object.defineProperty(Kiwifroot.Physics.ArcadeComponent.prototype, 'enabled', {
	
	get: function() {
		return this._enabled;
	},
	set: function( val ) {

		if( val ) {
			//If not currently enabled then add to the system
			if( !this._enabled ) this.system.register( this, this.immovable );
		} else {
			//If currently enabled, then remove from the system
			if( this._enabled ) this.system.deregister( this );
		}

		this._enabled = val;
	}
});


/**
* 
* @method updateMotion
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.updateMotion = function() {

	if( this.moves ) {

		Kiwi.Components.ArcadePhysics.prototype.updateMotion.call( this );

	}

};


/**
* 
* @method update
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.update = function() {
	//Override the normal update method, as we will let the system handle that now
};


/**
* 
* @method destroy
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.destroy = function() {

	this.enabled = false;

	Kiwi.Components.ArcadePhysics.prototype.destroy.call( this );

	delete this.system;


};

/**
* 
* @module Kiwifroot
* @submodule Physics
* 
*/

/**
* 
* 
* @namespace Kiwifroot.Physics
* @class ArcadeSystem
* @constructor
* @param state {Kiwifroot.States.Level}
* 
*/
Kiwifroot.Physics.ArcadeSystem = function( state ) {

	Kiwi.Component.call( this, state, 'ArcadeSystem' );

	/**
	* 
	* @property components
	* @type Array
	* @private
	*/
	this.components = [];

	/**
	* 
	* @property gravity
	* @type Kiwi.Geom.Point
	* @public
	*/
	this.gravity = new Kiwi.Geom.Point( 0, 0 );

	/**
	* 
	* @property gravityDelta_
	* @type Kiwi.Geom.Point
	* @private
	* @since 0.11.3
	*/
	this.gravityDelta_ = new Kiwi.Geom.Point( 0, 0 );

	/**
	* 
	* @property passes
	* @type number
	* @default 1
	* @public
	*/
	this.passes = 1;

	/**
	* If it should use the speed governor for updating motion or not. 
	* When true, the speed will update to match
	* 
	* @property useSpeedGovernor
	* @type Boolean
	* @default false
	* @public
	*/
	this.useSpeedGovernor = false;

	/**
	* The rate which should be applied to the physics system 
	* when the speed governor is NOT enabled.
	* 
	* @property updateRate
	* @type number
	* @default 1 / 60
	* @public
	*/
	this.updateRate = 1 / 60;

	/**
	* 
	* @property onCollision
	* @type Kiwi.Signal
	* @public
	*/
	this.onCollision = new Kiwi.Signal();

	/**
	* 
	* @property _rectA
	* @type Kiwi.Geom.Rectangle
	* @private
	*/
	this._rectA = new Kiwi.Geom.Rectangle();

	/**
	* 
	* @property _rectB
	* @type Kiwi.Geom.Rectangle
	* @private
	*/
	this._rectB = new Kiwi.Geom.Rectangle();

	/**
	*
	* @property _passNumber
	* @type number
	* @private
	*/
	this._passNumber = 0;

	/**
	* If ArcadePhysics should be enabled entirely or not.
	* @property enabled
	* @type Boolean
	* @default true
	* @public
	*/
	this.enabled = true;

};

Kiwi.extend( Kiwifroot.Physics.ArcadeSystem, Kiwi.Component );


/**
*
* @method configure
* @param params {Any} 
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.configure = function( params ) {

	if( params.gravity ) {
		
		if( typeof params.gravity.x !== "undefined" ) this.gravity.x = params.gravity.x;	
		if( typeof params.gravity.y !== "undefined" ) this.gravity.y = params.gravity.y;
	
	}

	if( typeof params.passes !== "undefined" ) {
		this.passes = params.passes;
	}

	if( typeof params.updateRate !== "undefined" ) {
		this.updateRate = params.updateRate;
	}

	if( typeof params.useSpeedGovernor !== "undefined") {
		this.useSpeedGovernor = params.useSpeedGovernor;
	}

	if( typeof params.enabled !== "undefined" ) {
		this.enabled = params.enabled;
	}

	if( typeof params.enabled !== "undefined" ) {
		this.enabled = params.enabled;
	}

};


/**
* Registers a ArcadePhysics component and it will be tracked for collisions, e.t.c.
* Does NOT check to see if that component has already been registered before or not.
*
* @method register
* @param component {Kiwifroot.Physics.ArcadeComponent} 
* @Param [front] {Boolean} 
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.register = function( component, front ) {

	if( front ) {
		this.components.unshift( component );
	} else {
		this.components.push( component );
	}
};


/**
* Removes a component from this System. 
* That component will no longer have its motion updated, or have collisions resolved.
* 
* @method deregister
* @param component {Kiwifroot.Physics.ArcadeComponent}
* @return {Boolean}
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.deregister = function( component ) {

	var index = this.components.indexOf( component );

	if( index > -1 ) {

		this.components.splice( index, 1 );
		return true;
	}

	return false;

};

/**
* 
* @method moveTo
* @param component {Kiwifroot.Physics.ArcadeComponent}
* @param [front] {Boolean}
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.moveTo = function( component, front ) {

	this.deregister( component );
	this.register( component, front );

};


/**
*
* @method preUpdate
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.preUpdate = function() {

	if( !this.enabled ) {
		return;
	}

	//Setup the update rate to take time into account
	var prevInterval = Kiwi.Components.ArcadePhysics.updateInterval;

	if( this.useSpeedGovernor ) {
		Kiwi.Components.ArcadePhysics.updateInterval = ( this.game.time.delta() * this.game.time.clock.rate ) / this.game.time.clock.units;
	} else {
		Kiwi.Components.ArcadePhysics.updateInterval = this.updateRate;
	}

	//Update Motion
	this.updateMotion();

	//Resolve Collisions 
	var i = 0;

	while( ++i <= this.passes ) {
		this.resolveCollisions();
		this._passNumber++;
	}

	Kiwi.Components.ArcadePhysics.updateInterval = prevInterval;


};

/**
* 
* @method postUpdate
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.postUpdate = function() {

	if( !this.enabled ) {
		return;
	}

	var i = 0, c;
	while( i < this.components.length ) {

		c = this.components[ i ];
		this.debugMode( c );

		c.wasTouching = this.touching;
		c.touching = Kiwi.Components.ArcadePhysics.NONE;

		i++;
	}

};

/**
* 
* @method debugMode
* @param componentA
* @param componentB
* @param tileMap {Boolean}
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.debugMode = function( obj ) {

	if( this.game.debugMode ) { 

		if( obj.owner.objType() === 'TileMapLayer' ) {

			var tiles = obj.owner.getCollidableTiles();
			var ct = this.game.cameras.defaultCamera.transform;

			this.game.stage.dctx.strokeStyle = "black";

			for( var i = 0; i < tiles.length; i++) {
				this.game.stage.dctx.strokeRect( tiles[i].x + ct.x + obj.owner.x,  
					tiles[i].y + ct.y + obj.owner.y, 
					obj.owner.tileWidth, 
					obj.owner.tileHeight);
			}

		} else {
			this._render( obj );
		}


	}

};

/**
* 
* @method render
* @param component
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype._render = function( component ) {

	var ct = this.game.cameras.defaultCamera.transform;
	var t = component.owner.transform;
	var hitbox = component.box.worldHitbox;
	var bounds = component.box.worldBounds;

	this.game.stage.dctx.stokeStyle = 'red';
	this.game.stage.dctx.strokeRect( t.worldX + ct.x + t.rotPointX - 3, t.worldY + ct.y + t.rotPointY - 3, 7, 7);

	this.game.stage.dctx.strokeStyle = "blue";
	this.game.stage.dctx.strokeRect(bounds.x + ct.x,  bounds.y + ct.y, bounds.width, bounds.height);

	this.game.stage.dctx.strokeStyle = "black";
	this.game.stage.dctx.strokeRect(hitbox.x + ct.x,  hitbox.y + ct.y, hitbox.width, hitbox.height);


};

/**
* Returns a boolean indicating if a object exists at the coordinates passed.
* 
* @method probe
* @param x {Number}
* @param y {Number}
* @param [collision=Kiwi.Components.ArcadePhysics.ANY] {Number}
* @param [layer] {Number} 
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.probe = function( x, y, collision, layer ) {

	if( typeof collision === "undefined" ) {
		collision = Kiwi.Components.ArcadePhysics.ANY;
	}

	//Loop through all of the components
	var i = 0,
		c, 
		rect = new Kiwi.Geom.Rectangle(0, 0, 0, 0);

	while( i < this.components.length ) {

		c = this.components[ i ];

		if( typeof layer !== "undefined" && layer !== c.layer ) {
			i++;
			continue;
		}

		if( c.owner.objType() === 'TileMapLayer' ) {

			var tileType = c.owner.getTileFromCoords( x, y );

			if( tileType && ( tileType.allowCollisions & collision ) == collision ) {
				return true;
			}

		} else {

			if( ( c.allowCollisions & collision ) !== collision ) {
				i++;
				continue;
			}

			rect.setTo( c.last.x - c.velocity.x, c.last.y - c.velocity.y, c.owner.width + c.velocity.x * 2, c.owner.height + c.velocity.y * 2 );

			if( rect.contains( x, y ) && c.box.worldHitbox.contains( x, y ) ) {
				return true;
			}

		}

		i++;
	}

	return false;

};

/**
*
* @method updateMotion
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.updateMotion = function() {

	var c, 
		i = 0;
	
	this.gravityDelta_.x = this.gravity.x * Kiwi.Components.ArcadePhysics.updateInterval;
	this.gravityDelta_.y = this.gravity.y * Kiwi.Components.ArcadePhysics.updateInterval;

	while( i < this.components.length ) {

		c = this.components[ i ];

		c.last.x = c.transform.worldX;
		c.last.y = c.transform.worldY;

		c.canGoUp = true;
		c.canGoDown = true;
		c.canGoLeft = true;
		c.canGoRight = true;
		

		//Apply gravity
		if( c.gravity ) { 
			c.velocity.x += this.gravityDelta_.x;
			c.velocity.y += this.gravityDelta_.y;
		}

		//Update motion
		c.updateMotion();

		i++;
	}

};

/**
* 
* @method destroy
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	delete this.components;

};

/**
* 
* @property gravityDeltaX
* @type Number
* @public
* @readOnly 
* @since 0.11.3
*/
Object.defineProperty(Kiwifroot.Physics.ArcadeSystem.prototype, "gravityDeltaX", {

	get: function() {
		return this.gravityDelta_.x;
	}

});

/**
* 
* @property gravityDeltaY
* @type Number
* @public
* @readOnly 
* @since 0.11.3
*/
Object.defineProperty(Kiwifroot.Physics.ArcadeSystem.prototype, "gravityDeltaY", {

	get: function() {
		return this.gravityDelta_.y;
	}

});


/**
*
* @method resolveCollisions
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.resolveCollisions = function() {

	var j = 0,
		i = 0;

	while( i < this.components.length ) {

		j = i + 1;

		while( j < this.components.length ) {

			this.checkCollision( this.components[ i ], this.components[ j ] );

			j++;
		}

		i++;
	}

};

/**
*
* @method checkCollision
* @param componentA 
* @param componentB
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.checkCollision = function( componentA, componentB ) {

	var collision = false;

	if( componentA.layer !== componentB.layer ) {
		return;
	}


	//Check overlap 
	if( componentA.owner.objType() === 'TileMapLayer' ) {
		collision = this.overlapsTiles( componentB, componentA );

	} else if( componentB.owner.objType() === 'TileMapLayer' ) {
		collision = this.overlapsTiles( componentA, componentB );

	} else {
		collision = this.overlaps( componentA, componentB );
	}
		
	if( collision ) {
		this.onCollision.dispatch( componentA.owner, componentB.owner );
	}

};

	
/**
* Resolves collisions between two ArcadeComponents.
* 
* @method overlaps
* @param compA {Kiwifroot.Physics.ArcadeComponent}
* @param compB {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.overlaps = function(compA, compB) {

	if( compA.immovable && compB.immovable ) {
		return false;
	}

	var seperatedX = this.seperateX(compA, compB);
	var seperatedY = this.seperateY(compA, compB);

	return seperatedX || seperatedY;
};

/**
* 
* @method overlapsTiles
* @comp {Kiwifroot.Physics.ArcadeComponent}
* @tilemap {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.overlapsTiles = function(comp, tilemap) {

	if( comp.immovable ) {
		return false;
	}
	
	//var tiles = tilemap.owner.getOverlappingTiles(comp.owner),
	var tiles = this.getOverlappingTiles( tilemap, comp ),
		seperatedX = false,
		seperatedY = false,
		i = 0;

	while( i < tiles.length ) {
		
		if( !seperatedX ) {
			seperatedX = this.seperateTileX( comp, tilemap, tiles[i] );
		} 
		if( !seperatedY ) {
			seperatedY = this.seperateTileY( comp, tilemap, tiles[i] );
		}

		i++;				
	}

	return seperatedX || seperatedY;
};

/**
* 
* @method getOverlappingTiles
* @param comp
* @public
*/ 
Kiwifroot.Physics.ArcadeSystem.prototype.getOverlappingTiles = function( tilemap, comp ) {

	var hitbox = comp.getHitbox();
	var x = tilemap.transform.worldX;
	var y = tilemap.transform.worldY;

	if( hitbox.left > x + tilemap.owner.widthInPixels || 
		hitbox.right < x ||
		hitbox.bottom < y ||
		hitbox.top > y + tilemap.owner.heightInPixels ) {
		return [];
	}

	var nx = hitbox.x - x;
	var ny = hitbox.y - y;

	var x = Kiwi.Utils.GameMath.snapToFloor(nx, tilemap.owner.tileWidth) / tilemap.owner.tileWidth;
    var y = Kiwi.Utils.GameMath.snapToFloor(ny, tilemap.owner.tileHeight) / tilemap.owner.tileHeight;
    var w = Kiwi.Utils.GameMath.snapToCeil(hitbox.width, tilemap.owner.tileWidth) / tilemap.owner.tileWidth;
    var h = Kiwi.Utils.GameMath.snapToCeil(hitbox.height, tilemap.owner.tileHeight) / tilemap.owner.tileHeight;

    //Add one, because we want to include the very end tile.
    return tilemap.owner.getCollidableTiles(x, y, w + 1, h + 1);

};


/**
* Seperates one object from another on the x-axis.
* 
* @method seperateX
* @param compA {Kiwifroot.Physics.ArcadeComponent}
* @param compB {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateX = function(compA, compB) {

	var deltaA = compA.transform.worldX - compA.last.x, 
		deltaB = compB.transform.worldX - compB.last.x;

	if( deltaA === deltaB ) return false;

	var hitA = compA.getHitbox(),
		hitB = compB.getHitbox();

	this._rectA.setTo( hitA.x - ((deltaA > 0) ? deltaA : 0), 
		compA.last.y + (compA.box.hitboxOffset.y * compA.owner.scaleY), 
		hitA.width + deltaA, 
		hitA.height);

	this._rectB.setTo( hitB.x - ((deltaB > 0) ? deltaB : 0), 
		compB.last.y + compB.box.hitboxOffset.y * compA.owner.scaleY,
		hitB.width + deltaB,
		hitB.height);

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right &&
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {

		var maxOverlap = Math.abs(deltaA) + Math.abs(deltaB) + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS;

		if( deltaA > deltaB ) {

			overlap = hitA.x + hitA.width - hitB.x;
			if( overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.RIGHT;
				compB.touching |= Kiwi.Components.ArcadePhysics.LEFT;

			}

		} else {

			overlap = hitA.x - hitB.width - hitB.x;
			if( -overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.LEFT;
				compB.touching |= Kiwi.Components.ArcadePhysics.RIGHT;
			}

		}

		if( overlap !== 0 ) {

			var va = compA.velocity.x;
			var vb = compB.velocity.x;

			if( !compA.immovable && !compB.immovable && (
				overlap < 0 && compA.canGoLeft && compB.canGoRight || 
				overlap > 0 && compA.canGoRight && compB.canGoLeft ) ) {

				overlap *= 0.5;
				compA.transform.x = compA.transform.x - overlap;
				compB.transform.x = compB.transform.x + overlap;

				var veloA = Math.sqrt( (vb * vb * compB.mass) / compA.mass );
				var veloB = Math.sqrt( (va * va * compA.mass) / compB.mass );

				if( va <= 0 ) veloB *= -1;
				if( vb <= 0 ) veloA *= -1;

				var average = (veloA + veloB) * 0.5;
				veloA -= average;
				veloB -= average;

				compA.velocity.x = average + veloA * compA.elasticity;
				compB.velocity.x = average + veloB * compB.elasticity;

			} else if( !compA.immovable && (
				overlap < 0 && compA.canGoLeft || 
				overlap > 0 && compA.canGoRight )) {

				if( overlap > 0 ) {
					compB.canGoRight = false;
				} else {
					compB.canGoLeft = false;
				}

				compA.transform.x = compA.transform.x - overlap;
				compA.velocity.x = vb - va * compA.elasticity;

			} else if( !compB.immovable && (
				overlap < 0 && compB.canGoRight || 
				overlap > 0 && compB.canGoLeft )) {

				if( overlap > 0 ) {
					compB.canGoLeft = false;
				} else {
					compB.canGoRight = false;
				}

				compB.transform.x = compB.transform.x + overlap;
				compB.velocity.x = va - vb * compB.elasticity;

			}

			return true;
		}
	}

	return false;
};

/**
* Seperates on object from another on the y-axis.
* 
* @method seperateY
* @param compA {Kiwifroot.Physics.ArcadeComponent}
* @param compB {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateY = function(compA, compB) {

	var deltaA = compA.transform.worldY - compA.last.y, 
		deltaB = compB.transform.worldY - compB.last.y;

	if( deltaA === deltaB ) return false;

	var hitA = compA.getHitbox(),
		hitB = compB.getHitbox();

	var deltaAAbs = Math.abs( deltaA );
	var deltaBAbs = Math.abs( deltaB );

	this._rectA.setTo( hitA.x, 
		hitA.y - ((deltaA > 0) ? deltaA : 0), 
		hitA.width, 
		hitA.height + deltaAAbs );

	this._rectB.setTo( hitB.x, 
		hitB.y - ((deltaB > 0) ? deltaB : 0), 
		hitB.width, 
		hitB.height + deltaBAbs );

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right &&
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {


		var maxOverlap = deltaAAbs + deltaBAbs + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS;

		if( deltaA > deltaB ) {

			overlap = hitA.y + hitA.height - hitB.y;

			if( overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.UP)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.DOWN;
				compB.touching |= Kiwi.Components.ArcadePhysics.UP;
			}

		} else {

			overlap = hitA.y - hitB.height - hitB.y;

			if( -overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.UP) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.UP;
				compB.touching |= Kiwi.Components.ArcadePhysics.DOWN;
			}

		}

		if( overlap !== 0 ) {

			var va = compA.velocity.y;
			var vb = compB.velocity.y;

			if( !compA.immovable && !compB.immovable && (
				overlap < 0 && compA.canGoUp && compB.canGoDown || 
				overlap > 0 && compA.canGoDown && compB.canGoUp ) ) {

				overlap *= 0.5;
				compA.transform.y = compA.transform.y - overlap;
				compB.transform.y = compB.transform.y + overlap;

				var veloA = Math.sqrt( (vb * vb * compB.mass) / compA.mass );
				var veloB = Math.sqrt( (va * va * compA.mass) / compB.mass );

				if( va <= 0 ) veloB *= -1;
				if( vb <= 0 ) veloA *= -1;

				var average = (veloA + veloB) * 0.5;
				veloA -= average;
				veloB -= average;

				compA.velocity.y = average + veloA * compA.elasticity;
				compB.velocity.y = average + veloB * compB.elasticity;

			} else if( !compA.immovable && ( 
				overlap < 0 && compA.canGoUp ||
				overlap > 0 && compA.canGoDown ) ) {

				compA.transform.y = compA.transform.y - overlap;
				compA.velocity.y = vb - va * compA.elasticity;

				//Are we touching the bottom side?
				if( overlap > 0 ) {
					compA.canGoDown = false;
				} else {
					compA.canGoUp = false;
				}

				if( compB.moves && compB.owner.active && deltaA > deltaB) {
					compA.transform.x = compA.transform.worldX + compB.transform.worldX - compB.last.x;
				}

			} else if( !compB.immovable && ( 
				overlap < 0 && compB.canGoDown ||
				overlap > 0 && compB.canGoUp ) ) {

				compB.transform.y = compB.transform.y + overlap;
				compB.velocity.y = va - vb * compB.elasticity;

				if( overlap > 0 ) {
					compB.canGoUp = false;
				} else {
					compB.canGoDown = false;
				}

				if( compA.moves && compA.owner.active && deltaA < deltaB) {
					compB.transform.x = compB.transform.worldX + compA.transform.worldX - compA.last.x;
				}
			}

			return true;
		}
	}

	return false;
};

/**
* 
* @method seperateTileX
* @param comp 
* @param tilemap
* @param tile
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateTileX = function(comp, tilemap, tile) {

	var deltaA = comp.transform.x - comp.last.x;
	var deltaB = tilemap.transform.x - tilemap.last.x;

	if( deltaA === deltaB ) return false;

	var box = comp.getHitbox();
	
	var x = tilemap.transform.x + tile.x;

	this._rectA.setTo( 
		box.x - ( (deltaA > 0) ? deltaA : 0 ),
		comp.last.y + (comp.box.hitboxOffset.y * comp.owner.scaleY) + 1,
		box.width + deltaA,
		box.height - 2
		);

	this._rectB.setTo(
		x - ( (deltaB > 0) ? deltaB : 0 ),
		tilemap.last.y + tile.y,
		tilemap.owner.tileWidth + deltaB,
		tilemap.owner.tileHeight
		);

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right && 
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {

		var overlap = 0,
			maxOverlap = Math.abs(deltaA) + Math.abs(deltaB) + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS,
			tileType = tilemap.owner.tilemap.tileTypes[ tilemap.owner.tileData[ tile.index ] ];


		if( deltaA > deltaB ) {
			
			overlap = box.x + box.width - x;
			if( overlap > maxOverlap ||  
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.RIGHT;

			}

		} else {

			overlap = box.x - tilemap.owner.tileWidth - x;
			if( -overlap > maxOverlap ||
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.LEFT;

			}

		}

		if( overlap !== 0 ) {
			comp.transform.x = comp.transform.x - overlap;
			comp.velocity.x = tilemap.velocity.x - comp.velocity.x * comp.elasticity;

			//Are we touching the bottom side?
			if( comp.touching & Kiwi.Components.ArcadePhysics.RIGHT ) {
				comp.canGoLeft = false;
			} else {
				comp.canGoRight = false;
			}

			return true;
		}

	}

	return false;

};


/**
* 
* @method seperateTileY
* @param comp 
* @param tilemap
* @param tile
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateTileY = function(comp, tilemap, tile) {

	var deltaA = comp.transform.y - comp.last.y;
	var deltaB = tilemap.transform.y - tilemap.last.y;

	if( deltaA === deltaB ) return false;

	var box = comp.getHitbox();
	var deltaAAbs = Math.abs( deltaA ); 
	var deltaBAbs = Math.abs( deltaB );
	
	var y = tilemap.transform.y + tile.y;

	this._rectA.setTo( 
		box.x,
		box.y - ((deltaA > 0) ? deltaA : 0 ),
		box.width,
		box.height + deltaAAbs
		);

	this._rectB.setTo(
		tilemap.transform.x + tile.x,
		y - ((deltaB > 0) ? deltaB : 0),
		tilemap.owner.tileWidth,
		tilemap.owner.tileHeight + deltaBAbs
		);

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right && 
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {

		var overlap = 0,
			maxOverlap = deltaAAbs + Math.abs(deltaB) + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS,
			tileType = tilemap.owner.tilemap.tileTypes[ tilemap.owner.tileData[ tile.index ] ];


		if( deltaA > deltaB ) {
			
			overlap = box.y + box.height - y;
			if( overlap > maxOverlap ||  
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.UP) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.DOWN;

			}

		} else {

			overlap = box.y - tilemap.owner.tileHeight - y;
			if( -overlap > maxOverlap ||
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.UP) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.UP;

			}

		}

		if( overlap !== 0 ) {
			comp.transform.y = comp.transform.y - overlap;
			comp.velocity.y = tilemap.velocity.y - comp.velocity.y * comp.elasticity;

			//Are we touching the bottom side?
			if( comp.touching & Kiwi.Components.ArcadePhysics.UP ) {
				comp.canGoDown = false;
			} else {
				comp.canGoUp = false;
			}

			return true;
		}

	}

	return false;
};

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
* @class ComponentExample
* @static
* 
*/
Kiwi.Plugins.ComponentExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'ComponentExample'
	* @public
	*/
	name: 'ComponentExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

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
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [

	],

	/**
	* 
	* @property kiwifrootPlugins
	* @type Array
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
		

	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.ComponentExample );



/**
*
* @method create
* @param state {Kiwi.State}
* @param object {Kiwi.Entity}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.ComponentExample.add = function( state, object, params ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.component + ' component. Parameters passed were not valid.' );
		return null;
	}
	
	alert( params.message );

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.ComponentExample.validate = function( params ) {

	//Do your own validaton of the parameters passed to the 'add' method here....
	if( !params.message ) {
		return false;
	}

	return true;
};


//Add the plugins
Kiwi.Plugins.ComponentExample.kiwifrootPlugins.push( {
			type: Kiwifroot.Plugins.COMPONENT,
			name: 'example',
			namespace: Kiwi.Plugins.ComponentExample
		} );


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
* @class GameObjectExample
* @static
* 
*/
Kiwi.Plugins.GameObjectExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'GameObjectExample'
	* @public
	*/
	name: 'GameObjectExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

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
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [

	],


	/**
	* 
	* @property kiwifrootPlugins
	* @type Array
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
		

	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.GameObjectExample );


/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GameObjectExample.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.gameobject + ' object. Parameters passed were not valid.' );
		return null;
	}
	
	alert('A GameObject has been created now.');

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GameObjectExample.validate = function( params ) {

	//Do your own validaton of the parameters passed to the 'add' method here....

	return true;
};


//Add to the kiwifroot plugin
Kiwi.Plugins.GameObjectExample.kiwifrootPlugins.push(  {
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'example',
		namespace: Kiwi.Plugins.GameObjectExample
	} );

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
* @class MultipleExample
* @static
* 
*/
Kiwi.Plugins.MultipleExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'MultipleExample'
	* @public
	*/
	name: 'MultipleExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

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
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
		
		{
			type: Kiwifroot.Plugins.COMPONENT,
			name: 'example',
			namespace: Kiwi.Plugins.ComponentExample
		},

		{
			type: Kiwifroot.Plugins.GAMEOBJECT,
			name: 'example',
			namespace: Kiwi.Plugins.GameObjectExample
		}

	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.MultipleExample );


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
* @class SystemExample
* @static
* 
*/
Kiwi.Plugins.SystemExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'SystemExample'
	* @public
	*/
	name: 'SystemExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

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
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [

	],


	/**
	* 
	* @property kiwifrootPlugins
	* @type Array
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.SystemExample );


/**
* 
* @module Plugins
* @submodule SystemExample
* 
*/

/**
* 
* @namespace Kiwi.Plugins.SystemExample
* @class System
* @constructor
* @param state {Kiwi.State}
* @param params {Object}
*/
Kiwi.Plugins.SystemExample.System = function( state ) {

	Kiwi.Component.call( this, state, 'SystemExample' );

	/**
	* 
	* @property message
	* @type String
	* @default 'Hello World'
	* @public
	*/
	this.message = 'Hello World';

	/**
	* 
	* @property _count
	* @type number
	* @default 0 
	* @private
	*/
	this._count = 0;

	/**
	* 
	* @property frames
	* @type number
	* @default 2000
	* @public
	*/
	this.frames = 200;

	/**
	* 
	* @property active
	* @type boolean
	* @default true
	* @public
	*/
	this.active = true;

};

Kiwi.extend( Kiwi.Plugins.SystemExample.System, Kiwi.Component );

/**
* Executed when/if a level system is configured 
* @method configure
* @param [params] {Object}
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.configure = function( params ) {

	params = params || {};

	if( params.message ) {
		this.message = params.message;
	}

	if( params.frames ) {
		this.frames = params.frames;
	} 

	if( params.active ) {
		this.active = params.active;
	}

};

/**
* Executed after all the gameobjects have been created 
* @method start
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.start = function() {

};

/**
* Executed when/if a level system is configured after the start method.
* @method start
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.launch = function() {

};


/**
* 
* @method preUpdate
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.preUpdate = function( ) {

	if( !this.active ) {
		return;
	}

	this._count++;

	if( this._count >= this.frames ) {
		alert( this.message + ' \n\rIt has been '+ this.frames + ' frames.' );
		this._count = 0;
	}

};


//Add the System to the plugin config

Kiwi.Plugins.SystemExample.kiwifrootPlugins.push( {
	type: Kiwifroot.Plugins.SYSTEM,
	system: Kiwi.Plugins.SystemExample.System
} );

/**
* 
* @module Kiwifroot
* @submodule Sound
*/
Kiwifroot.Sound = Kiwifroot.Sound || {};

/**
* 
* @namespace Kiwifroot.Sound
* @class Factory
* @constructor
* @params state {Kiwi.State}
* @params params {Object}
*   @params params.id {Number} The unique id of this factory.
*   @params params.key {String} The asset key for the audio tags that are to be generated.
*   @params params.mute {Boolean} The default mute status of the sounds.
*   @params [params.maxSounds=Infinity] {Number} The maximum number of audio objects to be generated.
* 
*/
Kiwifroot.Sound.Factory = function( state, params ) {


    /**
    *
    * @property state
    * @type Kiwi.State
    * @public
    */
    this.state = state;


    /**
    *
    * @property game
    * @type Kiwi.Game
    * @public
    */
    this.game = this.state.game;

    if( !params.id || typeof params.mute == "undefined" ) {
        this.game.log.error('Kiwi.Sound.Factory: Failed to pass all required parameters.');
    }


    /**
    *
    * @property id
    * @type Number
    * @public
    */
    this.id = params.id || -1;

    /**
    *
    * @property _mute
    * @type Boolean
    * @private
    */
    this._mute = params.mute;


    /**
    *
    * @property maxSounds
    * @type Infinity
    * @public
    */
    this.maxSounds = params.maxSounds || Infinity;


    /**
    *
    * @property Sounds
    * @type Array
    * @public
    */
    this.sounds = [];

};


/**
*
* @method play
* @public
*/
Kiwifroot.Sound.Factory.prototype.play = function() {

    //Loop through the sounds and find one to play
    for (var index in this.sounds) {

        if (this.sounds[ index ].isPlaying == false) {
            this.sounds[ index ].play();
            return;
        }

    }

    //If one could not be found, try to create one. Make sure one is created.
    if ( this.create() ) {
        this.sounds[this.sounds.length - 1].play();
    }

};


/**
*
* @method stopAll
* @public
*/
Kiwifroot.Sound.Factory.prototype.stopAll = function() {

    for (var index in this.sounds) {
        this.sounds[index].stop();
    }

};



/**
*
* @property mute
* @type Boolean
* @public
*/
Object.defineProperty( Kiwifroot.Sound.Factory.prototype, "mute", {

    get: function () {
        return this._mute;
    },

    set: function (val) {
        this._mute = val;

        for (var index in this.sounds) {
            this.sounds[index].mute = this.mute;
        }
    },

    enumerable: true,

    configurable: true

});


/**
*
* @method create
* @params [amount=1] {Number}
* @public
*/
Kiwifroot.Sound.Factory.prototype.create = function( amount ) {

    amount = amount || 1;

    var created = false;

    for ( var i = 0; i < amount; i++ ) {

        if ( this.sounds.length < this.maxSounds ) {

            created = true;
            var sound = new Kiwi.Sound.Audio( this.game, this.id, 1, false );
            sound.mute = this.mute;
            this.sounds.push(sound);

        }

    }

    return created;

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Sound.Factory.prototype.destroy = function() {

    this.stopAll();

    for (var index in this.sounds) {
        this.sounds[index].destroy();
    }

    delete this.state;

    delete this.game;

    delete this.sounds;

};
/**
* 
* @module Kiwifroot
* @submodule Sound
*/
Kiwifroot.Sound = Kiwifroot.Sound || {};


/**
* 
* @namespace Kiwifroot.Sound
* @class Manager
* @extends Kiwi.Component
* @constructor
* @param state { Kiwifroot.Level }
*/
Kiwifroot.Sound.Manager = function( state ) {


    Kiwi.Component.call( this, state, 'SoundManager' );


    /**
    * 
    * @property state
    * @type Kiwifroot.Level
    * @public
    */
    this.state = this.owner;


    /**
    * 
    * @property factories
    * @type Object
    * @public
    */
    this.factories = {};


    /**
    *
    * @property backgroundTrack
    * @type Kiwi.Sound.Audio
    * @public
    */
    this.backgroundTrack = null;


    /**
    *
    * @property keepMusicOnDestroy
    * @type Boolean
    * @default false
    * @public
    */
    this.keepMusicOnDestroy = false;

    //Get the background track. Used if the background track is playing between states.
    var i = this.game.audio._sounds.length;
    while( i-- ) {
        if( this.game.audio._sounds[i]._backgroundTrack ) {
            this.backgroundTrack = this.game.audio._sounds[i];
            break;
        }
    }


};

Kiwi.extend( Kiwifroot.Sound.Manager, Kiwi.Component);


/**
*
* @method playBackgroundTrack
* @param [id] {Number}
* @public
*/
Kiwifroot.Sound.Manager.prototype.playBackgroundTrack = function( id ) {

    this.stopBackgroundTrack();

    if( typeof id == "undefined" && this.backgroundTrack != null ) {
        this.backgroundTrack.play();
        return;
    }

    if ( this.game.asset.exists( id ) ) {

        if (this.backgroundTrack != null) {
            
            //Are they trying to play the current background track
            if( id == this.backgroundTrack.id ) {
                this.restartBackgroundTrack();
                return;
            }

            //Kill the old background track.
            this.backgroundTrack.destroy();
        }


        this.backgroundTrack = new Kiwi.Sound.Audio(this.game, id, 1, true);
        this.backgroundTrack.play();
        this.backgroundTrack.mute = this.muteBackground;
        this.backgroundTrack._backgroundTrack = true;
           
    }

};


/**
*
* @method restartBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.restartBackgroundTrack = function() {
    
    if (this.backgroundTrack !== null) {
        this.backgroundTrack.play('default', true);
    }

};


/**
* Resumes the background tracks from where it last left off
* @method restartBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.resumeBackgroundTrack = function() {

    if (this.backgroundTrack !== null) {
        this.backgroundTrack.resume();
    }

};


/**
* Pauses the background track
* @method pauseBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.pauseBackgroundTrack = function() {

    if (this.backgroundTrack !== null) {
        this.backgroundTrack.pause();
    }

};


/**
* Stops the background track
* @method stopBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.stopBackgroundTrack = function() {

    if (this.backgroundTrack !== null) {
        this.backgroundTrack.stop();
    }

};


/**
* Plays a sound effect
* @method stopBackgroundTrack
* @param id {Number}
* @public
*/
Kiwifroot.Sound.Manager.prototype.playSoundEffect = function( id ) {

    //Do we need to create one?
    if (typeof this.factories[ id ] === "undefined") this.createFactory( id );

    //If it is null, then no sound exists for that id, so skip it.
    if (this.factories[ id ] !== null) {
        this.factories[ id ].play();
    }

}



/**
* Creates a new sound effect factory.
*
* @method createFactory
* @param id {Number}
* @param [maxSounds=Infinity] {Number}
* @public
*/
Kiwifroot.Sound.Manager.prototype.createFactory = function( id, maxSounds ) {

    if ( this.game.asset.exists( id ) ) {
        this.factories[ id ] = new Kiwifroot.Sound.Factory(this.state,
            {
                id: id, 
                mute: this.muteEffects,
                maxSounds: maxSounds
            } );

    } else {
        this.factories[ id ] = null;

    }
};


/**
*
* @property muteEffects
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.Sound.Manager.prototype, "muteEffects", {

    get: function () {
        return this.game.info._muteEffects;
    },

    set: function (val) {

        this.game.info._muteEffects = val;

        for (var id in this.factories) {
            this.factories[ id ].mute = this.game.info._muteEffects;
        }
    },

    enumerable: true,

    configurable: true

});


/**
*
* @property muteBackground
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.Sound.Manager.prototype, "muteBackground", {

    get: function () {
        return this.game.info._muteBackground;
    },

    set: function (mute) {
        this.game.info._muteBackground = mute;
        if( this.backgroundTrack !== null ) this.backgroundTrack.mute = this.game.info._muteBackground;
    },

    enumerable: true,

    configurable: true

});


/**
* Mutes or unmutes all the sounds
*
* @method muteAll
* @param [muted=true] {Boolean}
* @public
*/
Kiwifroot.Sound.Manager.prototype.muteAll = function( muted ) {

    if( typeof muted == "undefined" ) {
        muted = true;
    }
    
    this.muteBackground = muted;
    this.muteEffects = muted;

};


/**
* Stops all sounds from playing
*
* @method stopAll
* @public
*/
Kiwifroot.Sound.Manager.prototype.stopAll = function() {
    this.stopBackgroundTrack();

    for (var id in this.factories) {
        this.factories[ id ].stopAll();
    }
};


/**
* 
* @method destroy
* @public
*/
Kiwifroot.Sound.Manager.prototype.destroy = function() {

    Kiwi.Component.prototype.destroy.call( this );

    delete this.state;

    if( !this.keepMusicOnDestroy ) {
    
        this.stopBackgroundTrack();
        if( this.backgroundTrack ) {
            this.backgroundTrack.destroy();
        }

    }

    delete this.backgroundTrack;

    for (var id in this.factories) {
        if( this.factories[ id ] !== null ) {
            this.factories[ id ].destroy();
        }
    }
    delete this.factories;

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Displays any defined runtime errors on the screen. 
*
* Main errors these can be generated from are:
* - Error with defined JSON files.
* - Script Editor bugs.
* 
* @namespace Kiwifroot.State
* @class Error
* @extends Kiwi.State
* @constructor
* 
*/
Kiwifroot.States.Error = function() {
	Kiwi.State.call( this, Kiwifroot.States.Error.NAME );
};


/**
* 
* @property NAME
* @type String
* @default 'Error'
* @static
* @public
*/
Kiwifroot.States.Error.NAME = 'Error';

Kiwi.extend( Kiwifroot.States.Error, Kiwi.State );

/**
* 
* @method preload
* @public
*/
Kiwifroot.States.Error.prototype.preload = function() {
	//Load in any error 'assets'
};


/**
*
* @method create
* @public
*/
Kiwifroot.States.Error.prototype.create = function() {

	var error = this.game.error,
		userMessage = this.game.userErrorMessage;


	//Reset the level
	for( var i = 0; i < this.members.length; i++) {
		this.members[i].visible = false;
	}
	this.game.stage.color = '#000000';

	//Display the error message.
	this.game.log.error( error );

	if( typeof Kiwi.Plugins.Text !== "undefined" ) {
		var text = new Kiwi.Plugins.Text( {
			addToState: false,
			maxWidth: this.game.stage.width - 20,
			x: 10,
			y: 10,
			color: "#ffffff",
			size: 20,
			text: '',
			state: this
		} );
	} else {
		var text = new Kiwi.GameObjects.TextField( this, '', 10, 10, "#ffffff", 20 );
	}

	text.fontFamily = "'Courier New', Courier, monospace";
	this.addChild( text );

	var interval = this.game.time.clock.setInterval( function() {

		if( userMessage.length > 0 ) {

			text.text += userMessage.charAt(0);
			userMessage = userMessage.slice(1);

		} else {

			this.game.time.clock.removeTimer( interval );

		}

	}, 50, this );

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Initial state which loaded when a game is created. 
* Handles loading in the initial game information and any global assets.
* 
* @namespace Kiwifroot.States
* @class Launch
* @extends Kiwi.States
* @constructor
* 
*/
Kiwifroot.States.Launch = function() {

	Kiwi.State.call( this, Kiwifroot.States.Launch.NAME );

};

/**
* 
* @property NAME
* @static
* @type String
* @default 'Launch'
* @public
*/
Kiwifroot.States.Launch.NAME = 'Launch';

Kiwi.extend( Kiwifroot.States.Launch, Kiwi.State );

/**
* Apply the default game parameters
* @method init
* @public
*/
Kiwifroot.States.Launch.prototype.init = function() {

	/**
	* Dispatches events during the launch phase of the game. 
	* 
	* @property onExecute
	* @type Kiwi.Signal
	* @public
	*/
	this.onExecute = new Kiwi.Signal();

};

/**
*
* @method preload
* @public
*/
Kiwifroot.States.Launch.prototype.preload = function() {

	//Set color
	this.game.stage.rgbaColor = {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	};

	//Prevent Scrolling
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.SPACEBAR, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.LEFT, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.RIGHT, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.UP, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.DOWN, true );

	//Load in the game json file.
	this.loadGameJson();

	//Load in the texture atlas.
    this.game.loader.addTextureAtlas( {
    	textureAtlasKey: 'kiwifrootTextureAtlas', 
    	textureAtlasURL: this.game.asset.getUrl( this.game.textureAtlas.image ), 
    	jsonKey: 'kiwifrootAtlasJson', 
    	jsonURL: this.game.asset.getUrl( this.game.textureAtlas.json ),
		crossOrigin: "Anonymous" } );


    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.PRELOAD );

};


/**
*
* @method loadGameJson
* @public
*/
Kiwifroot.States.Launch.prototype.loadGameJson = function() {

	if( this.game.info.data ) {
		this.game.log.log( 'Game data already exists.' );
	}
	
	if( this.game.info.jsonURL ) {

		this.game.log.log( 'Loading in game json.' );
		console.log( this.game.asset.getUrl( this.game.info.jsonURL ) );
		this.game.loader.addJSON( 'gameData', this.game.asset.getUrl( this.game.info.jsonURL ) );

	}

};


/**
*
* @method create
* @public
*/
Kiwifroot.States.Launch.prototype.create = function() {

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.CREATE );

	//If a gameData file exists, then assign the game data to that. 
	if( this.data.gameData ) {
		
		try {
			var extract = JSON.parse( this.data.gameData.data);
		} catch(e) {
			this.game.log.error( 'Error parsing game json. File must be malformed.' );
		}

		if( extract ) {
			this.game.info.assignData( extract );
		}
	}

	if( !this.game.info.data ) {
		this.game.reportError( 'No game data found. Runtime cannot progress', "Game Information not located..." );
		return;
	}

	this.assetLoadingComplete = false;

	this.loadGlobalGameAssets();


};


/**
* 
* @method loadGlobalGameAssets
* @private
*/
Kiwifroot.States.Launch.prototype.loadGlobalGameAssets = function() {

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_LOAD );

	//Display Splash Screen
	this.showSplashScreen();

	if( this.game.info.data.assets.length > 0 || ( this.game.info.loadLevelJsonAtStart && this.game.info.levels.length > 0 ) ) {

		this.game.log.log( 'Starting to load global game assets.' );

	    this.game.loader.onQueueComplete.addOnce( this.globalLoadComplete, this );
		
	    //Loop through the files and load them in...
	    this.game.log.log( this.game.info.data.assets.length + ' are to be loaded.' );
	    for(var i = 0; i < this.game.info.data.assets.length; i++) {
	    	this.game.asset.load( this.game.info.data.assets[ i ], true );
	    }

	    if( this.game.info.loadLevelJsonAtStart ) {

	    	var levels = this.game.info.levels,
	    		level;

	    	for (var i = 0; i < levels.length; i++) {
	    		level = levels[ i ];
	    		if( !level.hasData ) {
	    			this.addJSON('level-' + level.id, this.game.asset.getUrl( level.url ), false);
	    		}
	    	}

	    }

	    //Start the load
	    this.game.loader.startLoad();
	
	} else {

		this.game.log.log( 'No global game assets passed. Skipping global asset loading step.' );
		this.globalLoadComplete();

	}

};


/**
* 
* @method globalLoadComplete
* @private
*/
Kiwifroot.States.Launch.prototype.globalLoadComplete = function() {

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_COMPLETE );

	this.assetLoadingComplete = true;

	if( this.game.info.data.plugins.length <= 0) {
		this.game.log.log('No plugins for game detected. Skipping plugin phase.');
		this.checkAssetLoadingProgress();
		return;
	}

	//The plugin system for kiwi needs to be refactored...
	this.game.log.log( this.game.info.data.plugins.length + ' Plugins found. Including them now.' );

	//Assign the plugins to the plugin manager
	this.game.pluginManager._plugins = this.game.info.data.plugins;
	//Validate them
	this.game.pluginManager.validatePlugins();
	//Create them
    this.game.pluginManager._createPlugins();
    //Start the boot phase
    this.game.pluginManager.boot();
    //They will be updating themselves from here onwards.

	this.game.log.log( 'Plugins added to the game.' );

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.PLUGINS_BOOTED );

	this.checkAssetLoadingProgress();

};


/**
* 
* @method loadFirstLevel
* @private
*/
Kiwifroot.States.Launch.prototype.loadFirstLevel = function(argument) {

	this.game.input.onUp.remove( this._openGamefrootPage, this );

	if( !this.game.info.data.firstLevel ) {
		this.game.reportError( 'No first level set. Runtime cannot progress.', 'No level could be found... Runtime halted', 'LAUNCH' );
		return;
	} 

    //Attempt to load in a webview if we have access to the CocoonJS enviroment
	if( this.game.deviceTargetOption === Kiwi.TARGET_COCOON ) {
		if( typeof Cocoon !== "undefined" && typeof Cocoon.App !== "undefined" && this.game.webviewURL ) {
			Cocoon.App.loadInTheWebView( this.game.webviewURL );
		}
	}

	this.game.log.log( 'Kiwifroot now preloading Level ID ' + this.game.info.data.firstLevel );
	this.game.info.switchLevel( this.game.info.data.firstLevel );
};


/**
* 
* @method showSplashScreen
* @private
*/
Kiwifroot.States.Launch.prototype.showSplashScreen = function() {

	//Set color
	this.game.stage.rgbaColor = {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	};

	//Are we skipping this part?
	if( this.game.info.skipLaunch ) return;

	var splash = new Kiwi.GameObjects.Sprite( this, this.textures.kiwifrootTextureAtlas, 0, 0 );
	splash.cellIndex = 0;
	splash.x = (this.game.stage.width - splash.width) / 2;
	splash.y = (this.game.stage.height - splash.height) / 2;
	splash.alpha = 0;
	this.addChild( splash );

	//Apply Splash Scaling
	var padding = 20;
	if( this.game.stage.width < splash.width + padding * 2 ) {
		splash.scaleToWidth( this.game.stage.width - padding * 2 );
		splash.x = padding;
		splash.anchorPointX = 0;
		splash.anchorPointY = 0;
	}

	this.tween = this.game.tweens.create( splash );
	this.tween.onComplete( this.checkAssetLoadingProgress, this );
	this.tween.to( { alpha: 1 }, 750, Kiwi.Animations.Tweens.Easing.Cubic.Out, true );

	this.game.input.onUp.add( this._openGamefrootPage, this );

};

/**
* 
* @method _openGamefrootPage
* @private
*/
Kiwifroot.States.Launch.prototype._openGamefrootPage = function() {

	if( this.game.info.splashOpenURL ) {

		var gamefrootUrl = 'http://gamefroot.com/';

		if( this.game.deviceTargetOption === Kiwi.TARGET_COCOON ) {
			if( typeof Cocoon !== "undefined" && typeof Cocoon.App !== "undefined" ) {
				Cocoon.App.openURL( gamefrootUrl )
			}
		} else {
			window.open( gamefrootUrl );
		}

	}

};

/**
*
* @method checkAssetLoadingProgress
* @private 
*/
Kiwifroot.States.Launch.prototype.checkAssetLoadingProgress = function() {
	if(this.assetLoadingComplete && ( this.game.info.skipLaunch || !this.tween.isRunning ) ) {

		if( this.game.info.loadLevelJsonAtStart ) {

			var levels = this.game.info.levels;

	    	for (var i = 0; i < levels.length; i++) {
	    		
	    		var level = levels[ i ],
	    			file = this.game.fileStore.getFile( ('level-' + level.id) );

	    		if( !file ) continue;

				try {
					var extract = JSON.parse( file.data );
				} catch(e) {
					this.game.log.error( 'Error parsing level json. Check json for malformation.' );
					continue;
				}

				if( extract ) {
					level.keep = true;
					level.assignData( extract );
				}
			}

	    }

		if( !this.game.info.skipLaunch && this.tween ) {
			this.tween.onComplete( this.checkAssetStatus, this );
			this.tween.delay( 1000 );
			this.tween.to( { alpha: 0 }, 750, Kiwi.Animations.Tweens.Easing.Cubic.In, true );
		} else {
			this.checkAssetStatus();
		}


	}
};

/**
* 
* @method checkAssetStatus
* @public
*/
Kiwifroot.States.Launch.prototype.checkAssetStatus = function() {

	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0) {
    	
    	this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_RELOAD );
		this.game.loader.onQueueComplete.addOnce( this.finalAssetCheck, this );
		
	    //Loop through the files and load them in...
	    this.game.log.log( assets.length + ' need to be reloaded.' );
	    for(var i = 0; i < assets.length; i++) {
	    	this.game.asset.load( assets[ i ], true );
	    }

	    //Start the load
	    this.game.loader.startLoad();
	} else {
		this.loadFirstLevel();
	}

}

/**
* 
* @method finalAssetCheck
* @public
*/
Kiwifroot.States.Launch.prototype.finalAssetCheck = function() {
	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0) {
    	this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_FAILED );
		this.game.reportError( assets.length + " assets failed to load.", 'Asset #' + assets[0].id + ' failed to load... Runtime halted', 'LAUNCH' );
	} else {
		this.loadFirstLevel();
	}
}


/**
* Contains the events you can listen to via the 'onExecute' property
* @property EVENTS
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.States.Launch.EVENTS = {
	'PRELOAD': 'preload',
	'CREATE': 'create',
	'ERROR': 'error',
	'PLUGINS_BOOTED': 'plugins-booted',
	'GLOBAL_ASSETS_LOAD': 'load-global-assets',
	'GLOBAL_ASSETS_RELOAD': 'load-global-assets-again',
	'GLOBAL_ASSETS_FAILED': 'load-global-assets-failed',
	'GLOBAL_ASSETS_COMPLETE': 'load-global-assets-complete'
};


/**
* 
* @module Kiwifroot
*
*/

/**
* The representation of a level in Gamefroot. 
* This state is used for all menus, game-levels, complete screen, on so on in gamefroot.
*
* 
* @namespace Kiwifroot.State
* @class Level
* @extends Kiwi.State
* @constructor
* 
*/
Kiwifroot.States.Level = function() {

	Kiwi.State.call( this, Kiwifroot.States.Level.NAME );

	/**
	*
	* @property onExecute
	* @type Kiwi.Signal
	* @public
	*/
	this.onExecute = new Kiwi.Signal();

};

/**
* 
* @property NAME
* @static
* @type String
* @default 'Level'
* @public
*/
Kiwifroot.States.Level.NAME = 'Level';

Kiwi.extend( Kiwifroot.States.Level, Kiwi.State );

/**
* 
* @method getAllChildrenByName
* @param name {String}
* @return {Array}
*/
Kiwifroot.States.Level.prototype.getAllChildrenByName = function(name) {

	var children = [];

	for (var i = 0; i < this.members.length; i++) {

		if (this.members[i].name === name) {
			children.push( this.members[i] );
		}
		
		if(this.members[i].objType() == "Group") {
			children = children.concat( this.members[i].getAllChildrenByName( name ) );
		}

	}

	return children;

};

/**
* 
* @method getLastChildByName
* @param name {String}
* @return {Kiwi.IChild}
*/
Kiwifroot.States.Level.prototype.getLastChildByName = function(name) {

	for (var i = this.members.length - 1; i >= 0; i--) {

		if (this.members[i].name === name) {
			return this.members[i];
		}
		
		if(this.members[i].objType() == "Group") {
			var child = this.members[i].getLastChildByName( name );

			if( child ) {
				return child;
			}
		}

	}

	return null;

};

/**
* 
* @method getRandomChildByName
* @param name {String}
* @return {Kiwi.IChild}
*/
Kiwifroot.States.Level.prototype.getRandomChildByName = function(name) {

	var children = this.getAllChildrenByName( name );

	if( children.length ) {
		return children[ this.game.rnd.integerInRange( 0, children.length - 1 ) ];
	}

	return null;

};

/**
*
* @method preload
* @public
*/
Kiwifroot.States.Level.prototype.preload = function() {

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.PRELOAD );

};

/**
*
* @method create
* @public
*/
Kiwifroot.States.Level.prototype.create = function() {

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.CREATE );

	this.game.log.log('Level is being created.');

	/**
	* Storage location for level variables used in the Blockly Script Editor.
	* @property LEVEL_VARIABLES
	* @type Object
	* @public
	*/
	this.LEVEL_VARIABLES = {};

	/**
	* Whether the whole level should be 'paused' and so not running or not.
	* Enabled each time the level is created to help reduce time lag when a level starts.
	*
	* @property _paused
	* @type Boolean
	* @default true
	* @private
	*/
	this._paused = true;

	/**
	* 
	* @property _unpauseWhenStable
	* @type Boolean
	* @default true
	* @private
	*/
	this._unpauseWhenStable = true;

	this.applyFocusEvents();

	/**
	* If the clock was paused before hand
	* @property _clockPrePaused
	* @type Boolean
	* @default false
	* @private
	*/
	this._clockPrePaused = false;

	/**
	* 
	* @property input
	* @type Kiwifroot.Input.Handler
	* @public
	*/
	this.input = new Kiwifroot.Input.Handler( this );

	/**
	*
	* @property objects
	* @type Kiwifroot.Object.Manager
	* @public
	*/
	this.objects = new Kiwifroot.Object.Manager( this );

	/**
	*
	* @property camera
	* @type Kiwifroot.Camera
	* @public
	*/
	this.camera = this.components.add( new Kiwifroot.Camera( this ) );

	/**
	*
	* @property sounds
	* @type Kiwifroot.Sound.Manager
	* @public
	*/
	this.sounds = this.components.add( new Kiwifroot.Sound.Manager( this ) );

	/**
	* 
	* @property updateSystem
	* @type Kiwifroot.UpdateSystem
	* @public
	*/
	this.updateSystem =  this.components.add( new Kiwifroot.UpdateSystem( this ) );

	/**
	* 
	* @property robots
	* @type Kiwifroot.RobotSystem
	* @deprecated
	* @public
	*/
	this.robots = this.updateSystem;
	
	/**
	* 
	* @property system
	* @type Kiwifroot.System.Manager
	* @public
	*/
	this.system = new Kiwifroot.System.Manager( this );

	this.start();

};

/**
* Pauses and resumes the whole level.
* @property paused
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.States.Level.prototype, "paused", {
	get: function() {
		return this._paused;
	},

	set: function( val ) {


		if( val ) {

			//Only apply if we are not already paused
			if( !this._paused ) {
				this._clockPrePaused = this.game.time.clock.isPaused();
			}

			this._paused = true;
			this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.PAUSED );
			
			this.game.time.clock.pause();

		} else {

			this._unpauseWhenStable = true;
			this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.UN_PAUSED );

		}
		
	}
});

/**
* 
* @method applyDefaults
* @public
*/
Kiwifroot.States.Level.prototype.applyDefaults = function( defaultData ) {

	//Assign Background Color
	var color = defaultData.color || {};

	if( color.a ) {
		color.a = Math.floor(color.a * 255)
	} else {
		color.a = 255;
	}

	if( typeof color.r == "undefined" ) color.r = 255;
	if( typeof color.g == "undefined" ) color.g = 255;
	if( typeof color.b == "undefined" ) color.b = 255;

	this.game.stage.rgbaColor = {
		r: color.r,
		g: color.g,
		b: color.b,
		a: color.a
	};

	this.sounds.keepMusicOnDestroy = defaultData.keepMusicDuringSwitch;

	//Background Color
	if( defaultData.music ) {
		this.sounds.playBackgroundTrack( defaultData.music );
	}

	//Camera
	this.camera.applyDefaults( defaultData.camera );

};


/**
*
* @method start
* @public
*/
Kiwifroot.States.Level.prototype.start = function() {
	
	this.applyDefaults( this.game.info.currentLevel.data );

	//Create a list of avaliable object types 
	for( var i = 0; i < this.game.info.currentLevel.data.definitions.length; i++ ) {
		this.objects.createDefinition( this.game.info.currentLevel.data.definitions[ i ] );
	}
	
	var gameobjects = this.objects.createFromArray( this.game.info.currentLevel.data.gameObjects, this, true, false );

	this.bootComponents( gameobjects );
	
	this.system.start();

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.START );
};

Kiwifroot.States.Level.prototype.bootComponents = function( array ) {

	var i = array.length;

	while( i-- ) {
		if( array[ i ] ) {
			if( Kiwi.Utils.Common.isArray( array[ i ] ) ) {
				this.bootComponents( array[ i ] );
			} else {	
				this.objects.component.bootComponentsOnGameObjectPassed( array[ i ] );
			}
		}
	}

};

Kiwifroot.States.Level.prototype.preUpdate = function() {

	
	if( !this.paused ) {
		Kiwi.State.prototype.preUpdate.call( this );
	} 

};

Kiwifroot.States.Level.prototype.update = function() {
	
	if( !this.paused ) {
		Kiwi.State.prototype.update.call( this );
	}

};

Kiwifroot.States.Level.prototype.postUpdate = function() {
	
	if( !this.paused ) {
		Kiwi.State.prototype.postUpdate.call( this );
	}

	if( this._unpauseWhenStable && this._paused ) {

		if( this.game.fpsReadout.stable ) {
			this._paused = false;
			this._unpauseWhenStable = false;

			if( !this._clockPrePaused ) {		
				this.game.time.clock.resume();
			}
		}

	}

};



/**
*
* @method shutDown
* @public
*/
Kiwifroot.States.Level.prototype.shutDown = function() {

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.SHUT_DOWN );

	this.removeFocusEvents();

	//Destroy all of the gameobjects!!
	this.destroy( true );


	//Remove all of the components. 
	//Clear it up for the next level.
	this.components.removeAll();

	this.system.destroy();
	delete this.system;

	//this.sounds.destroy();
	delete this.sounds;

	//this.camera.destroy();
	delete this.camera;

	delete this.updateSystem;
	delete this.robots;

	this.objects.destroy();
	delete this.objects;

	this.input.destroy();
	delete this.input;

	//Delete the assets for this level...
	this.game.asset.removeAllByTag( Kiwifroot.Asset.TAG.LEVEL );

};


Kiwifroot.States.Level.prototype.pauseCheck = function() {
	this.paused = !this.game.stage.visibility;
};


Kiwifroot.States.Level.prototype.applyFocusEvents = function() {

	this.game.stage.onFocus.add( this.pauseCheck, this);
	this.game.stage.onBlur.add( this.pauseCheck, this);
	this.game.stage.onVisibilityChange.add( this.pauseCheck, this);

};


Kiwifroot.States.Level.prototype.removeFocusEvents = function() {

	this.game.stage.onFocus.remove( this.pauseCheck, this);
	this.game.stage.onBlur.remove( this.pauseCheck, this);
	this.game.stage.onVisibilityChange.remove( this.pauseCheck, this);
};


/**
* Contains the events you can listen to via the 'onExecute' property
* @property EVENTS
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.States.Level.EVENTS = {
	'PRELOAD': 'preload',
	'CREATE': 'create',
	'START': 'start',
	'SHUT_DOWN': 'shut-down',
	'PAUSED': 'paused',
	'UN_PAUSED': 'unpaused'
};

/**
* 
* @module Kiwifroot
*
*/

/**
* Handles the loading of assets for a singular level in gamefroot.
*
* 
* @namespace Kiwifroot.State
* @class Preloader
* @extends Kiwi.State
* @constructor
* 
*/
Kiwifroot.States.Preloader = function() {

	Kiwi.State.call( this, Kiwifroot.States.Preloader.NAME );

	/**
	* Dispatches events during the loading phase of a level. 
	* 
	* @property onExecute
	* @type Kiwi.Signal
	* @public
	*/
	this.onExecute = new Kiwi.Signal();

};


/**
* 
* @property NAME
* @type String
* @default 'Preloader'
* @static
* @public
*/
Kiwifroot.States.Preloader.NAME = 'Preloader';

Kiwi.extend( Kiwifroot.States.Preloader, Kiwi.State );


/**
* 
* @method preload
* @public
*/
Kiwifroot.States.Preloader.prototype.preload = function(){

	var cl = this.game.info.currentLevel;
	
	if( !cl ) {
		return;
	}

	//Look at 'currentLevel' and load in the json if it has no data.
	if( !cl.hasData ) {

		this.game.log.log( 'Loading in level data.' );
		this.addJSON( 'level-' + cl.id, this.game.asset.getUrl( cl.url ), false );

	} 

	//If it exists, do not load anything.
    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.PRELOAD );

};


/**
*
* @method create
* @public
*/
Kiwifroot.States.Preloader.prototype.create = function() {

    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.CREATE );

	var cl = this.game.info.currentLevel;

	if( !cl ) {
		this.game.reportError( 'Opps, well this is embarrassing. No current level found.', "An error has occured... Could not locate the level...", "RUNTIME" );
		return;
	}

	//Then check the file store.
	if( this.data[ 'level-' + cl.id ] ) {

		try {
			var extract = JSON.parse( this.data[ 'level-' + cl.id ].data );
		} catch(e) {
			this.game.log.error( 'Error parsing level json. Check json for malformation.' );
		}

		if( extract ) {
			cl.assignData( extract );
		}

	}


	//Check to see if the level now has data.
	if( !cl.hasData ) {
		this.game.reportError( 'The current level does not have any data. Cannot progress.', "The current level contains no data...", "RUNTIME" );
		return;
	}


	//Read the data from 'currentLevel' and see if there are any assets to be loaded.
	if( cl.data.assets.length <= 0 ) {
		this.game.log.log( 'Current level doesn\'t have any assets to load. Skipping asset loading.' );
		this.progressToLevel();
		return;
	}


	this.showUserLoadScreen();

	this._loadLevelAssets();

};


/**
*
* @method showUserLoadScreen
* @public
*/
Kiwifroot.States.Preloader.prototype.showUserLoadScreen = function() {

	/**
	*
	* @property objects
	* @type Kiwifroot.Object.Manager
	* @public
	*/
	this.objects = new Kiwifroot.Object.Manager( this );

	/**
	*
	* @property sounds
	* @type Kiwifroot.Sound.Manager
	* @public
	*/
	this.sounds = this.components.add( new Kiwifroot.Sound.Manager( this ) );


	this.applyDefaults( this.game.info.currentLevel.data.loader );


	for( var i = 0; i < this.game.info.currentLevel.data.loader.definitions.length; i++ ) {
		this.objects.createDefinition( this.game.info.currentLevel.data.loader.definitions[ i ] );
	}
	this.objects.createFromArray( this.game.info.currentLevel.data.loader.gameObjects, this, true );

	if( this.game.info.currentLevel.data.loader.bar.addToTop ) {
		this.addChild( this.loadingBar );
	}

};

/**
* 
* @method applyDefaults
* @public
*/
Kiwifroot.States.Preloader.prototype.applyDefaults = function( defaultData ) {

	//Assign Background Color
	var color = defaultData.color || {};

	if( color.a ) {
		color.a = Math.floor(color.a * 255)
	} else {
		color.a = 255;
	}

	if( typeof color.r == "undefined" ) color.r = 0;
	if( typeof color.g == "undefined" ) color.g = 0;
	if( typeof color.b == "undefined" ) color.b = 0;

	this.game.stage.rgbaColor = {
		r: color.r,
		g: color.g,
		b: color.b,
		a: color.a
	};

	this.sounds.keepMusicOnDestroy = defaultData.keepMusicDuringSwitch;

	//Background Color
	if( defaultData.music ) {
		this.sounds.playBackgroundTrack( defaultData.music );
	}


	//Loading bar
	this.loadingBar = new Kiwi.GameObjects.Sprite( this, this.textures.kiwifrootTextureAtlas, 0, 0 );
	this.loadingBar.cellIndex = 1;
	this.loadingBar.scaleX = 0;
	this.loadingBar.anchorPointX = 0;
	this.addChild( this.loadingBar );

	//Options
	if( typeof defaultData.bar.y !== "undefined" ) {
		this.loadingBar.y = defaultData.bar.y; 
	} else {
		this.loadingBar.y = (this.game.stage.height - this.loadingBar.height);
	}
	this.loadingBar.visible = defaultData.bar.visible;

	if( defaultData.bar.tags.length > 0 ) {
		this.loadingBar.addTag.apply( this.loadingBar, defaultData.bar.tags );
	}

	this.tween = this.game.tweens.create( this.loadingBar );
};

/**
*
* @method _loadLevelAssets
* @public
*/
Kiwifroot.States.Preloader.prototype._loadLevelAssets = function() {

    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_LOAD );

	var cl = this.game.info.currentLevel;
	
	this.game.log.log( 'Starting to load level assets.' );
	this.assetsLoaded = false;


	//Add Loading Events
    this.game.loader.onQueueProgress.add( this._loadProgress, this );
	this.game.loader.onQueueComplete.addOnce( this.assetLoadComplete, this );


    //Loop through the files and load them in...
    this.game.log.log( cl.data.assets.length + ' assets to be loaded.' );
    for( var i = 0; i < cl.data.assets.length; i++ ) {
    	this.game.asset.load( cl.data.assets[ i ] );
    }

    //Start the load
    this.game.loader.startLoad();

};


/**
* 
* @method _loadProgress
* @param percent {Number}
* @param bytes {Number}
* @param file {Kiwi.Files.File}
* @private
*/ 
Kiwifroot.States.Preloader.prototype._loadProgress = function(percent, bytes, file) {

	this.game.log.log( 'Level asset load percentage: ' + percent );
	var scale = ( this.game.stage.width * ( percent / 100 ) ) / this.loadingBar.width;

	this.tween.onComplete( this.checkProgress, this );
	this.tween.delay( 50 );
	this.tween.to( { scaleX: scale }, 250, Kiwi.Animations.Tweens.Easing.Cubic.Out, true );

};


/**
*
* @method assetloadComplete
* @public
*/
Kiwifroot.States.Preloader.prototype.assetLoadComplete = function() {

    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_COMPLETE );

	//Wait for the tween to complete first 
	this.assetsLoaded = true;
    this.game.log.log( 'Level assets have finished loading.' );
	this.game.loader.onQueueProgress.remove( this._loadProgress, this );

	this.checkProgress();

};



/**
* 
* @method checkProgress
* @public
*/
Kiwifroot.States.Preloader.prototype.checkProgress = function() {
	
	if( !this.tween.isRunning && this.assetsLoaded )  {
		this.game.time.clock.setTimeout( function() {

			this.checkAssetStatus();

		}, 250, this);
	}

};


/**
* Checks to see if all of the assets have loaded or not. 
* If any assets have not loaded, then those assets are attempted to load again.
* 
* @method checkAssetStatus
* @public
*/
Kiwifroot.States.Preloader.prototype.checkAssetStatus = function() {

	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0 ) {

    	this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_RELOAD );
		this.game.log.log( assets.length  + ' asset failed to load. Attempting to reload.');

		//Add Loading Events
		this.game.loader.onQueueComplete.addOnce( this.finalAssetCheck, this );

	    //Loop through the files and load them in...
	    for( var i = 0; i < assets.length; i++ ) {
	    	this.game.asset.load( assets[ i ] );
	    }

	    //Start the load
	    this.game.loader.startLoad();

	} else {
		this.progressToLevel();
	}

}

Kiwifroot.States.Preloader.prototype.finalAssetCheck = function() {
	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0 ) {
		//Report error
    	this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_FAILED );
		this.game.reportError( assets.length + " assets failed to load.", 'Asset #' + assets[0].id + ' failed to load... Runtime halted', "RUNTIME" );
	
	} else {
		this.game.log.log( 'All assets were successfully loaded the second time.' );
		this.progressToLevel();
	
	}
}


/**
*
* @method progressToLevel
* @public
*/
Kiwifroot.States.Preloader.prototype.progressToLevel = function() {

	//Go to 'game complete screen.'
	this.game.log.log( 'Switching to the Level State.' );
	this.game.states.switchState( Kiwifroot.States.Level.NAME );

};


/**
*
* @method shutDown
* @public
*/
Kiwifroot.States.Preloader.prototype.shutDown = function() {
	
    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.SHUT_DOWN );
	this.components.removeAll();
	
	delete this.sounds;
	delete this.loadingBar;

	this.tween && this.tween.stop();
	delete this.tween;

	this.objects && this.objects.destroy();
	delete this.objects;

};


/**
* Contains the events you can listen to via the 'onExecute' property
* @property EVENTS
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.States.Preloader.EVENTS = {
	'PRELOAD': 'preload',
	'CREATE': 'create',
	'ERROR': 'error',
	'ASSETS_LOAD': 'load-assets',
	'ASSETS_RELOAD': 'load-assets-again',
	'ASSETS_FAILED': 'load-assets-failed',
	'ASSETS_COMPLETE': 'load-assets-complete',
	'SHUT_DOWN': 'shut-down'
};
/**
* 
* @module System
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.System.Core
* @class Camera
* @static
* 
*/
Kiwifroot.System.Core.Camera = {

	/**
	* 
	* @property type
	* @type String
	* @default 'system'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.SYSTEM,

	/**
	* 
	* @property system
	* @type Object
	* @default Kiwifroot.Components.Camera.System
	* @static
	* @readOnly
	* @public
	*/
	System: Kiwifroot.Components.Camera.System

};	
/**
* 
* @module System
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.System.Core
* @class ArcadePhysics
* @static
* 
*/
Kiwifroot.System.Core.ArcadePhysics = {

	/**
	* 
	* @property type
	* @type String
	* @default 'system'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.SYSTEM,

	/**
	* 
	* @property system
	* @type Object
	* @default Kiwifroot.Physics.ArcadeSystem
	* @static
	* @readOnly
	* @public
	*/
	System: Kiwifroot.Physics.ArcadeSystem

};	

/**
* 
* 
* @module Kiwifroot
* @submodule System
*
*/

/**
*
* 
* @namespace Kiwifroot.System
* @class Manager
* @constructor
* @param state {Kiwifroot.State}
* 
*/
Kiwifroot.System.Manager = function( state ) {

	/**
	*
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	//Create the defaults
	var c; 
	for( var index in Kiwifroot.System.Core ) {
		c = Kiwifroot.System.Core[ index ];

		if( c.System ) {
			this.add( c.System );
		}
	}


	//Create the plugins 
	this.addSystems();


};

/**
*
* @method add
* @param config {Object}
* @private
*/
Kiwifroot.System.Manager.prototype.add = function( config ) {

	//Was anything passed
	if( !config ) {
		this.game.log.error('No system config passed.');
		return false;
	}

	var comp = new config( this.state );

	if( this.state.components.hasComponent( comp.name ) ) {
		this.game.log.error("A system with the name of '" + config.name + "' already exists.");
		comp.destroy();
		return false;
	}

	//If the system has a 'configure' method
	if( comp.configure) {
		
		//Is there any parameters on the currentLevel?
		if( this.game.info.currentLevel.data.systems[ comp.name ] ) {
			this.game.log.log("System '"+comp.name+"' setting parameters.");
			comp.configure( this.game.info.currentLevel.data.systems[ comp.name ] );
		} 

	} else {
		this.game.log.log("System '"+comp.name+"' does not contain a 'configure' method.");

	}

	//Get the component 
	this.state.components.add( comp );
};


/**
*
* @method addSystems
* @private
*/
Kiwifroot.System.Manager.prototype.addSystems = function() {

	//Get the plugins
	var plugin, i, j, kfp;

	for( i = 0; i < this.game.pluginManager._plugins.length; i++ ) {

		plugin = Kiwi.Plugins[ this.game.pluginManager._plugins[ i ] ];

		//Does it exist
		if( !plugin ) {
			this.game.log.warn( "Nothing found on 'Kiwi.Plugins." + this.game.pluginManager._plugins[ i ] + "' namespace." );
			continue;
		}  

		//Is it a system?
		if( !plugin.kiwifrootPlugins || !Kiwi.Utils.Common.isArray( plugin.kiwifrootPlugins ) ) {
			//Skip to the next plugin...
			continue;
		}

		for( j = 0; j < plugin.kiwifrootPlugins.length; j++ ) {

			kfp = plugin.kiwifrootPlugins[ j ];

			if( kfp.type !== Kiwifroot.Plugins.SYSTEM ) {
				continue;
			}

			if( !kfp.system ) {
				this.game.log.warn( "'" + plugin.name + "' is missing a 'system' property." );
				continue;
			}

			this.add( kfp.system );

		}

	}

};


/**
* 
* @method start
* @public
*/
Kiwifroot.System.Manager.prototype.start = function() {

	this.game.log.log( 'Systems are starting up.' );

	var component; 

    for (var name in this.state.components._components) {

    	var component = this.state.components._components[name];

        if ( component.start ) {
            component.start();
        }

        //Check if they were configured also
        if( component.launch && this.game.info.currentLevel.data.systems[ name ] ) {
        	component.launch();
        }


    }

};


/**
* 
* @method destroy
* @public
*/
Kiwifroot.System.Manager.prototype.destroy = function() {

	delete this.state;
	delete this.game;

};