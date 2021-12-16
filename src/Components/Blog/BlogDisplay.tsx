import React, { useEffect, useState } from 'react'
import { child, get, ref } from 'firebase/database'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import database from '../../Util/firebase'


export default function BlogDisplay() {
    const [blogPost, setBlogPost] = useState<any>({ id: 0, title: ' ', content: ' ' })
    const params = useParams();
    useEffect(() => {
        const fetchBlogs = async () => {
            console.log(params.blogid)
            const blogRef = ref(database)
            get(child(blogRef, 'BlogPosts')).then(snapshot => {
                if (snapshot.exists()) {
                    console.log(snapshot.val())
                    var result = snapshot.val().find((blog: any) => blog.id === Number(params.blogid))
                    setBlogPost(result)
                }
                else {
                    console.log('error')
                }
            })
        }
        fetchBlogs()
    }, [params.blogid])
    return (
        <div className='container'>
            {
                blogPost ? <>
                    <h1>{blogPost.title}</h1>
                    <Container className="text-left">
                        <ReactMarkdown>{blogPost.content.replaceAll("\\n", "\n")}</ReactMarkdown>
                    </Container>
                </> :
                    <h1>This post is empty!</h1>
            }
        </div>
    )
}
