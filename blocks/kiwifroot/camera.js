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
 * @fileoverview Camera blocks for Gamefroot
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.camera');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_camera_go_to'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_PAN_TO_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        ["pan", "panTo"],
        ["snap", "snapTo"]
    ]), "METHOD");
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_PAN_TO_MESSAGE );
    this.appendValueInput("X_POS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("x");
    this.appendValueInput("Y_POS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['kiwi_camera_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SET_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_BEFORE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["pan speed", "panSpeed"], 
            ["x offset", "offset.x"], 
            ["y offset", "offset.y"], 
            ["x minimum", "minX"], 
            ["y minimum", "minY"],
            ["x maximum", "maxX"], 
            ["y maximum", "maxY"]
        ] ), "METHOD")
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_AFTER );
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SET_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_HELPURL );
    this.setColour( Blockly.Variables.HUE_NUMBER );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["pan speed", "panSpeed"], 
            ["x offset", "offset.x"], 
            ["y offset", "offset.y"], 
            ["x minimum", "minX"], 
            ["y minimum", "minY"],
            ["x maximum", "maxX"], 
            ["y maximum", "maxY"],
            ["x", "x"],
            ["y", "y"],
            ["width", "camera.width"],
            ["height", "camera.height"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_lock_on'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_LOCK_ON_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_LOCK_ON_MESSAGE );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_LOCK_ON_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_unlock'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_UNLOCK_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_UNLOCK_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_UNLOCK_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_state'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_STATE_HELPURL );
    this.setColour( Blockly.Variables.HUE_BOOLEAN );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_STATE_MESSAGE )
        .appendField(new Blockly.FieldDropdown( [
            ["locked", "locked"], 
            ["panning", "panning"]
        ] ), "TYPE");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_STATE_TOOLTIP );
  }
};