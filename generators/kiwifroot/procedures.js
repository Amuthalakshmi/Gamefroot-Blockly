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
 * @fileoverview Generating Kiwifroot for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.procedures');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.Kiwifroot.valueToCode(block, 'CONDITION',
	  Blockly.Kiwifroot.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
	var value = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
		Blockly.Kiwifroot.ORDER_NONE) || 'null';
	code += '  return ' + value + ';\n';
  } else {
	code += '  return;\n';
  }
  code += '}\n';
  return code;
};


Blockly.Kiwifroot['procedures_defreturn_local'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

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

  var returnValue = Blockly.Kiwifroot.valueToCode(block, 'RETURN',
    Blockly.Kiwifroot.ORDER_NONE) || '';

  if (returnValue) {
  returnValue = '  return ' + returnValue + ';\n';
  }

  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
  args[x] = Blockly.Kiwifroot.localVariableDB_.getName(block.arguments_[x],
    Blockly.Variables.NAME_TYPE);
  }

    var code  = funcName + ' = function(' + args.join(', ') + ') {\n';
    code += branch + returnValue + '}';

    code = Blockly.Kiwifroot.scrub_(block, code);
    Blockly.Kiwifroot.definitions_[funcName] = code;
    return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Kiwifroot['procedures_defnoreturn_local'] =
  Blockly.Kiwifroot['procedures_defreturn_local'];

Blockly.Kiwifroot['procedures_callreturn_local'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
  args[x] = Blockly.Kiwifroot.valueToCode(block, 'ARG' + x,
    Blockly.Kiwifroot.ORDER_COMMA) || 'null';
  }
  var code = 'this.' + funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['procedures_callnoreturn_local'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
  args[x] = Blockly.Kiwifroot.valueToCode(block, 'ARG' + x,
    Blockly.Kiwifroot.ORDER_COMMA) || 'null';
  }
  var code = 'this.' + funcName + '(' + args.join(', ') + ');\n';
  return code;
};
