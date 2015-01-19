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
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.events');

goog.require('Blockly.Blocks');

var EVENT_HUE = 195;

Blockly.Blocks['kiwi_event_create'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_CREATE_HELPURL);
    this.setColour(EVENT_HUE);
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_CREATE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_CREATE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_stage_press'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_PRESS_HELPURL);
    this.setColour(EVENT_HUE);
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_STAGE_PRESS_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_stage_release'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_RELEASE_HELPURL);
    this.setColour(EVENT_HUE);
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_STAGE_RELEASE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_key_press'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_PRESS_HELPURL);
    this.setColour(EVENT_HUE);
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
    this.setColour(EVENT_HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_RELEASE_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

