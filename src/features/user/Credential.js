import { useState } from "react";

function Credential() {
  const [credentials, setCredentials] = useState([
    {
      id: 1,
      company: "Equinix",
      username: "prudhvi9808",
      password: "Prudhvi@125263",
      email: "prudhvirajkundnani@gmail.com",
      isEditing: false,
    },
    {
      id: 2,
      company: "Avocado Tech",
      username: "prudhvi9808",
      password: "Prudhvi@125263",
      email: "prudhvirajkundnani@gmail.com",
      isEditing: false,
    },
    {
      id: 3,
      company: "Avocado Tech",
      username: "prudhvi9808",
      password: "Prudhvi@125263",
      email: "prudhvirajkundnani@gmail.com",
      isEditing: false,
    },
    {
      id: 4,
      company: "Avocado Tech",
      username: "prudhvi9808",
      password: "Prudhvi@125263",
      email: "prudhvirajkundnani@gmail.com",
      isEditing: false,
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleEdit = (id) => {
    setCredentials(
      credentials.map((cred) =>
        cred.id === id ? { ...cred, isEditing: !cred.isEditing } : cred
      )
    );
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleCreateSubmit = () => {
    setShowCreateModal(false);
    setShowOtpModal(true);
  };

  const handleOtpSubmit = () => {
    console.log("OTP:", otp.join(""));
    setShowOtpModal(false);
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Credentials Management
        </h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2"
        >
          Create New Account
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {credentials.map((cred) => (
          <div
            key={cred.id}
            className={`bg-white rounded-lg shadow-md p-6 w-full ${
              cred.id === 1
                ? "border-2 border-blue-500"
                : "border border-gray-200"
            }`}
          >
            {/* Company Name */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {cred.company}
            </h3>
            <hr className="mb-4" />

            {/* Credentials Details - New Format */}
            <div className="space-y-3 mb-6">
              <div className="flex">
                <span className="text-gray-400 text-sm w-24 flex-shrink-0">
                  Username
                </span>
                <span className="text-gray-400 text-sm mr-2">:</span>
                <span className="text-gray-800 text-sm font-medium">
                  {cred.username}
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-400 text-sm w-24 flex-shrink-0">
                  Password
                </span>
                <span className="text-gray-400 text-sm mr-2">:</span>
                <span className="text-gray-800 text-sm font-medium">
                  {cred.password}
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-400 text-sm w-24 flex-shrink-0">
                  Email
                </span>
                <span className="text-gray-400 text-sm mr-2">:</span>
                <span className="text-gray-800 text-sm font-medium break-all">
                  {cred.email}
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end">
              <button
                onClick={() => handleEdit(cred.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center gap-2"
              >
                Edit
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Account Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-red-600">
                Create Reception Credentials
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-black text-sm bg-gray-500 rounded-2xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Karna"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  User Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="AVC793-34"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Email ID
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="AVC793-34"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Re-enter password"
                  required
                />
              </div>

              <button
                onClick={handleCreateSubmit}
                className="w-full bg-[#E92B2E] hover:bg-red-600 text-white py-3 px-4 rounded font-medium text-sm mt-4"
              >
                Send OTP Code
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
            {/* Header with Close Button */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-semibold text-[#E92B2E]">
                Verify OTP
              </h2>
              <button
                onClick={() => {
                  setShowOtpModal(false);
                  setOtp(["", "", "", "", "", ""]);
                }}
                className="text-black text-sm bg-gray-500 rounded-2xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-8">
              We will sent 4 digits of OTP to you email id prudhviraj*****.com
            </p>

            {/* OTP Input Boxes */}
            <div className="flex justify-center gap-3 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-14 h-14 text-center text-2xl font-semibold bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                  required
                />
              ))}
            </div>

            {/* Resend OTP */}
            <div className="text-right mb-6">
              <button
                type="button"
                className="text-sm text-[#E92B2E] hover:text-red-600 font-medium"
              >
                Resend OTP?
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleOtpSubmit}
              className="w-full bg-[#E92B2E] hover:bg-red-600 text-white py-3.5 px-4 rounded-lg font-medium text-base"
            >
              Send OTP Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Credential;
