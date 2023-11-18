import React, { useEffect, useState } from "react";
import { supabase } from '../client';
import { useParams } from 'react-router-dom';
import "./EditPosts.css";
import { Link } from "react-router-dom";

function EditPosts ({data}) {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");

    /**
     * A previously created post can be edited from its post page
     * A previously created post can be deleted from its post page
     */
    
    useEffect(() => 
    {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select()
              .eq('id', id);
          
            // set state of posts
            setPosts(data)
        }
        fetchPosts();
    }, [])

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Posts')
        .update({ title: updatedTitle, description: updatedDescription })
        .eq('id', id);

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .delete()
          .eq('id', id); 
      
        window.location = "/";
    }

    return (
        <>
        <div>
            <form>
                <label htmlFor="title">title</label> <br />
                <input type="text" id="title" name="title" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)}>
                </textarea>

                <br/>
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
        </>
    )
}

export default EditPosts;