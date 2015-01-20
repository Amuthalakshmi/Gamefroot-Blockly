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
 * @fileoverview Generating Kiwifroot Javascript that resolves instance tokens
 * @author rani_sputnik@hotmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.instances');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['kiwi_instance_self'] = function(block) {
	var code = 'this.owner'; // TODO we may want to change this to self if there are any async functions
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_set'] = function(block) {
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
	var prop = block.getFieldValue('PROP');
	var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT);
	return inst + '.'+prop+' = '+val+';\n';
};

Blockly.Kiwifroot['kiwi_instance_get'] = function(block) {
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
	var prop = block.getFieldValue('PROP');
	var code = inst + '.' + prop;
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};