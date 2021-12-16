import React from 'react'
import { NavLink } from "react-router-dom";
import Blog from '../../Models/Blog'

interface SwiperCardProps {
    blogPosts: Blog[];
}

export default function BlogList({ blogPosts }: SwiperCardProps) {

    return (
        <ul>
            {
                blogPosts.map(blog => {
                    return <NavLink to={`/blog/${blog.id}`}>
                        <li>
                            <div className="display-5 m-1">
                                {blog.title}
                            </div>
                        </li>
                    </NavLink>
                })
            }
        </ul>
    )
}
