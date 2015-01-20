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
 * @fileoverview Generating Kiwifroot Javascript for transforms of the game object.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.transforms');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_transform_set_position'] = function(block) {
	var axis = block.getFieldValue('AXIS');
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 'null'; // TODO what order is this?
	var pos = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT);
	return inst + '.transform.'+axis+' = '+pos+';\n';
};

Blockly.Kiwifroot['kiwi_transform_get_position'] = function(block) {
	var axis = block.getFieldValue('AXIS');
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 'null'; // TODO what order is this?
	var code = inst + '.transform.'+axis+';\n';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};