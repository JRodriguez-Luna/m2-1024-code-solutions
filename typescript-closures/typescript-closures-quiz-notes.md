# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?

  > Scope is determined by where a variable is created in the code.

  - if the variable is created within a function, it is only accessible within that function.
  - If it's created outside, its a gloabal variable that's accessible all around.

- What allows JavaScript functions to "remember" variables from their surroundings?

  > Closure allow functions to remember variables in their surrounding scope, even if the outer function has finished running.

  ```js
  function createGreeting(greeting) {
    return function (name) {
      console.log(`${greeting}, ${name}`);
    };
  }

  const sayHello = createGreeting('hello');
  sayHello('Alice'); // Outputs: "Hello, Alice'
  ```

  **createGreeting** returns a function that _remembers_ the **greeting** variable.
  Even after **createGreeting** has finished, the inner function keeps access to **greeting** because of the closure.

- What values does a closure contain?

  > A closure contains all variables from its surrounding scope at the time it was created.

  ```js
  function counter() {
    let count = 0;

    return function () {
      count += 1;
      console.log(count);
    };
  }

  const increment = counter();
  increment(); //  Outputs: 1
  increment(); //  Outputs: 2
  ```

  **count** is "remembered" by the returned function, so each time **increment** is called, it accesses and updates the latest **count** value.
  This function keeps **count** in its closure, so it can increase it with each call.

- When is a closure created?

  > A closure is created **whenever a function is defined that uses variables from an outer scope**.

  ```js
  function createMultiplier(multiplier) {
    return function (number) {
      return (number = multiplier);
    };
  }

  const double = createMultiplier(2);
  console.log(double(5));
  ```

  **createMultiplier** function creates a _closure_ over **multiplier**, allowing the inner function to use **multiplier** even
  after **createMultiplier** finishes running.

  This closure "captures" **multiplier** with its value at the time the inner function was created.

- How can you tell if a function will be created with a closure?

  > If a function **uses any variables from outside its own code block**, it creates a closure.

  ```js
  function greetUser(name) {
    const greeting = 'Welcome';

    function displayGreeting() {
      console.log(`${greeting}, ${name}`);
    }

    return displayGreeting;
  }

  const greetAlice = greetUser('Alice');
  greetAlice(); //  Outputs: "Welcome, Alice!"
  ```

  **displayGreeting** uses **greeting** and **name**, which are from an outer scope.

  This means **displayGreeting** has a closure with **greeting** and **name** captured.

- In React, what is one important case where you need to know if a closure was created?

  > Closures can cause issues in **useEffect** because of _stale closures_, when a closure captures a variable that doesn't update
  > as expected.

  ```js
  import { useState, useEffect } from 'react';

  function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
      // Closure: 1
      const timerId = setTimeout(() => {
        // Closure: 2
        setTime(time + 1); //  Stale closure issue
        console.log(`Time is: ${time}`);
      }, 1000);

      return () => clearInterval(timerId);
    }, []); //  'time' is not a dependency here, so 'useEffect' only runs once
  }
  ```

  Code only increments **time** once because **time** inside **setInterval** is stuck at _0_
  it captured the initial value of **time** when **useEffect** first ran.

  The fix:

  - add **time** as a dependency or use a function inside **setTime** to get the latest value:

  ```js
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1); //Uses latest 'time' value
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  ```

## Notes
