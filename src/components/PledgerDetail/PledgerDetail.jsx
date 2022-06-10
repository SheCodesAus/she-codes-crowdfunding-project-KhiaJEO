// Converting the number to the name of the pledger

import React, { useState, useEffect } from "react";

function PledgerDetail({ supporter }) {
  // State
  const [pledgerData, setPledgerData] = useState();

  // Actions & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${supporter}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPledgerData(data);
      });
  }, [supporter]);

  if (!pledgerData) {
    return null;
  }
  //   Normal State
  return <span>{pledgerData.username}</span>;
}

export default PledgerDetail;
