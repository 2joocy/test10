const { return85 } = require('../handlers/85')

describe('Returning a number times 85', () => {
    test("Testing multiplication", () => {
        expect(return85("10")).toBe(850);
    }) 
    test("Testing wrong multiplication", () => {
        expect(() => return85(1)).toThrow("Input must be a string")
    })       
})