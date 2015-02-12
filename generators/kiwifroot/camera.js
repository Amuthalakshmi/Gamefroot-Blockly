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
 * @fileoverview Generating Kiwifroot javascript for all camera functions
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.camera');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot.camera.COMPONENT_PREFIX  = 'this.camera';

Blockly.Kiwifroot.camera.addCameraToConstructor_ = function() {

	var constructorCode = 'this.camera = this.state.components.getComponent( "Camera" );\n\n';
	constructorCode    += '\tif( !this.camera ) {\n';
	constructorCode    += '\t\tKiwi.Log.error("Camera component not found on the state. Camera blocks will not work.", "#camera");\n'
	constructorCode    += '\t}\n';

	Blockly.Kiwifroot.provideAdditionOnce('cameraConstructor', Blockly.Kiwifroot.BOOT, constructorCode);

};

Blockly.Kiwifroot['kiwi_camera_go_to'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_();

  	var dropdown_method = block.getFieldValue('METHOD');
  	var value_x_pos = Blockly.Kiwifroot.valueToCode(block, 'X_POS', Blockly.Kiwifroot.ORDER_ATOMIC);
  	var value_y_pos = Blockly.Kiwifroot.valueToCode(block, 'Y_POS', Blockly.Kiwifroot.ORDER_ATOMIC);
  	// TODO: Assemble JavaScript into code variable.

  	return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method + '(' + value_x_pos + ',' + value_y_pos + ');\n';
};


Blockly.Kiwifroot['kiwi_camera_set_speed'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_();

  	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);

  	return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.panSpeed = ' + value_value + ';\n';
};

Blockly.Kiwifroot['kiwi_camera_get_speed'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_();

  	var dropdown_method = block.getFieldValue('METHOD');
  	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.panSpeed';
  	
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_camera_set'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_();

    var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
    var dropdown_method = block.getFieldValue('METHOD');
    return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method + ' = ' + value_value + ';\n';
};

Blockly.Kiwifroot['kiwi_camera_get_read_only'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_();

    var dropdown_method = block.getFieldValue('METHOD');
    var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
    
    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_camera_get'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_();

    var dropdown_method = block.getFieldValue('METHOD');
    var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
    
    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_camera_lock_on'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_();

  	var value_instance = Blockly.Kiwifroot.valueToCode(block, 'INSTANCE', Blockly.Kiwifroot.ORDER_ATOMIC);
  	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.lock(' + value_instance + '.transform, ' + value_instance + '.width * 0.5, ' + value_instance + '.height * 0.5);\n';
  	return code;
};

Blockly.Kiwifroot['kiwi_camera_unlock'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_();

  	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.unlock();\n';
  	return code;
};

Blockly.Kiwifroot['kiwi_camera_state'] = function(block) {

	Blockly.Kiwifroot.camera.addCameraToConstructor_();

  	var dropdown_type = block.getFieldValue('TYPE');
  	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_type;
  	
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_camera_scale'] = function(block) {
  var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('PROP');

  var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_name + ' = ' + value_value + ';\n';

  return code;
};

Blockly.Kiwifroot['kiwi_camera_scale_get'] = function(block) {
  var dropdown_name = block.getFieldValue('PROP');
  var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_name;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};