# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable |
|---|---|
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Wireframes
![wireframe](/wireframes/wireframe.jpg)
Include images of your wireframes.

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

## Game Components

### Landing Page
What will a player see when they start your game?

### Game Initialization
What will a player see when the game is started?

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

### Game Reset
How will the user restart the game once it has been completed.

## MVP

Include the full list of features that will be part of your MVP

## POST MVP

Include the full list of features that you are considering for POST MVP
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create welcoming popup/window that instructs the user how to play the game | H | 35m |  | <---|
| Build frame and create the boxes where the game will me played | H | 2h | 30m| <---|
| Give it the minimum css styling | H | 1 | | <---|
| Create play button | H | 20 | | <---|
| Create a restart game function |  |  | | <---|
| Create .flashDivs class for the boxes that will be flashed | 30 |  | | <---|
| Link files | high | 15 |15 | 15|
| Create randomNumbers function that gives 3 random numbers used to flash 3 boxes on level 1 | H | 30m | | <---|
| Create flashDivs function that uses randomNumbers() to to flash the boxes | H | 1.5h | | <---|
| Create a getScore function that determines the score after the user submits the estimated position of the flashed boxes | H | 1h | | <---|
| Flash the user score using getScore() function | H | 1h | | <---|
| Create the reStart level function that is called if the user fails to guess the flashed boxes | H | 40m | | <---|
| Create nextLevel() function that is used to increment the flashed boxes by one  |  |  | | <---|
| Create gameOver() function that ends the game after the user has failed 3 times and returns the score| H | 45m | | <---|
|  |  |  | | <---|
|  |  |  | | <---|
|  |  |  | | <---|
| Give the small boxes hover effect | M | 30m |  | <---|
| Make the container div rotate 90 degrees | L | 30m | | <---|
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs |


## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.





| Function | Description |
| randomNumbers() | gives 3 random numbers used to flash boxes |  
| start() | starts the game |  
| rightOrWrong() |  |  
| getScore() | This will calculate and store the score of the user |  
| reStart() | To restart the game when the user fails to guess the flashed boxes |  
| nextLevel() | updates the page to the next level (one extra flashed box) |  
|  |  |  
|  |  |  
|  |  |  
|  |  |  
| Capitalize | This will capitalize the first letter in a string |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
