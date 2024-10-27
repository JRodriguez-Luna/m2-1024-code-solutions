# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?

  > 1. **Find What Needs to Change (State)**: Look at the parts of your app that will change, like a counter or form input. Each thing that changes is called "state."

  2. **Choose Where the State Lives**: Decide which component should "own" each piece of state. Usually, the state lives in the nearest parent component that needs to use it or share it with others.

  3. **Decide What Triggers Changes (Events)**: Identify actions like button clicks or typing that will change the state. Then, set up functions (event handlers) to manage those actions and update the state.

- How does data flow in React?

  > Data flows **one way, from parent to child**.

  - **Parent components** can pass data to **child components** through props.
  - Data doesn't move "upward" from child to parent automatically.

  This one-way data flow helps keep the app structure clear and organized.

- How can children components modify state in their parents?

  > Children components can't directly change their parent's state, but they can **ask** the parent to change the state by:

  - **Calling a function** passed down from the parent as a prop.
  - The parent passes an "event handler" function to the child, and the child calls this function when it needs to update the parent's state.

  In short, **parents control the state, but children can trigger updates through functions**.

## Notes
