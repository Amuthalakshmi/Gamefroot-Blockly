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
 * @fileoverview Generating Kiwifroot Javascript that resolves instance tokens
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.classes');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_classes_instance_type'] = function(block) {
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var code = errorCheckConditional( this.workspace, 'NotNull', value_inst, '!%1', 'this.owner', "No Instance could be found for a `get class of instance` block.") + '.name';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_classes_get_instance'] = function(block) {
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC) || 'null';
  var dropdown_method = block.getFieldValue('METHOD');

  var code = 'this.state.' + dropdown_method + '(' + value_class + ')';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_classes_get_all_instances'] = function(block) {
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC) || 'null';
  var code = 'this.state.getAllChildrenByName(' + value_class +')';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_classes_get_by_text'] = function(block) {
  var value_text = Blockly.Kiwifroot.valueToCode(block, 'TEXT', Blockly.Kiwifroot.ORDER_ATOMIC) || '""';

  var getClassFuncName = Blockly.Kiwifroot.provideFunction_(
    'getClass',
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( className ) {',
        Blockly.Kiwifroot.INDENT + '//Check to see if the class exists, if not return null.',
        Blockly.Kiwifroot.INDENT + 'if( this.state.objects.exists( className ) ) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'return className;',
        Blockly.Kiwifroot.INDENT + '}',
        Blockly.Kiwifroot.INDENT + 'return null;',
        '};']);

  var code = 'this.' + getClassFuncName + '(' + value_text + ')';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};



Blockly.Kiwifroot['kiwi_classes_create_instance_with_var_local'] = function(block) {

  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC) || 'null';
  var variable0 = Blockly.Kiwifroot.localVariableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

  var createInstanceFuncName = Blockly.Kiwifroot.provideFunction_(
    'createInstance',
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( className ) {',
        Blockly.Kiwifroot.INDENT + '//Get the object configuration, modify it, and then create an object.',
        Blockly.Kiwifroot.INDENT + 'var obj = this.state.objects.get( className );',
        Blockly.Kiwifroot.INDENT +'if( obj ) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'return this.state.objects.create( obj, this.owner.parent );',
        Blockly.Kiwifroot.INDENT + '}',
        Blockly.Kiwifroot.INDENT + 'return null;',
        '};']);

  //value_class

  var code = 'var ' + variable0 + ' = this.' + createInstanceFuncName + '(' + value_class + ');\n';

  return code;
};