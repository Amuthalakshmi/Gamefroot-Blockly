/**
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview JSON reader and writer - Modified from XML reader/writer
 * @author primary.edw@gmail.com (Andrew Mee)
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Json');

/**
 * Field labels in Json output
 */
Blockly.Json.fieldLabels = {
 positionX:'x'
 ,positionY:'y'
 ,type:'type'
 ,xmlMutation:'xmlMutation'
 ,jsonMutation:'mutation'
 ,title:'title'
 ,titleValue:'value'
 ,titleName:'name'
 ,comment:'comment'
 ,commentText:'text'
 ,commentPinned:'pinned'
 ,commentHeight:'h'
 ,commentWidth:'w'
 ,inputList:'inputList'
 ,inputName:'name'
 ,inputType:'type'
 ,inputInline:'inline'
 ,inputCollapsed:'collapsed'
 ,inputDisabled:'disabled'
 ,inputDeletable:'deleteable'
 ,inputMovable:'movable'
 ,inputEditable:'editable'
 ,childBlocks:'childBlocks'
 ,nextBlock:'next' 
}
/**
 * Encode a block tree as Json.
 * @param {!Object} workspace The SVG workspace.
 * @return {!Element} Json document.
 */
Blockly.Json.workspaceToObject = function(workspace) {
  var width;  // Not used in LTR.
  if (workspace.RTL) {
    width = workspace.getWidth();
  }

  var blocks = workspace.getTopBlocks(true);
  var Json = [];
  
  for (var i = 0, block; block = blocks[i]; i++) {
    var element = Blockly.Json.blockToObject_(block);
    if(!element) continue;
    var xy = block.getRelativeToSurfaceXY();
    element[Blockly.Json.fieldLabels.positionX]= Blockly.RTL ? width - xy.x : xy.x;
    element[Blockly.Json.fieldLabels.positionY]= xy.y;
    Json.push(element);
  }
  
  return Json;
};

/**
 * Encode a block subtree as Json.
 * @param {!Blockly.Block} block The root block to encode.
 * @return {!Element} Tree of Json elements.
 * @private
 */
Blockly.Json.blockToObject_ = function(block) {
  var element = {};
  element[Blockly.Json.fieldLabels.type]= block.type;
  if (block.mutationToObject) {
    var mutation = block.mutationToObject();
    if (mutation) {
      element[Blockly.Json.fieldLabels.jsonMutation]=mutation;
    }
  }else  if (block.mutationToDom) {
    console.warn('You should implement a mutationToObject on block "'+block.type+'" in order to fully support JSON');
    // Custom data for an advanced block.
    var mutation = block.mutationToDom();
    if (mutation) {
      element[Blockly.Json.fieldLabels.xmlMutation]=mutation.outerHTML;
    }
  }
  
  function titleToObject(title) {
 element[Blockly.Json.fieldLabels.title] = element[Blockly.Json.fieldLabels.title] ||[]; //maybe multiple???
    if (title.name && title.EDITABLE) {
   var newTitleData = {};
   newTitleData[Blockly.Json.fieldLabels.titleValue] = title.getValue();
   newTitleData[Blockly.Json.fieldLabels.titleName] = title.name;
   element[Blockly.Json.fieldLabels.title].push(newTitleData);
    }
  }
  
  for (var x = 0, input; input = block.inputList[x]; x++) {
    for (var y = 0, title; title = input.fieldRow[y]; y++) {
      titleToObject(title);
    }
  }

  if (block.comment) {
    var hw = block.comment.getBubbleSize();
    var newComment = {};
    newComment[Blockly.Json.fieldLabels.commentText] = block.comment.getText();
    newComment[Blockly.Json.fieldLabels.commentPinned] = block.comment.isVisible();
    newComment[Blockly.Json.fieldLabels.commentHeight] = hw.height;
    newComment[Blockly.Json.fieldLabels.commentWidth] = hw.width;
    
    element[Blockly.Json.fieldLabels.comment] = newComment;
  }

  var hasValues = false;
  for (var i = 0, input; input = block.inputList[i]; i++) {
 if (input.type == Blockly.DUMMY_INPUT) {
      continue;
    }
    var container = {};
    container[Blockly.Json.fieldLabels.inputName] = input.name;
    
    var empty = true;
     
 var childBlock = input.connection.targetBlock();
 if (input.type == Blockly.INPUT_VALUE) {
   container[Blockly.Json.fieldLabels.inputType]='value';
   hasValues = true;
 } else if (input.type == Blockly.NEXT_STATEMENT) {
   container[Blockly.Json.fieldLabels.inputType]='statement';
 }
 if (childBlock) {
   container[Blockly.Json.fieldLabels.childBlocks] = Blockly.Json.blockToObject_(childBlock);
   empty = false;
 }
    
   
  if (!empty) {
    element[Blockly.Json.fieldLabels.inputList] = element[Blockly.Json.fieldLabels.inputList] || [];
      element[Blockly.Json.fieldLabels.inputList].push(container);
    }
  }
  
  if (hasValues) {
    element[Blockly.Json.fieldLabels.inputInline]= block.inputsInline;
  }
  if (block.isCollapsed()) {
    element[Blockly.Json.fieldLabels.inputCollapsed]= true;
  }
  if (block.disabled) {
    element[Blockly.Json.fieldLabels.inputDisabled]= true;
  }
  if (!block.isDeletable()) {
    element[Blockly.Json.fieldLabels.inputDeletable]= false;
  }
  if (!block.isMovable()) {
    element[Blockly.Json.fieldLabels.inputMovable] = false;
  }
  if (!block.isEditable()) {
    element[Blockly.Json.fieldLabels.inputEditable]= false;
  }

  if (block.nextConnection) {
    var nextBlock = block.nextConnection.targetBlock();
    if (nextBlock) {
   element[Blockly.Json.fieldLabels.nextBlock] = element[Blockly.Json.fieldLabels.nextBlock] || [];
      var container =Blockly.Json.blockToObject_(nextBlock);
      element[Blockly.Json.fieldLabels.nextBlock].push(container);
    }
  }

  return element;
};


