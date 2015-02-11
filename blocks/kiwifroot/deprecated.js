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

// 12 - 02 - 2015

Blockly.Blocks['kiwi_classes_selector'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_SELECTOR_HELPURL );
    this.setColour( Blockly.Variables.HUE_CLASS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.classes_ ), "NAME");
    this.setInputsInline(true);
    this.setOutput( true, "Class" );
    this.setTooltip( Blockly.Msg.KF_CLASSES_SELECTOR_TOOLTIP );
  }
};