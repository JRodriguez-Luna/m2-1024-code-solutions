# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is React?

  > React is a library that allows developers to build websites and interfaces using individual pieces of functionality called components. It simplifies the process of creating complex user interfaces by breaking them down into smaller, reusable parts.

- What is a React component?

  > A React component is a collection of:
  >
  > - HTML
  > - CSS
  > - JavaScript
  >   that provides functionality for a part of a UI, like form, button or header.

- How do you mount a React app (root component) to the DOM?

  > To mount a React app to the DOM, you connect the React files to the index.html file via the div with the id="root" by using main.tsx. This file renders the React project to the DOM.

- What are some other popular frontend frameworks?
  > Other popular frontend frameworks include Angular, Vue.js, and Svelte.

## Notes

**React Components**:

- Components in React are self-contained pieces of functionality that can include HTML, CSS, and JavaScript.
- Components are **reusable** and help organize the application by breaking it down into smaller parts.
- Example: A form, button, or list item can be a component.

---

**JSX (JavaScript XML)**:

- JSX allows you to write HTML-like syntax directly in JavaScript files.
- It is not HTML but a syntax extension that makes it easier to visualize your UI components.
- JSX must always have one parent element.

---

**Mounting a React App to the DOM**:

- React apps need to be mounted to the DOM by attaching to an HTML element, typically a `div` with an id of `"root"`.
- This is done in the `main.tsx` file with the `ReactDOM.createRoot()` method.

---

**Using Vite with React**:

- Vite is a build tool and development server that simplifies the setup of React projects.
- Commands to create a new React app with Vite:
  ```bash
  npm create vite@latest my-app -- --template react-ts
  cd my-app
  npm install
  npm run dev
  ```
