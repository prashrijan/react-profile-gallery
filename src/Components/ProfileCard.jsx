import React from "react";

const ProfileCard = ({ name, bio, image }) => {
  return (
    <>
      <div class=" bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
        <img
          class="w-40 h-40 object-cover rounded-full"
          src={image}
          alt="Profile Picture"
        />
        <div class="text-center">
          <h2 class="text-lg font-bold text-gray-800">{name}</h2>
          <p class="text-gray-600 text-sm mt-2">{bio}</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
            View Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
