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
 * @fileoverview All deprecated blocks.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */

'use strict';

goog.require('Blockly.Blocks');

// 19 - 03 - 2015

Blockly.Blocks['kiwi_instance_select'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_SELECT_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_INSTANCE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INSTANCE_SELECT_MESSAGE )
        .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.instances_ ), "ID");
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip( Blockly.Msg.KF_INSTANCE_SELECT_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_classes_selector'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_SELECTOR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_CLASS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.classes_ ), "NAME");
    this.setInputsInline(true);
    this.setOutput( true, "Class" );
    this.setTooltip( Blockly.Msg.KF_CLASSES_SELECTOR_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_messaging_class'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_CLASS_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_BEFORE );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_CLASS_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_stage_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_STAGE_PRESS_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_stage_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_STAGE_RELEASE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_inst_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_PRESS_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_inst_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_RELEASE_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_key_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_PRESS_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_key_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_RELEASE_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 17 - 02 - 2015

Blockly.Blocks['kiwi_camera_lock_on'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_LOCK_ON_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_LOCK_ON_MESSAGE );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_LOCK_ON_TOOLTIP );
  }
};

// 17 - 02 - 2015

Blockly.Blocks['kiwi_camera_unlock'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_UNLOCK_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_UNLOCK_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_UNLOCK_TOOLTIP );
  }
};


// 25 - 05 - 2015


Blockly.Blocks['kiwi_classes_create_instance'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_INSTANCE );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_BEFORE );
    this.appendValueInput("X_LOC")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_AFTER );
    this.appendValueInput("Y_LOC")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_TOOLTIP );
  }
};


// 22/10/2015

Blockly.Blocks['kiwi_arcadephysics_get_numeric'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
          ["velocity x", "velocity.x"], 
          ["velocity y", "velocity.y"], 
          ["acceleration x", "acceleration.x"], 
          ["acceleration y", "acceleration.y"], 
          ["max velocity x", "maxVelocity.x"], 
          ["max velocity y", "maxVelocity.y"], 
          ["drag x", "drag.x"], 
          ["drag y", "drag.y"], 
          ["mass", "mass"], 
          ["elasticity", "elasticity"], 
          ["layer", "layer"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_numeric'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
          ["velocity x", "velocity.x"], 
          ["velocity y", "velocity.y"], 
          ["acceleration x", "acceleration.x"], 
          ["acceleration y", "acceleration.y"], 
          ["max velocity x", "maxVelocity.x"], 
          ["max velocity y", "maxVelocity.y"], 
          ["drag x", "drag.x"], 
          ["drag y", "drag.y"], 
          ["mass", "mass"], 
          ["elasticity", "elasticity"], 
          ["layer", "layer"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_boolean'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
          ["reacts to gravity", "gravity"], 
          ["immovable", "immovable"], 
          ["moves", "moves"],
            ["enabled", "enabled"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_boolean'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["reacts to gravity", "gravity"], 
          ["immovable", "immovable"], 
          ["moves", "moves"],
            ["enabled", "enabled"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_get_collisions'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["touching", "touching"], 
          ["was touching", "wasTouching"], 
          ["can collide", "allowCollisions"]
        ]), "TYPE")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldDropdown([
          ["any", "Kiwi.Components.ArcadePhysics.ANY"],
          ["left", "Kiwi.Components.ArcadePhysics.LEFT"], 
          ["right", "Kiwi.Components.ArcadePhysics.RIGHT"], 
          ["top", "Kiwi.Components.ArcadePhysics.UP"], 
          ["bottom", "Kiwi.Components.ArcadePhysics.DOWN"]
        ]), "PROP")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_get_read_only'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x", "x"],
            ["y", "y"],
            ["width", "camera.width"],
            ["height", "camera.height"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_set'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_BEFORE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [ 
            ["x offset", "offset.x"], 
            ["y offset", "offset.y"], 
            ["x minimum", "minX"], 
            ["y minimum", "minY"],
            ["x maximum", "maxX"], 
            ["y maximum", "maxY"]
        ] ), "METHOD")
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_AFTER );
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_get'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x offset", "offset.x"], 
            ["y offset", "offset.y"], 
            ["x minimum", "minX"], 
            ["y minimum", "minY"],
            ["x maximum", "maxX"], 
            ["y maximum", "maxY"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_TOOLTIP );
  }
};


// 1/12/2015

Blockly.Blocks['kiwi_classes_create_instance_with_var'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('instance'), 'VAR');
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
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};




Blockly.Blocks['kiwi_event_touch_return_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_TOUCH_RETURN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_TOUCH_RETURN_MESSAGE )
        .appendField(new Blockly.FieldVariable('toucher'), 'VAR');
    this.appendStatementInput("STACK");
    this.setTooltip( Blockly.Msg.KF_EVENT_TOUCH_RETURN_TOOLTIP );
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
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};

Blockly.Blocks['kiwi_event_stage_touched'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_MESSAGE )
        .appendField(new Blockly.FieldDropdown( [ 
          ["pressed", "onDown"], 
          ["released", "onUp"]
        ]), "TYPE")
        .appendField(new Blockly.FieldVariable('pointer'), 'VAR');
    this.appendStatementInput("STACK");
    this.setTooltip( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_TOOLTIP );
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
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_POINTER;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_POINTER, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};

Blockly.Blocks['kiwi_event_message_value'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_ONE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_TWO )
        .appendField(new Blockly.FieldVariable('value'), 'VAR');
    this.appendStatementInput("STACK");
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_TOOLTIP );
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
  }
};




Blockly.Blocks['kiwi_primitives_create_rectangle'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('rectangle'), 'VAR');
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_MESSAGE_AFTER );
    this.appendValueInput("HEIGHT")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_TOOLTIP );
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
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};

Blockly.Blocks['kiwi_primitives_create_circle'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('circle'), 'VAR');
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_TOOLTIP );
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
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};

Blockly.Blocks['kiwi_primitives_create_line'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_ONE)
        .appendField(new Blockly.FieldVariable('line'), 'VAR');
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_TWO );
    this.appendValueInput("Y")
        .setCheck("Number");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_THREE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_TOOLTIP );
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
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};

Blockly.Blocks['kiwi_primitives_create_star'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_ONE)
        .appendField(new Blockly.FieldVariable('star'), 'VAR');
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_TWO );
    this.appendValueInput("POINTS")
        .setCheck("Number")
        .appendField(Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_THREE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_FOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_TOOLTIP );
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
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};

Blockly.Blocks['kiwi_primitives_create_polygon'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_ONE )
        .appendField(new Blockly.FieldVariable('polygon'), 'VAR');
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_TWO );
    this.appendValueInput("NUM_EDGES")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_THREE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_FOUR )
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_TOOLTIP );
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
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      setTimeout(function(){
        // This type is immutable, change it back!
        Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
          Blockly.mainWorkspace);
      },1);
    }
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
  }
};