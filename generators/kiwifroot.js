/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Helper functions for generating Kiwifroot plugins for blocks.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Kiwifroot');

goog.require('Blockly.JavaScript');
goog.require('Blockly.JavaScript.colour');
goog.require('Blockly.JavaScript.lists');
goog.require('Blockly.JavaScript.logic');
goog.require('Blockly.JavaScript.loops');
goog.require('Blockly.JavaScript.math');
goog.require('Blockly.JavaScript.procedures');
goog.require('Blockly.JavaScript.text');
goog.require('Blockly.JavaScript.variables');


/**
 * Kiwifroot code generator.
 * @type !Blockly.Generator
 */
Blockly.Kiwifroot = Blockly.JavaScript;

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.Kiwifroot.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.Kiwifroot.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Kiwifroot.functionNames_ = Object.create(null);
  // Creates a list of all the code to append to the constructor of this component
  Blockly.Kiwifroot.constructorAdditions_ = [];

  if (!Blockly.Kiwifroot.variableDB_) {
    Blockly.Kiwifroot.variableDB_ =
        new Blockly.Names(Blockly.Kiwifroot.RESERVED_WORDS_);
  } else {
    Blockly.Kiwifroot.variableDB_.reset();
  }

  var defvars = [];
  var variables = Blockly.Variables.allVariables(workspace);
  for (var x = 0; x < variables.length; x++) {
    defvars[x] = 'var ' +
        Blockly.Kiwifroot.variableDB_.getName(variables[x],
        Blockly.Variables.NAME_TYPE) + ';';
  }
  Blockly.Kiwifroot.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the definitions required for plugin
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Kiwifroot.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];
  definitions.push(Blockly.Kiwifroot.generateConstructor_());
  for (var name in Blockly.Kiwifroot.definitions_) {
    definitions.push(Blockly.Kiwifroot.definitions_[name]);
  }
  return definitions.join('\n\n') + '\n\n\n' + code;
};

/**
 * Generates the constructor code for this entity
 * @private
 * @return {string} The constructor code
 */
Blockly.Kiwifroot.generateConstructor_ = function(){
  var className = 'TestEntity'
  var code = '';
  for (var i=0, n=Blockly.Kiwifroot.constructorAdditions_.length; i < n; i++){
    code += '\t' + Blockly.Kiwifroot.constructorAdditions_[i];
  }
  return 'function ' + className + '() {\n' + code + '}';
}
