import React, { useState } from 'react';

function PostApiCall() {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
      });

      const data = await response.json();
      console.log(data); // Newly created user data
      setSubmittedData(data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return (
    <>
      <label>Name:</label>
      <input type="text" name="name" value={inputData.name} onChange={handleData} /><br /><br />
      <label>Email:</label>
      <input type="text" name="email" value={inputData.email} onChange={handleData} /><br /><br />
      <button onClick={handleSubmit}>Submit</button>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </>
  )
}

export default PostApiCall;
