# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  > The URL in the address bar does not change which poses a problem:
  - 'breaks' the back button
  - doesn't allow the user to bookmark specific pages
    - for future use or to share with others

React Router allows for URL changes without reloading the page, keeping these features intact.

- What NPM package can be used to make navigating a React app behave as users expect?

  > npm install react-router-dom

- Which React Router component(s) can be used to set up your app's navigation?

  > Outlet, Link, Routes, Route

- How does React Router match the browser URL to one of your app's React components?

  > Uses Route components with defined paths. When a user’s URL matches a path in a Route, the associated component is rendered.

- What is the purpose of React Router's `Outlet` component?

  > It will render their child route elements.

  ```js
  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>

        {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
        <Outlet />
      </div>
    );
  }
  ```

function App() {
return (
<Routes>
<Route path="/" element={<Dashboard />}>
<Route
path="messages"
element={<DashboardMessages />}
/>
<Route path="tasks" element={<DashboardTasks />} />
</Route>
</Routes>
);
}

```


- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  > useParams

- What React Router hook is used to navigate programmatically?
  > useNavigate, allowing navigation without using Link

## Notes
```
