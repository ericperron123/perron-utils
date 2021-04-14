Author: ericperron.com, March 03, 2021


In this file: 

- Install Steps
- Compiling the code
- Running the code
- Debugging the code

*******************************
Install Steps
*******************************

1) Download and Install NodeJS from https://nodejs.org/
   - This will also install NPM.

2) Install typeScript globally by running the following command: 
   
   > npm install -g typescript

3) Download and install Visual Studio Code from https://code.visualstudio.com/

4) Create an empty folder for your project

5) Open Visual Studio Code

6) Open a Terminal Window. Terminal > New Terminal. This is where you will run commands!

7) open the project's folder in Visual Studio Code. 

YOU'RE ENVIRONMENT IS NOW READY!

-------------------------------------------------------------------------
Here are the steps that were followed to set up the project: 
-------------------------------------------------------------------------

1) Run the following command and answer the questions. You can use default values by pressing the 
   ENTER.
   
   > npm init 

2) Run the following commands

   > npm install -D typescript
   > npm install -D @types/express
   > npm install express

3) Create a json file named tsconfig.json in the root directory  
   (you can copy the content from the file in this project)
   
4) Create the following file 
    
      src/Main.ts
    
    this is the "entry point" file where the code starts from. 

5) Create the following directory: 

      dist-debug\js
    
    this is the folder where the typescript is compiled to javascript. 

6) modify the "main" value in package.json to 
   
      dist-debug/js/Main.js

7) Create the following file (you can copy the content from the file in this project)
 
    .vscode/launch.json


*******************************
COMPILING THE CODE
*******************************

Simply type the following command in the terminal: 

> tsc

*******************************
RUNNING THE CODE
*******************************

Type the following command in the terminal: 

> node dist-debug/js/Main.js

*******************************
DEBUGGING THE CODE
*******************************

Notice the "launch.json" file that has been created under .vscode. This file defines the
parameters to lauch a debug session in VSC. You can hit F5 or click on the debug icon on the left menu 
and select the "Launch Program" option on the top bar. 
