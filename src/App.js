import auth from './firebase-utils/auth.js';

function App() {
  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="Username"
        id="username"
        required
        />
        <input
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        required
        />

        <button id="loginButton" onClick={() => auth('jzavy@yahoo.com', 'password')}>Login</button>
    </>
  );
}

export default App;