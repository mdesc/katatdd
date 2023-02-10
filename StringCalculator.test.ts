import { StringCalculator } from "./StringCalculator";

const calculator = new StringCalculator();

describe("Naive test", () => {
    it("empty string should return 0", () => {
        const result = calculator.add("");
        expect(result).toEqual(0);
    });

    it("one number string, should return the number", () => {
        const result = calculator.add("2");
        expect(result).toEqual(2);
    });

});


describe("Simple addition test", () => {
    it("should add two number string", () => {
        const result = calculator.add("2,4");
        expect(result).toEqual(6);
    });

    it("should add three number string", () => {
        const result = calculator.add("2,7,4");
        expect(result).toEqual(13);
    });

});


describe("Separator tests", () => {
    it("should add number string separated with newline only", () => {
        const result = calculator.add("2\n4\n9\n1");
        expect(result).toEqual(16);
    });

    it("should add number string separated with coma only", () => {
        const result = calculator.add("2,4,9,1");
        expect(result).toEqual(16);
    });

    it("should add three number string with both coma and newlines", () => {
        const result = calculator.add("2\n4,9,2\n1");
        expect(result).toEqual(18);
    });

});


describe("Any separator tests", () => {
    it("string changing delimiter ';'", () => {
        const result = calculator.add("//;\n3;5;1");
        expect(result).toEqual(9);
    });

    it("string changing delimiter '/'", () => {
        const result = calculator.add("///\n3/5/1");
        expect(result).toEqual(9);
    });

    it("string changing delimiter '\\n'", () => {
        const result = calculator.add("//\n\n3\n5\n1");
        expect(result).toEqual(9);
    });
});


describe("Negatives tests", () => {
    it("string changing delimiter and one negative", () => {
        expect(() => {
            calculator.add("//;\n3;-5;1");
        }).toThrow("negative not allowed: -5");
    });

    it("only one negative", () => {
        expect(() => {
            calculator.add("-1");
        }).toThrow("negative not allowed: -1");
    });


    it("string changing delimiter and multiple negative", () => {
        expect(() => {
            calculator.add("//;\n3;-5;-1;-2;3");
        }).toThrow("negative not allowed: -5, -1, -2");
    });


    it("simple delimiter multiple negatives", () => {
        expect(() => {
            calculator.add("1\n3\n-5\n1\n-1");
        }).toThrow("negative not sallowed: -5, -1");
    });

});


describe("Number over 1000 ignored", () => {
    it("only one number that is over 1000", () => {
        const result = calculator.add("//;\n8288");
        expect(result).toEqual(0);
    });

    it("some numbers over 1000", () => {
        const result = calculator.add("///\n92222/5/1/2000");
        expect(result).toEqual(6);
    });

    it("only numbers over 1000", () => {
        const result = calculator.add("//\n\n1003\n92783\n3899");
        expect(result).toEqual(0);
    });
});