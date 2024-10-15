# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React component?

  > A React component is a reusable JavaScript function or class that typically takes in data (called props) and returns a piece of JSX (which is essentially a description of what the UI should look like). Components in React are the building blocks of the UI, and they allow for encapsulation of logic, HTML, and CSS, making it easier to manage and reuse parts of the UI.

- How do you define a component in React?

  > A React component is defined as a JavaScript function or class that returns JSX. The function name must start with an uppercase letter, and if you want to reuse the component in other parts of your app, you export it.

  ```jsx
  export function Header() {
    return <h1>React Image Bank</h1>;
  }
  ```

- How is a component "rendered" (made visible on the browser page)?

  > A component is rendered by including it inside JSX, typically within another component or in the main App component. React renders components by converting the JSX returned by the component into actual DOM elements on the browser page. For example, calling <Header /> within the JSX of the App component would render the Header component's content (the h1 element) to the page.

  ```jsx
  function App() {
    return (
      <>
        <Header />
      </>
    );
  }
  ```

## Notes

#### 1. **What is a React Component?**

- **Definition**: A React component is like a **function** that takes in **props** (data) and returns **JSX** (UI structure).
- **Key idea**: Components help break down the UI into **reusable** pieces, making the code easier to manage and maintain.

#### 2. **Types of Components**

- **Functional Component**: A JavaScript function that returns JSX.
  ```jsx
  function Header() {
    return <h1>Title Here</h1>;
  }
  ```

#### 3. **How to Define a Component**

- **Must know**: The component name must start with a **capital letter**.
- Use **export** to make the component reusable in other files:
  ```jsx
  export function Header() {
    return <h1>My Page Title</h1>;
  }
  ```

#### 4. **Rendering a Component**

- **What does rendering mean?**: Rendering means **showing** the component on the web page.
- You render a component by using it like an **HTML tag** in JSX:
  ```jsx
  function App() {
    return <Header />;
  }
  ```
  This adds `<Header />` to the browser.

#### 5. **JSX - Things to Know**

- JSX looks like HTML, but it’s actually **JavaScript**.
- JSX must return only **one** top-level element.
  - If you need multiple elements, **wrap them** in a `<div>` or a **fragment** (`<> </>`):
    ```jsx
    return (
      <>
        <h1>Title</h1>
        <p>Description</p>
      </>
    );
    ```

#### 6. **Props (short for properties)**

- Components can accept **props** (data passed from a parent component).
- Example:
  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```
  Props make components **dynamic** and reusable.

#### 7. **Fragments vs Divs**

- **Fragment (`<> </>`)**: Use when you want to return multiple elements without adding an extra div.
- **Div**: Adds a real element to the DOM, but sometimes can cause "div soup" (too many nested divs).

#### 8. **Modular Structure**

- Each component is usually in its **own file** to keep things organized.
- Example:
  - `Header.tsx` for the header component
  - `Footer.tsx` for the footer component

#### 9. **Importing and Exporting Components**

- **Named Export**:

  ```jsx
  export function Header() { ... }
  ```

  - Import using curly braces:
    ```jsx
    import { Header } from './Header';
    ```

- **Default Export** (not as common):
  ```jsx
  export default Header;
  ```
  - Import without curly braces:
    ```jsx
    import Header from './Header';
    ```
