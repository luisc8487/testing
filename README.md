# Understanding Test Cases with Vanilla JS and MochaJS

### Overview

This project is designed to help understand the fundamentals of implementing test cases using **Vanilla JavaScript** and **MochaJS**. The goal is to set up a basic test environment without directly using Mocha, instead running test cases manually using **Node.js**.

### Project Purpose

- Learn how to write and implement test cases.
- Understand how test-driven development (TDD) works.
- Gain hands-on experience with assertions and validations in JavaScript.

### Setup Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Ensure you have Node.js installed.
4. Install Mocha globally by running:

   `npm install -g mocha `

5. Run the test file using:

   `mocha index.test.js`

6. Alternatively, you can run Node with:

   `node index.test.js`

7.. In the index.test.js file, make sure to:

- **Uncomment** the test code section
- **Comment** out the currently uncommented section to avoid conflicts

### Project Structure

```
Test-Project/
│--index.js
│--index.test.js
│--LICENSE
│--README.md
```

### Writing Test Cases

- Create functions in `index.js` that perform specific operations.
- In `index.text.js`, write test cases to validate the output.
- Run tests using node `index.test.js` or `mocha index.tests.js`.

### Example Test (index.test.js)

```js
// Uncomment the following section to run the test
// const assert = require("assert");
// const { add } = require("../src/index");

// console.log("Running Tests...");
// assert.strictEqual(add(2, 3), 5, "2 + 3 should be 5");
// assert.strictEqual(add(-1, 1), 0, "-1 + 1 should be 0");
// console.log("All tests passed!");

// Comment out the currently uncommented section before running the test
```
### Future Improvements
- Integrate Mocha and Chai for a more robust testing framework.
- Automate test execution using scripts.
- Expand test cases for additional functions.