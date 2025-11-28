import { useState } from "react";

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const [showPassword, setShowPassword] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required!");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      localStorage.setItem("token", "DumyTokenHere");
      setLoading(false);
      window.location.href = "/app/welcome";
    }
  };

  const updateFormValue = (field, value) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 grid-cols-1 min-h-[500px]">
          {/* Left side - Image */}
          <div className="hidden lg:block relative">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
              alt="Lighthouse"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Login Form */}
          <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <div className="flex gap-0.5">
                  <div className="w-0.5 sm:w-1 h-5 sm:h-6 bg-red-500 rounded-sm"></div>
                  <div className="w-0.5 sm:w-1 h-5 sm:h-6 bg-red-500 rounded-sm"></div>
                  <div className="w-0.5 sm:w-1 h-5 sm:h-6 bg-red-500 rounded-sm"></div>
                  <div className="w-0.5 sm:w-1 h-5 sm:h-6 bg-red-500 rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-semibold tracking-wider">
                  EQUINIX
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-normal text-gray-800">
                Nice to see you again
              </h2>
            </div>

            <form onSubmit={(e) => submitForm(e)}>
              {/* Login Input */}
              <div className="mb-4">
                <label className="block text-xs sm:text-sm text-gray-600 mb-2">
                  Login
                </label>
                <input
                  type="text"
                  value={loginObj.emailId}
                  onChange={(e) => updateFormValue("emailId", e.target.value)}
                  placeholder="Email or phone number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 transition"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm text-gray-600 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginObj.password}
                    onChange={(e) =>
                      updateFormValue("password", e.target.value)
                    }
                    placeholder="Enter password"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 transition pr-10 sm:pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="sm:w-5 sm:h-5"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="sm:w-5 sm:h-5"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-4 text-red-500 text-xs sm:text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              {/* Additional Links for Mobile */}
              <div className="mt-4 sm:mt-6 text-center">
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-800"
                >
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
