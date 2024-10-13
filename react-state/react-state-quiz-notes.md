# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

  > Hooks are special functions introduced in React 16.8 that allow you to "hook into" React features like state and lifecycle methods from function components. Instead of using class components, hooks let you manage state, handle side effects, and use other React features in functional components.

  > **Why hooks?** Hooks simplify components by avoiding class-based code and providing a simpler, more functional approach to managing component logic.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  - Hooks **must** be called at the top level of the component (not inside loops, conditionals, or nested functions).
  - Hooks **can only be called** inside React function components or other hooks.
  - Hooks **must follow the naming convention** of starting with "use" (e.g., `useState`, `useEffect`).

  **Why these rules?** React relies on the order of hook calls to keep track of state across re-renders. Breaking these rules would confuse React's ability to correctly track the hook state.

- What is the purpose of state in React?

  > State allows React components to manage and store data that changes over time. State variables are preserved between re-renders of a component, letting React know when to re-render the component to reflect updated data.

  **Why state?** React components re-render every time their state changes, allowing dynamic and interactive UIs that respond to user actions or other events.

- Why can't we just maintain state in a local variable?

  > Local variables do not persist between re-renders. When a React component re-renders, the function body is called again, creating new local variables each time. In contrast, state persists between re-renders, allowing it to store data that can change without being reset.

  **Key difference:** React's state is preserved across re-renders, while local variables are re-initialized on each render.

- What two actions happen when you call a `state setter` function?

  - **React updates the state value.** The new value is cached by React.
  - **React schedules a re-render** of the component so that the UI reflects the updated state.

- When does the local `state variable` get updated with the new value?
  > The state variable is updated **after the re-render**. React caches the new state value during the current render, and it will be available on the next render cycle.

## Notes

1. **What is State in React?**

   - **State** is a component's memory in React. It stores data that changes over time and can persist between re-renders of the component.
   - Example: Keeping track of a counter or showing different images based on user input.

2. **How to Add State in React**

   - You use the `useState()` hook to add state to a component.
   - Syntax:
     ```tsx
     const [stateVariable, setStateFunction] = useState(initialValue);
     ```
     - `stateVariable`: The current value of the state.
     - `setStateFunction`: The function used to update the state.
     - `initialValue`: The initial value of the state (e.g., `0` or `[]`).

   Example:

   ```tsx
   const [count, setCount] = useState(0);
   ```

3. **How State Works in React**

   - When you call `setStateFunction`, React stores the new value and schedules a re-render of the component.
   - After the component re-renders, the updated state value is available.
   - **Important**: You won't see the updated state immediately after calling `setStateFunction` within the same function call. The state will update after the next re-render.

4. **What are Hooks in React?**

   - **Hooks** are special functions that let you use state and other React features in functional components.
   - The most common hook for state management is `useState()`.

5. **Rules of Hooks**
   - Hooks **must** always be called at the top level of your component, not inside loops, conditionals, or nested functions.
   - Hook functions **must** start with the word `use` (e.g., `useState`, `useEffect`).
   - Only call hooks in React components or custom hooks.

---

### Example: Simple State Usage with `useState`

Let's look at an example of how state is used:

```tsx
import { useState } from 'react';

export default function App() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- The state `count` stores the number of clicks.
- The `setCount` function updates the value of `count` when the button is clicked.
- Each time the state changes, React re-renders the component and displays the new count.

---

### Example: Cycling Through Images with State

In the exercise you're working on, you need to add state to components like `ImageContainer`, `ImageCaption`, and `ImageDescription` to cycle through different images and text.

#### Step-by-Step Process:

1. **Store the Images and Text in Arrays:**

   - In `App.tsx`, you will create arrays to store the images, captions, and descriptions.

   Example:

   ```tsx
   const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];
   const captions = ['Caption 1', 'Caption 2', 'Caption 3'];
   const descriptions = ['Description 1', 'Description 2', 'Description 3'];
   ```

2. **Use State to Track the Current Index:**

   - In each component (`ImageContainer`, `ImageCaption`, `ImageDescription`), use the `useState()` hook to store which index of the array to display.

   Example for `ImageContainer`:

   ```tsx
   const [index, setIndex] = useState(0);

   function handleClick() {
     setIndex((prevIndex) => (prevIndex + 1) % images.length);
   }

   return <img src={images[index]} onClick={handleClick} alt="Image" />;
   ```

3. **Cycle Through the Array:**
   - The `handleClick` function updates the index. When you click the image, it will move to the next one, looping back to the first image after the last one.

---

### Recap: Must Know

- **State** in React is used to store data that changes during the lifecycle of a component.
- **useState** is the hook for creating state in functional components.
- **setState** function updates the state and triggers a re-render.
- When managing state, React doesn’t update the state immediately; it updates it after the next re-render.
- **Hooks Rules**: Always use hooks at the top level of your component, and make sure they are called in the same order each time the component renders.

---

### Things to Review:

- **How state works**: Understand when the state gets updated and how it triggers a re-render.
- **Cycling through arrays**: Make sure you know how to cycle through an array using the modulo operator (`%`) for things like images or text.
- **State for multiple components**: Understand how each component can use its own state to manage different pieces of data (like images, captions, etc.).
