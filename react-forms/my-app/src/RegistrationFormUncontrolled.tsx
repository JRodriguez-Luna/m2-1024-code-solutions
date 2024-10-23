const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);

  console.log('data:', data);
};

export function RegistrationFormUncontrolled() {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username
          <input type="text" name="username" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}
