# unit-tests-jest-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are unit tests?

  > Unit tests are small, isolated tests written to verify the correctness of individual functions or methods in your code. They focus on testing a single "unit" of code to ensure it behaves as expected.

- Why is it important to write unit tests?

  > To check your work to check if the code is doing what it is supposed to do.

- What code should be tested with a unit test? What code is not well suited for unit tests?

  > Tested: Code with specific logic
  > Not Well-Suited: Code with high external dependencies like UI Rendering, API integrations, etc.

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  > A JavaScript testing framework designed to work with all modern JavaScript projects. It includes test runners, assertion libraries, and mocking capabilities.
  - Mocha, Jasmine, AVA, QUnit

## Notes

### Jest Watch Mode Options

1. **`f` - Run Only Failing Tests**

   - Useful when fixing multiple failing tests.
   - Focuses only on tests that are currently failing to track progress.

2. **`o` - Run Tests Related to Changed Files**

   - Runs tests for files changed since the last commit.
   - Ideal for testing changes made in the current branch.

3. **`p` - Run Tests Matching a Pattern**

   - Allows running tests that match a specific pattern in their name.
   - Handy for targeting specific tests during development.

4. **`q` - Quit Watch Mode**
   - Exits the Jest watch mode.
