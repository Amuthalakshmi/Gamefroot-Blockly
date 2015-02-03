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
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.instances');

goog.require('Blockly.Blocks');

(function() {

    Blockly.Blocks['kiwi_instance_self'] = {
      init: function() {
        this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SELF_HELPURL);
        this.setColour(0);
        this.appendDummyInput()
            .appendField(Blockly.Msg.KF_INSTANCE_SELF_MESSAGE);
        this.setInputsInline(true);
        this.setOutput(true, "Instance");
        this.setTooltip(Blockly.Msg.KF_INSTANCE_SELF_TOOLTIP);
      }
    };

    Blockly.Blocks['kiwi_instance_select'] = {
      init: function() {
        this.setHelpUrl( Blockly.Msg.KF_INSTANCE_SELECT_HELPURL );
        this.setColour(0);
        this.appendDummyInput()
            .appendField( Blockly.Msg.KF_INSTANCE_SELECT_MESSAGE )
            .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.instances_ ), "ID");
        this.setInputsInline(true);
        this.setOutput(true, "Instance");
        this.setTooltip( Blockly.Msg.KF_INSTANCE_SELECT_TOOLTIP );
      }
    };

    /**
     * The properties that exist on an instance
     * @const
     * @type {array}
     */
    var instanceProps = [
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
    ];

    Blockly.Blocks['kiwi_instance_set'] = {
      init: function() {
        this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
        this.setColour(230);
        this.appendDummyInput()
        	.appendField("set")
            .appendField(new Blockly.FieldDropdown(instanceProps), "PROP")
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
        this.setColour(230);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(instanceProps), "PROP")
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
        this.setColour(210);
        this.appendDummyInput()
            .appendField( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_MESSAGE );
        this.setOutput(true, "Boolean");
        this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_TOOLTIP );
      }
    };

    Blockly.Blocks['kiwi_instance_set_visible'] = {
      init: function() {
        this.setHelpUrl( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_HELPURL );
        this.setColour(210);
        this.appendValueInput("VISIBLE")
            .setCheck("Boolean")
            .appendField( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_MESSAGE );
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_TOOLTIP );
      }
    };


    /**
    *
    * Tags
    * 
    */
    var tagManagement = [ 
        ["add", "addTag"], 
        ["remove", "removeTag"]
    ];

    Blockly.Blocks['kiwi_instance_tag_management'] = {
      init: function() {
        this.setHelpUrl( Blockly.Msg.KF_INSTANCE_ADD_TAG_HELPURL );
        this.setColour(160);
        this.appendValueInput("TAG")
            .setCheck("String")
            .appendField( new Blockly.FieldDropdown(tagManagement), "TYPE")
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
        this.setColour(210);
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

    var tagTypeSelectors = [
        ["first", "getFirstChildByTag"], 
        ["last", "getLastChildByTag"]
    ];

    Blockly.Blocks['kiwi_instance_get_by_tag'] = {
        init: function() {
            this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_HELPURL );
            this.setColour(0);
            this.appendValueInput("TAG")
                .setCheck("String")
                .appendField(new Blockly.FieldDropdown( tagTypeSelectors ), "TYPE")
                .appendField( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_MESSAGE );
            this.setInputsInline(true);
            this.setOutput(true, "Instance");
            this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_TOOLTIP );
        }
    };

    Blockly.Blocks['kiwi_instance_get_all_by_tag'] = {
      init: function() {
        this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_HELPURL );
        this.setColour(260);
        this.appendValueInput("TAG")
            .setCheck("String")
            .appendField( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_MESSAGE );
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_TOOLTIP );
      }
    };

})();