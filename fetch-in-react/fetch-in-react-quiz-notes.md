# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

  > fetch()

- What two things need to be done to properly handle HTTP request errors? Why?

  1. Use try/catch to handle errors that might occur during the request.
  2. Check the response.ok property of the fetch() response to ensure the request was successful.

- How can `useEffect` be used to load data for a component?

  > useEffect can be used to load data by triggering a side effect (such as a fetch() request) when the component mounts or when certain dependencies change.

- How do you use `useEffect` to load component data just once when the component mounts?

  > Pass an empty dependency array [] to useEffect. This ensures the effect runs only once when the component mounts.

- How do you use `useEffect` to load component data every time the data key changes?

  > Add that specific variable that changes often as a dependency.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  > Using React Query and Vercel SWR.

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
