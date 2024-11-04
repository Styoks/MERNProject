import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'c1',
      image:
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      name: 'Camaleon',
      places: 5,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
