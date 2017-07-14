401 JS --  Lab 26 Cowsay
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to configure webpack to compile JS into a bundle
* Students will be able to configure webpack to compile sass into a bundle
* Stuendts will be able to configure babel to transpile JSX and ES6 to ES5 javscript
* Students will be able to create and render react components to the DOM
* Students will be able to add event listeners to react components 
* Students will be able to update react component state

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.babelrc** -- with all dependencies and dev-dependencies 
* **package.json** -- with all dependencies and dev-dependencies 
* **yarn.lock** -- with the yarn lockfile
* **webpack.config.js** -- with webpack config
* **src/** -- conating the froned code
* **src/main.js** -- containing the entire app
* **src/style** -- conating your sass
* **src/style/main.scss** -- conating the froned code
 
#### Feature Tasks  
* Create a React app with a single app component called app, that contains the following
 * a button that when clicked adds cowsay cow with lorem ipsum text to the App components state as **content**
 * a pre tag that displays the **content** stored on the App's state 

####  Documentation  
Write a description of the project in your README.md

#### Bonus 1pt 
* add a select menu that enables you to change the type of cowfile currently being used