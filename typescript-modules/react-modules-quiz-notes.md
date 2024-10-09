# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are modules?

  - **Modules** are a way to organize code by separating functionality into different files.
  - These files can contain components, functions, or variables.
  - You can import and export these pieces to use them in other files, keeping code organized and modular.

- What is the difference between named and default imports?

  - **Default Imports**:
  - Each module can have only one default export.
  - You can import it with any name you like.
  - Example:
    ```tsx
    // In Header.tsx
    export default function Header() {
      return <h1>This is header text</h1>;
    }
    // In App.tsx
    import MyHeader from './Header'; // You can rename it to MyHeader or anything.
    ```

- **Named Imports**:

  - A module can have many named exports.
  - You must use the exact name when importing.
  - Example:
    ```tsx
    // In Header.tsx
    export function Header() {
      return <h1>This is header text</h1>;
    }
    // In App.tsx
    import { Header } from './Header'; // Name must match exactly.
    ```

- What is the difference between named and default exports?

  - **Default Export**:
  - Each file can have one default export.
  - Default export lets you name the import anything in the importing file.

- **Named Export**:
  - Allows multiple exports from a file.
  - You must use the specific name to import it elsewhere.

### Key Concepts:

- Use named exports for consistency and clarity.
- Named exports are easier for tools like TypeScript to track.
- Default exports allow flexibility with import names but can lead to confusion.

## Notes

### Why Use Named Exports?

- **Named exports** keep the same name across all files, making it easier to understand what each piece of code does.
- They also make it easier to find and use code in large projects.

---

### Why Use Modules in React?

- **Modules** help you split large apps into smaller parts (like components).
- This makes it easier to fix, update, and understand your code.

---

### Using Imported Components

- Once you import a component, you can use it like it was written in the same file.

  Example:

  ```tsx
  import { Header } from './Header';

  export function App() {
    return <Header />; // You can now use the Header component
  }
  ```

---

### Key Takeaways:

- **Default exports**: One main thing from a file, can be imported with any name.
- **Named exports**: Multiple things, but you have to use the same names.
- **Modules**: Organize code into smaller, reusable parts for better project structure.
