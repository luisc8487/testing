const assert = require("assert");
const {forEach, map} = require("./index");

// const test = (desc, fn) => {
//   console.log("----", desc);
//   try {
//     fn();
//   } catch (e) {
//     console.log(e.message);
//   }
// };

it("The forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => (sum += value));

  assert.strictEqual(sum, 6, "Expected summing array to equal 6");
});

it("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  // Convert it to one line
  assert.deepStrictEqual(result, [2, 4, 6], "Expected result to be [2, 4, 6]");

  //   assert.strictEqual(result[0], 2, "Expected first value to be 2");
  //   assert.strictEqual(result[1], 4, "Expected first value to be 4");
  //   assert.strictEqual(result[2], 6, "Expected first value to be 6");
});
