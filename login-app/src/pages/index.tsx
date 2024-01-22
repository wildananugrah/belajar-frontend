const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen p-2">
      <div
        id="loginContainer"
        className="flex flex-col justify-center items-center p-2 w-full border shadow rounded-md md:w-[800px]"
      >
        <div id="loginLogo" className="font-bold text-lg underline py-3">
          Go Login!
        </div>
        <div id="loginForm" className="flex flex-col w-full p-2 space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username">
              <p>Username:</p>
            </label>
            <input 
              type="text" 
              id="username" 
              placeholder="Username"
              className="border shadow rounded-md w-full p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password">
              <p>Password:</p>
            </label>
            <input 
              type="Password" 
              id="password" 
              placeholder="Password"
              className="border shadow rounded-md w-full p-2"
            />
          </div>
          <button
            className="border shadow rounded-md bg-blue-500 text-white p-2 font-bold"
          >
            Log In
          </button>
          <a href="#" className="flex flex-row items-center justify-center text-blue-500 underline">
            Already have an account ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
