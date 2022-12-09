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

// Manual testing
// 50 / 1.32 * 1.32
// 1.32 * 1.23 = 1.7424
// 50 / 1.7424 = 28.696 BMI