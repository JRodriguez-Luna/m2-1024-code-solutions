# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

  > When its first added to the DOM and drawn on the page.

- What is a React Effect?

  > It lets a component handle side effects, like fetching data from an API, managing subscriptions, or manually updating the DOM.

- When should you use an Effect and when should you not use an Effect?

  > Use an Effect for tasks that should happen outside the main render (e.g., data fetching, timers).

  - Don’t use an Effect for things that can be calculated during render or when they don’t require access to external data/resources.

- When do Effects run?

  > By default, after the initial render and every re-render where dependencies change.

- What function is used to declare an Effect?

  > useEffect

- What are Effect dependencies and how do you declare them?

  > Dependencies are values that useEffect depends on. Declared as an array after the callback function (e.g., [dependency1, dependency2]). The Effect only runs when dependencies change.

- Why would you want to clean up from an Effect?

  > To prevent memory leaks or unwanted behavior if the Effect sets up something ongoing, like a subscription.

- How do you clean up from an Effect?

  > By returning a cleanup function from within the useEffect function.

- When does the cleanup function run?
  > When the component unmounts or before the next Effect if dependencies change.

## Notes

**Functions:**

- Async functions can’t be directly in `useEffect`, so you create an async function inside and then call it.

```jsx
useEffect(() => {
  async function fetchData() {
    try {
      // Perform async work
    } catch (error) {
      // Handle error
    }
  }
  fetchData();
}, []);
```

- **State Management with Effects:**
  - Use `isLoading` to show a "Loading..." message until data is fetched.
  - Use `error` to display error messages if fetching fails.
