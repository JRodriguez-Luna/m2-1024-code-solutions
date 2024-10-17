# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?

  > We would do this when we have an array of data (like a list of items or objects) that we want to display as multiple components.

- Why is it important for React components to be data-driven?

  > It's important because data-driven components update automatically when the data changes. This makes the app more dynamic and efficient, as React can re-render only the parts that changed, keeping the UI in sync with the data.

- What `Array` method is commonly used to create a list of React components?

  > The `.map()` method is commonly used. It allows us to loop through an array and return a new array where each item is a React component.

- Why do components in a list need to have unique keys?

  > React uses keys to keep track of elements when rendering lists. Unique keys help React efficiently identify which items were added, changed, or removed, making re-rendering faster and avoiding potential bugs.

- What is the best value to use as a "key" prop when rendering lists?
  > The best value for the "key" prop is something unique for each item, like an ID or a unique attribute. If the data has an ID or number (like a Pokémon's number), use that. If not, you could use something else that guarantees uniqueness, like the array index (though it's better to avoid this when possible).

## Notes
