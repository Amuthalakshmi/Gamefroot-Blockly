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

Blockly.Blocks['kiwi_animation'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_HELPURL);
    this.setColour(270);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Kiwifroot.animations_), "ANIMATION");
    this.setOutput(true, "Animation");
    this.setTooltip(Blockly.Msg.KF_ANIMATION_TOOLTIP);
  }
};


Blockly.Blocks['kiwi_animation_play'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_PLAY_HELPURL);
    this.setColour(270);
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_ANIMATION_PLAY_MESSAGE);
    this.appendValueInput("ANIMATION")
        .setCheck("Animation");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_ANIMATION_PLAY_TOOLTIP);
  }
};


Blockly.Blocks['kiwi_animation_pause'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_PAUSE_HELPURL);
    this.setColour(270);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_ANIMATION_PAUSE_MESSAGE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_ANIMATION_PAUSE_TOOLTIP);
  }
};


Blockly.Blocks['kiwi_animation_resume'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_RESUME_HELPURL);
    this.setColour(270);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_ANIMATION_RESUME_MESSAGE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_ANIMATION_RESUME_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_animation_next_frame'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_NEXT_FRAME_HELPURL);
    this.setColour(270);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_ANIMATION_NEXT_FRAME_MESSAGE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_ANIMATION_NEXT_FRAME_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_animation_prev_frame'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_PREV_FRAME_HELPURL);
    this.setColour(270);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_ANIMATION_PREV_FRAME_MESSAGE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_ANIMATION_PREV_FRAME_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_animation_current'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_ANIMATION_CURRENT_HELPURL);
    this.setColour(270);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_ANIMATION_CURRENT_MESSAGE);
    this.setOutput(true, "Animation");
    this.setTooltip(Blockly.Msg.KF_ANIMATION_CURRENT_TOOLTIP);
  }
};


var animationNumberProps = [
        ["frame", "currentAnimation.frameIndex + 1"], 
        ["frames", "currentAnimation.length"], 
        ["speed", "currentAnimation.speed"]
    ];

Blockly.Blocks['kiwi_animation_numbers'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_NUMBERS_HELPURL );
    this.setColour(230);
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_NUMBERS_MESSAGE )
        .appendField(new Blockly.FieldDropdown(animationNumberProps), "NUMBERS");
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ANIMATION_NUMBERS_TOOLTIP );
  }
};


var animationBooleanProps = [
    ["is playing", "isPlaying"],
    ["loops", "currentAnimation.loop"]
];


Blockly.Blocks['kiwi_animation_booleans'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_BOOLEAN_HELPURL );
    this.setColour(210);
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_BOOLEAN_MESSAGE )
        .appendField(new Blockly.FieldDropdown(animationBooleanProps), "BOOLEANS");
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ANIMATION_BOOLEAN_TOOLTIP );
  }
};
