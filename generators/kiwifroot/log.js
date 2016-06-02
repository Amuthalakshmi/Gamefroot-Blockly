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
 * @fileoverview Generating Kiwifroot Javascript for log blocks.
 * @author ryanc1256@gmail.com
 */
'use strict';

delete Blockly.Kiwifroot.log;

goog.provide('Blockly.Kiwifroot.log');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_log'] = function(block) {
    var val = Blockly.Kiwifroot.valueToCode(block, 'LOG', Blockly.Kiwifroot.ORDER_ATOMIC) || "''";
    return 'this.game.logReadout.record( ' + val + ', "#Script");\n';
};

//Hack
Blockly.Kiwifroot['lists_add'] = function(block) {
  var value_list = Blockly.Kiwifroot.valueToCode(block, 'LIST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var value_input = Blockly.Kiwifroot.valueToCode(block, 'INPUT', Blockly.Kiwifroot.ORDER_ATOMIC) || null;

  var dropdown_position = block.getFieldValue('POSITION');

  // TODO: Assemble JavaScript into code variable.
  var code = errorCheck( this.workspace, ('!' + value_list ), '`Add to List` block could not find the List.' );
  code += value_list;

  if( dropdown_position === "front" ) {
  	code += '.unshift( ' + value_input + ' );\n';
  } else {
  	code += '.push( ' + value_input + ' );\n';
  }

  return code;
};

//SET_DEBUG
Blockly.Kiwifroot['kiwi_set_debug_mode'] = function(block) {
    var val = Blockly.Kiwifroot.valueToCode(block, 'SET_DEBUG', Blockly.Kiwifroot.ORDER_ATOMIC) || false;
    return 'this.game.debugMode = ' + val + ';\n';
};


Blockly.Kiwifroot['kiwi_get_debug_mode'] = function(block) {
  var code = 'this.game.debugMode';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_block_category'] = function(block) {
  //This block should never be generateable
  return '';
};

Blockly.Kiwifroot['kiwi_device_cocoon'] = function(block) {
  var code = '(this.game.deviceTargetOption === Kiwi.TARGET_COCOON)';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
