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
 * @fileoverview Generating Kiwifroot Kiwifroot for event blocks.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.events');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_event_create'] = function(block) {
	// Define a procedure with a return value.
	var funcName = Blockly.Kiwifroot.variableDB_.getName('onCreate', Blockly.Procedures.NAME_TYPE);
	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
	if (Blockly.Kiwifroot.STATEMENT_PREFIX) {
		branch = Blockly.Kiwifroot.prefixLines(
			Blockly.Kiwifroot.STATEMENT_PREFIX.replace(/%1/g,
			'\'' + block.id + '\''), Blockly.Kiwifroot.INDENT) + branch;
	}
	if (Blockly.Kiwifroot.INFINITE_LOOP_TRAP) {
		branch = Blockly.Kiwifroot.INFINITE_LOOP_TRAP.replace(/%1/g,
			'\'' + block.id + '\'') + branch;
	}
	var code = 'function ' + funcName + '() {\n' + branch + '}';
	code = Blockly.Kiwifroot.scrub_(block, code);
	Blockly.Kiwifroot.definitions_[funcName] = code;
	var callCode = funcName + '();\n';
	Blockly.Kiwifroot.constructorAdditions_.push(callCode);
	return null;
};
