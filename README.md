# Blockly

[Google's Blockly](https://developers.google.com/blockly/) is a web-based, 
visual programming editor.  Users can drag blocks together to build 
programs. All code is free and open source.

This fork adds the Kiwifroot generator, which adds support for creating 
[Kiwi.js](http://www.kiwijs.org/) components using blocks.

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


