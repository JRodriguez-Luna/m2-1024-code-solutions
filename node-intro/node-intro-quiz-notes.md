# node-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the 3 components of a fullstack Web architecture?

  > They're are 3 tiers:
  > frontend
  > backend
  > database

  Otherwords:

  > HTML, CSS, JS/TS - Presentation
  > JS/TS - Logic - Functionality
  > PSQL - Database

- What is Node.js and why is it useful?

  > Node.js is a program that allows JS to be run outside of a web browser. It's commonly used to build backend servers for Web applications.

- What are environment variables and how do you access them in Node.js?

  > Environment variables are variables that hold this type of configuration information for the specific environment the process is running in.

- What is a REPL?
  > REPL (read-eval-print loop) - a simple interactive computer programming environment that takes single users inputs, executes them, and returns the result to the user.
  >
  > > A program written in a REPL environment is executed piecewise.

## Notes

### What is Three-Tier Architecture?

Think of three-tier architecture like a three-layer cake. Each layer has a specific job and works with the other layers. These layers are designed to be independent so they can be changed or updated without affecting the others. Here’s what each "tier" or layer does:

---

### 1. **Presentation Tier (Top Layer)**

- **What it does**: This is the part users see and interact with—like a website or an app on your phone.
- **Examples**: Buttons, forms, images, and anything displayed on a screen.
- **Why it’s important**: It makes the app user-friendly and communicates with the other layers to show results.

---

### 2. **Application Tier (Middle Layer)**

- **What it does**: This is the "brains" of the operation. It handles the logic, rules, and decisions of the application.
- **Examples**: When you click “Buy Now,” this layer figures out if the item is in stock, calculates the total price, and confirms the purchase.
- **Why it’s important**: It processes what the user wants and gets the right data from the bottom layer (data tier).

---

### 3. **Data Tier (Bottom Layer)**

- **What it does**: This is the storage layer where all the data lives—like customer info, product lists, or order history.
- **Examples**: Databases like MySQL, PostgreSQL, or MongoDB.
- **Why it’s important**: It keeps all the information safe and organized so it can be accessed when needed.

---

### How They Work Together:

1. You (the user) interact with the **Presentation Tier** (like clicking a button).
2. The **Application Tier** (middle layer) takes your request, processes it, and decides what to do.
3. The **Data Tier** fetches or updates information based on the request and sends it back.
4. The result travels back up through the layers to display what you need.

---

### Why Use This Setup?

- **Flexibility**: Each layer can be updated or replaced without breaking the others.
- **Scalability**: It’s easier to handle more users by scaling specific layers.
- **Organization**: Each layer focuses on a single job, making the system easier to maintain.

---

### Real-Life Example:

Let’s say you’re shopping online:

1. **Presentation Tier**: You see the website and click "Add to Cart."
2. **Application Tier**: The app checks if the item is in stock and adds it to your order.
3. **Data Tier**: The database updates the stock count and stores your order info.
