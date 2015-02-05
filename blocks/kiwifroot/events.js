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
 * @fileoverview Event blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.events');

goog.require('Blockly.Blocks');

Blockly.Blocks.Kiwifroot.events.HUE = 45;

Blockly.Blocks['kiwi_event_create'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_CREATE_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_CREATE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_CREATE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_remove'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_REMOVE_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_REMOVE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_REMOVE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_constantly'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_CONSTANTLY_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_CONSTANTLY_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_CONSTANTLY_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_stage_press'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_STAGE_PRESS_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_stage_release'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_STAGE_RELEASE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_inst_press'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_PRESS_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['kiwi_event_inst_release'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_RELEASE_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['kiwi_event_key_press'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_PRESS_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['kiwi_event_key_release'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_RELEASE_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['kiwi_event_time'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_TIME_HELPURL );
    this.setColour( Blockly.Blocks.Kiwifroot.events.HUE );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_TIME_MESSAGE_BEFORE );
    this.appendValueInput("MILLISECOND")
        .setCheck("Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_TIME_MESSAGE_AFTER );
    this.setTooltip(Blockly.Msg.KF_EVENT_TIME_TOOLTIP );
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};
