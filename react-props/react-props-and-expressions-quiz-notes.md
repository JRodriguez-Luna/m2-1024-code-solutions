# react-props-and-expressions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are props in React?

  > Props (short for "properties") are like **arguments** you pass to a React component. They allow you to pass **data** from a parent component to a child component so that the child can display dynamic content. Think of props as inputs for your component.

  - Example:
    ```jsx
    <Header title="My Page" />
    ```
    Here, `title="My Page"` is a prop being passed to the `Header` component.

- How do you declare and access props in a component?

  > You declare props by adding a **parameter** to your component function. Inside the function, you can access the props using the parameter’s name, typically called `props`, or you can **destructure** it to directly access the values.

  - Example with `props` object:

    ```jsx
    export function Header(props) {
      return <h1>{props.title}</h1>;
    }
    ```

    Here, `props.title` accesses the `title` value passed into the `Header` component.

  - Example with **destructuring**:
    ```jsx
    export function Header({ title }) {
      return <h1>{title}</h1>;
    }
    ```
    Destructuring lets you directly access `title` from `props` for cleaner code.

- How do you pass props to a component?

  > You pass props by adding them as **attributes** when you call the component in JSX. Each prop is assigned a value, just like attributes in HTML.

  - Example:
    ```jsx
    <Header title="Welcome to My Site" />
    ```
    This passes the `title` prop with the value `"Welcome to My Site"` to the `Header` component.

- How do you write JavaScript expressions in JSX?

  > To write JavaScript expressions in JSX, you use **curly braces `{}`**. Any valid JavaScript expression can go inside the braces.

  - Example:
    ```jsx
    export function Header({ title }) {
      return <h1>{title ? title : 'Default Title'}</h1>;
    }
    ```
    In this example, the ternary operator is used to check if `title` exists. If it does, it’s displayed; otherwise, `"Default Title"` is shown.

## Notes

#### 1. **What are Props?**

- **Definition**: Props are **data** passed from a parent component to a child component. They allow us to create **dynamic content** by using the values given to the component.
- **Key takeaway**: Think of props like **arguments** you pass to a function, but in this case, you’re passing them to a **component**.

#### 2. **How to Pass Props**

- You pass props by adding them as **attributes** to a component when you use it in JSX, similar to how HTML attributes work.
  - Example:
    ```jsx
    <Header title="Welcome!" />
    ```
  - Here, `title` is a prop passed to the `Header` component with the value `"Welcome!"`.

#### 3. **How to Declare and Access Props**

- Inside a component, you access props using a **parameter** (often called `props`).

  - Example:
    ```jsx
    function Header(props) {
      return <h1>{props.title}</h1>;
    }
    ```
  - Here, `props.title` accesses the `title` prop that was passed to the `Header`.

- **Destructuring**: You can make this cleaner by using **destructuring** to directly access the props.
  - Example with destructuring:
    ```jsx
    function Header({ title }) {
      return <h1>{title}</h1>;
    }
    ```
  - Now, you directly use `title` without needing `props.`

#### 4. **Props Must Know**

- **Props are read-only**: You cannot modify props inside the component. They’re **immutable**.
- **Props are passed down**: Parent components pass props **down** to child components, but data doesn’t go back up.

#### 5. **JavaScript Expressions in JSX**

- **Key concept**: In JSX, you can insert JavaScript expressions inside **curly braces `{}`**.

  - Example:
    ```jsx
    <h1>{5 + 5}</h1>
    ```
    This will display `10` in the browser.

- **Ternary operator**: You can use conditional logic inside JSX using expressions like the ternary operator.
  - Example:
    ```jsx
    function Header({ title }) {
      return <h1>{title ? title : 'Default Title'}</h1>;
    }
    ```
    This will display `title` if it’s provided, otherwise it shows `"Default Title"`.

#### 6. **TypeScript and Props**

- **Defining prop types**: In TypeScript, you should define the type of the props. This ensures you know what kind of data is being passed to your component.

  - Example:

    ```tsx
    type Props = {
      title: string;
    };

    function Header({ title }: Props) {
      return <h1>{title}</h1>;
    }
    ```

    Here, `Props` is an object that defines the expected props (`title` should be a string).

#### 7. **Summary of What You Must Know**

- **Props** pass data from parent to child components.
- **Props** are **read-only** and cannot be changed by the child component.
- You pass **props** by adding them as attributes to the JSX of the child component.
- **JavaScript expressions** can be used inside JSX by wrapping them in `{}`.
- In **TypeScript**, you should define the types of your props using a `Props` type.
