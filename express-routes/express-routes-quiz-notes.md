# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

  > GET, POST, PUT, DELETE
  > No

- What is Express middleware?

  > Middleware are functions that have access to the req object, res object, and the next middleware function in the
  > application's request-response cycle.

- What is Express middleware useful for?

  > Executing any code
  > Make changes to the req and res objects
  > End the request-response cycle
  > Call the next middleware function in the stack.

- How do you mount a middleware with an Express application?

  > You mount middleware by using the app.use() method or specific HTTP methods (app.get(), app.post(), etc.) with a callback function

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

  > The req (request) object, res (response) object, and the next function.

- How do you specify and retrieve route parameters?
  > The URL path using colon, like /users/:id
  > Retrieving them, use a method like req.params, destructured into a variable.

## Notes
