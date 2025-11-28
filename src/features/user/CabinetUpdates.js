import { useState } from "react";

function CabinetUpdates() {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: true,
    },
    {
      id: 2,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: true,
    },
    {
      id: 3,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: true,
    },
    {
      id: 4,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: true,
    },
    {
      id: 5,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: false,
    },
    {
      id: 6,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: false,
    },
    {
      id: 7,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: false,
    },
    {
      id: 8,
      engineerName: "Prudhvi raj",
      previousDate: "14-11-2025",
      previousEngineer: "Prudhvi",
      updatedDate: "15-11-2025",
      updatedEngineer: "Swasthik",
      timestamp: "12:23:11 PM",
      isToday: false,
    },
  ]);

  const [showDenyModal, setShowDenyModal] = useState(false);
  const [showReasonModal, setShowReasonModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [denyReason, setDenyReason] = useState("");
  const [selectedUpdateId, setSelectedUpdateId] = useState(null);

  const handleDeny = (id) => {
    setSelectedUpdateId(id);
    setShowDenyModal(true);
  };

  const confirmDeny = () => {
    setShowDenyModal(false);
    setShowReasonModal(true);
  };

  const submitReason = () => {
    if (denyReason.trim()) {
      setShowReasonModal(false);
      setShowDeleteModal(true);
    }
  };

  const confirmDelete = () => {
    setShowDeleteModal(false);
    setShowSuccessModal(true);
    setDenyReason("");
    // Remove the update from the list
    setUpdates(updates.filter((update) => update.id !== selectedUpdateId));
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2000);
  };

  const handleApprove = (id) => {
    // Handle approve logic
    console.log("Approved update:", id);
  };

  const handleExportExcel = () => {
    console.log("Exporting to Excel...");
  };

  const handleFilter = () => {
    console.log("Opening filter...");
  };

  const todayUpdates = updates.filter((u) => u.isToday);
  const yesterdayUpdates = updates.filter((u) => !u.isToday);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Cabinet Updates
        </h1>
        <div className="flex gap-2">
          <button
            onClick={handleExportExcel}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2"
          >
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View Excel File
          </button>
          <button
            onClick={handleFilter}
            className="bg-white hover:bg-gray-50 text-red-500 border border-red-500 px-4 py-2 rounded text-sm font-medium flex items-center gap-2"
          >
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      {/* Today's Updates */}
      <div className="mb-6">
        <div className="flex justify-end mb-2">
          <span className="text-sm text-gray-600">Today (15-11-2024)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {todayUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-lg shadow-sm border border-blue-500 p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-semibold text-gray-800">
                  {update.engineerName}
                </h3>
                <span className="text-xs text-gray-500">
                  {update.timestamp}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs text-gray-500">Previous</span>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p className="text-xs text-gray-700">
                    Date: {update.previousDate}
                  </p>
                  <p className="text-xs text-gray-700">
                    Engineer Name: {update.previousEngineer}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs text-gray-500">Updated</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-xs text-gray-700">
                    Date: {update.updatedDate}
                  </p>
                  <p className="text-xs text-gray-700">
                    Engineer Name: {update.updatedEngineer}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDeny(update.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded text-xs font-medium"
                >
                  Deny
                </button>
                <button
                  onClick={() => handleApprove(update.id)}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded text-xs font-medium"
                >
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yesterday's Updates */}
      <div>
        <div className="flex justify-end mb-2">
          <span className="text-sm text-gray-600">Yesterday (14-11-2024)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {yesterdayUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-semibold text-gray-800">
                  {update.engineerName}
                </h3>
                <span className="text-xs text-gray-500">
                  {update.timestamp}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs text-gray-500">Previous</span>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p className="text-xs text-gray-700">
                    Date: {update.previousDate}
                  </p>
                  <p className="text-xs text-gray-700">
                    Engineer Name: {update.previousEngineer}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs text-gray-500">Updated</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-xs text-gray-700">
                    Date: {update.updatedDate}
                  </p>
                  <p className="text-xs text-gray-700">
                    Engineer Name: {update.updatedEngineer}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDeny(update.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded text-xs font-medium"
                >
                  Deny
                </button>
                <button
                  onClick={() => handleApprove(update.id)}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded text-xs font-medium"
                >
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deny Confirmation Modal */}
      {showDenyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xs p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-4 text-center">
              Are you sure want to denied?
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDenyModal(false)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeny}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm font-medium"
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reason Modal */}
      {showReasonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xs p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Add reason for denied
            </h3>
            <textarea
              value={denyReason}
              onChange={(e) => setDenyReason(e.target.value)}
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 resize-none mb-4"
              placeholder="Enter reason..."
            />
            <button
              onClick={submitReason}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xs p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-1 text-center">
              Reason?
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              {denyReason}
            </p>
            <button
              onClick={confirmDelete}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xs p-8">
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Request Cancelled Successfully!
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CabinetUpdates;
