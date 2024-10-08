/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  return !!(numbers.length % 2);
}

console.log(`isArrayLengthOdd([1, 2, 3]) -> ${isArrayLengthOdd([1, 2, 3])}`);
console.log(`isArrayLengthOdd([1, 2, 3, 4]) -> ${isArrayLengthOdd([1, 2, 3, 4])}`);

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  return !(numbers.length % 2);
}

console.log(`isArrayLengthEven([1, 2, 3]) -> ${isArrayLengthEven([1, 2, 3])}`);
console.log(`isArrayLengthEven([1, 2, 3, 4]) -> ${isArrayLengthEven([1, 2, 3, 4])}`);

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  return [...instructors, 'Laila'];
}

console.log(`addLailaToArray(["Mshary", "Hasan"]) -> ${addLailaToArray(['Mshary', 'Hasan'])}`);

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  return teams.pop();
}

console.log(`eliminateTeam(["Brazil", "Germany", "Italy"]) -> ${eliminateTeam(['Brazil', 'Germany', 'Italy'])}`);

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  return fruits.length % 2 ? [] : fruits.slice(fruits.length / 2);
}

console.log(
  `secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ${secondHalfOfArrayIfItIsEven(['apple', 'orange', 'banana', 'kiwi'])}`
);
console.log(
  `secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> ${secondHalfOfArrayIfItIsEven([
    'apple',
    'orange',
    'banana',
    'kiwi',
    'blueberry',
  ])}`
);

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  return shout.slice(0, shout.indexOf('!') + 1 || shout.length);
}

console.log(`youGottaCalmDown("HI!!!!!!!!!!") -> ${youGottaCalmDown('HI!!!!!!!!!!')}`);
console.log(`youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> ${youGottaCalmDown('Taylor Schwift!!!!!!!!!!!')}`);
console.log(`youGottaCalmDown("Hellooooo") -> ${youGottaCalmDown('Hellooooo')}`);
