import React, { useState, useEffect } from "react";
import axios from "axios";
import '../estilos/App.css';

function Posts() {
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const fetchData = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const photos = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');

      const combinedResult = posts.data.map(post => {
        const user = users.data.find(user => user.id === post.userId);
        const photo = photos.data.find(photo => photo.id === post.userId);

        return {
          userId: user.id,
          name: user.name,
          title: post.title,
          body: post.body,
          thumbnailUrl: photo.thumbnailUrl,
        };
      });
      setCombinedData(combinedResult);
    };

    fetchData();
  }, []);

  const postsPerPage = 20;
  const totalPages = Math.ceil(combinedData.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = combinedData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div className="contenedorMain">
    <div className="matriz">
      <ul>
        {currentPosts.map((item) => (
          <div className="elemento" key={item.userId}>
            <h2><strong>{item.name}</strong></h2>
            <p>{item.fotoUrl}</p>
            <img src={item.thumbnailUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </ul>
      <div className="paginacion">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageClick(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Posts;
