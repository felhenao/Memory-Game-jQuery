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
Welcoming popup/window that instructs the user how to play the game

### Game Initialization
The user will see a container with 16 boxes of the same color inside of it and a start button above it.

### Playing The Game
Once the play button is clicked, 3 boxes from the container will be flashed using a color that differs from the other boxes. They will be flashed for 300ms and the container will rotate 90 degrees. Then it is the users turn to click on the estimated positioning of the flashed boxes. If the user is 100% accurate then level two will be activated and will be updated automatically. Once the user clicks the play button 4 boxes will be flashed this time. Each level increments the amount of boxes by one.

### Winning The Game
The user wins by reaching higher levels. The user looses after total failed attempts and will receive the final score

### Game Reset
By clicking the restart button the page will be refreshed

## MVP

- Welcoming page
- Play button
- Restart button

## POST MVP

- Enhanced Css styling
- The rotation of the container box
- Option to choose higher levels
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusability.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create welcoming popup/window that instructs the user how to play the game | H | 35m | 25m | <---|
| Build frame and create the boxes where the game will me played | H | 2h | 30m| <---|
| Give it the minimum css styling | H | 1hr | 1hr | <---|
| Create play button | H | 20 | | <---|
| Create a restart game function | H | 45m |  | <---|
| Create .flashDivs class for the boxes that will be flashed | H | 30m | 10m | <---|
| Link files | H | 15 |15 | 15|
| Create helper global variables that can be used to identify each of the cells | H |  | | 1hr |
| Create randomNumbers function that gives 3 random numbers used to flash 3 boxes on level 1 | H | 30m | | <---|
| Create flashDivs function that uses randomNumbers() to to flash the boxes | H | 1.5h | | 1h|
| Create a getScore function that determines the score after the user submits the estimated position of the flashed boxes | H | 1h | | <---|
| Flash the user score using getScore() function | H | 1h | | <---|
| Create the reStart level function that is called if the user fails to guess the flashed boxes | H | 40m | | <---|
| Create nextLevel() function that is used to increment the flashed boxes by one  | H | 40m | | <---|
| Create gameOver() function that ends the game after the user has failed 3 times and returns the score| H | 45m | | <---|
| Make the buttons disappear when the boxes are flashed | L | 40m | | <---|
| Give the small boxes hover effect | M | 30m |  | <---|
| Make the container div rotate 90 degrees | L | 30m | | <---|
| Total |  | 39hrs| 6hrs | hrs |


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
