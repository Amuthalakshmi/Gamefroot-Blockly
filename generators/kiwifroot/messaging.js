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
 * @fileoverview Generating Kiwifroot Javascript for messaging features
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.messaging');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_messaging_instance'] = function(block) {
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC) || "''";
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || null;

  var code = errorCheck( this.workspace, ('!' + value_inst ), '`Message Instance` block could not find a Instance.' );
  code += value_inst + '.properties.set("_messaging_", ' + value_message + ');\n';

  return code;
};

Blockly.Kiwifroot['kiwi_messaging_list'] = function(block) {
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC)|| "''";
  var value_list = Blockly.Kiwifroot.valueToCode(block, 'LIST', Blockly.Kiwifroot.ORDER_ATOMIC) || "[]";

  var code = 'var list = ' + value_list +';\n' +
          'for( var i = 0; i < list.length; i++) {\n' +
          '\tif( list[ i ].properties ) {\n' +
          '\t\tlist[ i ].properties.set("_messaging_", ' + value_message + ');\n' +
          '\t}\n' +
          '}\n';

  return code;
};


Blockly.Kiwifroot['kiwi_messaging_everyone'] = function(block) {
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC) || "''";

  var functionName = Blockly.Kiwifroot.provideFunction_(
      'messageEachGameObject',
      [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( group, message ) {',
      	'\t' + 'group.forEach( this, function( child ) {',
        '\t\t' + 'if( child && child.properties ) {',
    		'\t\t\t' + 'child.properties.set( "_messaging_", message );',
    		'\t\t\t' + 'if( child.childType() == Kiwi.Group ) {', 
    		'\t\t\t\t' + 'this.messageEachGameObject( child, message );',
    		'\t\t\t' + '}',
        '\t\t' + '}',
    		'\t' + '});',
        '\t' + 'return;',
        '}']);

  var code = 'this.'+ functionName + '( this.state, ' + value_message + ');\n'; 

  return code;
};



Blockly.Kiwifroot['kiwi_messaging_everyone_value'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || null;

  var functionName = Blockly.Kiwifroot.provideFunction_(
      'messageEachGameObjectWithValue',
      [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( group, message, value ) {',
        '\t' + 'group.forEach( this, function( child ) {',
        '\t\t' + 'if( child && child.properties ) {',
        '\t\t\t' + 'child.properties.set( "_messaging-value_", value );',
        '\t\t\t' + 'child.properties.set( "_messaging_", message );',
        '\t\t\t' + 'if( child.childType() == Kiwi.Group ) {', 
        '\t\t\t\t' + 'this.messageEachGameObjectWithValue( child, message, value );',
        '\t\t\t' + '}',
        '\t\t' + '}',
        '\t' + '});',
        '\t' + 'return;',
        '}']);

  var code = 'this.'+ functionName + '( this.state, ' + value_message + ',' + value_value + ');\n'; 

  return code;
};


Blockly.Kiwifroot['kiwi_messaging_instance_value'] = function(block) {
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC) || "''";
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || null;
  var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC) || null;


  var code = errorCheck( this.workspace, ('!' + value_inst ), '`Message Instance with Value` could not find a Instance.' );
  code += value_inst + '.properties.set("_messaging-value_", ' + value_value + ');\n';
  code += value_inst + '.properties.set("_messaging_", ' + value_message + ');\n';

  return code;
};