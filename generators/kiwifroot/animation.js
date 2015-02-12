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

Blockly.Kiwifroot.animation.COMPONENT_PREFIX = 'this.animation';

Blockly.Kiwifroot.addAnimationToConstructor_ = function() {

	var constructorCode = 'this.animation = this.owner.components.getComponent( "Animation" );\n\n';
	constructorCode    += '\tif( !this.animation ) {\n';
	constructorCode    += '\t\tKiwi.Log.error("Animation component not found on object. Animation blocks will not work.", "#animation");\n'
	constructorCode    += '\t}\n';

	Blockly.Kiwifroot.provideAdditionOnce('animationConstructor', Blockly.Kiwifroot.BOOT, constructorCode);
};


Blockly.Kiwifroot['kiwi_animation_play'] = function(block) {
	Blockly.Kiwifroot.addAnimationToConstructor_();
  var val = Blockly.Kiwifroot.valueToCode(block, 'TEXT', Blockly.Kiwifroot.ORDER_ATOMIC) || "";
  return Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.play( ' + val + ' );\n';
};

Blockly.Kiwifroot['kiwi_animation_current'] = function(block) {
  Blockly.Kiwifroot.addAnimationToConstructor_();
  var code = Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.currentAnimation.name';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_animation_state'] = function(block) {
  Blockly.Kiwifroot.addAnimationToConstructor_();
  var dropdown_value = block.getFieldValue('STATES');
 	var code = Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.' + dropdown_value + ';\n';
  return code;
};

Blockly.Kiwifroot['kiwi_animation_frame'] = function(block) {
  Blockly.Kiwifroot.addAnimationToConstructor_();
  var dropdown_value = block.getFieldValue('FRAMES');
  var code = Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.' + dropdown_value + ';\n';
  return code;
};

Blockly.Kiwifroot['kiwi_animation_numbers'] = function(block) {
  Blockly.Kiwifroot.addAnimationToConstructor_();
  var dropdown_value = block.getFieldValue('NUMBERS');
  var code = Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.' + dropdown_value;
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_animation_booleans'] = function(block) {
  Blockly.Kiwifroot.addAnimationToConstructor_();
  var dropdown_value = block.getFieldValue('BOOLEANS');
  var code = Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.' + dropdown_value;
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};