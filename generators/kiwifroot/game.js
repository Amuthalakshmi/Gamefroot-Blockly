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
 * @fileoverview Generating Kiwifroot Javascript for all game blocks. Game
 * blocks include states, state changes (levels), anything with the games
 * properties like target platform and stage size.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.game');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_game_stage_get_size'] = function(block) {
	var prop = block.getFieldValue('PROP');
	var code = 'this.game.stage.' + prop;
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_game_stage_set_colour'] = function(block) {
	var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT);
	return 'this.game.stage.color = ('+val+').slice(1);\n';
};

Blockly.Kiwifroot['kiwi_game_stage_get_colour'] = function(block) {
	var code = '"#" + this.game.stage.color';
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};