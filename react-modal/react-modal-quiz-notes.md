# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

  > Used to create a modal dialog that displays over the main interface for users to interact without navigating away from the page.

- How do you show and hide a modal dialog?

  > In React: .current?.showModal() or .current?.close()

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?

  > Child components are managed by passing props and controlling state, but this does not work for <dialog> because it has built-in methods (like showModal()) that need direct DOM manipulation.

- How do you call the dialog element's functions in React?

  > Using the useRef hook to get a reference to the <dialog> element, which lets you call functions like showModal() and close().

- How can you render nested components or JSX elements in React?
  > Pass JSX elements as children to components, accessed via the children prop.

## Notes
