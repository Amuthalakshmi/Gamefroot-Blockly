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
 * @fileoverview Coordinate blocks for Gamefroot
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.coordinate');

goog.require('Blockly.Blocks');

Blockly.Blocks['kiwi_coordinate_create'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_COORDINATE_CREATE_HELPURL );
    this.setTooltip( Blockly.Msg.KF_COORDINATE_CREATE_TOOLTIP );
    this.setColour( Blockly.Variables.COLOUR.MOTION );

    this.appendValueInput("X")
        .setCheck("Number")
        .appendField(Blockly.Msg.KF_COORDINATE_CREATE_MESSAGE );
    this.appendValueInput("Y")
        .setCheck("Number");

    this.setInputsInline(true);
    this.setOutput(true, "Coordinate");
  }
};

Blockly.Blocks['kiwi_coordinate_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_COORDINATE_SET_HELPURL );
    this.setTooltip( Blockly.Msg.KF_COORDINATE_SET_TOOLTIP );
    this.setColour( Blockly.Variables.COLOUR.MOTION );

    this.appendValueInput("COORDINATE")
        .setCheck("Coordinate")
        .appendField(Blockly.Msg.KF_COORDINATE_SET_MESSAGE_ONE )
        .appendField( new Blockly.FieldDropdown( [
          ['x', 'x'],
          ['y', 'y']
        ] ), "PROP")
        .appendField(Blockly.Msg.KF_COORDINATE_SET_MESSAGE_TWO );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(Blockly.Msg.KF_COORDINATE_SET_MESSAGE_THREE );

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['kiwi_coordinate_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_COORDINATE_GET_HELPURL );
    this.setTooltip( Blockly.Msg.KF_COORDINATE_GET_TOOLTIP );
    this.setColour( Blockly.Variables.COLOUR.MOTION );

    this.appendValueInput("COORDINATE")
        .setCheck("Coordinate")
        .appendField(Blockly.Msg.KF_COORDINATE_GET_MESSAGE_ONE )
        .appendField( new Blockly.FieldDropdown( [
          ['x', 'x'],
          ['y', 'y']
        ] ), "PROP")
        .appendField(Blockly.Msg.KF_COORDINATE_GET_MESSAGE_TWO );

    this.setInputsInline(true);
    this.setOutput(true, "Number");
  }
};

Blockly.Blocks[ "kiwi_coordinate_get_angle" ] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_COORDINATE_GET_ANGLE_HELPURL );
    this.setTooltip( Blockly.Msg.KF_COORDINATE_GET_ANGLE_TOOLTIP );
    this.setColour( Blockly.Variables.COLOUR.MOTION );

    this.appendValueInput( "COORDINATE" )
      .setCheck( "Coordinate" )
      .appendField( Blockly.Msg.KF_COORDINATE_GET_ANGLE_MESSAGE );

    this.setInputsInline( true );
    this.setOutput( true, "Number" );
  }
};
