import { describe, it, expect } from "vitest";
import { solveGoogleValidCharOrder } from "./solveGoogleCharValidOrder";

// (){}[] return true
// (({[]})) return true
// {(}) return false
describe("solves google valid char order", () => {
	describe("valid orders return true", () => {
		it("(({[]})) should return true", () => {
			//ARRANGE
			const INPUT = "(({[]}))";
			//ACT
			const result = solveGoogleValidCharOrder(INPUT);
			//ASSERT
			expect(result).toBe(true);
		});
		it("(){}[] should return true", () => {
			//ARRANGE
			const INPUT = "(){}[]";
			//ACT
			const result = solveGoogleValidCharOrder(INPUT);
			//ASSERT
			expect(result).toBe(true);
		});
	});
	describe("invalid orders return false", () => {
		it("{(})  should return false", () => {
			//ARRANGE
			const INPUT = "{(})";
			//ACT
			const result = solveGoogleValidCharOrder(INPUT);
			//ASSERT
			expect(result).toBe(false);
		});
	});

	describe("odd inputs are false", () => {
		it("{  should return false", () => {
			//ARRANGE
			const INPUT = "{";
			//ACT
			const result = solveGoogleValidCharOrder(INPUT);
			//ASSERT
			expect(result).toBe(false);
		});
		it("{}( should return false", () => {
			//ARRANGE
			const INPUT = "{}(";
			//ACT
			const result = solveGoogleValidCharOrder(INPUT);
			//ASSERT
			expect(result).toBe(false);
		});
	});
});
