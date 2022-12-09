function calculateBMI(weight, height) {
    const BMI = weight / (height * height)

    if(BMI<=29) {
        console.log('Normal weight')
    }
    else  if(BMI >= 30){
        console.log('You are overweight')
    }
    // console.log(BMI);
    return BMI;
};

console.log(calculateBMI(50, 1.32));

module.exports = calculateBMI;