/**
 * Converts plain text into a DOM structure.
 * Throws an error if Json doesn't parse.
 * @param {string} text Text representation.
 * @return {!Element} A tree of Json elements.
 */
Blockly.Json.textToObject = function(text) {
   var jsonObject = JSON.parse(text);
  // The DOM should have one and only one top-level node, an Json tag.
  if (!jsonObject) {
    // Whatever we got back from the parser is not Json.
    throw 'Blockly.Json.textToObject did not obtain a valid Json tree.';
  }
  return jsonObject;
};

/**
 * Decode an Json DOM and create blocks on the workspace.
 * @param {!Blockly.Workspace} workspace The SVG workspace.
 * @param {!Element} Json Json DOM.
 */
Blockly.Json.objectToWorkspace = function(workspace, json) {
  var width;  // Not used in LTR.
  if (Blockly.RTL) {
    width = workspace.getWidth();
  }
  for (var x = 0, jsonChild; jsonChild = json[x]; x++) {
    //if (JsonChild['eType'] == 'block') {
      var block = Blockly.Json.objectToBlock_(workspace, jsonChild);
   if(!block)continue;
      var blockX = jsonChild[Blockly.Json.fieldLabels.positionX];
      var blockY = jsonChild[Blockly.Json.fieldLabels.positionY];
      if (!isNaN(blockX) && !isNaN(blockY)) {
        block.moveBy(Blockly.RTL ? width - blockX : blockX, blockY);
      }
   // }
  }
};

/**
 * Converts a JSON structure into plain text.
 * Simply JSON.stringify
 * @param {!object} dom The Json
 * @return {string} Text representation.
 */
Blockly.Json.objectToText = function(object){
  return JSON.stringify(object);
}

/**
 * Decode an Json block tag and create a block (and possibly sub blocks) on the
 * workspace.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @param {!Element} JsonBlock Json block element.
 * @return {!Blockly.Block} The root block created.
 * @private
 */
Blockly.Json.objectToBlock_ = function(workspace, jsonBlock) {
  // Create the top-level block
  var topBlock = Blockly.Json.objectToBlockHeadless_(workspace, jsonBlock);

  if (workspace.rendered) {
    // Hide connections to speed up assembly.
    topBlock.setConnectionsHidden(true);
    // Generate list of all blocks.
    var blocks = topBlock.getDescendants();
    // Render each block.
    for (var i = blocks.length - 1; i >= 0; i--) {
      blocks[i].initSvg();
    }
    for (var i = blocks.length - 1; i >= 0; i--) {
      blocks[i].render(false);
    }
    // Populating the connection database may be defered until after the blocks
    // have renderend.
    setTimeout(function() {
      topBlock.setConnectionsHidden(false);
    }, 1);
    topBlock.updateDisabled();
    // Fire an event to allow scrollbars to resize.
    Blockly.fireUiEvent(window, 'resize');
  }

  return topBlock;
};

/**
 * Decode an Json block without rendering.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @param {!Element} JsonBlock Json block element.
 * @return {!Blockly.Block} The root block created.
 * @private
 */
