/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Math blocks for Kiwifroot Blockly.
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.math');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_math_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MATH_INSTANCE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("INST_ONE")
        .setCheck("Instance")
        .appendField(new Blockly.FieldDropdown( [ 
            ["angle", "angleTo"], 
            ["distance", "distanceTo"]
        ]), "METHOD")
        .appendField( Blockly.Msg.KF_MATH_INSTANCE_MESSAGE_BEFORE );
    this.appendValueInput("INST_TWO")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_MATH_INSTANCE_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_MATH_INSTANCE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_math_xy_to_xy'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MATH_XY_TO_XY_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING  );
    this.appendValueInput("X_LOC_ONE")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown( [ 
            ["angle", "angleToXY"], 
            ["distance", "distanceToXY"]
        ]), "METHOD")
        .appendField( Blockly.Msg.KF_MATH_XY_TO_XY_MESSAGE_BEFORE );
    this.appendValueInput("Y_LOC_ONE")
        .setCheck("Number");
    this.appendValueInput("X_LOC_TWO")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_MATH_XY_TO_XY_MESSAGE_AFTER );
    this.appendValueInput("Y_LOC_TWO")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_MATH_XY_TO_XY_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_math_utils'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MATH_UTILS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.OPERATORS  );
    this.appendValueInput("INPUT")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["normalize angle", "normalizeAngle"], ["radians to degrees ", "radiansToDegrees "], ["degrees to radians ", "degreesToRadians "]]), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_MATH_UTILS_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_math_lerp'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MATH_LERP_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING  );
    this.appendValueInput("VALUE_A")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_MATH_LERP_MESSAGE_ONE );
    this.appendValueInput("VALUE_B")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_MATH_LERP_MESSAGE_TWO );
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_MATH_LERP_MESSAGE_THREE );
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_MATH_LERP_MESSAGE_TOOLTIP );
  }
};