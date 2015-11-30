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
 * @fileoverview ArcadePhysics blocks for Gamefroot
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.arcadephysics');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_arcadephysics_set_collisions'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldDropdown([
        	["any", "Kiwi.Components.ArcadePhysics.ANY"], 
        	["left", "Kiwi.Components.ArcadePhysics.LEFT"], 
        	["right", "Kiwi.Components.ArcadePhysics.RIGHT"], 
        	["top", "Kiwi.Components.ArcadePhysics.UP"], 
        	["bottom", "Kiwi.Components.ArcadePhysics.DOWN"]
        ]), "PROP")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_set_gravity'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_GRAVITY_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_GRAVITY_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["x", "x"], 
            ["y", "y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_GRAVITY_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_gravity'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_GRAVITY_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_GET_GRAVITY_MESSAGE )
        .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_GRAVITY_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_probe'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("X_POS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_MESSAGE );
    this.appendValueInput("Y_POS")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_probe_layer'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("X_POS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_MESSAGE_ONE )
        .appendField(new Blockly.FieldDropdown([
            ["any", "Kiwi.Components.ArcadePhysics.ANY"], 
            ["left", "Kiwi.Components.ArcadePhysics.LEFT"], 
            ["right", "Kiwi.Components.ArcadePhysics.RIGHT"], 
            ["top", "Kiwi.Components.ArcadePhysics.UP"], 
            ["bottom", "Kiwi.Components.ArcadePhysics.DOWN"]
        ]), "SIDE")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_MESSAGE_TWO );
    this.appendValueInput("Y_POS")
        .setCheck("Number");
    this.appendValueInput("LAYER")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_MESSAGE_THREE );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_get_rotation_from'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_ROTATION_FROM_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_GET_ROTATION_FROM_MESSAGE )
        .appendField(new Blockly.FieldDropdown( [
            ["velocity", "velocity"], 
            ["acceleration", "acceleration"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_ROTATION_FROM_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_enabled'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_PHYSICS_ENABLED_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_PHYSICS_ENABLED_MESSAGE );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_PHYSICS_ENABLED_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_get_enabled'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_PHYSICS_ENABLED_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_GET_PHYSICS_ENABLED_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip(Blockly.Msg.KF_ARCADEPHYSICS_GET_PHYSICS_ENABLED_TOOLTIP);
  }
};


// Tonnes more blocks
// 22/10/2015

Blockly.Blocks['kiwi_arcadephysics_get_numeric_velocity'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
          ["velocity x", "velocity.x"], 
          ["velocity y", "velocity.y"]
        ] ), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_get_numeric_acceleration'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
          ["acceleration x", "acceleration.x"], 
          ["acceleration y", "acceleration.y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_numeric_max_velo'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
          ["max velocity x", "maxVelocity.x"], 
          ["max velocity y", "maxVelocity.y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_numeric_drag'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
          ["drag x", "drag.x"], 
          ["drag y", "drag.y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_numeric_misc'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
          ["mass", "mass"], 
          ["elasticity", "elasticity"], 
          ["layer", "layer"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP );
  }
};



Blockly.Blocks['kiwi_arcadephysics_set_numeric_velocity'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE + ' velocity' )
        .appendField(new Blockly.FieldDropdown([
          ["x", "velocity.x"], 
          ["y", "velocity.y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_numeric_acceleration'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE + ' acceleration')
        .appendField(new Blockly.FieldDropdown([
          ["x", "acceleration.x"], 
          ["y", "acceleration.y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_set_numeric_max_velo'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE + ' max velocity')
        .appendField(new Blockly.FieldDropdown([
          ["x", "maxVelocity.x"], 
          ["y", "maxVelocity.y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_numeric_drag'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE + ' drag')
        .appendField(new Blockly.FieldDropdown([
          ["x", "drag.x"], 
          ["y", "drag.y"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_set_numeric_misc'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
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



Blockly.Blocks['kiwi_arcadephysics_set_boolean_gravity'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE + " reacts to gravity" );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_boolean_immovable'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE + " immovable" );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_set_boolean_moves'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE + " moves");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_set_boolean_enabled'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE + " physics enabled" );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_boolean_gravity'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( "reacts to gravity" );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_get_boolean_immovable'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( "immovable" );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_boolean_moves'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( "moves" );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_boolean_enabled'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( "physics enabled" );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP );
  }
};



Blockly.Blocks['kiwi_arcadephysics_get_collisions_touching'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( "touching " + Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_BEFORE )
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


Blockly.Blocks['kiwi_arcadephysics_get_collisions_was_touching'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( "was touching " + Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_BEFORE)
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


Blockly.Blocks['kiwi_arcadephysics_get_collisions_can_collide'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( "can collide " + Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_BEFORE )
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