Blockly.Json.objectToBlockHeadless_ = function(workspace, jsonBlock) {
  var block = null;
  var prototypeName = jsonBlock[Blockly.Json.fieldLabels.type];
  if (!prototypeName) {
    throw 'Block type unspecified: \n' + jsonBlock;
  }
  block = Blockly.Block.obtain(workspace, prototypeName);
  if (jsonBlock[Blockly.Json.fieldLabels.jsonMutation] && block.objectToMutation) {
    block.objectToMutation(jsonBlock[Blockly.Json.fieldLabels.jsonMutation]);
  } else if (jsonBlock[Blockly.Json.fieldLabels.xmlMutation] && block.domToMutation) {
    console.warn('You should implement an objectToMutation method in order to fully support JSON');
    if (!document || !document.createElement) {
      throw 'Can not create mutator on block "'+prototypeName+'", no document and no JSON mutator';
    }
    else {
      var mutationDom = document.createElement('div');
      mutationDom.innerHTML = jsonBlock[Blockly.Json.fieldLabels.xmlMutation];
      block.domToMutation(mutationDom.firstChild);
    }
  }
  
  if (jsonBlock[Blockly.Json.fieldLabels.comment]){

    block.setCommentText(jsonBlock[Blockly.Json.fieldLabels.comment][Blockly.Json.fieldLabels.commentText]);
        var visible = jsonBlock[Blockly.Json.fieldLabels.comment][Blockly.Json.fieldLabels.commentPinned];

        if (visible && block.comment && block.comment.setVisible) {
          block.comment.setVisible(true);
        }

        var bubbleW = jsonBlock[Blockly.Json.fieldLabels.comment][Blockly.Json.fieldLabels.commentWidth];
        var bubbleH = jsonBlock[Blockly.Json.fieldLabels.comment][Blockly.Json.fieldLabels.commentHeight];
        if (!isNaN(bubbleW) && !isNaN(bubbleH) && block.comment && block.comment.setBubbleSize) {
          block.comment.setBubbleSize(bubbleW, bubbleH);
        }    
  }
  
  if (jsonBlock[Blockly.Json.fieldLabels.title]){
    for(var i=0,jsonTitle; jsonTitle = jsonBlock[Blockly.Json.fieldLabels.title][i];i++){
      try{
       block.setFieldValue(
         jsonTitle[Blockly.Json.fieldLabels.titleValue]
         , jsonTitle[Blockly.Json.fieldLabels.titleName]
         );
     }catch(e){
       //Just ignor the error 
      }
    }  
  }
  
  if (jsonBlock[Blockly.Json.fieldLabels.inputList]){
   for(var i=0,jsonInput; jsonInput = jsonBlock[Blockly.Json.fieldLabels.inputList][i];i++){
       var input = block.getInput(jsonInput[Blockly.Json.fieldLabels.inputName]);
     if (!input) {
       //throw 'Input does not exist: '  jsonInput['vName'];
       continue;
     }
     if (jsonInput[Blockly.Json.fieldLabels.childBlocks]) {  
       var blockChild = Blockly.Json.objectToBlockHeadless_(workspace, jsonInput[Blockly.Json.fieldLabels.childBlocks]);
       if (blockChild && blockChild.outputConnection) {
        if(input.connection)input.connection.connect(blockChild.outputConnection);
       } else if (blockChild && blockChild.previousConnection) {
       input.connection.connect(blockChild.previousConnection);
       } else {
       console.log('Child block does not have output or previous statement.');
       }
     }
    }  
  }
  
  if (jsonBlock[Blockly.Json.fieldLabels.nextBlock]){
   for(var i=0,jsonNext; jsonNext = jsonBlock[Blockly.Json.fieldLabels.nextBlock][i];i++){
      if (!block.nextConnection) {
            throw 'Next statement does not exist.';
          } else if (block.nextConnection.targetConnection) {
            // This could happen if there is more than one Json 'lNext' tag.
            throw 'Next statement is already connected.';
          }
          blockChild = Blockly.Json.objectToBlockHeadless_(workspace, jsonNext);
          if (!blockChild.previousConnection) {
            throw 'Next block does not have previous statement.';
          }
          block.nextConnection.connect(blockChild.previousConnection);
    }  
  }

  var inline = jsonBlock[Blockly.Json.fieldLabels.inputInline];
  if (inline) {
    block.setInputsInline(true);
  }
  var collapsed = jsonBlock[Blockly.Json.fieldLabels.inputCollapsed];
  if (collapsed) {
    block.setCollapsed(true);
  }
  var disabled = jsonBlock[Blockly.Json.fieldLabels.inputDisabled];
  if (disabled) {
    block.setDisabled(true);
  }
  var deletable = jsonBlock[Blockly.Json.fieldLabels.inputDeletable];
  if (deletable) {
    block.setDeletable(true);
  }
  var movable = jsonBlock[Blockly.Json.fieldLabels.inputMovable];
  if (movable) {
    block.setMovable(true);
  }
  var editable = jsonBlock[Blockly.Json.fieldLabels.inputEditable];
  if (editable) {
    block.setEditable(true);
  }

  var func = block.postInit;
  if (func) func.call(block);

  return block;
};


// Export symbols that would otherwise be renamed by Closure compiler.
if (!goog.global['Blockly']) {
  goog.global['Blockly'] = {};
}
if (!goog.global['Blockly']['Json']) {
  goog.global['Blockly']['Json'] = {};
}
goog.global['Blockly']['Json']['objectToText'] = Blockly.Json.objectToText;
goog.global['Blockly']['Json']['objectToWorkspace'] = Blockly.Json.objectToWorkspace;
goog.global['Blockly']['Json']['textToObject'] = Blockly.Json.textToObject;
goog.global['Blockly']['Json']['workspaceToObject'] = Blockly.Json.workspaceToObject;