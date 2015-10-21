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
 * @fileoverview Animation blocks for Gamefroot
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.animation');

goog.require('Blockly.Blocks');

Blockly.Blocks['kiwi_animation_current'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_CURRENT_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.ANIMATION );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_ANIMATION_CURRENT_MESSAGE);
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.KF_ANIMATION_CURRENT_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_animation_play'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_PLAY_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.ANIMATION );
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_ANIMATION_PLAY_MESSAGE);
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_ANIMATION_PLAY_TOOLTIP);
  }
};



Blockly.Blocks['kiwi_animation_state'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_STATE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.ANIMATION );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["pause", "pause()"],
            ["resume", "resume()"]
        ]), "STATES")
        .appendField( Blockly.Msg.KF_ANIMATION_STATE_MESSAGE );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ANIMATION_STATE_TOOLTIP );
  }
};



Blockly.Blocks['kiwi_animation_frame'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_FRAME_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.ANIMATION );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_FRAME_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldDropdown([
            ["next", "nextFrame()"],
            ["prev", "prevFrame()"]
        ]), "FRAMES")
        .appendField( Blockly.Msg.KF_ANIMATION_FRAME_MESSAGE_AFTER );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ANIMATION_FRAME_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_animation_numbers'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_NUMBERS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.ANIMATION );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_NUMBERS_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["frame", "currentAnimation.frameIndex + 1"], 
            ["frame count", "currentAnimation.length"], 
            ["speed", "currentAnimation.speed"]
        ]), "NUMBERS");
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ANIMATION_NUMBERS_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_animation_booleans'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.ANIMATION );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_BOOLEAN_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
        ["is playing", "isPlaying"],
        ["loops", "currentAnimation.loop"]
    ]), "BOOLEANS");
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ANIMATION_BOOLEAN_TOOLTIP );
  }
};
    