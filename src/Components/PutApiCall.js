import React, { useState } from 'react';

function UpdateApiCall() {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const [updatedData, setUpdatedData] = useState(null);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
      });

      const data = await response.json();
      console.log(data); // Updated user data
      setUpdatedData(data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  return (
    <>
      <label>Name:</label>
      <input type="text" name="name" value={inputData.name} onChange={handleData} /><br /><br />
      <label>Email:</label>
      <input type="text" name="email" value={inputData.email} onChange={handleData} /><br /><br />
      <button onClick={handleUpdate}>Update</button>

      {updatedData && (
        <div>
          <h2>Updated Data:</h2>
          <p>Name: {updatedData.name}</p>
          <p>Email: {updatedData.email}</p>
        </div>
      )}
    </>
  )
}

export default UpdateApiCall;
