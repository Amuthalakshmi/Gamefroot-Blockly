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
 * @fileoverview Log blocks for Gamefroot
 * @author ryanc1256@gmail.com (Ryan Clough)
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.log');

goog.require('Blockly.Blocks');



Blockly.Blocks['kiwi_log'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.LOG_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendValueInput("LOG")
        .appendField(Blockly.Msg.LOG_MESSAGE );

    //this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_WRITE_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_set_debug_mode'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_SET_DEBUG_MODE_URL );
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendValueInput("SET_DEBUG")
        .setCheck('Boolean')
        .appendField( Blockly.Msg.KF_SET_DEBUG_MODE_MESSAGE );

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_SET_DEBUG_MODE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_get_debug_mode'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_GET_DEBUG_MODE_URL );
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_GET_DEBUG_MODE_MESSAGE );

    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_GET_DEBUG_MODE_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_block_category'] = {
  init: function( xmlBlock ) {

    Blockly.addClass_( ( this.svgGroup_ ), 'blocklyBlocksCategory' );

    this.setColour( "#f0f0f0" );
    this.setEditable( false );
    this.setMovable( false );
    this.moveBy( -10, 0 );

    if( xmlBlock ) {
        var category = xmlBlock.getAttribute('message') || 'Category';
    } else {
        var category = 'Category';
    }

    this.appendDummyInput()
        .appendField( category );

    this.setInputsInline(true);

    this.setDisabled( true );

    //Colour the block
    //By default blockly won't colour disabled blocks

    //Override the update disabled function. Doesn't suit our needs.
    this.updateDisabled = function() {
      this.svgPath_.setAttribute('fill','#f0f0f0');
    };

  }
};

Blockly.Blocks['kiwi_device_cocoon'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_DEVICE_COCOON_URL );
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_DEVICE_COCOON_MESSAGE );

    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_DEVICE_COCOON_TOOLTIP );
  }
};
