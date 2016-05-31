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
 * @fileoverview Generating Kiwifroot for text blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.texts');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['text'] = function(block) {
  // Text value.
  var code = Blockly.Kiwifroot.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  var code;
  if (block.itemCount_ == 0) {
    return ['\'\'', Blockly.Kiwifroot.ORDER_ATOMIC];
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.Kiwifroot.valueToCode(block, 'ADD0',
        Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
    code = 'String(' + argument0 + ')';
    return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
  } else if (block.itemCount_ == 2) {
    var argument0 = Blockly.Kiwifroot.valueToCode(block, 'ADD0',
        Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
    var argument1 = Blockly.Kiwifroot.valueToCode(block, 'ADD1',
        Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
    code = 'String(' + argument0 + ') + String(' + argument1 + ')';
    return [code, Blockly.Kiwifroot.ORDER_ADDITION];
  } else {
    code = new Array(block.itemCount_);
    for (var n = 0; n < block.itemCount_; n++) {
      code[n] = Blockly.Kiwifroot.valueToCode(block, 'ADD' + n,
          Blockly.Kiwifroot.ORDER_COMMA) || '\'\'';
    }
    code = '[' + code.join(',') + '].join(\'\')';
    return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
  }
};

Blockly.Kiwifroot['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.Kiwifroot.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
      Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
  return 'this.' + varName + ' = String( this.' + varName + ' ) + String(' + argument0 + ');\n';
};

Blockly.Kiwifroot['text_length'] = function(block) {
  // String length.
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.Kiwifroot.ORDER_MEMBER];
};

Blockly.Kiwifroot['text_isEmpty'] = function(block) {
  // Is the string null?
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_MEMBER) || '\'\'';
  return ['!' + argument0, Blockly.Kiwifroot.ORDER_LOGICAL_NOT];
};

Blockly.Kiwifroot['text_indexOf'] = function(block) {
  // Search the text for a substring.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'FIND',
      Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_MEMBER) || '\'\'';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.Kiwifroot.ORDER_MEMBER];
};

