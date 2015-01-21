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
 * @fileoverview Generating Kiwifroot javascript for all sound functions
 * @author rani_sputnik@hotmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.sound');

goog.require('Blockly.Kiwifroot');

var soundsRef = 'this.state.sounds';

Blockly.Kiwifroot['kiwi_sound'] = function(block) {
    var code = block.getFieldValue('SOUND');
    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_sound_play_background'] = function(block) {
    var val = Blockly.Kiwifroot.valueToCode(block, 'SOUND', Blockly.Kiwifroot.ORDER_ATOMIC) || "-1";
    return soundsRef + '.playBackgroundTrack('+val+');\n';
};

Blockly.Kiwifroot['kiwi_sound_stop_background'] = function(block) {
    return soundsRef + '.stopBackgroundTrack();\n';
};

Blockly.Kiwifroot['kiwi_sound_play_effect'] = function(block) {
    var val = Blockly.Kiwifroot.valueToCode(block, 'SOUND', Blockly.Kiwifroot.ORDER_ATOMIC) || "-1";
    return soundsRef + '.playSoundEffect('+val+');\n';
};