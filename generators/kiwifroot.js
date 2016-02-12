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
 * @author benjamin.p.harding@gmail.com (Benjmamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot');

goog.require('Blockly.JavaScript');
goog.require('Blockly.JavaScript.logic');
goog.require('Blockly.JavaScript.variables');


/**
 * Kiwifroot code generator.
 * @type !Blockly.Generator
 */
Blockly.Kiwifroot = Blockly.JavaScript;

/**
 * The indent symbol used in code generation - we use tabs
 * @type {string}
 */
Blockly.Kiwifroot.INDENT = '\t';

/**
 * The default template to use when compiling for Kiwifroot
 * @const
 * @type {string}
 */
Blockly.Kiwifroot.defaultTemplate =
  // Define all the settings for the plugin (each new script is treated a component)
  'Kiwi.Plugins.##PLUGIN_NAME## = {\n'+
  '\tname:\'##PLUGIN_NAME##\',\n'+
  '\tversion:\'##PLUGIN_VERSION##\',\n'+
  '\tminimumKiwiVersion:\'##MIN_KIWI_VERSION##\',\n'+
  '\tkiwifrootPlugins:##KIWIFROOT_PLUGINS##\n'+
  '};\n\n'+
  // Register the plugin with Kiwi.js
  'Kiwi.PluginManager.register(Kiwi.Plugins.##PLUGIN_NAME##);\n\n'+

  // Here we define the constructor for the plugin
  'Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME## = function(gameObject){\n'+
  // Call the base component constructor
  '\tKiwi.Component.call(this, gameObject, \'##PLUGIN_NAME##\');\n\n'+
  // Set this components state property
  '\tthis.state = this.owner.state;\n'+
  '\tthis.box = this.owner.components.getComponent("Box");\n\n'+
  // This is where the constructor additions will be made
  '{{\t,CONSTRUCTOR,\n}}\n'+
  '};\n\n'+
  // Extend GameObject
  'Kiwi.extend(Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME##, Kiwi.Component);\n\n'+

  //Boot method
  'Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME##.prototype.boot = function() {\n' +
  '{{\t,BOOT,\n}}\n'+
  '{{\t,BOOT_END,\n}}\n'+
  '};\n\n'+

  // Supply an add method for the plugin
  'Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME##.add = function(state, gameObject, params){\n'+
  '\tvar component = new Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME##(gameObject);\n'+
  '\tgameObject.components.add(component);\n\n'+
  '{{\t,WHEN_ADDED,\n}}\n'+
  '};\n\n'+
  // Add all the definitions here, they will all be prefixed with the namespace and
  // will include two newline breaks after each definition.
  '{{Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME##.prototype.,DEFINITIONS,\n\n}}\n\n'+

  // Here we define the destructor for the plugin
  'Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME##.prototype.destroy = function(){\n'+
  // This is where the destructor additions will be made
  '{{\t,DESTRUCTOR,\n}}\n\n'+
  '\tKiwi.Component.prototype.destroy.call( this );\n' +
  '\tthis.state = null;\n' +
  '\tthis.box = null;\n' +
  '};\n\n' +

  // Add the component to the list of plugins
  'Kiwi.Plugins.##PLUGIN_NAME##.kiwifrootPlugins.push({\n'+
    '\ttype: Kiwifroot.Plugins.COMPONENT,\n'+
    '\tname: \'##PLUGIN_NAME##\',\n'+
    '\tnamespace: Kiwi.Plugins.##PLUGIN_NAME##.##CLASS_NAME##\n'+
  '});\n\n';

/**
 * The default macro properties to use when compiling for Kiwifroot
 * @const
 * @type {object}
 */
Blockly.Kiwifroot.defaultMacros = {
  'PLUGIN_NAME':'MyScript',
  'CLASS_NAME':'Component',
  'PLUGIN_VERSION':'0.5.0',
  'MIN_KIWI_VERSION':'1.1.1',
  'KIWIFROOT_PLUGINS':'[]'
};

/** 
 * The constructor section of the template
 * @const
 * @type {string} 
 */
Blockly.Kiwifroot.CONSTRUCTOR = 'CONSTRUCTOR';

/**
 * The template section inside the 'add' method of the plugin
 * @const
 * @type {string}
 */
Blockly.Kiwifroot.WHEN_ADDED = 'WHEN_ADDED';
 
/** 
 * The definitions section of the template
 * @const
 * @type {string} 
 */
Blockly.Kiwifroot.DEFINITIONS = 'DEFINITIONS';

/** 
 * The destructor section of the template
 * @const
 * @type {string} 
 */
Blockly.Kiwifroot.DESTRUCTOR = 'DESTRUCTOR';

/**
 * The boot method section of the template
 * @const
 * @type {string}
 */
Blockly.Kiwifroot.BOOT = 'BOOT';

/** 
 * At the end of the boot method.
 * @const
 * @type {string}
 */
Blockly.Kiwifroot.BOOT_END = 'BOOT_END';

/**
 * The array of sounds, contains tuples of names and ids
 * From now on you can only reference sounds through the sound type
 * @type {array}
 * @deprecated
 */
Blockly.Kiwifroot.sounds_ = [
  ["Ammo","5"],
  ['Machine Gun',"11"]
];

/**
 * The array of instance ids. Contains tuples of names/ids
 * @type {array}
 * @deprecated
 */
Blockly.Kiwifroot.instances_ = [
  ['RedMushroom', "red-mushroom"],
  ['GreenMushroom', "green-mushroom"]
];

/**
 * The array of classes. 
 * @type {array}
 * @deprecated
 */
Blockly.Kiwifroot.classes_ = [
  ["RedMushroom", "red-mushroom"], 
  ["GreenMushroom", "green-mushroom"]
];

// TODO ensure that variables/commands do not conflict with template macros
// TODO add the kiwi.js reserved words
Blockly.Kiwifroot.addReservedWords(
  'state,game,arcadesystem,arcadephysics,component,box,owner,getComponent,' +
  'animation,this,destroy,boot,objType,postUpdate,preUpdate,update,active,name'
  );

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
 * Adds a new addition provided an addition with the given uniqueId has not
 * already been added to the given section
 * @param {string} uniqueId The id that must be unique in order to make the addition
 * @param {string} section The section to add the code to
 * @param {string} code The javascript to insert into the section
 */
Blockly.Kiwifroot.provideAdditionOnce = function(uniqueId, section, code){
  if (!Blockly.Kiwifroot.sectionIds_[section]) {
    Blockly.Kiwifroot.sectionIds_[section] = [];
  } 
  var arr = Blockly.Kiwifroot.sectionIds_[section];
  if (arr.indexOf(uniqueId) < 0) {
    arr.push(uniqueId);
    Blockly.Kiwifroot.provideAddition(section,code);
  }
};

/**
 * Sets the macros object that will be applied to the template
 * (Would prefer to send arguments to init but that would mean changing blockly.Generator)
 * @param {Object} macros The new macros object containing all the symbols to be applied to the template
 */
Blockly.Kiwifroot.setMacros = function(macros){
  Blockly.Kiwifroot.macros = macros;
};

/**
 * Sets the template to use when generating code
 * (Would prefer to send arguments to init but that would mean changing blockly.Generator)
 * @param {String} template The template to use, see Blockly.Kiwifroot.defaultTemplate for an example
 */
Blockly.Kiwifroot.setTemplate = function(template){
  Blockly.Kiwifroot.template = template;
};

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.Kiwifroot.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code. (TODO remove)
  Blockly.Kiwifroot.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Kiwifroot.functionNames_ = Object.create(null);

  // The template to use to generate the code
  Blockly.Kiwifroot.template_ = Blockly.Kiwifroot.template || Blockly.Kiwifroot.defaultTemplate;
  // The macros to replace in the template
  Blockly.Kiwifroot.macros_ = Blockly.Kiwifroot.macros || Blockly.Kiwifroot.defaultMacros;
  // An object containing all the sections of code to insert into the template
  Blockly.Kiwifroot.sections_ = {};
  // An object containing all the sections of code and the unique ids that have been added to them
  Blockly.Kiwifroot.sectionIds_ = {};
  // The special symbols to interpret from the template
  Blockly.Kiwifroot.openMacroDelimeter_ = '##';
  Blockly.Kiwifroot.closeMacroDelimeter_ = '##';
  Blockly.Kiwifroot.openSectionDelimeter_ = '{{';
  Blockly.Kiwifroot.closeSectionDelimeter_ = '}}';

  Blockly.Kiwifroot.defs_ = Object.create(null);

  // Create the database of names
  if (!Blockly.Kiwifroot.variableDB_) {
    Blockly.Kiwifroot.variableDB_ =
        new Blockly.Names(Blockly.Kiwifroot.RESERVED_WORDS_);
    Blockly.Kiwifroot.localVariableDB_ = 
        new Blockly.Names(Blockly.Kiwifroot.RESERVED_WORDS_);
    Blockly.Kiwifroot.globalVariableDB_ =
        new Blockly.Names(Blockly.Kiwifroot.RESERVED_WORDS_);

  } else {
    Blockly.Kiwifroot.variableDB_.reset();
    Blockly.Kiwifroot.localVariableDB_.reset();
    Blockly.Kiwifroot.globalVariableDB_.reset();
  }

  // Provide all the custom variables
  var variables = Blockly.Variables.allVariablesAndTypes(workspace);

  for (var x = 0; x < variables.length; x++) {
    var variableName = variables[x][0];
    var variableType = variables[x][1];

    var safeVariableName = Blockly.Kiwifroot.variableDB_.getName(variables[x][0],
        Blockly.Variables.NAME_TYPE);

    // For now gamefroot will pass the variable params with their unsafe names
    // that's fine, maybe we'll want to change it to prevent some weird behaviour
    // but it *should* be okay.
    if( variableType === "Instance") {
      var code  = 'component.' + safeVariableName + ' = ( typeof params["' + variableName + '"] !== "undefined" ) ? ';
          code += 'state.getChildByID( params["' + variableName + '"], true ) : ';
          code += 'null;'; 
    } else {
      var code = 'component.' + safeVariableName + ' = params["'+variableName+'"];'; 
    }
    Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.WHEN_ADDED,code);
  }
};

