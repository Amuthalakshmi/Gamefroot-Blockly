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
 * @fileoverview Class blocks for Kiwifroot.
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.classes');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_classes_instance_type'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_INSTANCE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_CLASSES_INSTANCE_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Class");
    this.setTooltip( Blockly.Msg.KF_CLASSES_INSTANCE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_classes_get_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_GET_INSTANCE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField(new Blockly.FieldDropdown( [ 
        	["first", "getChildByName"], 
        	["last", "getLastChildByName"], 
        	["random", "getRandomChildByName"]
        ]), "METHOD")
        .appendField( Blockly.Msg.KF_CLASSES_GET_INSTANCE_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip( Blockly.Msg.KF_CLASSES_GET_INSTANCE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_classes_get_all_instances'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setTooltip( Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_classes_get_by_text'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_GET_BY_TEXT_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_CLASSES_GET_BY_TEXT_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Class");
    this.setTooltip( Blockly.Msg.KF_CLASSES_GET_BY_TEXT_TOOLTIP );
  }
};


// 

Blockly.Blocks['kiwi_classes_create_instance_with_var_local'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('instance', null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR' );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};