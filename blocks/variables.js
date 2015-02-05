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
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');

goog.require('Blockly.Blocks');


Blockly.Blocks.variables.HUE = 330;

Blockly.Blocks.variables.TYPE_BOOLEAN = 'Boolean';
Blockly.Blocks.variables.TYPE_NUMBER = 'Number';
Blockly.Blocks.variables.TYPE_STRING = 'String';
Blockly.Blocks.variables.TYPE_INSTANCE = 'Instance';

Blockly.Blocks.variables.TYPES = [
  [Blockly.Msg.KF_TYPE_BOOLEAN, Blockly.Blocks.variables.TYPE_BOOLEAN]
  ,[Blockly.Msg.KF_TYPE_NUMBER, Blockly.Blocks.variables.TYPE_NUMBER]
  ,[Blockly.Msg.KF_TYPE_STRING, Blockly.Blocks.variables.TYPE_STRING]
  ,[Blockly.Msg.KF_TYPE_INSTANCE, Blockly.Blocks.variables.TYPE_INSTANCE]
];

Blockly.Blocks.variables.TYPE_COLOURS = {};
Blockly.Blocks.variables.TYPE_COLOURS[Blockly.Blocks.variables.TYPE_BOOLEAN] = 210;
Blockly.Blocks.variables.TYPE_COLOURS[Blockly.Blocks.variables.TYPE_NUMBER] = 230;
Blockly.Blocks.variables.TYPE_COLOURS[Blockly.Blocks.variables.TYPE_STRING] = 160;
Blockly.Blocks.variables.TYPE_COLOURS[Blockly.Blocks.variables.TYPE_INSTANCE] = 0;

Blockly.Blocks['variables_get'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.setOutput(true);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';

    var varname = this.getFieldValue('VAR');
    var type = Blockly.Variables.typeOf(varname, this.workspace) ||
      Blockly.Blocks.variables.TYPE_BOOLEAN;
    this.type_ = null;
    this.setType(type);
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Notification that a block is searching for a variable type
   * If the name matches one of this block's variables, change it's type.
   * @param {string} type The type of the variable
   * @this Blockly.Block
   */ 
  getType: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return this.type_;
    }
    else return undefined;
  },
  /**
   * Notification that a variable is changing type.
   * If the name matches one of this block's variables, change it's type.
   * @param {string} type The type of the variable
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      this.setType(type)
    }
  }, 
  /**
   * Changes the type of this block
   * @param {string} type The new type for the block
   */
  setType: function(type) {
    if (this.type_ != type) {
      this.type_ = type;
      this.unplug(true, true);
      this.setColour(Blockly.Blocks.variables.TYPE_COLOURS[type]);
      this.changeOutput(this.type_);
    }
  },
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Blocks['variables_set'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        Blockly.Msg.VARIABLES_SET_TITLE + ' %1 %2' +
        Blockly.Msg.VARIABLES_SET_TAIL + ' %3',
        ['TYPE', new Blockly.FieldVariableType(Blockly.Blocks.variables.TYPES)],
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        ['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
    // Apply the current type to the block
    var varname = this.getFieldValue('VAR');
    var type = Blockly.Variables.typeOf(varname, this.workspace) ||
      Blockly.Blocks.variables.TYPE_BOOLEAN;
    this.setType(type);
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },  
  /**
   * Notification that a block is searching for a variable type
   * If the name matches one of this block's variables, change it's type.
   * @param {string} type The type of the variable
   * @this Blockly.Block
   */ 
  getType: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return this.getFieldValue('TYPE')
    }
    else return undefined;
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Notification that a variable is changing type.
   * If the name matches one of this block's variables, change it's type.
   * @param {string} type The type of the variable
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      this.setType(type);
    }
  },
  /**
   * Changes the type of this block
   * @param {string} type The new type for the block
   */
  setType: function(type) {
    this.setFieldValue(type, 'TYPE');
    this.getInput('VALUE').setCheck(type);
  },

  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};
