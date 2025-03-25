/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/



if (choice === "mountains") {
  const choice2 = readline.question("You happen upon a mysterious shack. Do you want to enter? yes or no: "); {
    if (choice2 === "yes") {
    console.log("You enter into the old shack and come across a treasure chest!"); 
    } else if (choice2 === "no") {
      console.log("You continue on the path to the village, you come across a treacsure chest!");
    }
} 

}else if (choice === "village") {
  const altChoice2 = readline.question("It seems as though you are famished! Proceed to the tavern for food or drink? yes or no: "); {
    if (altChoice2 === "yes") {
      console.log("You enter into the tavern and are able to eat and drink your feel of nourishments! Once finished, you walk outside for some fresh air.\nIn the distance, you see a treasure chest and move towards it!");
    } else if (altChoice2 === "no") { 
      console.log("You decide to wait until tomorrow to eat and head towards shelter. As you are walking, you come across a treasure chest!");
    }
  }
}

const hasSword = true;
const hasTreasure = true;

const choice3 = readline.question("You open the treasure chest and see a sword and treasure inside! Do you take the sword, treasure, or both? Please input selection: ");

if (choice3 === "both" && hasSword && hasTreasure) {
    console.log("You take the items and put them in your sack. As keep walking, you realize that it is too quiet. Suddenly, a dagger is heading your way! You block the dagger with your sword!");
    const choice4 = readline.question("The masked figure looks at your bag greedily. You realize that you can run or fight! Which do you choose: ");
   if (choice4 === "fight") {
    console.log("You pick up your sword and fight the masked figure. You get the upperhand and see the masked figure calculate their chances of winning the battle. After a second, the masked figure runs away.\nCONGRATS! You were able to keep your treasure and your sword!");
 } else if (choice4 === "run") {
  console.log("You run away, hoping that the figure won't follow. You look back and slow down, seeing no one behind you. You turn forward and run into the front end of the daggar. As you fall to the ground, the theif grabs your bag amd sees all the treasure. With a grin, they run away leaving you to your fate.\nGAME OVER");
 }


} else if (choice3 === "sword"  && hasSword) {
    const choice5 = readline.question("You take the sword and put them in your sack. As you keep walking, you realize that it is too quiet. Suddenly, a daggar is heading your way! You block the daggar with your sword! The masked figure looks at your bag greedily. You realize that you can run or fight! Which do you choose: ");
    if (choice5 === "fight") {
     console.log("You pick up your sword and fight the masked figure. You get the upperhand and see the masked figure calculate their chances of winning the battle.n\After a second, the masked figure runs away.\nCONGRATS! You were able to keep your treasure and your sword!");
  } else if (choice5 === "run") {
   console.log("You run away, hoping that the figure won't follow. You look back and slow down, seeing no one behind you.n\You turn forward and run into the front end of the daggar.\nAs you fall to the ground, the thief grabs your bag and rifles through, seeing nothing.\nGlaring at you, the bring the daggar down one more time.\nGAME OVER");
  }
} else {
  console.log("You take the treasure and place it in your sack!\nAs you keep walking, you realize that it is too quiet.\nSuddenly, a dagger is heading your way! You have nothing to block the daggar with.\nYou are suddenly on the ground watching all of your treasure be stolen by a masked figure. You realize that you should have grabbed the sword.\nGAME OVER!")
}