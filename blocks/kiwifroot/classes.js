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
 * @fileoverview Class blocks for Kiwifroot.
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.classes');

goog.require('Blockly.Blocks');

Blockly.Blocks.Kiwifroot.classes.HUE = 290;

Blockly.Blocks['kiwi_classes_selector'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_SELECTOR_HELPURL );
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.classes_ ), "NAME");
    this.setInputsInline(true);
    this.setOutput( true, "Class" );
    this.setTooltip( Blockly.Msg.KF_CLASSES_SELECTOR_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_classes_instance_type'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_INSTANCE_HELPURL );
    this.setColour( Blockly.Blocks.Kiwifroot.classes.HUE );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_CLASSES_INSTANCE_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Class");
    this.setTooltip( Blockly.Msg.KF_CLASSES_INSTANCE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_classes_get_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_GET_INSTANCE_HELPURL );
    this.setColour( Blockly.Blocks.Kiwifroot.instances.HUE );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField(new Blockly.FieldDropdown( [ 
        	["first", "getChildByName"], 
        	["last", "getLastChildByName"], 
        	["random", "getRandomChildByName"]
        ]), "METHOD")
        .appendField( Blockly.Msg.KF_CLASSES_GET_INSTANCE_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip( Blockly.Msg.KF_CLASSES_GET_INSTANCE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_classes_get_all_instances'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_HELPURL );
    this.setColour( Blockly.Blocks.lists.HUE );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setTooltip( Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_classes_create_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_HELPURL );
    this.setColour(290);
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_BEFORE );
    this.appendValueInput("X_LOC")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_AFTER );
    this.appendValueInput("Y_LOC")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_TOOLTIP );
  }
};