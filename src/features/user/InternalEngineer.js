import { useState } from "react";

function InternalEngineer() {
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
  const [otpMethod, setOtpMethod] = useState(""); // 'email' or 'phone'

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

      // Auto-focus next input
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
    // Handle OTP verification
    console.log("OTP:", otp.join(""));
    console.log("Method:", otpMethod);
    setShowOtpModal(false);
    setOtp(["", "", "", "", "", ""]);
    setOtpMethod("");
  };

  const handleResendOtp = () => {
    console.log("Resending OTP via:", otpMethod);
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Internal Engineer Management
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {credentials.map((cred) => (
          <div
            key={cred.id}
            className={`bg-white rounded-lg shadow-md p-6 ${
              cred.id === 1
                ? "border-2 border-blue-500"
                : "border border-gray-200"
            }`}
          >
            {/* Company Name */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {cred.company}
            </h3>

            {/* Credentials Details */}
            <div className="space-y-3 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Username
                </label>
                <p className="text-sm text-gray-800">{cred.username}</p>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Password
                </label>
                <p className="text-sm text-gray-800">{cred.password}</p>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Email
                </label>
                <p className="text-sm text-gray-800 break-words">
                  {cred.email}
                </p>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => handleEdit(cred.id)}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm font-medium flex items-center justify-center gap-2"
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
        ))}
      </div>

      {/* Create Internal Engineer Account Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Create Internal Engineer Account
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
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

            {/* Form */}
            <div className="p-4 space-y-3">
              <div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Name"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Employee Id"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Confirm Password"
                />
              </div>

              <button
                onClick={handleCreateSubmit}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded font-medium text-sm mt-2"
              >
                Send OTP Code
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Verify OTP
              </h2>
              <button
                onClick={() => {
                  setShowOtpModal(false);
                  setOtp(["", "", "", "", "", ""]);
                  setOtpMethod("");
                }}
                className="text-gray-400 hover:text-gray-600"
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

            {/* OTP Form */}
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-6 text-center">
                We have sent you OTP code on your phone
              </p>

              {/* OTP Input Boxes */}
              <div className="flex justify-center gap-2 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                ))}
              </div>

              <button
                onClick={handleOtpSubmit}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded font-medium text-sm mb-4"
              >
                Verify OTP
              </button>

              {/* Send Via Options */}
              <div className="flex justify-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="otpMethod"
                    value="email"
                    checked={otpMethod === "email"}
                    onChange={(e) => setOtpMethod(e.target.value)}
                    className="w-4 h-4 text-green-500 accent-green-500"
                  />
                  <span className="text-sm text-gray-700">Send Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="otpMethod"
                    value="phone"
                    checked={otpMethod === "phone"}
                    onChange={(e) => setOtpMethod(e.target.value)}
                    className="w-4 h-4 text-red-500 accent-red-500"
                  />
                  <span className="text-sm text-gray-700">Send Phone</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InternalEngineer;
