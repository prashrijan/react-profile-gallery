import React from "react";

const ProfileCard = ({ name, bio, image, phone, openModal, openThisUser }) => {
  return (
    <>
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
        <img
          className="w-40 h-40 object-cover rounded-full"
          src={image}
          alt="Profile Picture"
          loading="lazy"
        />
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm mt-2">{bio}</p>
          <a href={`tel:+${phone}`}>
            <p className="text-blue-500 text-sm mt-2">{phone}</p>
          </a>

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600"
            onClick={() => {
              openThisUser({
                name,
                bio,
                image,
                phone,
              });
              openModal(true);
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
