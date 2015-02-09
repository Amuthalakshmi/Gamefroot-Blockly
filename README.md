# Blockly

Google's Blockly is a web-based, visual programming editor.  Users can drag
blocks together to build programs.  All code is free and open source.

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/sample.png)

This branch is for developing 'typed' custom variables. This is useful both 
for generators that output a typed language and also for preventing run-time
errors. In our case, we use the type information to generate custom interface
specific to that variable type (eg. an instance type allows a user to click
on an instance in the level, a location type allows the user to click a location
etc.)

![](http://oi62.tinypic.com/2uo6lvo.jpg)
