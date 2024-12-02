import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileViewModal from "./ProfileViewModal";

// const users = [
//   {
//     name: "Alice Johnson",
//     bio: "Software engineer specializing in AI-driven solutions and machine learning algorithms.",
//     image:
//       "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Bob Smith",
//     bio: "Frontend developer passionate about crafting user-friendly interfaces and web animations.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
//   },
//   {
//     name: "Charlie Patel",
//     bio: "Full-stack developer with expertise in scalable web applications and cloud architecture.",
//     image:
//       "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmVzJTIwbGlua2VkaW4lMjBtZW58ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Dana Lee",
//     bio: "Mobile app developer focused on delivering seamless cross-platform experiences.",
//     image:
//       "https://images.unsplash.com/photo-1725500760837-410af960b788?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Ethan Wright",
//     bio: "Cybersecurity analyst committed to safeguarding systems against modern threats.",
//     image:
//       "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlcyUyMGxpbmtlZGluJTIwbWVufGVufDB8fDB8fHww",
//   },
//   {
//     name: "Fiona Green",
//     bio: "Data scientist skilled in big data analysis and predictive modeling for enterprise solutions.",
//     image:
//       "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlcyUyMGxpbmtlZGluJTIwbWVufGVufDB8fDB8fHww",
//   },
// ];

const ProfileGallery = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    const endPoint = "https://randomuser.me/api?results=6";

    fetch(endPoint)
      .then((res) => res.json())
      .then((data) =>
        setUsers(
          data.results.map((user) => ({
            name: `${user.name.first} ${user.name.last}`,
            bio: `Hi I am ${user.name.first} ${user.name.last}. I am from ${user.location.country}. Catch me up at ${user.email}.`,
            image: `${user.picture.large}`,
          }))
        )
      );
  }, []);

  return (
    <>
      <div className="wrapper bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen  flex flex-col items-center py-10 gap-4 px-4">
        <h2 className="text-3xl text-white text-center font-bold">
          Profile Gallery
        </h2>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.length === 0 ? (
            <div class="flex mt-24 justify-center min-h-screen bg-transparent">
              <div class="w-12 h-12 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
            </div>
          ) : (
            users.map((user) => {
              return (
                <ProfileCard
                  name={user.name}
                  bio={user.bio}
                  image={user.image}
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
