/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Kiwifroot javascript for all camera functions
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.camera');

goog.require('Blockly.Kiwifroot');

(function() {

	var comp  = 'this.camera';

	var addCameraToConstructor = function() {

		var constructorCode = 'this.camera = this.state.components.getComponent( "Camera" );\n\n';
		constructorCode    += '\tif( !this.camera ) {\n';
		constructorCode    += '\t\tKiwi.Log.error("Camera component not found on the state. Camera blocks will not work.", "#camera");\n'
		constructorCode    += '\t}\n';

		Blockly.Kiwifroot.provideAdditionOnce('cameraConstructor', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);

	};

	Blockly.Kiwifroot['kiwi_camera_go_to'] = function(block) {
		addCameraToConstructor();

	  	var dropdown_method = block.getFieldValue('METHOD');
	  	var value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
	  	var value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
	  	// TODO: Assemble JavaScript into code variable.

	  	return comp + '.' + dropdown_method + '(' + value_x_pos + ',' + value_y_pos + ');\n';
	};


	Blockly.Kiwifroot['kiwi_camera_set'] = function(block) {
		addCameraToConstructor();

	  	var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
	  	var dropdown_method = block.getFieldValue('METHOD');
	  	return comp + '.' + dropdown_method + ' = ' + value_value + ';\n';
	};

	Blockly.Kiwifroot['kiwi_camera_get'] = function(block) {
		addCameraToConstructor();

	  	var dropdown_method = block.getFieldValue('METHOD');
	  	var code = comp + '.' + dropdown_method;
	  	
	  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

	Blockly.Kiwifroot['kiwi_camera_lock_on'] = function(block) {
		addCameraToConstructor();

	  	var value_instance = Blockly.JavaScript.valueToCode(block, 'INSTANCE', Blockly.JavaScript.ORDER_ATOMIC);
	  	var code = comp + '.lockOn = ' + value_instance + '.transform;\n';
	  	return code;
	};

	Blockly.Kiwifroot['kiwi_camera_unlock'] = function(block) {
		addCameraToConstructor();

	  	var code = comp + '.lockOn = null;\n';
	  	return code;
	};

	Blockly.Kiwifroot['kiwi_camera_state'] = function(block) {

		addCameraToConstructor();

	  	var dropdown_type = block.getFieldValue('TYPE');
	  	var code = comp + '.' + dropdown_type;
	  	
	  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

})();