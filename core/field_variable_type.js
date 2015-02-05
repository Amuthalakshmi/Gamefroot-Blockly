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
 * @fileoverview Variable type input field.
 * @author rani_sputnik@hotmail (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.FieldVariableType');

goog.require('Blockly.FieldDropdown');
goog.require('Blockly.Msg');
goog.require('Blockly.Variables');


/**
 * Class for a variable's dropdown field.
 * @param {?string} varname The default name for the variable.  If null,
 *     a unique variable name will be generated.
 * @extends {Blockly.FieldDropdown}
 * @constructor
 */
Blockly.FieldVariableType = function(types) {
  Blockly.FieldVariableType.superClass_.constructor.call(this,
      types, Blockly.FieldVariableType.dropdownChange);
};
goog.inherits(Blockly.FieldVariableType, Blockly.FieldDropdown);

/**
 * Install this dropdown on a block.
 * @param {!Blockly.Block} block The block containing this text.
 */
Blockly.FieldVariableType.prototype.init = function(block) {
  if (this.sourceBlock_) {
    // Dropdown has already been initialized once.
    return;
  }

  if (!this.getValue()) {
    // Variables without names get uniquely named for this workspace.
    if (block.isInFlyout) {
      var workspace = block.workspace.targetWorkspace;
    } else {
      var workspace = block.workspace;
    }
    this.setValue(Blockly.Variables.generateUniqueName(workspace));
  }
  Blockly.FieldVariableType.superClass_.init.call(this, block);
};

/**
 * Clone this FieldVariableType.
 * @return {!Blockly.FieldVariableType} The result of calling the constructor again
 *   with the current values of the arguments used during construction.
 */
Blockly.FieldVariableType.prototype.clone = function() {
  return new Blockly.FieldVariableType(this.getType(), this.changeHandler_);
};

/**
 * Event handler for a change in type
 */
Blockly.FieldVariableType.dropdownChange = function(text) {
  var workspace = this.sourceBlock_.workspace;
  var varname = this.sourceBlock_.getVars()[0];
  Blockly.Variables.changeType(varname, text, workspace);
  return undefined;
};