/**
 * Prepend the generated code with the definitions required for plugin
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Kiwifroot.finish = function(code) {
  // 
  for (var name in Blockly.Kiwifroot.defs_) {
    var def = Blockly.Kiwifroot.defs_[name];
    var code = '';
    for (var i = 0, n = def.code.length; i < n; i++) {
      code += def.prefix + def.code[i] + def.suffix;
    }
    var fullCode = def.name + ' = function(' + def.args + '){\n'+def.head + code + def.foot + '};';
    Blockly.Kiwifroot.definitions_[def.name] = fullCode;
  }
  // Support the old definitions way of doing things
  for (var name in Blockly.Kiwifroot.definitions_) {
    Blockly.Kiwifroot.provideAddition(
        Blockly.Kiwifroot.DEFINITIONS,
        Blockly.Kiwifroot.definitions_[name]);
  }
  // Generate everything from the template we were provided
  var code = Blockly.Kiwifroot.generateFromTemplate_();
  return code;
};

/**
 * Generates the final code output from the template/sections/macros provided
 * @return {string} The code generated
 */
Blockly.Kiwifroot.generateFromTemplate_ = function(){
  var str = Blockly.Kiwifroot.template_;
  // Gather the identifiers used in the template
  var symbols = Blockly.Kiwifroot.macros_;
  var macroStart = Blockly.Kiwifroot.openMacroDelimeter_;
  var macroEnd = Blockly.Kiwifroot.closeMacroDelimeter_;
  var sectionStart = Blockly.Kiwifroot.openSectionDelimeter_;
  var sectionEnd = Blockly.Kiwifroot.closeSectionDelimeter_;
  // Prepare the delimeters for use in regexp
  var safeMacroStart = regexpQuote(macroStart);
  var safeMacroEnd = regexpQuote(macroEnd);
  var safeSectionStart = regexpQuote(sectionStart);
  var safeSectionEnd = regexpQuote(sectionEnd);

  var MACRO_RE = safeMacroStart+".*?"+safeMacroEnd;
  var macrosInTemplate = str.match(new RegExp(MACRO_RE,'g'));
  var SECTION_RE = safeSectionStart+"(.|\n)*?"+safeSectionEnd;
  var sectionsInTemplate = str.match(new RegExp(SECTION_RE,'g'));
  var k = 0;
  var MAX_NESTING = 100;
  
  // While there are still symbols in the template, find and replace them
  while (((macrosInTemplate && macrosInTemplate.length > 0)
    || (sectionsInTemplate && sectionsInTemplate.length > 0)) 
    && k++ < MAX_NESTING) {
    // Replace the macros in the template
    if (macrosInTemplate) {
      for (var i = 0, n = macrosInTemplate.length; i < n; i++){
        var macroNameWithSymbols = macrosInTemplate[0];
        var macroName = macroNameWithSymbols.slice(
            macroStart.length,macroNameWithSymbols.length-macroEnd.length);
        // TODO if = is present, set the symbol to a new value
        if (!symbols.hasOwnProperty(macroName)) throw 'No macro provided with the name: '+macroName;
        str = str.replace(new RegExp(safeMacroStart+macroName+safeMacroEnd), 
            symbols[macroName]);
      }
    }
    // Replace the sections in the template
    if (sectionsInTemplate) {
      for (var i = 0, n = sectionsInTemplate.length; i < n; i++) {
        var sectionNameWithSymbols = sectionsInTemplate[i];
        var sectionNameWithArgs = sectionNameWithSymbols.slice(
            sectionStart.length,sectionNameWithSymbols.length-sectionEnd.length);
        // Find any prefix/suffix args + the name of the section
        var sectionName = sectionNameWithArgs;
        var prefix = '';
        var suffix = '';
        var args = sectionName.split(',');
        if (args.length > 1) {
          prefix = args[0];
          sectionName = args[1];
          if (args.length > 2) {
              suffix = args[2];
              if (args.length > 3) throw 'Too many arguments provided in section: '+sectionName;
          }
        }
        // Generate the code for this section
        var code = Blockly.Kiwifroot.generateSection_(sectionName,prefix,suffix);
        var re = safeSectionStart+regexpQuote(sectionNameWithArgs)+safeSectionEnd;
        str = str.replace(new RegExp(re),code);
      }
    }
    // If then new sections added any new macros/templates, then we need to make
    // sure that we replace those too
    macrosInTemplate = str.match(new RegExp(MACRO_RE,'g'));
    sectionsInTemplate = str.match(new RegExp(SECTION_RE,'g'));
  }

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
      code += prefix + arr[i];
      if (i < n - 1) code += suffix;
    }
  }
  return code;
};

