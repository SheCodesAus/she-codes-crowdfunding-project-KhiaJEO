import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";

function PledgeForm() {
  return <PledgeForm />;
}

export default ProjectPledgesPage;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [amount, setAmount] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("", {
//         method: "POST",
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           mobileNumber: mobileNumber,
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setName("");
//         setEmail("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
