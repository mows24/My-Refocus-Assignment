const calculateBMI = require("./bmi_automated");

test("Check if 50 / (1.32 * 132) is equal to 28.696051423324146", () => {
    expect(calculateBMI (50, 1.32)).toEqual(28.696051423324146);

});
