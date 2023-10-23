// This question is asked by Google
// Given a string containing only the following characters : (,),{,},[, and ]
// return whether or not the opening and closing characters are in a valid order

// Examples: Given the following strings

// (){}[] return true
// (({[]})) return true
// {(}) return false

export const OPEN_PARENTHESE = "(";
export const CLOSING_PARENTHESE = ")";
export const OPEN_BRACKET = "[";
export const CLOSING_BRACKET = "]";
export const OPEN_CURLY_BRACKET = "{";
export const CLOSING_CURLY_BRACKET = "}";

export function solveGoogleValidCharOrder(input: string): boolean {
	//marginal and not asked but odd => return false
	if (input.length <= 1) return false;
	if (input.length % 2 !== 0) {
		return false;
	}
	const stack: Array<string> = [];

	for (const char of input.split("")) {
		switch (char) {
			case CLOSING_PARENTHESE: {
				const previousChar = stack.pop();
				if (previousChar !== OPEN_PARENTHESE) {
					return false;
				}
				break;
			}
			case CLOSING_BRACKET: {
				const previousChar = stack.pop();
				if (previousChar !== OPEN_BRACKET) {
					return false;
				}
				break;
			}
			case CLOSING_CURLY_BRACKET: {
				const previousChar = stack.pop();
				if (previousChar !== OPEN_CURLY_BRACKET) {
					return false;
				}
				break;
			}
			default:
				// will always be hit once
				stack.push(char);
		}
	}
	return true;
}
