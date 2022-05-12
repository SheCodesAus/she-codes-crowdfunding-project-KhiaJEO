// Converting the number to the name of the pledger

import React, { useState, useEffect } from "react";

function UserDetail({ userId }) {
  // State
  const [userData, setuserData] = useState();

  // Actions & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${userId}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setuserData(data);
      });
  }, []);

  if (!userData) {
    return null;
  }
  //   Normal State
  return <span>{userData.username}</span>;
}

export default UserDetail;
