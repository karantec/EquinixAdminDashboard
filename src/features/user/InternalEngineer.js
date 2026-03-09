import { useState } from "react";

const initialCredentials = [
  {
    id: 1,
    name: "Prudhvi Raj Kudumula",
    username: "prudhvi9808",
    password: "Prudhvi@12S263",
    email: "prudhvirajkudumula@gmail.com",
    phone: "+917993164156",
    isEditing: false,
  },
  {
    id: 2,
    name: "Prudhvi Raj Kudumula",
    username: "prudhvi9808",
    password: "Prudhvi@12S263",
    email: "prudhvirajkudumula@gmail.com",
    phone: "+917993164156",
    isEditing: false,
  },
  {
    id: 3,
    name: "Prudhvi Raj Kudumula",
    username: "prudhvi9808",
    password: "Prudhvi@12S263",
    email: "prudhvirajkudumula@gmail.com",
    phone: "+917993164156",
    isEditing: false,
  },
  {
    id: 4,
    name: "Prudhvi Raj Kudumula",
    username: "prudhvi9808",
    password: "Prudhvi@12S263",
    email: "prudhvirajkudumula@gmail.com",
    phone: "+917993164156",
    isEditing: false,
  },
];

function EditIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
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
  );
}

function CloseIcon() {
  return (
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
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
  );
}

export default function InternalEngineer() {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpStep, setOtpStep] = useState(1);
  const [editingData, setEditingData] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleEdit = (id) => {
    const cred = credentials.find((c) => c.id === id);
    setEditingData({ ...cred });
    setCredentials(
      credentials.map((c) => ({
        ...c,
        isEditing: c.id === id ? !c.isEditing : false,
      })),
    );
  };

  const handleSave = (id) => {
    setCredentials(
      credentials.map((c) =>
        c.id === id ? { ...editingData, isEditing: false } : c,
      ),
    );
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleCreateSubmit = () => {
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
    if (otpStep === 1) {
      setOtpStep(2);
      setOtp(["", "", "", "", "", ""]);
    } else {
      const newCred = {
        id: credentials.length + 1,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone || "N/A",
        password: formData.password,
        isEditing: false,
      };
      setCredentials([...credentials, newCred]);
      setShowOtpModal(false);
      setOtp(["", "", "", "", "", ""]);
      setOtpStep(1);
      setFormData({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Top Bar */}
      <div className=" px-2 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
          Credentials Management
        </h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
        >
          Create New Account
          <div className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center">
            <PlusIcon />
          </div>
        </button>
      </div>

      {/* Cards Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {credentials.map((cred) => (
          <div
            key={cred.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Card Header */}
            <div className="px-5 pt-5 pb-4">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                {cred.isEditing ? (
                  <input
                    className="w-full text-base font-semibold text-gray-900 border-b border-gray-300 focus:outline-none focus:border-red-400 bg-transparent"
                    value={editingData.name}
                    onChange={(e) =>
                      setEditingData({ ...editingData, name: e.target.value })
                    }
                  />
                ) : (
                  cred.name
                )}
              </h3>
              <hr className="border-gray-100" />
            </div>

            {/* Card Body */}
            <div className="px-5 pb-2 space-y-2.5">
              {[
                { label: "Username", field: "username" },
                { label: "Password", field: "password" },
                { label: "Email", field: "email" },
                { label: "Phone", field: "phone" },
              ].map(({ label, field }) => (
                <div key={field} className="flex items-start gap-1">
                  <span className="text-gray-400 text-xs w-20 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-gray-400 text-xs mr-1">:</span>
                  {cred.isEditing ? (
                    <input
                      className="text-xs text-gray-800 font-medium flex-1 border-b border-gray-200 focus:outline-none focus:border-red-400 bg-transparent"
                      value={editingData[field]}
                      onChange={(e) =>
                        setEditingData({
                          ...editingData,
                          [field]: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <span className="text-xs text-gray-800 font-medium break-all">
                      {cred[field]}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="px-5 py-4 flex justify-end">
              {cred.isEditing ? (
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setCredentials(
                        credentials.map((c) =>
                          c.id === cred.id ? { ...c, isEditing: false } : c,
                        ),
                      )
                    }
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1.5 px-3 rounded-md text-xs font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSave(cred.id)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1.5 px-3 rounded-md text-xs font-medium transition-colors"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleEdit(cred.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1.5 px-4 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  Edit <EditIcon />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create Account Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-red-500">
                Create Internal Engineer
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white rounded-full p-1 transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              {[
                {
                  label: "Name",
                  field: "name",
                  type: "text",
                  placeholder: "Karna",
                },

                {
                  label: "Email ID",
                  field: "email",
                  type: "email",
                  placeholder: "engineer@example.com",
                },
                {
                  label: "Phone",
                  field: "phone",
                  type: "tel",
                  placeholder: "+91 00000 00000",
                },
                {
                  label: "Password",
                  field: "password",
                  type: "password",
                  placeholder: "Create a password",
                },
                {
                  label: "Confirm Password",
                  field: "confirmPassword",
                  type: "password",
                  placeholder: "Re-enter password",
                },
              ].map(({ label, field, type, placeholder }) => (
                <div key={field}>
                  <label className="block text-xs text-gray-500 mb-1.5 font-medium">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 border border-transparent"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <button
                onClick={handleCreateSubmit}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium text-sm transition-colors mt-2"
              >
                Send OTP Code
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8">
            <div className="flex justify-between items-start mb-5">
              <h2 className="text-xl font-semibold text-red-500">Verify OTP</h2>
              <button
                onClick={() => {
                  setShowOtpModal(false);
                  setOtp(["", "", "", "", "", ""]);
                  setOtpStep(1);
                }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full p-1 transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-7">
              {otpStep === 1
                ? `We will send 6 digits of OTP to your email ${formData.email.replace(/(?<=.{3}).(?=.*@)/g, "*")}`
                : `We will send 6 digits of OTP to your phone ${formData.phone}`}
            </p>

            <div className="flex justify-center gap-2 mb-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-semibold bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-800"
                />
              ))}
            </div>

            <div className="text-right mb-5">
              <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                Resend OTP?
              </button>
            </div>

            <button
              onClick={handleOtpSubmit}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium text-sm transition-colors mb-6"
            >
              Enter OTP
            </button>

            {/* Step Indicators */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${otpStep === 1 ? "bg-red-500" : "bg-green-500"}`}
                >
                  {otpStep === 1 ? "1" : "✓"}
                </div>
                <span
                  className={`text-xs ${otpStep === 1 ? "text-gray-900 font-medium" : "text-gray-400"}`}
                >
                  Verify Email
                </span>
              </div>
              <span className="text-gray-300 text-xs">———›</span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${otpStep === 2 ? "bg-red-500" : "bg-gray-300"}`}
                >
                  2
                </div>
                <span
                  className={`text-xs ${otpStep === 2 ? "text-gray-900 font-medium" : "text-gray-400"}`}
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
