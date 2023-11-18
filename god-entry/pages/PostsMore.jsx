import React, { useEffect, useState } from "react";
import { supabase } from '../client';
import "./PostsMore.css";
import { Link, useParams } from "react-router-dom";
import Logo from '../imgs/H.png'


const PostsMore = () => {
    const [comment, setComment] = useState('')
    const [commentsList, setCommentsList] = useState([]); // Added state variable

    const [count, setCount] = useState(0)
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null); // Added state variable
    const {id} = useParams();

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
    // Find the selected post and set it in the state
    useEffect(() => {
        if (posts.length > 0) {
            const selected = posts.find(post => post.id == id);
            setSelectedPost(selected);
        }
    }, [posts, id]);

    

    const updateCount = () => {
        setCount((count) => count + 1)
    }

    const uploadCount = async () => {
        try {
        const { data, error } = await supabase
            .from('Posts')
            .update({ upvotes: count + 1})
            .eq('id', props.id)

        if (error) {
            throw error
        }

        console.log(data)
        } catch (error) {
        console.error('upvotes error', error)
        }
    }

    const onChange = (event) => {
        event.preventDefault();
        setComment(event.target.value);
    };

    const onSubmit = async (event) => {        
        const { data, error } = await supabase
        .from('Comments')
        .insert({username: 'Anonymous', payload: comment, post_id: id})
        .select();

        if (!error && data) {
            // If succeed
            // window.alert("Comment added successfully!");
        } else {
            // If failed
          window.alert(error?.message);
        }
    };

    const getCommentList = async () => {
        const { data, error } = await supabase
            .from("Comments")
            .select("*")
            .eq('post_id', id)

        if (!error && data) {
          setCommentsList(data);
        } else {
          setCommentsList([]);
        }
    };

    useEffect(() => {
        getCommentList();
    }, []);


    return (
        <>
        <div className="App-postsMore">
            <div className='header-navbar'>
                <div className='header-logo'>
                    <img id='Logo' src={Logo} alt="logo png" width={80} heigh={80} />
                </div>
                    <Link to="/"><button className='headerBtn'>Home</button></Link>
                    <Link to="/profile"><button className='headerBtn'>Profile</button></Link>
            </div>
            <div className="postsMore-body">
                <div className="postsMore-body-container">
                    <div className="postsMore-body-container-title">
                        <h1>{selectedPost?.title}</h1> {/* Display the title */}
                    </div>
                    <div className="postsMore-body-container-description">
                        <h2>{selectedPost?.description}</h2> {/* Display the description */}
                    </div>
                    <div className="postsMore-body-container-button">
                        <button onClick={() => {
                        updateCount()
                        uploadCount()
                        }}>👍 {count} </button>
                    </div>
                    <div className="postsMore-body-commentSection">
                        <form className="postsMore-comments-form" onSubmit={onSubmit}>
                            <input 
                                onChange={onChange}
                                type="text" 
                                placeholder="Add a comment" />
                            <button className="postsMore-comments-submit">Submit</button>
                        </form>
                        <div className="postsMore-list">
                            {commentsList.map((comment) => (
                                <div key={comment.id} className="postsMore-indi">
                                    <p className="username">{comment.username}</p>
                                    <p className="payload">{comment.payload}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default PostsMore;