import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileViewModal from "./ProfileViewModal";
import Search from "./Search";

const ProfileGallery = () => {
  let [users, setUsers] = useState([]);
  let [filteredUsers, setFilteredUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  let [value, setValue] = useState("");
  let [loading, setLoading] = useState(true);

  const filterUser = (users) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredUsers(filterUser(users));
  };

  useEffect(() => {
    const endPoint = "https://randomuser.me/api?results=12";

    fetch(endPoint)
      .then((res) => res.json())
      .then((data) => {
        const fetchedUsers = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          bio: `Hi I am ${user.name.first} ${user.name.last}. I am from ${user.location.country}. Catch me up at ${user.email}.`,
          image: `${user.picture.large}`,
          contact: `${user.phone}`,
        }));

        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredUsers(filterUser(users));
  }, [value, users]);

  return (
    <>
      <div className="wrapper bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen  flex flex-col items-center py-10 gap-4 px-4">
        <h2 className="text-3xl text-white text-center font-bold">
          Profile Gallery
        </h2>
        <Search
          onsubmit={handleSubmit}
          onchange={setValue}
          value={value}
          setValue={setValue}
        />
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading ? (
            <div className="col-span-full flex justify-center items-center mt-24">
              <div className="w-8 h-8 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
              <h2 className="text-white text-xl font-semibold ms-2">
                Fetching Data....
              </h2>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="col-span-full flex justify-center items-center mt-24">
              <h2 className="text-white text-xl font-semibold ms-2">
                No Users Found.
              </h2>
            </div>
          ) : (
            filteredUsers.map((user) => {
              return (
                <ProfileCard
                  name={user.name}
                  bio={user.bio}
                  image={user.image}
                  phone={user.contact}
                  openModal={setIsModalOpen}
                  openThisUser={setSelectedUser}
                />
              );
            })
          )}

          {isModalOpen ? (
            <ProfileViewModal
              userData={selectedUser}
              closeModal={setIsModalOpen}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileGallery;
