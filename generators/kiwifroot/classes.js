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
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC);
  var code = value_inst + '.name';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_classes_get_instance'] = function(block) {
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');

  var code = 'this.state.' + dropdown_method + '(' + value_class + ')';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_classes_get_all_instances'] = function(block) {
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC);
  var code = 'this.state.getAllChildrenByName(' + value_class +')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_classes_create_instance'] = function(block) {
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_x_loc = Blockly.Kiwifroot.valueToCode(block, 'X_LOC', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_y_loc = Blockly.Kiwifroot.valueToCode(block, 'Y_LOC', Blockly.Kiwifroot.ORDER_ATOMIC);

  var code = '//Get the object configuration, modify it, and then create an object.\n' +
  			 'var obj = this.state.objects.get(' + value_class + ');\n' +
  		  	 'if( obj ) {\n' +
  		  	 '\tobj.x = ' + value_x_loc + ';\n' +
  		  	 '\tobj.y = ' + value_y_loc + ';\n' +
  		  	 '\treturn this.state.objects.create( obj, this.owner.parent );\n' +
  		  	 '}\n';
  return code;
};