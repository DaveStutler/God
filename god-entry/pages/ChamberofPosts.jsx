import React, { useState } from "react";
import { supabase } from '../client';

function ChamberofPosts() {
    const [post, setPost] = useState({
        title: "",
        imageUrl: "",
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const createPost = async (event) => {
        event.preventDefault();
        try {
            const { data, error } = await supabase
            .from('Posts')
            .insert({title: post.title, imageUrl: post.imageUrl, description: post.description})
            .select();

            if (error) {
                throw error;
            }

            console.log(data);
            window.location = "/";
        } catch (error) {
            console.error('Error inserting new post:', error);
        }

    };

    return (
        <>  <div className="submit-form">
                <form>
                    <label htmlFor=""> Title </label> <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="">Image URL</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        value={post.imageUrl}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <button onClick={createPost}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default ChamberofPosts;
