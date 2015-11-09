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
 * @fileoverview Generating Kiwifroot Javascript that resolves intersects
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.intersects');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['kiwi_intersects_instance_to_instance'] = function(block) {
  var value_inst_one = Blockly.Kiwifroot.valueToCode(block, 'INST_ONE', Blockly.Kiwifroot.ORDER_ATOMIC) || 'null';
  var value_inst_two = Blockly.Kiwifroot.valueToCode(block, 'INST_TWO', Blockly.Kiwifroot.ORDER_ATOMIC) || 'null';

  var t = Blockly.Kiwifroot.INDENT;

  var funcName = Blockly.Kiwifroot.provideFunction_( 
    'overlapping', 
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(ins1, ins2) {',
        t+'if(!ins1 || !ins2) return false;',
        t+'var box1 = ins1.components.getComponent("Box");',
        t+'var box2 = ins2.components.getComponent("Box");',
        t+'if( !box1 || !box2 ) {',
        t+t+'return false;',
        t+'}',
        t+'return box1.worldHitbox.intersects( box2.worldHitbox );',
    '};']
  ); 

  var code = 'this.' + funcName + '( ' + value_inst_one + ', ' + value_inst_two + ')';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_intersects_instance_to_xy'] = function(block) {
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'null';
  var value_x_loc = Blockly.Kiwifroot.valueToCode(block, 'X_LOC', Blockly.Kiwifroot.ORDER_ATOMIC) || 0;
  var value_y_loc = Blockly.Kiwifroot.valueToCode(block, 'Y_LOC', Blockly.Kiwifroot.ORDER_ATOMIC) || 0;

  var t = Blockly.Kiwifroot.INDENT;

  var funcName = Blockly.Kiwifroot.provideFunction_( 
    'instContains', 
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(ins, x, y) {',
        t+'if( !ins ) return false;',
        t+'x = x || 0',
        t+'y = y || 0',
        t+'var box = ins.components.getComponent("Box");',
        t+'if( !box ) {',
        t+t+'return false;',
        t+'}',
        t+'return box.worldHitbox.contains( x, y );',
    '};']
  ); 

  var code = 'this.' + funcName + '( ' + value_inst + ', ' + value_x_loc + ', ' + value_y_loc + ' )';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};