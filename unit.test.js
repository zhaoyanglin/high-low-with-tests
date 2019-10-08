const {highAndLow} = require('./mainCode')

test("returns the highest and lowest value from the numbers in the string", ()=> {
    const answer = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
    expect(answer).toBe("542 -214")
});

test("returns the highest and lowest value from the numbers in the string", ()=> {
    const answer = highAndLow("99 5 -6 3 -64 1 88 6 6 6 -66 2 -6");
    expect(answer).toBe("99 -66")
})