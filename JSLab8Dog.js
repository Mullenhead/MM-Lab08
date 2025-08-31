/*
Create a menu app as seen in this week’s video. 
What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.

array of breeds

class of breeds that uses array
class of names, size, color
add a dog with name, breed, sixe and color

class Menu
array of dogs

Start menu
add dog
see list of dogs
delete a dog




class Breed {
constructor() {
  let breed = []; 
}
}
*/


class Dog {
    constructor(name, size, color){
       this.name = name;
        this.size = size;
       this.color = color;
        }
    }



class Menu {
    constructor(){
        this.dogs=[];
    }

// see menu

addDog(){
    let dogName = prompt("Enter dog's name:");
    let dogSize = prompt("Enter size of dog:");
    let dogColor = prompt("enter color of dog:");
    this.dogs.push(new Dog(dogName, dogSize, dogColor));
}
//delete dog info

deleteDogs(){
let dogindex = prompt("Enter dog name to delete:")
this.dogs.splice(dogindex, 3);
}


//view dog string
viewDogs(){
    let displayDogs = "";
    for(let i = 0; i < this.dogs.length; i++){
        displayDogs += `
        ${i}) My dog ${this.dogs[i].name} is very ${this.dogs[i].size} and has ${this.dogs[i].color} fur`
    }  

    alert(`
        Your dog information
---------------------------
        ${displayDogs}
        `);
    }


showMainMenu(){
    return prompt(`
        Main Menu
        -----------------
        0) Exit Menu
        1) Add a dog 
        2( delete a  dog
        3) View all dogs
        `);
}

//build start menu
start() {
    let selection = this.showMainMenu();
    while(selection != 0) {
        switch(selection) {
            case "1": this.addDog();
            break;
            case "2": this.deleteDogs();
            break;
            case "3": this.viewDogs();
            break;

            default: selection = 0;
        }
        selection = this.showMainMenu();
    }
    alert("You're leaving now, come back again");
}



}
////let dog1 = new Dog("Milo", "small", "tan");
//console.log(dog1);

let menu = new Menu();

menu.start();

/*
menu.addDog();
menu.addDog();
menu.viewDogs();
menu.deleteDogs();
menu.viewDogs();
*/




//create new dog breed and push to array