// Converting the number to the name of the owner of the project

import React, { useState, useEffect } from "react";

function UserDetail({ owner }) {
  // State
  const [userData, setuserData] = useState();

  // Actions & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${owner}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setuserData(data);
      });
  }, [owner]);

  if (!userData) {
    return null;
  }
  //   Normal State
  return <span>{userData.username}</span>;
}

export default UserDetail;
