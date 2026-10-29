import React from "react";

function Profile({ name, age, role, image }) {
  return (
    <>
      <div className="flex flex-col gap-4 shadow rounded-lg max-w-sm mx-auto p-4">
        <h3 className="font-bold text-2xl">{name}</h3>
        <img src={image} alt="" className="w-64 h-64 mx-auto rounded-full" />
        <p>{role}</p>
      </div>
    </>
  );
}

export default Profile;
