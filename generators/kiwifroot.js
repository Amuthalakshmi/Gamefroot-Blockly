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
 * The default template to use when compiling for Kiwifroot
 * @const
 * @type {string}
 */
Blockly.Kiwifroot.defaultTemplate =
  'function [[CLASS]](){\n'+
  '{{-CONSTRUCTOR-}}'+
  '}\n\n' +
  'Kiwi.extend([[CLASS]],Kiwifroot.GameObject,\"[[CLASS]]\");\n\n'+
  '{{DEFINITIONS--}}';

/**
 * The default macro properties to use when compiling for Kiwifroot
 * @const
 * @type {object}
 */
Blockly.Kiwifroot.defaultMacros = {
  'CLASS':'MyClass'
}

/** 
 * The constructor section of the template
 * @const
 * @type {string} 
 */
Blockly.Kiwifroot.CONSTRUCTOR = 'CONSTRUCTOR';

/** 
 * The definitions section of the template
 * @const
 * @type {string} 
 */
Blockly.Kiwifroot.DEFINITIONS = 'DEFINITIONS';

/**
 * Adds a new addition to the given section (spectified in the template)
 * @param {string} section The section to add the code to
 * @param {string} code The javascript to insert into the section
 */
Blockly.Kiwifroot.provideAddition = function(section,code){
  if (!Blockly.Kiwifroot.sections_[section]) {
    Blockly.Kiwifroot.sections_[section] = [];
  }
  Blockly.Kiwifroot.sections_[section].push(code);
};

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
  // The template to use to generate the codee
  Blockly.Kiwifroot.template_ = Blockly.Kiwifroot.defaultTemplate;
  // The macros to replace in the template
  Blockly.Kiwifroot.macros_ = Blockly.Kiwifroot.defaultMacros;
  // An object containing all the sections of code to insert into the template
  Blockly.Kiwifroot.sections_ = {};
  // The special symbols to interpret from the template
  Blockly.Kiwifroot.openMacroDelimeter_ = '[[';
  Blockly.Kiwifroot.closeMacroDelimeter_ = ']]';
  Blockly.Kiwifroot.openSectionDelimeter_ = '{{';
  Blockly.Kiwifroot.closeSectionDelimeter_ = '}}';

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
  // Support the old definitions way of doing things
  var definitions = [];
  for (var name in Blockly.Kiwifroot.definitions_) {
    Blockly.Kiwifroot.provideAddition(
        Blockly.Kiwifroot.DEFINITIONS,
        Blockly.Kiwifroot.definitions_[name]+'\n\n');
  }
  // Generate everything from the template we were provided
  return Blockly.Kiwifroot.generateFromTemplate_();
};

/**
 * Generates the final code output from the template/sections/macros provided
 * @return {string} The code generated
 */
Blockly.Kiwifroot.generateFromTemplate_ = function(){
  var str = Blockly.Kiwifroot.template_;
  var symbols = Blockly.Kiwifroot.macros_;
  var macroStart = Blockly.Kiwifroot.openMacroDelimeter_;
  var macroEnd = Blockly.Kiwifroot.closeMacroDelimeter_;
  var sectionStart = Blockly.Kiwifroot.openSectionDelimeter_;
  var sectionEnd = Blockly.Kiwifroot.closeSectionDelimeter_;

  // Calculate the indent for each section of the template
  var indent = {};
  var newlines = {};
  var sectionsWithIndent = str.match(new RegExp(sectionStart+".*?"+sectionEnd,'g'));
  for (var i = 0, n = sectionsWithIndent.length; i < n; i++) {
    var sectionNameWithSymbols = sectionsWithIndent[i];
    var sectionName = sectionNameWithSymbols.slice(
        sectionStart.length,sectionNameWithSymbols.length-sectionEnd.length);
    var indentForSection = 0;
    while (sectionName.charAt(0) === '-' && sectionName.length > 0) {
      sectionName = sectionName.slice(1);
      indentForSection++;
    }
    var newlinesForSection = 0;
    while (sectionName.charAt(sectionName.length-1) === '-' && sectionName.length > 0) {
      sectionName = sectionName.slice(0,sectionName.length-1);
      newlinesForSection++;
    }
    indent[sectionName] = indentForSection;
    newlines[sectionName] = newlinesForSection;
  }
  // Replace all the macro values
  for (var macro in symbols){
    str = replaceAll(str, macroStart+macro+macroEnd, symbols[macro]);
  }
  // Replace all the sections with their code
  for (var section in Blockly.Kiwifroot.sections_) {
    var prefix = '';
    var suffix = '';
    for (var j = 0; j < indent[section]; j++) prefix += Blockly.Kiwifroot.INDENT;
    for (var j = 0; j < newlines[section]; j++) suffix += '\n';
    var code = Blockly.Kiwifroot.generateSection_(section,prefix,suffix);
    str = str.replace(new RegExp(sectionStart+"-*?"+section+"-*?"+sectionEnd,'g'),code);
  }
  // TODO remove all unused macros and sections
  return str;
};

/**
 * Generates a section of code
 * @param {string} section The name of the section to generate
 * @return The section of the code 
 */
Blockly.Kiwifroot.generateSection_ = function(section,prefix,suffix){
  var code = '';
  var arr = Blockly.Kiwifroot.sections_[section];
  if (arr) {
    for (var i=0, n=arr.length; i < n; i++){
      code += prefix + arr[i] + suffix;
    }
  }
  return code;
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

/**
 * Helper function for replacing all occurances of a word
 * in a given string
 * @param {string} str The string to replace occurences in
 * @param {string} str1 The string to replace
 * @param {string} str2 The string to replace the first string with
 * @param {boolean} ignoreCase Whether or not the replace should be case sensitive
 * @return {string} The modified string
 */
var replaceAll = function(str, str1, str2, ignoreCase) {
    return str.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignoreCase?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 