/**
 * Helper function that automatically escapes all characters in the string
 * that have a special meaning in a regexp expression
 * @param {string} str The string to escape
 * @return {string} The escaped string
 */
var regexpQuote = function(str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

var errorCheck = function( workspace, condition, errorMessage ) {

  workspace = workspace || Blockly.getMainWorkspace();

  var errorCheck = ( !workspace.options || ( workspace.options && ( typeof workspace.options.errorCheck === "undefined" || workspace.options.errorCheck ) ) );
  var code = '';

  //If debugging
  if( errorCheck ) {
    code += 'if( ' + condition + ' ) {\n';
    code += '\tthis.game.reportError("' + errorMessage + '", "' + errorMessage + '", "SCRIPT ERROR");\n';
    code += '\treturn;\n';
    code += '}\n';
  }

  return code;

};

var errorCheckConditional = function( workspace, funcName, input, condition, backupValue, errorMessage ) {

  workspace = workspace || Blockly.getMainWorkspace();

  var errorCheck = ( !workspace.options || ( workspace.options && ( typeof workspace.options.errorCheck === "undefined" || workspace.options.errorCheck ) ) );

  var code = '';

  //If debugging
  if( errorCheck ) {
    
    var func = Blockly.Kiwifroot.provideFunction_('errorCheck' + funcName, [
      Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( input, backup, message ) {',
      '\tif( ' + condition.replace('%1', 'input') + ' ) {',
      '\t\tthis.game.reportError(message, message, "SCRIPT ERROR");',
      '\t\treturn backup;',
      '\t}',
      '\treturn input;', 
      '}'
      ]);

    code += '(this.' + func + '( ' + input + ', ' + backupValue + ', "' + errorMessage + '"))';
  
  } else {

    code += input; 

  }

  return code;

};