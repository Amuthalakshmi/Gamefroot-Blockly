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
	var funcName = defineFunctionFromBranch('onCreate', block);
	var constructorCode = 'this.'+funcName + '();';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_constantly'] = function(block){
	var funcName = defineFunctionFromBranch('onUpdate', block);
	var constructorCode = 'this.state.robots.onUpdate.add(this.'+funcName + ', this);';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_stage_press'] = function(block) {
	var funcName = defineFunctionFromBranch('onStagePress', block);
	var constructorCode = 'this.game.input.onDown.add(this.'+funcName+', this, 25);';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_stage_release'] = function(block) {
	var funcName = defineFunctionFromBranch('onStageRelease', block);
	var constructorCode = 'this.game.input.onUp.add(this.'+funcName+', this, 25);';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_key_press'] = function(block) {
	var t = Blockly.Kiwifroot.INDENT;
	var funcName = Blockly.Kiwifroot.provideFunction_(
		'onKeyPressed',
		[ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(keyCode) {',
        t + 'switch (keyCode) {',
        '{{'+t+t+',EVENT_KEY_PRESSED,\n}}',
        t + '}',
        '}']);
	// Generate the new function
	var keyCode = Blockly.Kiwifroot.valueToCode(block, 'KEY', Blockly.Kiwifroot.ORDER_ASSIGNMENT)
	var constructorCode = 'this.game.input.keyboard.onKeyDownOnce.add(this.' + funcName + ', this);';
	Blockly.Kiwifroot.provideAdditionOnce('EventKeyPressed', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	var funcName = defineFunctionFromBranch('onKeyPressed', block);
	// Generate the code for the switch statement and add it
	var code = 'case '+keyCode+': this.'+funcName+'(); break;';
	Blockly.Kiwifroot.provideAddition('EVENT_KEY_PRESSED', code);
	return null;
};

Blockly.Kiwifroot['kiwi_event_key_release'] = function(block) {
	var t = Blockly.Kiwifroot.INDENT;
	var funcName = Blockly.Kiwifroot.provideFunction_(
		'onKeyReleased',
		[ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(keyCode) {',
        t + 'switch (keyCode) {',
        '{{'+t+t+',EVENT_KEY_RELEASED,\n}}',
        t + '}',
        '}']);
	// Generate the code for the new function
	var keyCode = Blockly.Kiwifroot.valueToCode(block, 'KEY', Blockly.Kiwifroot.ORDER_ASSIGNMENT)
	var constructorCode = 'this.game.input.keyboard.onKeyUp.add(this.' + funcName + ', this);';
	Blockly.Kiwifroot.provideAdditionOnce('EventKeyReleased', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	var funcName = defineFunctionFromBranch('onKeyReleased', block);
	// Generate the code for the switch
	var code = 'case '+keyCode+': this.'+funcName+'(); break;';
	Blockly.Kiwifroot.provideAddition('EVENT_KEY_RELEASED', code);
	return null;
};


function defineFunctionFromBranch(desiredName, block){
	// Define a procedure with a return value.
	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName(desiredName, Blockly.Procedures.NAME_TYPE);
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
	var code = funcName + ' = function() {\n' + branch + '}';
	code = Blockly.Kiwifroot.scrub_(block, code);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DEFINITIONS,code)
	return funcName;
};