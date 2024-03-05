import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Post from '../components/Post'
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

function IndexPages() {
  const {setUserInfo,userInfo} = useContext(UserContext);

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/post')
      .then(response => {
        const postinfo = response.data;
        console.log(postinfo);
        setPost(postinfo);
      })
  }, [])

  function logout(){
    axios.post('http://localhost:3000/logout',{

    },{
      withCredentials: true,

    });
    setUserInfo(null);

  }

  const Username = userInfo?.Username;
  return (
    <>
      {Username && (
        <>
        
          <Link to="/create">Create new Post</Link>
         

        </>
      )}
      {post.length > 0 && post.map(post => (
        <Post {...post} />
      ))}

    </>
  )
}

export default IndexPages