import { child, ref, get } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import ReactMarkdown from 'react-markdown';
import database from '../Util/firebase';

export default function BlogView() {
    const [blogPost, setBlogPost] = useState({ title: ' ', content: ' ' })
    useEffect(() => {
        const fetchBlogs = async () => {
            const blogRef = ref(database)
            get(child(blogRef, 'BlogPosts')).then(snapshot => {
                if (snapshot.exists()) {
                    setBlogPost(snapshot.val()[0])
                }
                else {
                    console.log('we gotta go bald')
                }
            })
        }
        fetchBlogs()
    }, [])
    return (
        <div className = "container">
            <h1>{blogPost.title}</h1>
            <div className="d-flex align-items-top">
                <Container className="text-left">
                <ReactMarkdown>{blogPost.content.replaceAll( "\\n", "\n" )}</ReactMarkdown>
                </Container>
            </div>
        </div>
    )
}
