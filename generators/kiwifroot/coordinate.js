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
 * @fileoverview Coordinate blocks for Gamefroot
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.coordinate');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['kiwi_coordinate_create'] = function(block) {

	var value_x = Blockly.Kiwifroot.valueToCode( block, 'X', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var value_y = Blockly.Kiwifroot.valueToCode( block, 'Y', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

	var code  = '{ x: ' + value_x + ', y: ' + value_y + ' }';
  	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_coordinate_get'] = function(block) {

	var value_prop = block.getFieldValue('PROP');
	var value_loc = Blockly.Kiwifroot.valueToCode( block, 'COORDINATE', Blockly.Kiwifroot.ORDER_ATOMIC ) || '{x:0,y:0}';

	//wrap in a function
	//MISSING ERROR CHECK: errorCheck( ('!' + value_class)

	var code = value_loc + '.' + value_prop + '';
  	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_coordinate_set'] = function(block) {

	var value_prop = block.getFieldValue('PROP');
	var value_loc = Blockly.Kiwifroot.valueToCode( block, 'COORDINATE', Blockly.Kiwifroot.ORDER_ATOMIC );
	var value_value = Blockly.Kiwifroot.valueToCode( block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;


	var code = errorCheck( ('!' + value_loc), "`Set Coordinate` block failed due to a missing value." );
	code = value_loc + '.' + value_prop + ' = ' + value_value + ';\n';
  	
	return code;
};
