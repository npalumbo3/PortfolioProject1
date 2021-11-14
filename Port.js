
var rand1, rand2, rand3;

rand1 = Math.floor(Math.random()*3);
rand2 = Math.floor(Math.random()*3);
rand3 = Math.floor(Math.random()*3);

var op1, op2, op3;

switch (rand1) {

    case 0 :
        op1 = "Italy";
        break;

    case 1 :
        op1 = "Ireland";
        break;

    case 2 :
        op1 = "Mexico";
        break;

}

switch (rand2) {
    
    case 0 : 
        op2 = "JetBlue";
        break;

    case 1 :
        op2 = "Delta";
        break;

    case 2 :
        op2 = "United";
        break;

}

switch (rand3) {

    case 0 : 
        op3 = "September";
        break;

    case 1 :
        op3 = "April";
        break;

    case 2 :
        op3 = "February";
        break;

}

console.log(`In ${op3} you will be flying ${op2} to ${op3}. Enjoy the trip!`);


