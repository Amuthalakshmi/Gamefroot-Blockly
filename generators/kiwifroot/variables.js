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
 * @fileoverview Generating Kiwifroot Javascript for variable blocks.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

delete Blockly.Kiwifroot.variables;

goog.provide('Blockly.Kiwifroot.variables');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['variables_get'] = function(block) {
  // Variable getter.
  var code = 'this.' + Blockly.Kiwifroot.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Kiwifroot.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return 'this.' + varName + ' = ' + argument0 + ';\n';
};

// LOCAL

Blockly.Kiwifroot['variables_local_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Kiwifroot.localVariableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['variables_local_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Kiwifroot.localVariableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return 'var ' + varName + ' = ' + argument0 + ';\n';
};

// GLOBAL

Blockly.Kiwifroot['variables_global_get'] = function(block) {
  // Variable getter.
  var code = 'this.game.GLOBAL_VARIABLES.' + Blockly.Kiwifroot.globalVariableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['variables_global_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Kiwifroot.globalVariableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return 'this.game.GLOBAL_VARIABLES.' + varName + ' = ' + argument0 + ';\n';
};