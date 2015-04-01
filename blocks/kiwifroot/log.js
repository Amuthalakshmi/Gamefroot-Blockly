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
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.log');

goog.require('Blockly.Blocks');

   

Blockly.Blocks['kiwi_log'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_LOG_URL );
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_LOG_MSG);
    this.appendValueInput("LOG")
        .setCheck("String");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_LOG_TOOLTIP );
  }
};