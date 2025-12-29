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
  const [otpStep, setOtpStep] = useState(1); // Added missing state

  // Form state for new account creation
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    // Validate form
    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setShowCreateModal(false);
    setShowOtpModal(true);
    setOtpStep(1);
  };

  const handleOtpSubmit = () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      alert("Please enter complete OTP");
      return;
    }

    console.log("OTP:", otpCode);

    if (otpStep === 1) {
      // Move to phone verification
      setOtpStep(2);
      setOtp(["", "", "", "", "", ""]);
    } else {
      // Complete verification
      alert("Account created successfully!");
      setShowOtpModal(false);
      setOtp(["", "", "", "", "", ""]);
      setOtpStep(1);
      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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

            {/* Credentials Details */}
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
              <h2 className="text-2xl font-semibold text-red-600">
                Create Internal engineer
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-white bg-gray-500 hover:bg-gray-600 rounded-full p-1"
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
                  value={formData.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
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
                  value={formData.username}
                  onChange={(e) => handleFormChange("username", e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="AVC793-34"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Email ID
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange("email", e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="engineer@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleFormChange("password", e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleFormChange("confirmPassword", e.target.value)
                  }
                  className="w-full px-3 py-2.5 bg-gray-50 border-0 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Re-enter password"
                  required
                />
              </div>

              <button
                onClick={handleCreateSubmit}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded font-medium text-sm mt-4"
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
              <h2 className="text-2xl font-semibold text-red-500">
                Verify OTP
              </h2>
              <button
                onClick={() => {
                  setShowOtpModal(false);
                  setOtp(["", "", "", "", "", ""]);
                  setOtpStep(1);
                }}
                className="text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1"
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
              {otpStep === 1
                ? "We will send 6 digits of OTP to your email id prudhviraj*****.com"
                : "We will send 6 digits of OTP to your phone 181 7868****56"}
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
                className="text-sm text-red-500 hover:text-red-600 font-medium"
              >
                Resend OTP?
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleOtpSubmit}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 px-4 rounded-lg font-medium text-base mb-6"
            >
              Enter OTP
            </button>

            {/* Step Indicators */}
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    otpStep === 1 ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {otpStep === 1 ? "1" : "✓"}
                </div>
                <span
                  className={`text-sm ${
                    otpStep === 1
                      ? "text-gray-800 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  Verify Email
                </span>
                <span className="text-gray-400">-----&gt;</span>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    otpStep === 2 ? "bg-red-500" : "bg-gray-300"
                  }`}
                >
                  2
                </div>
                <span
                  className={`text-sm ${
                    otpStep === 2
                      ? "text-gray-800 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  Verify Phone
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InternalEngineer;
