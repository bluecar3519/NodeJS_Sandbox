# NodeJS_Sandbox

# INTRODUCTION  
Note: Begin Name is Upper Case is Classes, lower case is functions

* global Object - can be object access anywhere in the application.

```JS
global.console.log("My Message")
```
Do not define function, object, variable and etc.. in the global scope it is better define using module. Using Module you can control access each script gets.

# TOPICS  

# Setup Environment        
#### FOLDER: Started_VSC/Debugging
How to up the Debugger with Visual Studio Code Editor. (app_debugging.js 1:17)

# Module       
#### FOLDER: Programing_With_Mosh/Logger
Inspection of the Export Object (app_inspect.js:22:12).

Code Example of using the Export Object (logger.js/app_code.js 25:40) to import variables and functions from one JavaScript to another script.  

# Module Wrapper Function
#### FOLDER: Programing_With_Mosh/Wrapper
Node do not execute own code directly but wrappers in the following wrapper. (25:26)

```JS
(fuction (exports, require, module, __filename, __dirname){

})
```
Look at each parameters (app_inspect.js)

# Path
#### FOLDER: Programing_With_Mosh/Path
* parse - The path.parse() method returns an object whose properties represent significant elements of the path

# File System
#### FOLDER: Programing_With_Mosh/FileSystem
* readdir - Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.  (app_inspect.js:43:00)

#### FOLDER: NodeJSLearn/Write
A new file with specified filename is created with data specified. If a file with the same name exists already, the content is overwritten. Care has to be taken as previous content of file could be lost. (app_write.js, test.html)

#### FOLDER: WorkArea/FileSystem


# Events
#### FOLDER: Programing_With_Mosh/Events

(app_code.js: 53:44)
* on - Register Listener
* emit - Raise an Events

# Cut Array and Strings     
#### FOLDER: CutStringArrays    

Look At:   
**String Methods**:   
* Slice - cuting string to keep one part  
* Split- cuting string to make an array

**Array Methods**:
* Slice - cuting array to keep one part      
* Splice - cutting half add some to the middle    


# Reference   
* Started_VSC - [Getting started with Node.js debugging in VS Code - Visual Studio Code
](https://www.youtube.com/watch?v=2oFKNL7vYV8&t=74s)
* Programing_With_Mosh - [Node.js Tutorial for Beginners: Learn Node in 1 Hour - Programming with Mosh](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=859s)
* TutorialKart - [TutorialKart](https://www.tutorialkart.com/nodejs/nodejs-tutorial/)
* NodeJSLearn - [NodeJSLearn](https://nodejs.dev/learn)
    * Write - [Writing files with Node.js](https://nodejs.dev/learn/writing-files-with-nodejs)