Blockly.Kiwifroot['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.Kiwifroot.valueToCode(block, 'AT',
      Blockly.Kiwifroot.ORDER_UNARY_NEGATION) || '1';
  var text = Blockly.Kiwifroot.valueToCode(block, 'VALUE',
      Blockly.Kiwifroot.ORDER_MEMBER) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '.charAt(0)';
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
    case 'LAST':
      var code = text + '.slice(-1)';
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
    case 'FROM_START':
      // Blockly uses one-based indicies.
      if (Blockly.isNumber(at)) {
        // If the index is a naked number, decrement it right now.
        at = parseFloat(at) - 1;
      } else {
        // If the index is dynamic, decrement it in code.
        at += ' - 1';
      }
      var code = text + '.charAt(' + at + ')';
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
    case 'FROM_END':
      var code = text + '.slice(-' + at + ').charAt(0)';
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
    case 'RANDOM':
      var functionName = Blockly.Kiwifroot.provideFunction_(
          'text_random_letter',
          [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( text ) {',
            '  var x = Math.floor(Math.random() * text.length);',
            '  return text[x];',
            '}']);
      code = 'this.' + functionName + '(' + text + ')';
      return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.Kiwifroot['text_getSubstring'] = function(block) {
  // Get substring.
  var text = Blockly.Kiwifroot.valueToCode(block, 'STRING',
      Blockly.Kiwifroot.ORDER_MEMBER) || '\'\'';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.Kiwifroot.valueToCode(block, 'AT1',
      Blockly.Kiwifroot.ORDER_NONE) || '1';
  var at2 = Blockly.Kiwifroot.valueToCode(block, 'AT2',
      Blockly.Kiwifroot.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = text;
  } else {
    var functionName = Blockly.Kiwifroot.provideFunction_(
        'text_get_substring',
        [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(text, where1, at1, where2, at2) {',
          '  function getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = text.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = text.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (text_getSubstring).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return text.slice(at1, at2);',
          '}']);
    var code = 'this.' + functionName + '(' + text + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.toUpperCase()',
    'LOWERCASE': '.toLowerCase()',
    'TITLECASE': null
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var code;
  if (operator) {
    // Upper and lower case are functions built into Kiwifroot.
    var argument0 = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
        Blockly.Kiwifroot.ORDER_MEMBER) || '\'\'';
    code = argument0 + operator;
  } else {
    // Title case is not a native Kiwifroot function.  Define one.
    var functionName = Blockly.Kiwifroot.provideFunction_(
        'text_toTitleCase',
        [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(str) {',
          '  return str.replace(/\\S+/g,',
          '      function(txt) {return txt[0].toUpperCase() + ' +
              'txt.substring(1).toLowerCase();});',
          '}']);
    var argument0 = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
        Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
    code = 'this.' + functionName + '(' + argument0 + ')';
  }
  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['text_trim'] = function(block) {
  // Trim spaces.
  var OPERATORS = {
    'LEFT': '.trimLeft()',
    'RIGHT': '.trimRight()',
    'BOTH': '.trim()'
  };
  var operator = OPERATORS[block.getFieldValue('MODE')];
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
      Blockly.Kiwifroot.ORDER_MEMBER) || '\'\'';
  return [argument0 + operator, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['text_print'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
      Blockly.Kiwifroot.ORDER_NONE) || '\'\'';

  var code  = 'this.state.paused = true;\n';
      code += 'window.alert(' + argument0 + ');\n';
      code += 'this.state.paused = false;\n';

  return code;
};

Blockly.Kiwifroot['text_prompt'] = function(block) {
  // Prompt function (internal message).
  var msg = Blockly.Kiwifroot.quote_(block.getFieldValue('TEXT'));

  var functionName = Blockly.Kiwifroot.provideFunction_(
        'promptUser',
        [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(msg) {',
          Blockly.Kiwifroot.INDENT + 'this.state.paused = true;\n',
          Blockly.Kiwifroot.INDENT + 'var val = window.prompt(msg);\n',
          Blockly.Kiwifroot.INDENT + 'this.state.paused = false;\n',
          Blockly.Kiwifroot.INDENT + 'return val;',
        '};']);



  var code = 'this.' + functionName + '(' + msg + ')';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';

  if (toNumber) {
    code = 'parseFloat(' + code + ')';
  }

  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};


Blockly.Kiwifroot['text_prompt_string'] = function(block) {
    var msg = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
        Blockly.Kiwifroot.ORDER_NONE) || '\'\'';

    var functionName = Blockly.Kiwifroot.provideFunction_(
          'promptUser',
          [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(msg) {',
            Blockly.Kiwifroot.INDENT + 'this.state.paused = true;\n',
            Blockly.Kiwifroot.INDENT + 'var val = window.prompt(msg);\n',
            Blockly.Kiwifroot.INDENT + 'this.state.paused = false;\n',
            Blockly.Kiwifroot.INDENT + 'return val;',
          '};']);

    var code = 'window.prompt(' + msg + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['text_prompt_number'] = function(block) {
    var msg = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
        Blockly.Kiwifroot.ORDER_NONE) || '\'\'';

    var functionName = Blockly.Kiwifroot.provideFunction_(
          'promptUserNumber',
          [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(msg) {',
            Blockly.Kiwifroot.INDENT + 'this.state.paused = true;\n',
            Blockly.Kiwifroot.INDENT + 'var val = parseFloat(window.prompt(msg));\n',
            Blockly.Kiwifroot.INDENT + 'this.state.paused = false;\n',
            Blockly.Kiwifroot.INDENT + 'return val;',
          '};']);

    var code = 'this.' + functionName + '(' + msg + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.Kiwifroot['text_prompt_ext'] = function(block) {
  // Prompt function (external message).
  var msg = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
      Blockly.Kiwifroot.ORDER_NONE) || '\'\'';

  var functionName = Blockly.Kiwifroot.provideFunction_(
        'promptUserMumber',
        [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(msg) {',
          Blockly.Kiwifroot.INDENT + 'this.state.paused = true;\n',
          Blockly.Kiwifroot.INDENT + 'var val = window.prompt(msg);\n',
          Blockly.Kiwifroot.INDENT + 'this.state.paused = false;\n',
          Blockly.Kiwifroot.INDENT + 'return val;',
        '};']);

 var code = 'this.' + functionName + '(' + msg + ')';

  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'parseFloat(' + code + ')';
  }

  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};
