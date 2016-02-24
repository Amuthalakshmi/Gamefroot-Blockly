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
 * @fileoverview Generating Kiwifroot javascript for all animation functions
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.hitbox');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot.hitbox.COMPONENT_PREFIX = 'this.box';

Blockly.Kiwifroot['kiwi_hitbox_position_get'] = function(block) {
  var dropdown_value = block.getFieldValue('PROP');
  var code = Blockly.Kiwifroot.hitbox.COMPONENT_PREFIX + '.worldHitbox.' + dropdown_value;
  return [ code, Blockly.Kiwifroot.ORDER_ATOMIC ];
};

Blockly.Kiwifroot['kiwi_hitbox_dimensions_get'] = function(block) {
  var dropdown_value = block.getFieldValue('PROP');
  var code = Blockly.Kiwifroot.hitbox.COMPONENT_PREFIX + '.worldHitbox.' + dropdown_value;
  return [ code, Blockly.Kiwifroot.ORDER_ATOMIC ];
};

Blockly.Kiwifroot['kiwi_hitbox_offset_get'] = function(block) {
  var dropdown_value = block.getFieldValue('PROP');
  var code = Blockly.Kiwifroot.hitbox.COMPONENT_PREFIX + '.hitboxOffset.' + dropdown_value;
  return [ code, Blockly.Kiwifroot.ORDER_ATOMIC ];
};