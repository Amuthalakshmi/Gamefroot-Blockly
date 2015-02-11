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
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.events');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['kiwi_event_create'] = function(block) {
	var funcName = defineFunctionFromBranch('onCreate', block);
	var constructorCode = '//Attach an special onSpawn call.\n' + 
		'\t//This is to make sure all the components are loaded/attached before executing any code.\n' +
		'\tthis.state.robots.onPreUpdate.addOnce( this.' + funcName + ', this);';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	return null;
};


Blockly.Kiwifroot['kiwi_event_remove'] = function(block) {
	var funcName = defineFunctionFromBranch('onRemove', block);

	var destructorCode = 'this.'+funcName + '();';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

	return null;
};

Blockly.Kiwifroot['kiwi_event_constantly'] = function(block){
	var funcName = defineFunctionFromBranch('onUpdate', block);
	var constructorCode = 'this.state.robots.onUpdate.add(this.'+funcName + ', this);';
	var destructorCode = 'this.state.robots.onUpdate.remove(this.'+funcName+ ', this);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_stage_press'] = function(block) {
	var funcName = defineFunctionFromBranch('onStagePress', block);
	var constructorCode = 'this.game.input.onDown.add(this.'+funcName+', this, 25);';
	var destructorCode = 'this.game.input.onDown.remove(this.'+funcName+', this, 25);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_stage_release'] = function(block) {
	var funcName = defineFunctionFromBranch('onStageRelease', block);
	var constructorCode = 'this.game.input.onUp.add(this.'+funcName+', this, 25);';
	var destructorCode = 'this.game.input.onUp.remove(this.'+funcName+', this, 25);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_inst_press'] = function(block) {
	// Create an onPressed function with the onPressed section
	var t = Blockly.Kiwifroot.INDENT;
	var SECTION_EVENT_PRESSED = 'EVENT_PRESSED';
	var funcName = Blockly.Kiwifroot.provideFunction_(
		'onInstancePressed',
		[ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(x,y) {',
        '{{,'+SECTION_EVENT_PRESSED+',\n}}',
        '};']);
	// Add the add/remove listeners in the constructor/desctructor
	var constructorCode = 'this.game.input.onDown.add(this.'+funcName+', this, 50);';
	var destructorCode = 'this.game.input.onDown.remove(this.'+funcName+', this);';
	Blockly.Kiwifroot.provideAdditionOnce('EventPressed',Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAdditionOnce('EventPressed',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	// Add the code into the onPressed function
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
  	var code = 'if ('+inst+'.box.worldHitbox.contains(x,y)) {\n' + branch + '}';	
  	code = Blockly.Kiwifroot.prefixLines(code, Blockly.Kiwifroot.INDENT);
	Blockly.Kiwifroot.provideAddition(SECTION_EVENT_PRESSED,code);
	return null;
};

Blockly.Kiwifroot['kiwi_event_inst_release'] = function(block) {
	// Create an onPressed function with the onPressed section
	var t = Blockly.Kiwifroot.INDENT;
	var SECTION_EVENT_RELEASED = 'EVENT_RELEASED';
	var funcName = Blockly.Kiwifroot.provideFunction_(
		'onInstanceReleased',
		[ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(x,y) {',
        '{{,'+SECTION_EVENT_RELEASED+',\n}}',
        '};']);
	// Add the add/remove listeners in the constructor/desctructor
	var constructorCode = 'this.game.input.onUp.add(this.'+funcName+', this, 50);';
	var destructorCode = 'this.game.input.onUp.remove(this.'+funcName+', this);';
	Blockly.Kiwifroot.provideAdditionOnce('EventReleased',Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAdditionOnce('EventReleased',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	// Add the code into the onPressed function
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
  	var code = 'if ('+inst+'.box.worldHitbox.contains(x,y)) {\n' + branch + '}';	
  	code = Blockly.Kiwifroot.prefixLines(code, Blockly.Kiwifroot.INDENT);
	Blockly.Kiwifroot.provideAddition(SECTION_EVENT_RELEASED,code);
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
        '};']);
	// Add the remove function
	var destructorCode = 'this.game.input.keyboard.onKeyDownOnce.remove(this.' + funcName + ', this);';
	Blockly.Kiwifroot.provideAdditionOnce('removeOnKeyPressed',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

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
        '};']);
	// Add the remove function
	var destructorCode = 'this.game.input.keyboard.onKeyUp.remove(this.' + funcName + ', this);';
	Blockly.Kiwifroot.provideAdditionOnce('removeOnKeyReleased',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

	// Generate the code for the new function
	var keyCode = Blockly.Kiwifroot.valueToCode(block, 'KEY', Blockly.Kiwifroot.ORDER_ASSIGNMENT);
	var constructorCode = 'this.game.input.keyboard.onKeyUp.add(this.' + funcName + ', this);';

	Blockly.Kiwifroot.provideAdditionOnce('EventKeyReleased', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);

	var funcName = defineFunctionFromBranch('onKeyReleased', block);

	// Generate the code for the switch
	var code = 'case '+keyCode+': this.'+funcName+'(); break;';
	Blockly.Kiwifroot.provideAddition('EVENT_KEY_RELEASED', code);
	return null;
};

Blockly.Kiwifroot['kiwi_event_time'] = function(block) {

	var funcName = defineFunctionFromBranch('onTick', block);

	var tick = Blockly.Kiwifroot.valueToCode(block, 'MILLISECOND', Blockly.Kiwifroot.ORDER_ASSIGNMENT);

	var constructorCode = 'this.' + funcName + '_ = this.game.time.clock.setInterval( this.' + funcName + ', ' + tick + ', this);';
	var destructorCode = 'this.game.time.clock.removeTimer( this.' + funcName + '_ );';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

	return null;
};

Blockly.Kiwifroot['kiwi_event_time_single'] = function(block) {

	var funcName = defineFunctionFromBranch('onSingleTick', block);

	var tick = Blockly.Kiwifroot.valueToCode(block, 'MILLISECOND', Blockly.Kiwifroot.ORDER_ASSIGNMENT);

	var code = 'this.' + funcName + '_ = this.game.time.clock.setTimeout( this.' + funcName + ', ' + tick + ', this);';
	
	return code;
};

Blockly.Kiwifroot['kiwi_event_message'] = function(block) {

	var t = Blockly.Kiwifroot.INDENT;
	var funcName = Blockly.Kiwifroot.provideFunction_(
		'onMessageRecieved',
		[ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function( name, message ) {',
        t + 'switch( message ) {',
        '{{'+t+t+',EVENT_MESSAGE_RELEASED,\n}}',
        t + '}',
        '};']);


	var constructorCode = 'this.owner.properties.onUpdate( this.' + funcName + ', this, "_messaging_");';
	Blockly.Kiwifroot.provideAdditionOnce('EventMessageRecieved', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);

	var funcName = defineFunctionFromBranch('executeMessageRecieved', block);
	var message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ASSIGNMENT);

	// Generate the code for the switch
	var code = 'case ' + message + ': this.'+funcName+'(); break;';
	Blockly.Kiwifroot.provideAddition('EVENT_MESSAGE_RELEASED', code);

	return null;
};


Blockly.Kiwifroot['kiwi_event_animation'] = function(block) {

  	Blockly.Kiwifroot.addAnimationToConstructor_();

  	var value_anim = Blockly.Kiwifroot.valueToCode( block, 'ANIM', Blockly.Kiwifroot.ORDER_ATOMIC );
  	var dropdown_type = block.getFieldValue( 'TYPE' );
  

	var funcName = defineFunctionFromBranch( 'onAnimation', block );

	var bootCode  = 'var anim = ' + Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.getAnimation(' + value_anim + ');\n';
		bootCode += '\tif( anim ) {\n';
		bootCode += '\t\tanim.' + dropdown_type + '.add(this.' + funcName + ', this);\n';
		bootCode += '\t}\n';


	var destructorCode  = 'var anim = ' + Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.getAnimation(' + value_anim + ');\n';
		destructorCode += '\tif( anim ) {\n';
		destructorCode += '\t\tanim.' + dropdown_type + '.remove(this.' + funcName + ', this);\n';
		destructorCode += '\t}\n';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.BOOT, bootCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

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
	branch = Blockly.Kiwifroot.scrub_(block, branch);
	var code = funcName + ' = function() {\n' + branch + '};';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DEFINITIONS,code);
	return funcName;
};

