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
 * @fileoverview Intersects blocks for Kiwifroot.
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.intersects');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_intersects_instance_to_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INTERSECTS_OVERLAPS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("INST_ONE")
        .setCheck("Instance");
    this.appendValueInput("INST_TWO")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INTERSECTS_OVERLAPS_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_INTERSECTS_OVERLAPS_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_intersects_instance_to_xy'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INTERSECTS_CONTAINS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendValueInput("X_LOC")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_INTERSECTS_CONTAINS_MESSAGE );
    this.appendValueInput("Y_LOC")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_INTERSECTS_CONTAINS_TOOLTIP );
  }
};


