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
 * @fileoverview All deprecated blocks.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */

'use strict';

goog.require('Blockly.Blocks');

// 12 - 02 - 2015

Blockly.Blocks['kiwi_classes_selector'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_SELECTOR_HELPURL );
    this.setColour( Blockly.Variables.HUE_CLASS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.classes_ ), "NAME");
    this.setInputsInline(true);
    this.setOutput( true, "Class" );
    this.setTooltip( Blockly.Msg.KF_CLASSES_SELECTOR_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_messaging_class'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_CLASS_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_BEFORE );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_CLASS_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_stage_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_HUE );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_STAGE_PRESS_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_stage_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_HUE );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_STAGE_RELEASE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_inst_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_PRESS_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_inst_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_RELEASE_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_key_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_PRESS_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_key_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_RELEASE_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 17 - 02 - 2015

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

// 17 - 02 - 2015

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