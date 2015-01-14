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
 * @fileoverview Transformation blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.instances');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_instance_self'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SELF_HELPURL);
    this.setColour(0);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_INSTANCE_SELF_MESSAGE);
    this.setInputsInline(true);
    this.setOutput(true, "instance");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SELF_TOOLTIP);
  }
};