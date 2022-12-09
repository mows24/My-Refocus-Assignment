const calculateBMI = require("./bmi_automated");

test("Check if 50 / (1.32 * 132) is equal to 28.696051423324146", () => {
    const calculateBMI = 28.696051423324146
    expect(50 / (1.32 * 1.32)).toEqual(calculateBMI);

});
