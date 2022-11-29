// use var keyword var keyword to declare a variable oxygenlevel. 
var oxygenlevel = 80;
// add an if statement to check if the oxygenlevel is >=96%. inside the if block,consol.log the comment:"Normal Reading".
// add an if statement to check if the oxygenlevel is =95%.inside the else if block, consol.log the comment: "Acceptable to continue home monitoring".
//add an else if to check if the oxygenlevel is <=94 and =93%.inside this else if block, console.log the sentence:"Seek advice from health professional".
// add another else if to check if the oxygenlevel is <=92%. inside the else if block, console.log the sentence:"seek urgent medical advice".
//add an else statement to capture any other value. inside the block , type console.log the sentence: "the value of the age variable is not numerical"
// is not numerical".

function oxygenLevelSaturation(oxygenlevel) {
    if ( oxygenlevel >= 96 ){
        console.log("Normal reading.");
    } else if ( oxygenlevel >= 95) {
        console.log("Acceptable to continue home monitoring");
    } else if ( (oxygenlevel <= 94) && (oxygenlevel = 93) ) {
        console.log("Seek advice from health professionals.");
    } else if ( oxygenlevel <= 92 ) {
        console.log("Seek urgent medical advice.");
    } else {
        console.log("the value of the level variable is not numerical.");
    }

}

oxygenLevelSaturation(oxygenlevel);