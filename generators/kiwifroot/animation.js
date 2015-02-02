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
 * @fileoverview Generating Kiwifroot javascript for all animation functions
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.animation');

goog.require('Blockly.Kiwifroot');

var comp  = 'this.animation';

var addAnimationToConstructor = function() {

	var constructorCode = 'this.animation = this.owner.components.getComponent( "Animation" );\n\n';
	constructorCode    += '\tif( !this.animation ) {\n';
	constructorCode    += '\t\tKiwi.Log.error("Animation component not found on object. Will not work.", "#animation");\n'
	constructorCode    += '\t}\n';

	Blockly.Kiwifroot.provideAdditionOnce('animationConstructor', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);

};

Blockly.Kiwifroot['kiwi_animation'] = function(block) {
    var code = "'"+block.getFieldValue('ANIMATION')+"'";
    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_animation_play'] = function(block) {

	addAnimationToConstructor();

    var val = Blockly.Kiwifroot.valueToCode(block, 'ANIMATION', Blockly.Kiwifroot.ORDER_ATOMIC) || "";
    return comp + '.play('+ val + ');\n';
};

Blockly.Kiwifroot['kiwi_animation_current'] = function(block) {

	addAnimationToConstructor();

  	var code = comp + '.currentAnimation.name';
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_animation_state'] = function(block) {

	addAnimationToConstructor();

  	var dropdown_value = block.getFieldValue('STATES');
 	var code = comp + '.' + dropdown_value + ';\n';
  	return code;
};

Blockly.Kiwifroot['kiwi_animation_frame'] = function(block) {

	addAnimationToConstructor();

  	var dropdown_value = block.getFieldValue('FRAMES');
  	var code = comp + '.' + dropdown_value + ';\n';
  	return code;
};

Blockly.Kiwifroot['kiwi_animation_numbers'] = function(block) {

	addAnimationToConstructor();

  	var dropdown_value = block.getFieldValue('NUMBERS');
  	var code = comp + '.' + dropdown_value;
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_animation_booleans'] = function(block) {

	addAnimationToConstructor();

  	var dropdown_value = block.getFieldValue('BOOLEANS');
  	var code = comp + '.' + dropdown_value;
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
