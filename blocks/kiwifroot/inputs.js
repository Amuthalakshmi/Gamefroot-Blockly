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
    this.setColour( Blockly.Variables.COLOUR.SENSING );
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
    this.setColour( Blockly.Variables.COLOUR.SENSING );
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

Blockly.Blocks['kiwi_input_fingers'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGERS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGERS_MESSAGE );
    this.setOutput(true, "Array");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGERS_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_select'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_SELECT_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGER_SELECT_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["1", "1"], 
            ["2", "2"], 
            ["3", "3"], 
            ["4", "4"], 
            ["5", "5"], 
            ["6", "6"], 
            ["7", "7"], 
            ["8", "8"], 
            ["9", "9"], 
            ["10", "10"]
        ]), "NUMBER");
    this.setOutput(true, "Pointer");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_SELECT_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_input_finger_get_coords'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["x", "x"], 
            ["y", "y"], 
            ["startX", "startPoint.x"], 
            ["startY", "startPoint.y"], 
            ["endX", "endPoint.x"], 
            ["endY", "endPoint.y"]
        ]), "PROP")
        .appendField(Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_MESSAGE);
    this.appendValueInput("POINTER")
        .setCheck("Pointer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_get_bool'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("POINTER")
        .setCheck("Pointer");
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["active", "active"], 
            ["down", "isDown"], 
            ["up", "isUp"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_get_times'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( new Blockly.FieldDropdown([
            ["duration", "duration"], 
            ["time down", "timeDown"], 
            ["time up", "timeUp"],
            ["id", "id"]
        ]), "PROP")
        .appendField( Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_MESSAGE );
    this.appendValueInput("POINTER")
        .setCheck("Pointer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_latest'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_LATEST_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGER_LATEST_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Pointer");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_LATEST_TOOLTIP );
  }
};