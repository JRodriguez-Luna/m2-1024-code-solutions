# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?

  > An event is something the user does, like clicking a button, typing in a form, or submitting a form. React can "listen" for these actions and respond to them.

- What is an "event handler"? Which component declares the handler?

  > An event handler is a function that runs when something happens, like when a button is clicked. The component that needs to do something when an event happens usually declares the handler. For example, if a button is clicked, the button component might have the event handler.

- How do you pass an event handler to a React component?

  > You pass an event handler to a component as a prop. It’s like giving the component a special instruction on what to do when an event happens. For example, if you want something to happen when a button is clicked, you can pass it like this:

  ```jsx
  <Button onClick={handleClick} />
  ```

- What is the naming convention for event handlers?

  > Event handlers usually start with the word "handle" followed by the type of event. For example, if you’re handling a click, the function would be named `handleClick`. If you’re handling a form submission, it might be called `handleSubmit`.

- What is an "event handler prop"? Which component declares the prop?

  > An event handler prop is a special prop that contains the function you want to run when an event happens. The parent component usually declares the prop and passes it down to the child. For example, a parent component could tell a button what to do when it’s clicked by passing down the handler as a prop.

- What are some custom event handler props a component may wish to define?

  > A component can define custom event handler props to handle events specific to that component. For example:

  - `onImageClick` could be used to handle when an image is clicked.
  - `onCaptionChange` could handle when a caption changes.
  - `onButtonPress` could handle when a button is pressed.

- What is the naming convention for custom event handler props?
  > Custom event handler props usually start with "on" followed by what the event is. For example, `onImageClick`, `onCaptionChange`, or `onButtonPress`. This makes it easy to understand what the prop is for.

## Notes

### 1. **Events in React**

- **Definition**: An event is any interaction the user makes with the app (e.g., clicking a button, typing in a form).
- **Purpose**: React listens for these events to respond to user actions. Common events include:
  - `onClick` for button clicks
  - `onChange` for form inputs
  - `onSubmit` for form submission

### 2. **Event Handlers**

- **Definition**: An event handler is a function that runs when a specific event occurs (like clicking a button).
- **Purpose**: It allows you to define what should happen in response to user actions (e.g., showing an alert, updating state).
  - Example:
    ```jsx
    function handleClick() {
      alert('Button clicked!');
    }
    ```
- **Naming Convention**: Event handlers typically start with `handle`, followed by the event type (e.g., `handleClick`, `handleSubmit`).

### 3. **Passing Event Handlers as Props**

- **What to Know**: Event handlers are often passed as props to child components. The parent component declares the handler and passes it down.
  - Example:
    ```jsx
    <Button onClick={handleClick} />
    ```
- **Purpose**: This lets parent components control the behavior of child components, making components more reusable and flexible.

### 4. **Event Handler Props**

- **Definition**: Event handler props are props passed to a component that contain event-handling functions (e.g., `onClick`).
- **Purpose**: They allow parent components to specify how child components should respond to events. Instead of each child component handling events directly, they can "delegate" that responsibility to the parent.

### 5. **Custom Event Handlers**

- **Definition**: These are handlers defined by you, based on the specific needs of your component. For example, `onImageClick` or `onCaptionChange`.
- **Purpose**: They allow you to create specific responses to unique events that your app needs. They make components reusable by not hard-coding the event handling inside the child component.

### 6. **Naming Custom Event Handler Props**

- **What to Know**: The convention is to name them starting with `on` followed by the event name (e.g., `onImageClick`, `onCaptionChange`).
- **Purpose**: This follows React conventions, making your code easier to read and maintain by clearly identifying which props handle events.

### 7. **Best Practices**

- **Don’t query the DOM**: React handles the DOM for you. Avoid manually querying or manipulating the DOM (like you might in plain JavaScript). Instead, use React’s system of props and state to manage interactions.
- **Keep components "dumb"**: Make child components as simple as possible, only responsible for rendering data passed to them, while the parent component manages the logic and events.

### 8. **Why This Matters**

- **Reusable Components**: By keeping event logic in parent components and passing it down as props, your child components remain reusable in other parts of the app.
- **Easier to Maintain**: Clear event handler naming and keeping child components simple makes your code easier to read and maintain.
- **State Synchronization**: When the parent manages events and state, multiple components can update in sync based on the same event, improving user experience.
