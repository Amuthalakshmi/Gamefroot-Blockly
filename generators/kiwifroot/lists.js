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
 * @fileoverview Generating Kiwifroot for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.lists');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['lists_create_empty'] = function(block) {
  // Create an empty list.
  return ['[]', Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.Kiwifroot.valueToCode(block, 'ADD' + n,
        Blockly.Kiwifroot.ORDER_COMMA) || 'null';
  }
  code = '[' + code.join(', ') + ']';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['lists_repeat'] = function(block) {
  // Create a list with one element repeated.
  var functionName = Blockly.Kiwifroot.provideFunction_(
      'lists_repeat',
      [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(value, n) {',
        '  var array = [];',
        '  for (var i = 0; i < n; i++) {',
        '    array[i] = value;',
        '  }',
        '  return array;',
        '}']);
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'ITEM',
      Blockly.Kiwifroot.ORDER_COMMA) || 'null';
  var argument1 = Blockly.Kiwifroot.valueToCode(block, 'NUM',
      Blockly.Kiwifroot.ORDER_COMMA) || '0';
  var code = 'this.' + functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['lists_length'] = function(block) {
  // List length.
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_FUNCTION_CALL) || '[]';
  return [argument0 + '.length', Blockly.Kiwifroot.ORDER_MEMBER];
};

Blockly.Kiwifroot['lists_isEmpty'] = function(block) {
  // Is the list empty?
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_MEMBER) || '[]';
  return ['!' + argument0 + '.length', Blockly.Kiwifroot.ORDER_LOGICAL_NOT];
};

Blockly.Kiwifroot['lists_indexOf'] = function(block) {
  // Find an item in the list.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'FIND',
      Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_MEMBER) || '[]';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.Kiwifroot.ORDER_MEMBER];
};

Blockly.Kiwifroot['lists_getIndex'] = function(block) {
  // Get element at index.
  // Note: Until January 2013 this block did not have MODE or WHERE inputs.
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.Kiwifroot.valueToCode(block, 'AT',
      Blockly.Kiwifroot.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_MEMBER) || '[]';

  if (where == 'FIRST') {
    if (mode == 'GET') {
      var code = list + '[0]';
      return [code, Blockly.Kiwifroot.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.shift()';
      return [code, Blockly.Kiwifroot.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.shift();\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'GET') {
      var code = list + '.slice(-1)[0]';
      return [code, Blockly.Kiwifroot.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.pop()';
      return [code, Blockly.Kiwifroot.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.pop();\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'GET') {
      var code = list + '[' + at + ']';
      return [code, Blockly.Kiwifroot.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.splice(' + at + ', 1)[0]';
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return list + '.splice(' + at + ', 1);\n';
    }
  } else if (where == 'FROM_END') {
    if (mode == 'GET') {
      var code = list + '.slice(-' + at + ')[0]';
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
    } else if (mode == 'GET_REMOVE' || mode == 'REMOVE') {
      var functionName = Blockly.Kiwifroot.provideFunction_(
          'lists_remove_from_end',
          [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(list, x) {',
            '  x = list.length - x;',
            '  return list.splice(x, 1)[0];',
            '}']);
      code = 'this.' + functionName + '(' + list + ', ' + at + ')';
      if (mode == 'GET_REMOVE') {
        return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return code + ';\n';
      }
    }
  } else if (where == 'RANDOM') {
    var functionName = Blockly.Kiwifroot.provideFunction_(
        'lists_get_random_item',
        [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(list, remove) {',
          '  var x = Math.floor(Math.random() * list.length);',
          '  if (remove) {',
          '    return list.splice(x, 1)[0];',
          '  } else {',
          '    return list[x];',
          '  }',
          '}']);
    code = 'this.' + functionName + '(' + list + ', ' + (mode != 'GET') + ')';
    if (mode == 'GET' || mode == 'GET_REMOVE') {
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return code + ';\n';
    }
  }
  throw 'Unhandled combination (lists_getIndex).';
};

Blockly.Kiwifroot['lists_setIndex'] = function(block) {
  // Set element at index.
  // Note: Until February 2013 this block did not have MODE or WHERE inputs.
  var list = Blockly.Kiwifroot.valueToCode(block, 'LIST',
      Blockly.Kiwifroot.ORDER_MEMBER) || '[]';
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.Kiwifroot.valueToCode(block, 'AT',
      Blockly.Kiwifroot.ORDER_NONE) || '1';
  var value = Blockly.Kiwifroot.valueToCode(block, 'TO',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 'null';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  // Closure, which accesses and modifies 'list'.
  function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    }
    var listVar = Blockly.Kiwifroot.variableDB_.getDistinctName(
        'tmp_list', Blockly.Variables.NAME_TYPE);
    var code = 'var ' + listVar + ' = ' + list + ';\n';
    list = listVar;
    return code;
  }
  if (where == 'FIRST') {
    if (mode == 'SET') {
      return list + '[0] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.unshift(' + value + ');\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'SET') {
      var code = cacheList();
      code += list + '[' + list + '.length - 1] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      return list + '.push(' + value + ');\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'SET') {
      return list + '[' + at + '] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.splice(' + at + ', 0, ' + value + ');\n';
    }
  } else if (where == 'FROM_END') {
    var code = cacheList();
    if (mode == 'SET') {
      code += list + '[' + list + '.length - ' + at + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + list + '.length - ' + at + ', 0, ' + value +
          ');\n';
      return code;
    }
  } else if (where == 'RANDOM') {
    var code = cacheList();
    var xVar = Blockly.Kiwifroot.variableDB_.getDistinctName(
        'tmp_x', Blockly.Variables.NAME_TYPE);
    code += 'var ' + xVar + ' = Math.floor(Math.random() * ' + list +
        '.length);\n';
    if (mode == 'SET') {
      code += list + '[' + xVar + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + xVar + ', 0, ' + value + ');\n';
      return code;
    }
  }
  throw 'Unhandled combination (lists_setIndex).';
};

Blockly.Kiwifroot['lists_getSublist'] = function(block) {
  // Get sublist.
  var list = Blockly.Kiwifroot.valueToCode(block, 'LIST',
      Blockly.Kiwifroot.ORDER_MEMBER) || '[]';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.Kiwifroot.valueToCode(block, 'AT1',
      Blockly.Kiwifroot.ORDER_NONE) || '1';
  var at2 = Blockly.Kiwifroot.valueToCode(block, 'AT2',
      Blockly.Kiwifroot.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = list + '.concat()';
  } else {
    var functionName = Blockly.Kiwifroot.provideFunction_(
        'lists_get_sublist',
        [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(list, where1, at1, where2, at2) {',
          '  function getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = list.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = list.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (lists_getSublist).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return list.slice(at1, at2);',
          '}']);
    var code = 'this.' + functionName + '(' + list + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['lists_split'] = function(block) {
  // Block for splitting text into a list, or joining a list into text.
  var value_input = Blockly.Kiwifroot.valueToCode(block, 'INPUT',
      Blockly.Kiwifroot.ORDER_MEMBER);
  var value_delim = Blockly.Kiwifroot.valueToCode(block, 'DELIM',
      Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
  var mode = block.getFieldValue('MODE');
  if (mode == 'SPLIT') {
    if (!value_input) {
      value_input = '\'\'';
    }
    var functionName = 'split';
  } else if (mode == 'JOIN') {
    if (!value_input) {
      value_input = '[]';
    }
    var functionName = 'join';
  } else {
    throw 'Unknown mode: ' + mode;
  }
  var code = value_input + '.' + functionName + '(' + value_delim + ')';
  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};
