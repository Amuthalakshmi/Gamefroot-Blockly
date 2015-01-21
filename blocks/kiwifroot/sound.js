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
 * @fileoverview Sound blocks for Gamefroot
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.sound');

goog.require('Blockly.Blocks');

Blockly.Blocks['kiwi_sound_play_background'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_HELPURL);
    this.setColour(230);
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_MESSAGE)
        .appendField(new Blockly.FieldDropdown(Blockly.Kiwifroot.sounds_), "SOUND");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_sound_stop_background'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_SOUND_STOP_BACKGROUND_HELPURL);
    this.setColour(230);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_SOUND_STOP_BACKGROUND_MESSAGE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_SOUND_STOP_BACKGROUND_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_sound_play_effect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_SOUND_PLAY_EFFECT_HELPURL);
    this.setColour(230);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_SOUND_PLAY_EFFECT_MESSAGE)
        .appendField(new Blockly.FieldDropdown(Blockly.Kiwifroot.sounds_), "SOUND");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_SOUND_PLAY_EFFECT_TOOLTIP);
  }
};

