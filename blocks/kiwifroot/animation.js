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

Blockly.Blocks['kiwi_animation_current_frame'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_CURRENT_FRAME_HELPURL );
    this.setColour(230);
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_CURRENT_FRAME_MESSAGE );
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_ANIMATION_CURRENT_FRAME_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_animation_current_frames'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_CURRENT_FRAMES_HELPURL );
    this.setColour(230);
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_CURRENT_FRAMES_MESSAGE );
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_ANIMATION_CURRENT_FRAMES_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_animation_speed'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_CURRENT_SPEED_HELPURL );
    this.setColour(230);
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_CURRENT_SPEED_MESSAGE );
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ANIMATION_CURRENT_SPEED_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_animation_playing'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_PLAYING_HELPURL );
    this.setColour(210);
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_PLAYING_MESSAGE );
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ANIMATION_PLAYING_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_animation_loops'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ANIMATION_LOOPS_HELPURL );
    this.setColour(210);
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ANIMATION_LOOPS_MESSAGE );
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ANIMATION_LOOPS_TOOLTIP );
  }
};