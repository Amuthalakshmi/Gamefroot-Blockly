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

Blockly.Blocks['kiwi_arcadephysics_get_numeric'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.HUE_NUMBER );
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
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
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
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
        	["reacts to gravity", "gravity"], 
        	["immovable", "immovable"], 
        	["moves", "moves"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_boolean'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.HUE_BOOLEAN );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        	["reacts to gravity", "gravity"], 
        	["immovable", "immovable"], 
        	["moves", "moves"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_get_collisions'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Variables.HUE_BOOLEAN );
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


Blockly.Blocks['kiwi_arcadephysics_set_collisions'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
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