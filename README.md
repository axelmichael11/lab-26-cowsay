401 JS --  Lab 26 Cowsay
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork DONE
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan` DONE
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Learning Objectives  
* Students will be able to configure webpack to compile JS into a bundle
* Students will be able to configure webpack to compile sass into a bundle
* Students will be able to configure babel to transpile JSX and ES6 to ES5 javscript
* Students will be able to create and render react components to the DOM
* Students will be able to add event listeners to react components
* Students will be able to update react component state

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab DONE
* **.gitignore** -- with a robust gitignore DONE
* **.eslintrc** -- with the class .eslintrc file ?? TODO: Told to hold off on this..
* **.eslintignore** -- with the class .eslintignore DONE
* **.babelrc** -- with all dependencies and dev-dependencies DONE
* **package.json** -- with all dependencies and dev-dependencies  
* **yarn.lock** -- with the yarn lockfile DONE
* **webpack.config.js** -- with webpack config DONE
* **src/** -- conating the froned code DONE
* **src/main.js** -- containing the entire app ODNE
* **src/style** -- containing your sass DONE
* **src/style/main.scss** -- containing the froned code DONE

#### Feature Tasks  
Create the following component
###### App
* Should contain the entire application's view and state DONE
* Should have a property on the state called content DONE
* Should create a view with the following display
  * A heading with the title "Generate Cowsay Lorem" DONE
  * A Button that displays "click me" DONE
    * `onClick` the button should generate new content on the app state using cowsay and faker DONE
  * A pre tag that displays the App's state's content DONE

####  Documentation  
Write a description of the project in your README.md

#### Bonus 1pt
* add a select menu that enables you to change the type of cowfile currently being used
