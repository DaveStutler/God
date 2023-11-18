import React, { useState, useEffect } from 'react'
import { supabase } from '../client'
import more from '../imgs/more.png'
import { Link } from 'react-router-dom'
import './Posts.css'

const Posts = (props) =>  {
  const [count, setCount] = useState(0)
  const [post, setPosts] = useState([])

  const updateCount = () => {
    setCount((count) => count + 1)
  }

  useEffect(() => {
    const updateVotes = async () => {
      await supabase
        .from('Posts')
        .update({ upvotes: count})
        .eq('id', props.id);
    };
    updateVotes();
  }, [count]);


  useEffect(() => 
  {
      const fetchPosts = async () => {
          const {data} = await supabase
            .from('Posts')
            .select("*")
            .eq('id', props.id);
          // set state of posts
          setPosts(data)
      }
      fetchPosts();
    }, []);
    
  console.log(post[0])

  return (
    <>
    <Link to={'/posts/'+ props.id} className='Posts-container'>
      <div className="Posts">
        <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more}/></Link>
        <div className='PostInfo'>
          <h2 id="title">{props.title}</h2>
          <p id="postCreated">{props.time.substring(0,10)}</p>
        </div>
      </div>
      <button className="betButton" onClick={() => {
        updateCount()
      }}>👍 {count}</button>
    </Link>
    </>
  )
}

export default Posts
