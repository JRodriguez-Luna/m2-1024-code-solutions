# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

  > The purpose of React Context is to prevent "prop drilling" by allowing components to access shared data without explicitly passing it through intermediate components. It provides a way to manage and share state or values across the component tree efficiently, improving code readability and maintainability.

- What values can be stored in context?

  > Any type of data can be stored in context, including strings, numbers, objects, arrays, and even functions. There are no restrictions on the type of data you can store.

- How do you create context and make it available to the components?

  > You create context using the createContext() function, typically in a separate file for reusability. To make the context available, you wrap your component tree (or part of it) in a <Context.Provider> and pass the desired value to the value prop. Components within the provider can then access the context using the useContext Hook.

- How do you access the context values?

  > You access context values using the useContext Hook. Import the context and call useContext(MyContext) to get the current value provided by the nearest <MyContext.Provider> in the component tree.

- When would you use context? (in addition to the best answer: "rarely")
  > Context is useful when data needs to be shared across multiple components that are not closely related. Examples include authentication (current user), global settings (e.g., theme or language preferences), and state management (e.g., a shopping cart or other app-wide data).

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
