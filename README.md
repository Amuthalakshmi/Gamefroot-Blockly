# Blockly

[Google's Blockly](https://developers.google.com/blockly/) is a web-based, 
visual programming editor.  Users can drag blocks together to build 
programs. All code is free and open source.

This fork adds the Kiwifroot generator, which adds support for creating 
[Kiwi.js](http://www.kiwijs.org/) components using blocks.

## Testing

Most testing is done with the blockly playground (tests/playground.html). There is a second
common test using an example game (game/index.html), this depends on the following folder structure;

    leveleditorv2/worker/public/
        blockly/game/index.html
        engine/lib/kiwi.js
        engine/build/kiwifroot.js

You will also need to navigate to the file without using the file:// protocol eg: 
[dev.gamefroot.com/blockly/playground.html](http://dev.gamefroot.com:8081/blockly/playground.html); If 
you test in this way then you can use the 'Go to Game!' button to quickly launch a new kiwifroot game
with the Kiwifroot code generated from the current script.

If you have made changes and need to reload but don't want to lose your awesome script, then
you can hit 'Export to JSON' and copy the code that is outputted in the text field. After the
reload, paste into the text field and hit 'Import from JSON', all your code blocks will reappear.

Additionally, if you have made a SUPER awesome script, save it in tests/savedscripts with a descriptive
name so that we can come back and test it's working later (to help make sure we aren't breaking anything).

## New Blocks

To create a new block follow these steps;

1. [Optional] If the block doesn't fit in an existing category, create a new file in blocks/kiwifroot.
2. [Optional] If you created a new file in the previous step, add another file with the same name in
generators/kiwifroot. 
3. [Optional] If you created new files in the previous steps, ensure that both these files are added to
the tests/playground.html file.
4. Define the blocks form factor in blocks/kiwifroot and then add the logic for generating code in generators/kiwifroot.
5. Add any user visible text on the block to msg/messages.js, use triple slashes to document the 
messages function.
6. Add the new block to the toolbox in tests/playground.html.

## Style Guide

Here are some simple rules to follow when creating blocks;

- All block text should be lower case, unless they are an event/function.
- If a block outputs a type, it should be coloured with Blockly.Variables.COLOUR_BOOLEAN/NUMBER/ETC.
- If a block performs a function it should be coloured with Blockly.Blocks.STATEMENT_COLOUR.
- Blocks that serve as an entry point for other blocks (events/functions/etc) should be coloured with Blockly.Blocks.CALLABLE_COLOUR.

## Deprecating Blocks

To deprecated a block, remove any warnings from the block and add this line to the block definition;

    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);

Then move the block and the generator into their respective deprecated files under a heading recording
the date they were deprecated. We will remove blocks that are over a year old, or perhaps create some kind
of analytics that will list how many people are still actively using those scripts.

## Checking Code Generation

The headless demo in the blockly repo has been edited to allow easy testing for our server. The first
step to testing blockly is to ensure it generates code correctly, the next step is ensuring it can do
it without graphics using the headless demo @demos/headless/index.html 

Adding new blocks should not ever break the headless implementation of blockly, but if you are ever
playing with the core of blockly, it's best to test the headless implementation again to ensure that
the new code will also work on our server.

## Generating Code with Node.js

We are running a node server to generate javascript from the blockly code. The server
can run the blockly compressed code without requiring any changes to the library using
only core modules from Node.

We require the following core modules;

    var vm = require('vm');
    var fs = require('fs');
    var path  = require('path');

Then we can load the Blockly codebase with the following;

    var blocklyFile = fs.readFileSync(path.normalize(__dirname + BLOCKLY_DIR + 'blockly_compressed.js'));
    var blocksFile = fs.readFileSync(path.normalize(__dirname + BLOCKLY_DIR + 'blocks_compressed.js'));
    var generatorFile = fs.readFileSync(path.normalize(__dirname + BLOCKLY_DIR + 'kiwifroot_compressed.js'));
    var enFile = fs.readFileSync(path.normalize(__dirname + BLOCKLY_DIR + 'msg/js/en.js'));

Finally we use the absolutely magic runInThisContext function

    vm.runInThisContext(blocklyFile);
    vm.runInThisContext(blocksFile);
    vm.runInThisContext(generatorFile);
    vm.runInThisContext(enFile);


