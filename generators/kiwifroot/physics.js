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
 * @fileoverview Generating Kiwifroot javascript for all arcade physics functions
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.arcadephysics');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX  = 'this.arcadephysics';
Blockly.Kiwifroot.arcadephysics.SYSTEM_PREFIX = 'this.arcadesystem';


Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_ = function() {

	var constructorCode = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + ' = this.owner.components.getComponent( "ArcadePhysics" );\n\n';
	constructorCode    += '\tif( !this.arcadephysics ) {\n';
	constructorCode    += '\t\tKiwi.Log.error("ArcadePhysics component not found on the state. ArcadePhysics blocks will not work.", "#arcadephysics");\n'
	constructorCode    += '\t} else {\n';
  constructorCode    += Blockly.Kiwifroot.arcadephysics.SYSTEM_PREFIX + ' = ' + Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.system;\n';

	Blockly.Kiwifroot.provideAdditionOnce('arcadePhysicsConstructor', Blockly.Kiwifroot.BOOT, constructorCode);

};

Blockly.Kiwifroot['kiwi_arcadephysics_get_numeric'] = function(block) {
	  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  	var dropdown_prop = block.getFieldValue('PROP');
  	var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop;

  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_arcadephysics_set_numeric'] = function(block) {
	Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
  	var dropdown_prop = block.getFieldValue('PROP');

  	var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop + ' = ' + value_value + ';\n';
  	return code;
};


Blockly.Kiwifroot['kiwi_arcadephysics_set_boolean'] = function(block) {
	Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
  	var dropdown_prop = block.getFieldValue('PROP');

  	var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop + ' = ' + value_value + ';\n'; 
  	return code;
}; 


Blockly.Kiwifroot['kiwi_arcadephysics_get_boolean'] = function(block) {
	Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  	var dropdown_prop = block.getFieldValue('PROP');
  	var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop;

  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_arcadephysics_get_touching'] = function(block) {

  	var dropdown_prop = block.getFieldValue('PROP');
  	var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.isTouching( ' + dropdown_prop + ' )';

  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_arcadephysics_get_collisions'] = function(block) {
	Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  	var dropdown_type = block.getFieldValue('TYPE');
  	var dropdown_prop = block.getFieldValue('PROP');

  	var code = '( ' + Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_type + ' & ' + dropdown_prop + ' ) == ' + dropdown_prop;

  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_arcadephysics_set_collisions'] = function(block) {
	Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
  	var dropdown_prop = block.getFieldValue('PROP');

  	var functionName = Blockly.Kiwifroot.provideFunction_(
      	'setCollision',
      	[ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function(collisionSide, active) {',
      	'\tif( active ) {',
      	'\t\t' + Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.allowCollisions = ' + Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.allowCollisions | collisionSide;',
      	'} else if( !active ) {',
      	'\t\t' + Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.allowCollisions = ' + Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.allowCollisions ^ collisionSide;',
      	'\t}',
        'return;',
        '}'] );


  	var code  = 'this.' + functionName + '(' + dropdown_prop + ',' + value_value + ');\n';
  	return code;
};

Blockly.Kiwifroot['kiwi_arcadephysics_set_gravity'] = function(block) {
  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
  var dropdown_prop = block.getFieldValue('PROP');

  var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.system.gravity.' + dropdown_prop + ' = ' + value_value + ';\n';
  return code;
};

Blockly.Kiwifroot['kiwi_arcadephysics_get_gravity'] = function(block) {
  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  var dropdown_prop = block.getFieldValue('PROP');
  var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.system.gravity.' + dropdown_prop;

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_arcadephysics_probe'] = function(block) {
  
  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  var value_x_pos = Blockly.Kiwifroot.valueToCode(block, 'X_POS', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_y_pos = Blockly.Kiwifroot.valueToCode(block, 'Y_POS', Blockly.Kiwifroot.ORDER_ATOMIC);

  var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.system.probe( ' + value_x_pos + ', ' + value_y_pos + ')';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_arcadephysics_probe_layer'] = function(block) {

  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_();

  var value_x_pos = Blockly.Kiwifroot.valueToCode(block, 'X_POS', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_y_pos = Blockly.Kiwifroot.valueToCode(block, 'Y_POS', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_layer = Blockly.Kiwifroot.valueToCode(block, 'LAYER', Blockly.Kiwifroot.ORDER_ATOMIC);

  var dropdown_side = block.getFieldValue('SIDE');
 
  var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.system.probe( ' + value_x_pos + ', ' + value_y_pos + ', ' + dropdown_side + ', ' + value_layer + ')';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};