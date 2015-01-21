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
 * @fileoverview Generating JavaScript for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';


Blockly.Kiwifroot['colour_random'] = function(block) {
	var func = Blockly.Kiwifroot.defineFunctionOnce('colour_random',{
		prefix:'\t'
	});
	func.code.push('var num = Math.floor(Math.random() * Math.pow(2, 24));\n');
	func.code.push('return "#" + ("00000" + num.toString(16)).substr(-6);\n');
	// Generate a random colour.
	var code = 'this.'+func.name+'()';
	return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};