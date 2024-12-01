import React from "react";

const ProfileViewModal = ({ userData, closeModal }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        aria-hidden="true"
      >
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img
            className="w-40 h-40 object-cover rounded-full"
            src={userData.image}
            alt="Profile Picture"
          />
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-800">{userData.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{userData.bio}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600"
              onClick={() => {
                closeModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileViewModal;
