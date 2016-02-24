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
 * @fileoverview Hitbox blocks for Gamefroot
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.hitbox');

goog.require('Blockly.Blocks');

Blockly.Blocks['kiwi_hitbox_position_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_HITBOX_POSITION_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_HITBOX_POSITION_GET_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["x","x"]
            ,["y","y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_HITBOX_POSITION_GET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_hitbox_dimensions_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_HITBOX_DIMENSIONS_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_HITBOX_DIMENSIONS_GET_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["width","width"]
            ,["height","height"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_HITBOX_DIMENSIONS_GET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_hitbox_offset_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_HITBOX_OFFSET_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_HITBOX_OFFSET_GET_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["x","x"]
            ,["y","y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_HITBOX_OFFSET_GET_TOOLTIP );
  }
};
    