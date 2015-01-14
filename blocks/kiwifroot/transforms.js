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
 * @fileoverview Transformation blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.transforms');

goog.require('Blockly.Blocks');

var TRANSFORM_HUE = 230;

Blockly.Blocks['kiwi_transform_set_position'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_TRANSFORM_SET_POSITION_HELPURL);
    this.setColour(TRANSFORM_HUE);
    this.appendDummyInput()
    	.appendField("set");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "AXIS");
    this.appendDummyInput()
    	.appendField("position of");
    this.appendValueInput("INST")
        .setCheck("instance");
    this.appendDummyInput()
    	.appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_TRANSFORM_SET_POSITION_TOOLTIP);
  }
};