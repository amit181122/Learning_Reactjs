// PostTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostTable.css";

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
//   const itemsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("response:::::::", response);
      //   const limitedPosts = response.data.slice(0, 50);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleItemsPerPageChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setItemsPerPage(selectedValue);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const pagedPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalCount = posts.length;
  const firstItemIndex = indexOfFirstPost + 1;
  const lastItemIndex = Math.min(indexOfLastPost, totalCount);

  return (
    <div>
      {/* <h2>Posts</h2> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {pagedPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="item-count">
          Showing {firstItemIndex} to {lastItemIndex} of {totalCount} items
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastPost >= totalCount}
        >
          Next
        </button>
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value="10">10 per page</option>
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </select>
      </div>
    </div>
  );
};

export default PostTable;
