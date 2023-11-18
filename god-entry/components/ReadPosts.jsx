import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Posts from './Posts';
import './ReadPosts.css'


const ReadPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => 
    {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select();
          
            // set state of posts
            setPosts(data)
        }
        fetchPosts();
    }, []);
    
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Posts id={post.id} title={post.title} time={post.created_at} description={post.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>
    )
}

export default ReadPosts;