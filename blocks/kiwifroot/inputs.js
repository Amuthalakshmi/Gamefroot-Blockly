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
 * @fileoverview Keyboard key blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.keys');

goog.require('Blockly.Blocks');

Blockly.Blocks['kiwi_key_special'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_KEY_SPECIAL_HELPURL);
    this.setColour(300);
    this.appendDummyInput()
        .appendField("key:")
        .appendField(new Blockly.FieldDropdown([
        	["backspace", "8"] 
        	,["tab", "9"]
        	,["enter", "13"]
        	,["shift", "16"]
        	,["ctrl", "17"]
        	,["alt", "18"]
        	,["escape", "27"]
        	,["spacebar", "32"]
        	,["left arrow", "37"]
        	,["up arrow", "38"]
        	,["right arrow", "39"]
        	,["down arrow", "40"]
        ]), "KEY");
      	// TODO add other key codes
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_KEY_SPECIAL_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_input_mouse'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INPUT_MOUSE_HELPURL);
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["x position", "x"]
            ,["y position", "y"]
        ]), "AXIS")
        .appendField(Blockly.Msg.KF_INPUT_MOUSE_MESSAGE);
        // TODO add other key codes
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INPUT_MOUSE_TOOLTIP);
  }
};