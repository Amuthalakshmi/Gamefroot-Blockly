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
 * @fileoverview Instance blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.instances');

goog.require('Blockly.Blocks');

Blockly.Blocks['kiwi_instance_self'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SELF_HELPURL);
    this.setColour( Blockly.Variables.COLOUR_INSTANCE );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_INSTANCE_SELF_MESSAGE);
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SELF_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_set'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendDummyInput()
    	.appendField("set")
        .appendField(new Blockly.FieldDropdown([
            ["x position","x"]
            ,["y position","y"]
            ,["width", "width"]
            ,["height", "height"]
            ,["rotation", "rotation"]
            ,["scale x", "scaleX"]
            ,["scale y", "scaleY"]
            ,["alpha", "alpha"]
            ,["anchor point x", "anchorPointX"]
            ,["anchor point y", "anchorPointY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
    	.appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_get'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR_NUMBER );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["x position","x"]
            ,["y position","y"]
            ,["width", "width"]
            ,["height", "height"]
            ,["rotation", "rotation"]
            ,["scale x", "scaleX"]
            ,["scale y", "scaleY"]
            ,["alpha", "alpha"]
            ,["anchor point x", "anchorPointX"]
            ,["anchor point y", "anchorPointY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_get_visible'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_BOOLEAN );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_MESSAGE );;
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_set_visible'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_MESSAGE_BEFORE );
    this.appendValueInput("VISIBLE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_death'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_DEATH_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_DEATH_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_DEATH_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_tag_management'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_ADD_TAG_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendValueInput("TAG")
        .setCheck("String")
        .appendField( new Blockly.FieldDropdown([ 
            ["add", "addTag"], 
            ["remove", "removeTag"]
        ]), "TYPE")
        .appendField( Blockly.Msg.KF_INSTANCE_ADD_TAG_MESSAGE_BEFORE );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_ADD_TAG_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_ADD_TAG_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_has_tags'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_HAS_TAG_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_BOOLEAN );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance");
    this.appendValueInput("TAG")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_INSTANCE_HAS_TAG_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_INSTANCE_HAS_TAG_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_get_by_tag'] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_HELPURL );
        this.setColour( Blockly.Variables.COLOUR_INSTANCE );
        this.appendValueInput("TAG")
            .setCheck("String")
            .appendField(new Blockly.FieldDropdown( [
                ["first", "getFirstChildByTag"], 
                ["last", "getLastChildByTag"]
            ] ), "TYPE")
            .appendField( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_MESSAGE );
        this.setInputsInline(true);
        this.setOutput(true, "Instance");
        this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_TOOLTIP );
    }
};

Blockly.Blocks['kiwi_instance_get_all_by_tag'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_ARRAY );
    this.appendValueInput("TAG")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_move'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_MOVE_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendValueInput("INST_ONE")
        .setCheck("Instance");
    this.appendValueInput("INST_TWO")
        .setCheck("Instance")
        .appendField(new Blockly.FieldDropdown([
            ["move in front", "addChildAfter"], 
            ["move behind", "addChildBefore"], 
            ["swap with", "swapChildren"]
        ]), "METHOD");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_MOVE_TOOLTIP );
  }
};



Blockly.Blocks['kiwi_instance_execute'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_EXECUTE_HELPURL);
    this.setColour(Blockly.Blocks.STATEMENT_COLOUR);
    this.appendValueInput("TEXT")
        .appendField( Blockly.Msg.KF_INSTANCE_EXECUTE_MESSAGE );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_EXECUTE_TOOLTIP);
  }
};