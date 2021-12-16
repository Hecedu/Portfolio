import { child, ref, get } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import BlogList from '../Components/Blog/BlogList';
import Blog from '../Models/Blog';
import database from '../Util/firebase';

export default function BlogView() {
    const [blogPosts, setBlogPosts] = useState<Blog[]>([])
    useEffect(() => {
        const fetchBlogs = async () => {
            const databaseRef = ref(database)
            get(child(databaseRef, 'BlogPosts')).then(snapshot => {
                if (snapshot.exists()) {
                    setBlogPosts(snapshot.val())
                }
                else {
                    console.log('error')
                }
            })
        }
        fetchBlogs()
    }, [])
    return (
        <div className="container">
            <h1>Blog Posts:</h1>
            {
                blogPosts.length > 0 ? 
                <BlogList blogPosts={blogPosts} />:
                <div>Loading...</div>
            }
        </div>
    )
}
