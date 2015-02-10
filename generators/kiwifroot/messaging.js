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
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC);

  var code = value_inst + '.properties.set("_messaging_", ' + value_message + ');\n';

  return code;
};

Blockly.Kiwifroot['kiwi_messaging_class'] = function(block) {
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC);

  var code  = 'var classes = this.state.getAllChildrenByName(' + value_class +');\n' +
  			  'for( var i = 0; i < classes.length; i++) {\n' +
  			  '\tclasses[ i ].properties.set("_messaging_", ' + value_message + ');\n' +
  			  '}\n';

  return code;
};

Blockly.Kiwifroot['kiwi_messaging_everyone'] = function(block) {
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC);

  var functionName = Blockly.Kiwifroot.provideFunction_(
      'messageEachGameObject',
      [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( group, message ) {',
      	'\tgroup.forEach( this, function( child ) {',
  		'\t\tchild.properties.set( "_messaging_", message );',
  		'\t\tif( child.childType() == Kiwi.Group ) {', 
  		'\t\t\tthis.forEach( child, message );',
  		'\t\t}',
  		'\t});',
        '\treturn;',
        '}']);

  var code = 'this.'+ functionName + '( this.state, ' + value_message + ');\n'; 

  return code;
};