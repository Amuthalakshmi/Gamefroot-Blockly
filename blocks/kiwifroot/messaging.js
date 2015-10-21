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
 * @fileoverview Kiwifroot blocks for the messaging features 
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.messaging');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_messaging_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_INSTANCE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_INSTANCE_MESSAGE_BEFORE );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_MESSAGING_INSTANCE_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_INSTANCE_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_messaging_list'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_LIST_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_LIST_MESSAGE_BEFORE );
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField( Blockly.Msg.KF_MESSAGING_LIST_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_LIST_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_messaging_everyone'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_EVERYONE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput( "MESSAGE" )
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_EVERYONE_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_EVERYONE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_messaging_everyone_value'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_MESSAGE_ONE );
    this.appendValueInput("VALUE")
        .appendField( Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_messaging_instance_value'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_MESSAGE_ONE );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_MESSAGE_TWO );
    this.appendValueInput("VALUE")
        .appendField( Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_MESSAGE_THREE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_TOOLTIP );
  }
};